import { Buffer } from "node:buffer";
import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/seo";

export const runtime = "nodejs";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const MAX_FILES = 6;
const MAX_FILE_SIZE = 4 * 1024 * 1024;
const MAX_TOTAL_SIZE = 4 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif"
]);

function cleanString(value, maxLength = 500) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function cleanLongText(value, maxLength = 2500) {
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

function isUploadFile(value) {
  return (
    value &&
    typeof value === "object" &&
    typeof value.name === "string" &&
    typeof value.size === "number" &&
    typeof value.arrayBuffer === "function"
  );
}

function formatBytes(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  if (bytes >= 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${bytes} B`;
}

function sanitizeFilename(name, index) {
  const fallback = `bild-${index + 1}.jpg`;
  const cleaned = cleanString(name, 120)
    .replace(/[^\w.\- äöüÄÖÜß]/g, "-")
    .replace(/-+/g, "-")
    .trim();

  return cleaned || fallback;
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
  const stamp = Date.now().toString(36).toUpperCase().slice(-5);
  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();

  return `SA-K-${datePart}-${stamp}${suffix}`;
}

function normalizeForm(formData) {
  return {
    name: cleanString(formData.get("name"), 160),
    email: cleanString(formData.get("email"), 180).toLowerCase(),
    phone: cleanString(formData.get("phone"), 80),
    topic: cleanString(formData.get("topic"), 160) || "Kontaktanfrage",
    message: cleanLongText(formData.get("message"), 2500)
  };
}

function validateForm(form, files) {
  const fieldErrors = {};

  if (!form.name) fieldErrors.name = "Bitte Namen eintragen.";
  if (!form.email) {
    fieldErrors.email = "Bitte E-Mail-Adresse eintragen.";
  } else if (!isEmail(form.email)) {
    fieldErrors.email = "Bitte eine gültige E-Mail-Adresse eintragen.";
  }
  if (!form.message) fieldErrors.message = "Bitte kurz beschreiben, worum es geht.";

  if (files.length > MAX_FILES) {
    fieldErrors.images = `Bitte maximal ${MAX_FILES} Bilder hochladen.`;
  }

  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  if (totalSize > MAX_TOTAL_SIZE) {
    fieldErrors.images = `Die Bilder sind zusammen zu groß. Bitte maximal ${formatBytes(
      MAX_TOTAL_SIZE
    )} hochladen.`;
  }

  files.forEach((file) => {
    if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
      fieldErrors.images =
        "Bitte nur Bilder im Format JPG, PNG, WebP, HEIC oder HEIF hochladen.";
    }
    if (file.size > MAX_FILE_SIZE) {
      fieldErrors.images = `Ein Bild ist zu groß. Bitte maximal ${formatBytes(
        MAX_FILE_SIZE
      )} pro Bild hochladen.`;
    }
  });

  return fieldErrors;
}

async function buildAttachments(files) {
  return Promise.all(
    files.map(async (file, index) => {
      const buffer = Buffer.from(await file.arrayBuffer());
      return {
        filename: sanitizeFilename(file.name, index),
        content: buffer.toString("base64")
      };
    })
  );
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

function buildInternalEmail({ form, files, caseNumber }) {
  const fileList = files.length
    ? files
        .map((file, index) => `${index + 1}. ${file.name} (${formatBytes(file.size)})`)
        .join("\n")
    : "Keine Bilder hochgeladen.";

  const text = [
    `Neue Kontaktanfrage: ${caseNumber}`,
    "",
    `Name: ${form.name}`,
    `E-Mail: ${form.email}`,
    `Telefon: ${form.phone || "-"}`,
    `Thema: ${form.topic}`,
    "",
    "Nachricht:",
    form.message,
    "",
    "Bilder:",
    fileList
  ].join("\n");

  const html = emailLayout(
    `Neue Kontaktanfrage ${caseNumber}`,
    `
      <p style="padding:14px 16px;background:#fff7ed;border-left:4px solid #f49004;border-radius:10px;">
        Vorgangsnummer: <strong>${escapeHtml(caseNumber)}</strong>
      </p>
      <h2 style="margin:26px 0 8px;color:#002353;font-size:20px;">Kontakt</h2>
      <p style="margin:0 0 4px;">Name: <strong>${escapeHtml(form.name)}</strong></p>
      <p style="margin:0 0 4px;">E-Mail: <strong>${escapeHtml(form.email)}</strong></p>
      <p style="margin:0 0 4px;">Telefon: <strong>${escapeHtml(form.phone || "-")}</strong></p>
      <p style="margin:0;">Thema: <strong>${escapeHtml(form.topic)}</strong></p>
      <h2 style="margin:26px 0 8px;color:#002353;font-size:20px;">Nachricht</h2>
      <p style="white-space:pre-line;">${escapeHtml(form.message)}</p>
      <h2 style="margin:26px 0 8px;color:#002353;font-size:20px;">Bilder</h2>
      <p>${escapeHtml(
        files.length
          ? `${files.length} Bild(er) wurden als Anhang mitgesendet.`
          : "Es wurden keine Bilder hochgeladen."
      )}</p>
    `
  );

  return { text, html };
}

function buildCustomerEmail({ form, files, caseNumber }) {
  const text = [
    `Vielen Dank für Ihre Anfrage an Saijers Antik.`,
    `Ihre Vorgangsnummer lautet: ${caseNumber}`,
    "",
    `Thema: ${form.topic}`,
    files.length
      ? `${files.length} Bild(er) wurden mit Ihrer Anfrage übermittelt.`
      : "Sie haben keine Bilder hochgeladen.",
    "",
    "Wir prüfen Ihre Angaben und melden uns persönlich bei Ihnen.",
    "",
    "Saijers Antik / Antikladen Kappeln",
    "Querstraße 4",
    "24376 Kappeln"
  ].join("\n");

  const html = emailLayout(
    `Ihre Anfrage ${caseNumber}`,
    `
      <p>Vielen Dank für Ihre Anfrage an Saijers Antik.</p>
      <p style="padding:14px 16px;background:#fff7ed;border-left:4px solid #f49004;border-radius:10px;">
        Ihre Vorgangsnummer lautet: <strong>${escapeHtml(caseNumber)}</strong>
      </p>
      <p>Thema: <strong>${escapeHtml(form.topic)}</strong></p>
      <p>${
        files.length
          ? `${files.length} Bild(er) wurden mit Ihrer Anfrage übermittelt.`
          : "Sie haben keine Bilder hochgeladen."
      }</p>
      <p>Wir prüfen Ihre Angaben und melden uns persönlich bei Ihnen.</p>
      <p style="margin-top:24px;color:#53606d;">Saijers Antik / Antikladen Kappeln<br>Querstraße 4<br>24376 Kappeln</p>
    `
  );

  return { text, html };
}

function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM?.trim();
  const missing = [];

  if (!apiKey) missing.push("RESEND_API_KEY");
  if (!from) missing.push("RESEND_FROM");

  return { apiKey, from, missing };
}

async function sendEmail({ to, subject, html, text, replyTo, attachments, idempotencyKey }) {
  const { apiKey, from, missing } = getEmailConfig();

  if (missing.length > 0) {
    return {
      ok: false,
      configError: true,
      missingConfig: missing,
      message: `Der automatische E-Mail-Versand ist noch nicht vollständig eingerichtet. Es fehlt in Vercel: ${missing.join(
        ", "
      )}.`
    };
  }

  const body = {
    from,
    to: Array.isArray(to) ? to : [to],
    subject,
    html,
    text
  };

  if (replyTo) body.reply_to = replyTo;
  if (attachments?.length) body.attachments = attachments;

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
      message:
        result?.message ||
        "Der E-Mail-Dienst konnte die Nachricht nicht verschicken."
    };
  }

  return { ok: true, result };
}

export async function POST(request) {
  let formData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { message: "Die Formulardaten konnten nicht gelesen werden." },
      { status: 400 }
    );
  }

  const form = normalizeForm(formData);
  const files = formData
    .getAll("images")
    .filter((file) => isUploadFile(file) && file.size > 0)
    .slice(0, MAX_FILES + 1);
  const fieldErrors = validateForm(form, files);

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
  const recipient =
    process.env.SAIJERS_CONTACT_TO || process.env.SAIJERS_LETTER_TO || siteConfig.email;
  const attachments = await buildAttachments(files);
  const internalEmail = buildInternalEmail({ form, files, caseNumber });
  const customerEmail = buildCustomerEmail({ form, files, caseNumber });

  const internalResult = await sendEmail({
    to: recipient,
    replyTo: form.email,
    subject: `Neue Kontaktanfrage ${caseNumber} - ${form.name}`,
    ...internalEmail,
    attachments,
    idempotencyKey: `${caseNumber}-contact-internal`
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

  await sendEmail({
    to: form.email,
    replyTo: recipient,
    subject: `Ihre Anfrage ${caseNumber} - Saijers Antik`,
    ...customerEmail,
    idempotencyKey: `${caseNumber}-contact-customer`
  });

  return NextResponse.json({
    caseNumber,
    message: `Ihre Anfrage wurde gesendet. Ihre Vorgangsnummer lautet ${caseNumber}.`
  });
}
