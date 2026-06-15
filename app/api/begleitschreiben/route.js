import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/seo";

const MAX_ITEMS = 12;
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const BUY_REQUEST_EMAIL_TITLE = "Ihre Ankauf-Anfrage bei Saijers Antik";
const BUY_REQUEST_TEMPLATE_ID =
  process.env.RESEND_BUY_REQUEST_TEMPLATE_ID?.trim() ||
  "ihre-ankauf-anfrage-bei-saijers-antik";

function cleanString(value, maxLength = 700) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function cleanLongText(value, maxLength = 2000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function itemErrorKey(id, field) {
  return `item-${id}-${field}`;
}

function createCaseNumber() {
  const now = new Date();
  const datePart = new Intl.DateTimeFormat("de-DE", {
    timeZone: "Europe/Berlin",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  })
    .format(now)
    .split(".")
    .reverse()
    .join("");
  const stamp = Date.now().toString(36).toUpperCase();
  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();

  return `SA-${datePart}-${stamp.slice(-5)}${suffix}`;
}

function normalizePayload(payload) {
  const rawForm = payload?.form && typeof payload.form === "object" ? payload.form : {};
  const rawItems = Array.isArray(payload?.items) ? payload.items.slice(0, MAX_ITEMS) : [];

  const form = {
    company: cleanString(rawForm.company, 160),
    name: cleanString(rawForm.name, 160),
    street: cleanString(rawForm.street, 160),
    postalCode: cleanString(rawForm.postalCode, 24),
    city: cleanString(rawForm.city, 120),
    phone: cleanString(rawForm.phone, 80),
    email: cleanString(rawForm.email, 180).toLowerCase(),
    taxMode: rawForm.taxMode === "gewerblich" ? "gewerblich" : "privat",
    taxNumber: cleanString(rawForm.taxNumber, 120),
    comment: cleanLongText(rawForm.comment, 2000),
    bank: cleanString(rawForm.bank, 160),
    iban: cleanString(rawForm.iban, 80),
    bic: cleanString(rawForm.bic, 80),
    accountHolder: cleanString(rawForm.accountHolder, 160),
    place: cleanString(rawForm.place, 120),
    date: cleanString(rawForm.date, 40),
    declarationAccepted: Boolean(rawForm.declarationAccepted)
  };

  const items = rawItems.length
    ? rawItems.map((item, index) => ({
        id: cleanString(String(item?.id ?? index + 1), 60),
        material: cleanString(item?.material, 180),
        quantity: cleanString(item?.quantity, 80),
        unit: cleanString(item?.unit, 60) || "Stück",
        description: cleanString(item?.description, 500)
      }))
    : [
        {
          id: "1",
          material: "",
          quantity: "",
          unit: "Stück",
          description: ""
        }
      ];

  return { form, items };
}

function validatePayload(form, items) {
  const fieldErrors = {};
  const requiredItems = items.filter(
    (item, index) =>
      index === 0 ||
      item.material ||
      item.quantity ||
      item.description
  );

  if (!form.name) fieldErrors.name = "Bitte Namen eintragen.";
  if (!form.street) fieldErrors.street = "Bitte Straße eintragen.";
  if (!form.postalCode) fieldErrors.postalCode = "Bitte PLZ eintragen.";
  if (!form.city) fieldErrors.city = "Bitte Ort eintragen.";

  if (!form.email) {
    fieldErrors.email =
      "Für den automatischen Versand wird eine E-Mail-Adresse benötigt.";
  } else if (!isEmail(form.email)) {
    fieldErrors.email = "Bitte eine gültige E-Mail-Adresse eintragen.";
  }

  if (form.taxMode === "gewerblich" && !form.taxNumber) {
    fieldErrors.taxNumber = "Bitte Steuernummer eintragen.";
  }

  requiredItems.forEach((item) => {
    if (!item.material) {
      fieldErrors[itemErrorKey(item.id, "material")] =
        "Bitte Kategorie auswählen.";
    }
    if (!item.description) {
      fieldErrors[itemErrorKey(item.id, "description")] =
        "Bitte kurz beschreiben, was in der Sendung ist.";
    }
  });

  if (!form.declarationAccepted) {
    fieldErrors.declarationAccepted = "Bitte die Erklärung bestätigen.";
  }
  if (!form.date) fieldErrors.date = "Bitte Datum eintragen.";
  if (!form.place) fieldErrors.place = "Bitte Ort eintragen.";

  return {
    fieldErrors,
    sendItems: requiredItems.filter((item) => item.material || item.description)
  };
}

function formatItemsText(items) {
  return items
    .map((item, index) => {
      const quantity = item.quantity ? `${item.quantity} ${item.unit}` : "-";
      return [
        `${index + 1}. ${item.material}`,
        `   Menge: ${quantity}`,
        `   Beschreibung: ${item.description}`
      ].join("\n");
    })
    .join("\n\n");
}

function formatItemsHtml(items) {
  const rows = items
    .map((item) => {
      const quantity = item.quantity ? `${item.quantity} ${item.unit}` : "-";
      return `
        <tr>
          <td>${escapeHtml(item.material)}</td>
          <td>${escapeHtml(quantity)}</td>
          <td>${escapeHtml(item.description)}</td>
        </tr>
      `;
    })
    .join("");

  return `
    <table style="width:100%;border-collapse:collapse;margin:18px 0;">
      <thead>
        <tr>
          <th align="left" style="border-bottom:1px solid #d9e3ea;padding:10px 8px;color:#002353;">Material</th>
          <th align="left" style="border-bottom:1px solid #d9e3ea;padding:10px 8px;color:#002353;">Menge</th>
          <th align="left" style="border-bottom:1px solid #d9e3ea;padding:10px 8px;color:#002353;">Beschreibung</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function bankText(form) {
  if (!form.bank && !form.accountHolder && !form.iban && !form.bic) return "";

  return [
    "Konto-Angaben:",
    `Bank: ${form.bank || "-"}`,
    `Kontoinhaber: ${form.accountHolder || "-"}`,
    `IBAN: ${form.iban || "-"}`,
    `BIC: ${form.bic || "-"}`
  ].join("\n");
}

function bankHtml(form) {
  if (!form.bank && !form.accountHolder && !form.iban && !form.bic) return "";

  return `
    <h3 style="margin:26px 0 8px;color:#002353;">Konto-Angaben</h3>
    <p style="margin:0 0 4px;">Bank: <strong>${escapeHtml(form.bank || "-")}</strong></p>
    <p style="margin:0 0 4px;">Kontoinhaber: <strong>${escapeHtml(form.accountHolder || "-")}</strong></p>
    <p style="margin:0 0 4px;">IBAN: <strong>${escapeHtml(form.iban || "-")}</strong></p>
    <p style="margin:0;">BIC: <strong>${escapeHtml(form.bic || "-")}</strong></p>
  `;
}

function emailLayout(title, content) {
  return `
    <!doctype html>
    <html lang="de">
      <body style="margin:0;background:#f8fafc;padding:24px;font-family:Arial,sans-serif;color:#243244;">
        <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;">
          <div style="background:#002353;color:#ffffff;padding:24px 28px;">
            <p style="margin:0 0 6px;color:#f49004;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">Saijers Antik</p>
            <h1 style="margin:0;font-size:24px;line-height:1.25;">${escapeHtml(title)}</h1>
          </div>
          <div style="padding:28px;line-height:1.65;">
            ${content}
          </div>
        </div>
      </body>
    </html>
  `;
}

function buildCustomerEmail({ form, items, caseNumber }) {
  const text = [
    "Vielen Dank für Ihre Ankauf-Anfrage bei Saijers Antik.",
    `Ihre Vorgangsnummer lautet: ${caseNumber}`,
    "",
    "Bitte drucken Sie das Begleitschreiben zusätzlich aus, unterschreiben Sie es und legen Sie es in die Sendung.",
    "",
    "Ihre Angaben:",
    `Name: ${form.name}`,
    `Adresse: ${form.street}, ${form.postalCode} ${form.city}`,
    `Telefon: ${form.phone || "-"}`,
    `E-Mail: ${form.email}`,
    `Status: ${form.taxMode === "privat" ? "Privat" : "Gewerblich"}`,
    "",
    "Inhalt der Sendung:",
    formatItemsText(items),
    "",
    form.comment ? `Kommentar:\n${form.comment}\n` : "",
    bankText(form),
    "",
    "Sobald Ihre Sendung bei uns eingetroffen ist, prüfen wir die Stücke und melden uns mit einer Rückmeldung oder einem Angebot.",
    "",
    "Saijers Antik / Antikladen Kappeln",
    "Querstraße 4",
    "24376 Kappeln"
  ]
    .filter(Boolean)
    .join("\n");

  const html = emailLayout(
    BUY_REQUEST_EMAIL_TITLE,
    `
      <p>Vielen Dank für Ihre Ankauf-Anfrage bei Saijers Antik.</p>
      <p style="padding:14px 16px;background:#fff7ed;border-left:4px solid #f49004;border-radius:10px;">
        Ihre Vorgangsnummer lautet: <strong>${escapeHtml(caseNumber)}</strong>
      </p>
      <p>Bitte drucken Sie das Begleitschreiben zusätzlich aus, unterschreiben Sie es und legen Sie es in die Sendung.</p>
      <h2 style="margin:26px 0 8px;color:#002353;font-size:20px;">Ihre Angaben</h2>
      <p style="margin:0 0 4px;">Name: <strong>${escapeHtml(form.name)}</strong></p>
      <p style="margin:0 0 4px;">Adresse: <strong>${escapeHtml(`${form.street}, ${form.postalCode} ${form.city}`)}</strong></p>
      <p style="margin:0 0 4px;">Telefon: <strong>${escapeHtml(form.phone || "-")}</strong></p>
      <p style="margin:0;">E-Mail: <strong>${escapeHtml(form.email)}</strong></p>
      <h2 style="margin:26px 0 8px;color:#002353;font-size:20px;">Inhalt der Sendung</h2>
      ${formatItemsHtml(items)}
      ${
        form.comment
          ? `<h3 style="margin:26px 0 8px;color:#002353;">Kommentar</h3><p>${escapeHtml(form.comment)}</p>`
          : ""
      }
      ${bankHtml(form)}
      <p style="margin-top:28px;">Sobald Ihre Sendung bei uns eingetroffen ist, prüfen wir die Stücke und melden uns mit einer Rückmeldung oder einem Angebot.</p>
      <p style="margin-top:24px;color:#53606d;">Saijers Antik / Antikladen Kappeln<br>Querstraße 4<br>24376 Kappeln</p>
    `
  );

  return { text, html };
}

function buildInternalEmail({ form, items, caseNumber }) {
  const text = [
    `${BUY_REQUEST_EMAIL_TITLE}: ${caseNumber}`,
    "",
    "Absender:",
    `Firma: ${form.company || "-"}`,
    `Name: ${form.name}`,
    `Adresse: ${form.street}, ${form.postalCode} ${form.city}`,
    `Telefon: ${form.phone || "-"}`,
    `E-Mail: ${form.email}`,
    `Status: ${form.taxMode === "privat" ? "Privat" : "Gewerblich"}`,
    form.taxNumber ? `Steuernummer: ${form.taxNumber}` : "",
    "",
    "Inhalt der Sendung:",
    formatItemsText(items),
    "",
    form.comment ? `Kommentar:\n${form.comment}\n` : "",
    bankText(form),
    "",
    `Datum / Ort: ${form.date} / ${form.place}`,
    "Erklärung wurde im Formular bestätigt."
  ]
    .filter(Boolean)
    .join("\n");

  const html = emailLayout(
    BUY_REQUEST_EMAIL_TITLE,
    `
      <p style="padding:14px 16px;background:#fff7ed;border-left:4px solid #f49004;border-radius:10px;">
        Vorgangsnummer: <strong>${escapeHtml(caseNumber)}</strong>
      </p>
      <p>Eine neue Ankauf-Anfrage wurde über das Begleitschreiben abgesendet.</p>
      <h2 style="margin:26px 0 8px;color:#002353;font-size:20px;">Absender</h2>
      <p style="margin:0 0 4px;">Firma: <strong>${escapeHtml(form.company || "-")}</strong></p>
      <p style="margin:0 0 4px;">Name: <strong>${escapeHtml(form.name)}</strong></p>
      <p style="margin:0 0 4px;">Adresse: <strong>${escapeHtml(`${form.street}, ${form.postalCode} ${form.city}`)}</strong></p>
      <p style="margin:0 0 4px;">Telefon: <strong>${escapeHtml(form.phone || "-")}</strong></p>
      <p style="margin:0 0 4px;">E-Mail: <strong>${escapeHtml(form.email)}</strong></p>
      <p style="margin:0;">Status: <strong>${escapeHtml(form.taxMode === "privat" ? "Privat" : "Gewerblich")}</strong></p>
      ${
        form.taxNumber
          ? `<p style="margin:4px 0 0;">Steuernummer: <strong>${escapeHtml(form.taxNumber)}</strong></p>`
          : ""
      }
      <h2 style="margin:26px 0 8px;color:#002353;font-size:20px;">Inhalt der Sendung</h2>
      ${formatItemsHtml(items)}
      ${
        form.comment
          ? `<h3 style="margin:26px 0 8px;color:#002353;">Kommentar</h3><p>${escapeHtml(form.comment)}</p>`
          : ""
      }
      ${bankHtml(form)}
      <p style="margin-top:28px;">Datum / Ort: <strong>${escapeHtml(`${form.date} / ${form.place}`)}</strong></p>
      <p style="color:#53606d;">Die Erklärung wurde im Formular bestätigt.</p>
    `
  );

  return { text, html };
}

function buildBuyRequestTemplateVariables({ form, items, caseNumber }) {
  const address = `${form.street}, ${form.postalCode} ${form.city}`;

  return {
    CASE_NUMBER: caseNumber,
    CUSTOMER_NAME: form.name,
    CUSTOMER_COMPANY: form.company || "-",
    CUSTOMER_EMAIL: form.email,
    CUSTOMER_PHONE: form.phone || "-",
    CUSTOMER_ADDRESS: address,
    CUSTOMER_STREET: form.street,
    CUSTOMER_POSTAL_CODE: form.postalCode,
    CUSTOMER_CITY: form.city,
    TAX_MODE: form.taxMode === "privat" ? "Privat" : "Gewerblich",
    TAX_NUMBER: form.taxNumber || "-",
    ITEMS_TEXT: formatItemsText(items).slice(0, 2000),
    COMMENT: form.comment || "-",
    BANK_NAME: form.bank || "-",
    ACCOUNT_HOLDER: form.accountHolder || "-",
    IBAN: form.iban || "-",
    BIC: form.bic || "-",
    FORM_DATE: form.date,
    FORM_PLACE: form.place
  };
}

function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM?.trim();
  const missing = [];

  if (!apiKey) missing.push("RESEND_API_KEY");
  if (!from) missing.push("RESEND_FROM");

  return { apiKey, from, missing };
}

async function sendEmail({
  to,
  subject,
  html,
  text,
  template,
  replyTo,
  idempotencyKey
}) {
  const { apiKey, from, missing } = getEmailConfig();

  if (missing.length > 0) {
    return {
      ok: false,
      configError: true,
      missingConfig: missing,
      message:
        `Der automatische E-Mail-Versand ist noch nicht vollständig eingerichtet. Es fehlt in Vercel: ${missing.join(
          ", "
        )}.`
    };
  }

  const body = {
    from,
    to: Array.isArray(to) ? to : [to],
    subject
  };

  if (template) {
    body.template = template;
  } else {
    body.html = html;
    body.text = text;
  }

  if (replyTo) {
    body.reply_to = replyTo;
  }

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
      "User-Agent": "saijers-antik-next/1.0"
    },
    body: JSON.stringify(body)
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    return {
      ok: false,
      templateError: Boolean(template),
      message:
        result?.message ||
        "Der E-Mail-Dienst konnte die Nachricht nicht verschicken."
    };
  }

  return { ok: true, result };
}

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Die Formulardaten konnten nicht gelesen werden." },
      { status: 400 }
    );
  }

  const { form, items } = normalizePayload(payload);
  const { fieldErrors, sendItems } = validatePayload(form, items);

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      {
        message: "Bitte prüfen Sie die markierten Felder.",
        fieldErrors
      },
      { status: 400 }
    );
  }

  const caseNumber = createCaseNumber();
  const recipient = process.env.SAIJERS_LETTER_TO || siteConfig.email;
  const customerEmail = buildCustomerEmail({ form, items: sendItems, caseNumber });
  const internalEmail = buildInternalEmail({ form, items: sendItems, caseNumber });

  const templateResult = await sendEmail({
    to: recipient,
    replyTo: form.email,
    subject: `${BUY_REQUEST_EMAIL_TITLE} - ${caseNumber}`,
    template: {
      id: BUY_REQUEST_TEMPLATE_ID,
      variables: buildBuyRequestTemplateVariables({
        form,
        items: sendItems,
        caseNumber
      })
    },
    idempotencyKey: `${caseNumber}-internal-template`
  });
  const internalResult = templateResult.ok
    ? templateResult
    : templateResult.configError
      ? templateResult
      : await sendEmail({
          to: recipient,
          replyTo: form.email,
          subject: `${BUY_REQUEST_EMAIL_TITLE} - ${caseNumber}`,
          ...internalEmail,
          idempotencyKey: `${caseNumber}-internal-fallback`
        });

  if (!internalResult.ok) {
    return NextResponse.json(
      {
        message: internalResult.message,
        configError: Boolean(internalResult.configError),
        missingConfig: internalResult.missingConfig || []
      },
      { status: internalResult.configError ? 503 : 502 }
    );
  }

  const customerResult = await sendEmail({
    to: form.email,
    replyTo: recipient,
    subject: `${BUY_REQUEST_EMAIL_TITLE} - ${caseNumber}`,
    ...customerEmail,
    idempotencyKey: `${caseNumber}-customer`
  });

  if (!customerResult.ok) {
    return NextResponse.json(
      {
        message: customerResult.message,
        configError: Boolean(customerResult.configError),
        missingConfig: customerResult.missingConfig || []
      },
      { status: customerResult.configError ? 503 : 502 }
    );
  }

  return NextResponse.json({
    caseNumber,
    message:
      "Das Begleitschreiben wurde übermittelt. Sie erhalten eine Bestätigung per E-Mail."
  });
}
