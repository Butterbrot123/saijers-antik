"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, ImagePlus, Send, Trash2 } from "lucide-react";
import { trackGoogleAdsConversion } from "@/lib/googleAds";

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

function formatBytes(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  if (bytes >= 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${bytes} B`;
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "Antik verkaufen",
    message: ""
  });
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setSubmitStatus(null);
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function fieldClass(name) {
    return errors[name] ? "contact-field-error" : "";
  }

  function renderError(name) {
    return errors[name] ? (
      <small className="contact-error-text" id={`contact-error-${name}`}>
        {errors[name]}
      </small>
    ) : null;
  }

  function validateFiles(nextFiles) {
    if (nextFiles.length > MAX_FILES) {
      return `Bitte maximal ${MAX_FILES} Bilder hochladen.`;
    }

    const totalSize = nextFiles.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > MAX_TOTAL_SIZE) {
      return `Die Bilder sind zusammen zu groß. Bitte maximal ${formatBytes(
        MAX_TOTAL_SIZE
      )} hochladen.`;
    }

    for (const file of nextFiles) {
      if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
        return "Bitte nur Bilder im Format JPG, PNG, WebP, HEIC oder HEIF hochladen.";
      }
      if (file.size > MAX_FILE_SIZE) {
        return `Ein Bild ist zu groß. Bitte maximal ${formatBytes(
          MAX_FILE_SIZE
        )} pro Bild hochladen.`;
      }
    }

    return "";
  }

  function validateForm(nextFiles = files) {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Bitte Namen eintragen.";
    if (!form.email.trim()) {
      nextErrors.email = "Bitte E-Mail-Adresse eintragen.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Bitte eine gültige E-Mail-Adresse eintragen.";
    }
    if (!form.message.trim()) {
      nextErrors.message = "Bitte kurz beschreiben, worum es geht.";
    }

    const imageError = validateFiles(nextFiles);
    if (imageError) nextErrors.images = imageError;

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function addFiles(event) {
    const selectedFiles = Array.from(event.target.files || []);
    const nextFiles = [...files, ...selectedFiles].slice(0, MAX_FILES + 1);

    setSubmitStatus(null);
    setFiles(nextFiles);
    setErrors((current) => {
      const next = { ...current };
      const imageError = validateFiles(nextFiles);
      if (imageError) {
        next.images = imageError;
      } else {
        delete next.images;
      }
      return next;
    });
    event.target.value = "";
  }

  function removeFile(index) {
    const nextFiles = files.filter((_, fileIndex) => fileIndex !== index);

    setSubmitStatus(null);
    setFiles(nextFiles);
    setErrors((current) => {
      const next = { ...current };
      const imageError = validateFiles(nextFiles);
      if (imageError) {
        next.images = imageError;
      } else {
        delete next.images;
      }
      return next;
    });
  }

  async function submit(event) {
    event.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });
      files.forEach((file) => {
        formData.append("images", file, file.name);
      });

      const response = await fetch("/api/kontakt", {
        method: "POST",
        body: formData
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (result.fieldErrors) {
          setErrors((current) => ({ ...current, ...result.fieldErrors }));
        }

        throw new Error(
          result.message || "Die Anfrage konnte gerade nicht gesendet werden."
        );
      }

      setForm({
        name: "",
        email: "",
        phone: "",
        topic: "Antik verkaufen",
        message: ""
      });
      setFiles([]);
      setErrors({});
      setSubmitStatus({
        type: "success",
        message: result.message || "Ihre Anfrage wurde gesendet."
      });
      trackGoogleAdsConversion("contact");
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error.message || "Die Anfrage konnte gerade nicht gesendet werden."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      {submitStatus ? (
        <div
          className={`contact-status contact-status-${submitStatus.type}`}
          role={submitStatus.type === "error" ? "alert" : "status"}
        >
          {submitStatus.type === "success" ? (
            <CheckCircle2 size={20} aria-hidden="true" />
          ) : (
            <AlertCircle size={20} aria-hidden="true" />
          )}
          <p>{submitStatus.message}</p>
        </div>
      ) : null}

      <div className="contact-form-row">
        <label className={fieldClass("name")}>
          Name
          <input
            name="name"
            value={form.name}
            onChange={updateField}
            autoComplete="name"
            placeholder="Ihr Name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-error-name" : undefined}
            required
          />
          {renderError("name")}
        </label>
        <label>
          Telefon
          <input
            name="phone"
            value={form.phone}
            onChange={updateField}
            autoComplete="tel"
            placeholder="Für Rückfragen"
          />
        </label>
      </div>
      <div className="contact-form-row">
        <label className={fieldClass("email")}>
          E-Mail
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            autoComplete="email"
            placeholder="name@example.de"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-error-email" : undefined}
            required
          />
          {renderError("email")}
        </label>
        <label>
          Thema
          <select name="topic" value={form.topic} onChange={updateField}>
            <option>Antik verkaufen</option>
            <option>Kostenlose Einschätzung</option>
            <option>Nachlass oder Sammlung</option>
            <option>Ladenbesuch</option>
            <option>Sonstiges</option>
          </select>
        </label>
      </div>
      <label className={fieldClass("message")}>
        Nachricht
        <textarea
          name="message"
          value={form.message}
          onChange={updateField}
          placeholder="Was möchten Sie verkaufen oder besprechen? Alter, Zustand, Menge und besondere Hinweise helfen uns bei der Einschätzung."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-error-message" : undefined}
          required
        />
        {renderError("message")}
      </label>

      <div className={["contact-upload", errors.images ? "contact-field-error" : ""].join(" ")}>
        <label className="contact-upload-label" htmlFor="contact-images">
          <span className="contact-upload-icon">
            <ImagePlus size={24} aria-hidden="true" />
          </span>
          <span>
            <strong>Bilder hochladen</strong>
            <small>Bis zu 6 Bilder, JPG/PNG/WebP/HEIC, zusammen maximal 4 MB.</small>
          </span>
          <input
            id="contact-images"
            name="images"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
            multiple
            onChange={addFiles}
            aria-invalid={Boolean(errors.images)}
            aria-describedby={errors.images ? "contact-error-images" : undefined}
          />
        </label>
        {renderError("images")}

        {files.length > 0 ? (
          <ul className="contact-upload-list" aria-label="Ausgewählte Bilder">
            {files.map((file, index) => (
              <li key={`${file.name}-${file.size}-${index}`}>
                <span>
                  <strong>{file.name}</strong>
                  <small>{formatBytes(file.size)}</small>
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  aria-label={`${file.name} entfernen`}
                >
                  <Trash2 size={16} aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <button className="button" type="submit" disabled={isSubmitting}>
        <Send size={18} aria-hidden="true" />
        {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
      </button>
    </form>
  );
}
