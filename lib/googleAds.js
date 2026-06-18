export const GOOGLE_ADS_CONSENT_KEY = "saijers_marketing_consent";
export const GOOGLE_ADS_CONSENT_EVENT = "saijers-marketing-consent";
const DEFAULT_GOOGLE_ADS_ID = "AW-16674918848";
const DEFAULT_GOOGLE_ANALYTICS_ID = "G-0EFN5XBW94";
const DEFAULT_CONTACT_CONVERSION_LABEL = "CxV7CNnPlsEcEMCjnI8-";
const configuredGoogleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "";
const configuredGoogleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";
const configuredContactConversionLabel =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_CONVERSION_LABEL || "";

export const googleAdsConfig = {
  id:
    configuredGoogleAdsId && configuredGoogleAdsId !== "AW-XXXXXXXXXX"
      ? configuredGoogleAdsId
      : DEFAULT_GOOGLE_ADS_ID,
  analyticsId:
    configuredGoogleAnalyticsId && configuredGoogleAnalyticsId !== "G-XXXXXXXXXX"
      ? configuredGoogleAnalyticsId
      : DEFAULT_GOOGLE_ANALYTICS_ID,
  contactLabel:
    configuredContactConversionLabel && configuredContactConversionLabel !== "xxxxxxxxxxxxxxxx"
      ? configuredContactConversionLabel
      : DEFAULT_CONTACT_CONVERSION_LABEL,
  letterLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_LETTER_CONVERSION_LABEL || ""
};

export function hasMarketingConsent() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(GOOGLE_ADS_CONSENT_KEY) === "granted";
}

export function trackGoogleAdsConversion(type) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  if (!hasMarketingConsent() || !googleAdsConfig.id) return;

  const label =
    type === "letter" ? googleAdsConfig.letterLabel : googleAdsConfig.contactLabel;

  window.gtag("event", type === "letter" ? "begleitschreiben_absenden" : "kontakt_absenden", {
    event_category: "lead",
    event_label: type === "letter" ? "Begleitschreiben" : "Kontaktformular"
  });

  if (!label) return;

  window.gtag("event", "conversion", {
    send_to: `${googleAdsConfig.id}/${label}`
  });
}
