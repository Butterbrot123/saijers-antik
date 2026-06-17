"use client";

import { useState } from "react";
import { Plus, Printer, Send, Trash2 } from "lucide-react";
import { trackGoogleAdsConversion } from "@/lib/googleAds";

const materialOptions = [
  "Alte Briefe / Dokumente",
  "Postkarten / Fotos",
  "Uhren",
  "Schmuck / Modeschmuck",
  "Münzen / Medaillen / Orden",
  "Bücher / Füller",
  "Dänisches Design",
  "Spielzeug / Sammlerstücke",
  "Nachlass / Sammlung",
  "Sonstiges"
];

function createItem(id) {
  return {
    id,
    material: "",
    quantity: "",
    unit: "Stück",
    description: ""
  };
}

function today() {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(new Date());
}

export default function ShippingLetterForm() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    street: "",
    postalCode: "",
    city: "",
    phone: "",
    email: "",
    taxMode: "privat",
    taxNumber: "",
    comment: "",
    bank: "",
    iban: "",
    bic: "",
    accountHolder: "",
    place: "",
    date: today(),
    declarationAccepted: false
  });
  const [items, setItems] = useState([createItem(1)]);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const filledItems = items.filter(
    (item) =>
      item.material.trim() ||
      item.quantity.trim() ||
      item.description.trim()
  );
  const printItems =
    filledItems.length > 0
      ? filledItems
      : [
          {
            id: "blank",
            material: "",
            quantity: "",
            unit: "",
            description: ""
          }
        ];
  const showTaxDetails = form.taxMode === "gewerblich" || form.taxNumber.trim();
  const showBankDetails = [form.bank, form.accountHolder, form.iban, form.bic].some(
    (value) => value.trim()
  );
  const postalCity =
    [form.postalCode, form.city].filter(Boolean).join(" ") || "________________";
  const hasErrors = Object.keys(errors).length > 0;

  function itemErrorKey(id, field) {
    return `item-${id}-${field}`;
  }

  function fieldClass(name, extra = "") {
    return [extra, errors[name] ? "letter-field-error" : ""].filter(Boolean).join(" ");
  }

  function itemHasError(id) {
    return Boolean(errors[itemErrorKey(id, "material")] || errors[itemErrorKey(id, "description")]);
  }

  function renderError(name) {
    return errors[name] ? (
      <small className="letter-error-text" id={`letter-error-${name}`}>
        {errors[name]}
      </small>
    ) : null;
  }

  function clearErrors(...names) {
    setErrors((current) => {
      const next = { ...current };
      names.forEach((name) => delete next[name]);
      return next;
    });
  }

  function updateField(event) {
    const { name, value, type, checked } = event.target;
    setSubmitStatus(null);
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value
    }));

    clearErrors(name);
    if (name === "phone" || name === "email") {
      clearErrors("phone", "email");
    }
    if (name === "taxMode") {
      clearErrors("taxNumber");
    }
  }

  function updateItem(id, field, value) {
    setSubmitStatus(null);
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
    clearErrors(itemErrorKey(id, field));
  }

  function addItem() {
    setSubmitStatus(null);
    setItems((current) => [...current, createItem(Date.now())]);
  }

  function removeItem(id) {
    setSubmitStatus(null);
    setItems((current) =>
      current.length > 1 ? current.filter((item) => item.id !== id) : current
    );
    clearErrors(itemErrorKey(id, "material"), itemErrorKey(id, "description"));
  }

  function validateForm({ requireEmail = false } = {}) {
    const nextErrors = {};
    const requiredItems = items.filter(
      (item, index) =>
        index === 0 ||
        item.material.trim() ||
        item.quantity.trim() ||
        item.description.trim()
    );

    if (!form.name.trim()) nextErrors.name = "Bitte Namen eintragen.";
    if (!form.street.trim()) nextErrors.street = "Bitte Straße eintragen.";
    if (!form.postalCode.trim()) nextErrors.postalCode = "Bitte PLZ eintragen.";
    if (!form.city.trim()) nextErrors.city = "Bitte Ort eintragen.";

    if (requireEmail && !form.email.trim()) {
      nextErrors.email =
        "Für den automatischen Versand wird eine E-Mail-Adresse benötigt.";
    } else if (!form.phone.trim() && !form.email.trim()) {
      nextErrors.phone = "Bitte Telefon oder E-Mail eintragen.";
      nextErrors.email = "Bitte Telefon oder E-Mail eintragen.";
    } else if (
      form.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      nextErrors.email = "Bitte eine gültige E-Mail-Adresse eintragen.";
    }

    if (form.taxMode === "gewerblich" && !form.taxNumber.trim()) {
      nextErrors.taxNumber = "Bitte Steuernummer eintragen.";
    }

    requiredItems.forEach((item) => {
      if (!item.material.trim()) {
        nextErrors[itemErrorKey(item.id, "material")] = "Bitte Kategorie auswählen.";
      }
      if (!item.description.trim()) {
        nextErrors[itemErrorKey(item.id, "description")] = "Bitte kurz beschreiben, was in der Sendung ist.";
      }
    });

    if (!form.declarationAccepted) {
      nextErrors.declarationAccepted = "Bitte die Erklärung bestätigen.";
    }
    if (!form.date.trim()) nextErrors.date = "Bitte Datum eintragen.";
    if (!form.place.trim()) nextErrors.place = "Bitte Ort eintragen.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function scrollToFirstError() {
    window.setTimeout(() => {
      document
        .querySelector(".letter-error-summary, .letter-field-error")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 0);
  }

  function printLetter() {
    if (!validateForm()) {
      scrollToFirstError();
      return;
    }

    window.print();
  }

  async function submitLetter() {
    setSubmitStatus(null);

    if (!validateForm({ requireEmail: true })) {
      scrollToFirstError();
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/begleitschreiben", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ form, items })
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (result.fieldErrors) {
          setErrors((current) => ({ ...current, ...result.fieldErrors }));
          scrollToFirstError();
        }

        throw new Error(
          result.message ||
            "Das Begleitschreiben konnte gerade nicht übermittelt werden."
        );
      }

      setSubmitStatus({
        type: "success",
        message: `Das Begleitschreiben wurde übermittelt. Ihre Vorgangsnummer lautet ${result.caseNumber}.`
      });
      trackGoogleAdsConversion("letter");
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error.message ||
          "Das Begleitschreiben konnte gerade nicht übermittelt werden."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="letter-tool">
      <form className="letter-form" noValidate>
        {hasErrors ? (
          <div className="letter-error-summary" role="alert">
            <strong>Bitte noch einmal prüfen</strong>
            <p>Einige Angaben fehlen noch. Die betroffenen Felder sind rot markiert.</p>
          </div>
        ) : null}
        {submitStatus ? (
          <div
            className={`letter-status letter-status-${submitStatus.type}`}
            role={submitStatus.type === "error" ? "alert" : "status"}
          >
            <strong>
              {submitStatus.type === "success"
                ? "Begleitschreiben gesendet"
                : "Versand noch nicht möglich"}
            </strong>
            <p>{submitStatus.message}</p>
          </div>
        ) : null}

        <section className="letter-form-section">
          <span className="eyebrow">Meine Person</span>
          <div className="letter-field-grid">
            <label>
              Firma
              <input name="company" value={form.company} onChange={updateField} />
            </label>
            <label className={fieldClass("name")}>
              Name
              <input
                name="name"
                value={form.name}
                onChange={updateField}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "letter-error-name" : undefined}
                required
              />
              {renderError("name")}
            </label>
            <label className={fieldClass("street")}>
              Straße
              <input
                name="street"
                value={form.street}
                onChange={updateField}
                aria-invalid={Boolean(errors.street)}
                aria-describedby={errors.street ? "letter-error-street" : undefined}
              />
              {renderError("street")}
            </label>
            <label className={fieldClass("postalCode")}>
              PLZ
              <input
                name="postalCode"
                value={form.postalCode}
                onChange={updateField}
                aria-invalid={Boolean(errors.postalCode)}
                aria-describedby={errors.postalCode ? "letter-error-postalCode" : undefined}
              />
              {renderError("postalCode")}
            </label>
            <label className={fieldClass("city")}>
              Ort
              <input
                name="city"
                value={form.city}
                onChange={updateField}
                aria-invalid={Boolean(errors.city)}
                aria-describedby={errors.city ? "letter-error-city" : undefined}
              />
              {renderError("city")}
            </label>
            <label className={fieldClass("phone")}>
              Telefon
              <input
                name="phone"
                value={form.phone}
                onChange={updateField}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "letter-error-phone" : undefined}
              />
              {renderError("phone")}
            </label>
            <label className={fieldClass("email", "letter-field-wide")}>
              E-Mail
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "letter-error-email" : undefined}
              />
              {renderError("email")}
            </label>
          </div>
        </section>

        <section className="letter-form-section">
          <span className="eyebrow">Mehrwertsteuer-Abzugsberechtigung</span>
          <div className="letter-radio-grid">
            <label className={form.taxMode === "privat" ? "active" : ""}>
              <input
                type="radio"
                name="taxMode"
                value="privat"
                checked={form.taxMode === "privat"}
                onChange={updateField}
              />
              <strong>Nein</strong>
              <span>Privat</span>
            </label>
            <label className={form.taxMode === "gewerblich" ? "active" : ""}>
              <input
                type="radio"
                name="taxMode"
                value="gewerblich"
                checked={form.taxMode === "gewerblich"}
                onChange={updateField}
              />
              <strong>Ja</strong>
              <span>Gewerblich</span>
            </label>
          </div>
          <label className={fieldClass("taxNumber", "letter-tax-field")}>
            Steuernummer
            <input
              name="taxNumber"
              value={form.taxNumber}
              onChange={updateField}
              aria-invalid={Boolean(errors.taxNumber)}
              aria-describedby={errors.taxNumber ? "letter-error-taxNumber" : undefined}
            />
            {renderError("taxNumber")}
          </label>
        </section>

        <section className="letter-form-section">
          <span className="eyebrow">Angaben zur Sendung</span>
          <div className="letter-item-list">
            {items.map((item) => {
              const materialError = itemErrorKey(item.id, "material");
              const descriptionError = itemErrorKey(item.id, "description");

              return (
                <article
                  className={itemHasError(item.id) ? "letter-item has-error" : "letter-item"}
                  key={item.id}
                >
                  <label className={fieldClass(materialError)}>
                    Material / Kategorie
                    <select
                      value={item.material}
                      onChange={(event) =>
                        updateItem(item.id, "material", event.target.value)
                      }
                      aria-invalid={Boolean(errors[materialError])}
                      aria-describedby={
                        errors[materialError] ? `letter-error-${materialError}` : undefined
                      }
                    >
                      <option value="">Bitte auswählen</option>
                      {materialOptions.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {renderError(materialError)}
                  </label>
                  <label>
                    Menge / Gewicht
                    <input
                      value={item.quantity}
                      onChange={(event) =>
                        updateItem(item.id, "quantity", event.target.value)
                      }
                      placeholder="z. B. 12 oder 450"
                    />
                  </label>
                  <label>
                    Einheit
                    <select
                      value={item.unit}
                      onChange={(event) => updateItem(item.id, "unit", event.target.value)}
                    >
                      <option>Stück</option>
                      <option>Gramm</option>
                      <option>Konvolut</option>
                      <option>Karton</option>
                      <option>Mappe</option>
                    </select>
                  </label>
                  <label className={fieldClass(descriptionError, "letter-item-description")}>
                    Beschreibung
                    <input
                      value={item.description}
                      onChange={(event) =>
                        updateItem(item.id, "description", event.target.value)
                      }
                      placeholder="z. B. Taschenuhr, Feldpost, Postkartenalbum"
                      aria-invalid={Boolean(errors[descriptionError])}
                      aria-describedby={
                        errors[descriptionError]
                          ? `letter-error-${descriptionError}`
                          : undefined
                      }
                    />
                    {renderError(descriptionError)}
                  </label>
                  <button
                    className="letter-remove-button"
                    type="button"
                    onClick={() => removeItem(item.id)}
                    aria-label="Zeile entfernen"
                  >
                    <Trash2 size={18} aria-hidden="true" />
                  </button>
                </article>
              );
            })}
          </div>
          <button className="button button-outline-dark" type="button" onClick={addItem}>
            <Plus size={18} aria-hidden="true" />
            Weitere Position
          </button>
        </section>

        <section className="letter-form-section">
          <span className="eyebrow">Kommentar</span>
          <label>
            Kommentar
            <textarea
              name="comment"
              value={form.comment}
              onChange={updateField}
              placeholder="Besondere Hinweise zu Herkunft, Zustand, gewünschter Rückmeldung oder Versand."
            />
          </label>
        </section>

        <section className="letter-form-section">
          <span className="eyebrow">Konto-Angaben optional</span>
          <div className="letter-field-grid">
            <label className={fieldClass("bank")}>
              Bank
              <input
                name="bank"
                value={form.bank}
                onChange={updateField}
                aria-invalid={Boolean(errors.bank)}
                aria-describedby={errors.bank ? "letter-error-bank" : undefined}
              />
              {renderError("bank")}
            </label>
            <label className={fieldClass("accountHolder")}>
              Kontoinhaber
              <input
                name="accountHolder"
                value={form.accountHolder}
                onChange={updateField}
                aria-invalid={Boolean(errors.accountHolder)}
                aria-describedby={
                  errors.accountHolder ? "letter-error-accountHolder" : undefined
                }
              />
              {renderError("accountHolder")}
            </label>
            <label className={fieldClass("iban")}>
              IBAN
              <input
                name="iban"
                value={form.iban}
                onChange={updateField}
                aria-invalid={Boolean(errors.iban)}
                aria-describedby={errors.iban ? "letter-error-iban" : undefined}
              />
              {renderError("iban")}
            </label>
            <label className={fieldClass("bic")}>
              BIC
              <input
                name="bic"
                value={form.bic}
                onChange={updateField}
                aria-invalid={Boolean(errors.bic)}
                aria-describedby={errors.bic ? "letter-error-bic" : undefined}
              />
              {renderError("bic")}
            </label>
          </div>
        </section>

        <section className="letter-form-section">
          <span className="eyebrow">Erklärung</span>
          <label className={fieldClass("declarationAccepted", "letter-check")}>
            <input
              type="checkbox"
              name="declarationAccepted"
              checked={form.declarationAccepted}
              onChange={updateField}
              aria-invalid={Boolean(errors.declarationAccepted)}
              aria-describedby={
                errors.declarationAccepted
                  ? "letter-error-declarationAccepted"
                  : undefined
              }
            />
            <span>
              Ich versichere mit meiner Unterschrift an Eides statt, dass ich
              alleiniger Eigentümer der eingesendeten Materialien, volljährig
              und voll geschäftsfähig bin. Das Material ist nicht belastet durch
              Rechte Dritter. Es entstammt weder direkt noch indirekt
              ungesetzlichen Handlungen. Die AGB habe ich gelesen, verstanden
              und akzeptiert.
            </span>
            {renderError("declarationAccepted")}
          </label>
          <div className="letter-field-grid">
            <label className={fieldClass("date")}>
              Datum
              <input
                name="date"
                value={form.date}
                onChange={updateField}
                aria-invalid={Boolean(errors.date)}
                aria-describedby={errors.date ? "letter-error-date" : undefined}
              />
              {renderError("date")}
            </label>
            <label className={fieldClass("place")}>
              Ort
              <input
                name="place"
                value={form.place}
                onChange={updateField}
                aria-invalid={Boolean(errors.place)}
                aria-describedby={errors.place ? "letter-error-place" : undefined}
              />
              {renderError("place")}
            </label>
          </div>
          <div className="letter-signature-field">
            <span>Unterschrift</span>
            <strong aria-hidden="true" />
          </div>
        </section>

        <div className="letter-actions">
          <button
            className="button"
            type="button"
            onClick={submitLetter}
            disabled={isSubmitting}
          >
            <Send size={18} aria-hidden="true" />
            {isSubmitting ? "Wird gesendet..." : "Begleitschreiben absenden"}
          </button>
          <button className="button button-outline-dark" type="button" onClick={printLetter}>
            <Printer size={18} aria-hidden="true" />
            Begleitschreiben drucken
          </button>
          <p className="letter-actions-note">
            Nach dem Absenden erhalten Sie eine Bestätigung per E-Mail. Bitte
            drucken Sie das Begleitschreiben zusätzlich aus und legen Sie es
            unterschrieben in die Sendung.
          </p>
        </div>
      </form>

      <article className="letter-print-sheet">
        <header className="letter-print-header">
          <div>
            <p>Saijers Antik</p>
            <h2>Begleitschreiben zur Sendung</h2>
          </div>
          <address>
            Saijers Antik / Antikladen Kappeln
            <br />
            Querstraße 4
            <br />
            24376 Kappeln
          </address>
        </header>

        <section className="letter-print-section">
          <h3>Absender</h3>
          <div className="letter-print-fields">
            {form.company ? (
              <p>
                <span>Firma</span>
                <strong>{form.company}</strong>
              </p>
            ) : null}
            <p>
              <span>Name</span>
              <strong>{form.name || "________________"}</strong>
            </p>
            <p>
              <span>Straße</span>
              <strong>{form.street || "________________"}</strong>
            </p>
            <p>
              <span>PLZ / Ort</span>
              <strong>{postalCity}</strong>
            </p>
            <p>
              <span>Telefon</span>
              <strong>{form.phone || "________________"}</strong>
            </p>
            <p>
              <span>E-Mail</span>
              <strong>{form.email || "________________"}</strong>
            </p>
            <p>
              <span>Status</span>
              <strong>{form.taxMode === "privat" ? "Privat" : "Gewerblich"}</strong>
            </p>
            {showTaxDetails ? (
              <p>
                <span>Steuernummer</span>
                <strong>{form.taxNumber || "________________"}</strong>
              </p>
            ) : null}
          </div>
        </section>

        <section className="letter-print-section">
          <h3>Inhalt der Sendung</h3>
          <table className="letter-print-table">
            <thead>
              <tr>
                <th>Material / Kategorie</th>
                <th>Menge</th>
                <th>Beschreibung</th>
              </tr>
            </thead>
            <tbody>
              {printItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.material || "________________"}</td>
                  <td>{item.quantity ? `${item.quantity} ${item.unit}` : "________"}</td>
                  <td>{item.description || "________________"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {form.comment.trim() ? (
          <section className="letter-print-section">
            <h3>Kommentar</h3>
            <p className="letter-print-text">{form.comment}</p>
          </section>
        ) : null}

        {showBankDetails ? (
          <section className="letter-print-section">
            <h3>Bankdaten für Ankauf</h3>
            <div className="letter-print-fields">
              <p>
                <span>Bank</span>
                <strong>{form.bank || "________________"}</strong>
              </p>
              <p>
                <span>Kontoinhaber</span>
                <strong>{form.accountHolder || "________________"}</strong>
              </p>
              <p>
                <span>IBAN</span>
                <strong>{form.iban || "________________"}</strong>
              </p>
              <p>
                <span>BIC</span>
                <strong>{form.bic || "________________"}</strong>
              </p>
            </div>
          </section>
        ) : null}

        <section className="letter-print-section letter-print-declaration">
          <h3>Erklärung</h3>
          <p>
            Ich versichere mit meiner Unterschrift an Eides statt, dass ich
            alleiniger Eigentümer der eingesendeten Materialien, volljährig und
            voll geschäftsfähig bin. Das Material ist nicht belastet durch
            Rechte Dritter und entstammt weder direkt noch indirekt
            ungesetzlichen Handlungen.
          </p>
         
        </section>
      </article>
    </div>
  );
}
