"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyAddressButton({ text }) {
  const [copied, setCopied] = useState(false);

  async function copyText() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button className="address-copy-button" type="button" onClick={copyText}>
      {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
      {copied ? "Adresse kopiert" : "Adresse kopieren"}
    </button>
  );
}
