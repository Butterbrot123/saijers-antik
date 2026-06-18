"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import {
  GOOGLE_ADS_CONSENT_EVENT,
  GOOGLE_ADS_CONSENT_KEY,
  googleAdsConfig
} from "@/lib/googleAds";

function getSavedConsent() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(GOOGLE_ADS_CONSENT_KEY);
}

export default function GoogleAdsConsent() {
  const [consent, setConsent] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(true);

  useEffect(() => {
    setConsent(getSavedConsent());
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady || consent !== "granted" || typeof window.gtag !== "function") {
      return;
    }

    applyGoogleConsent("granted");
  }, [consent, isReady]);

  function applyGoogleConsent(nextConsent) {
    if (typeof window.gtag !== "function") return;

    const value = nextConsent === "granted" ? "granted" : "denied";

    window.gtag("consent", "update", {
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      analytics_storage: value
    });
  }

  function updateConsent(nextConsent) {
    window.localStorage.setItem(GOOGLE_ADS_CONSENT_KEY, nextConsent);
    applyGoogleConsent(nextConsent);
    setConsent(nextConsent);
    setShowSettings(false);
    window.dispatchEvent(
      new CustomEvent(GOOGLE_ADS_CONSENT_EVENT, {
        detail: { consent: nextConsent }
      })
    );
  }

  const showBanner = isReady && !consent;
  const googleTagId = googleAdsConfig.id || googleAdsConfig.analyticsId;
  const canLoadGoogleTags = isReady && consent === "granted" && googleTagId;

  return (
    <>
      {canLoadGoogleTags ? (
        <>
          <Script
            id="google-ads-consent-default"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                  analytics_storage: 'denied'
                });
              `
            }}
          />
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
            strategy="afterInteractive"
          />
          <Script
            id="google-ads-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('consent', 'update', {
                  ad_storage: 'granted',
                  ad_user_data: 'granted',
                  ad_personalization: 'granted',
                  analytics_storage: 'granted'
                });
                ${googleAdsConfig.id ? `gtag('config', '${googleAdsConfig.id}');` : ""}
                ${googleAdsConfig.analyticsId ? `gtag('config', '${googleAdsConfig.analyticsId}');` : ""}
              `
            }}
          />
        </>
      ) : null}

      {showBanner ? (
        <div
          className={showSettings ? "cookie-banner cookie-banner-settings" : "cookie-banner"}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie-Hinweis"
        >
          {showSettings ? (
            <>
              <div className="cookie-copy">
                <strong>Datenschutz-Einstellungen</strong>
                <p>
                  Notwendige Cookies sichern die Grundfunktionen der Website. Marketing und Analyse
                  helfen uns, Anfragen, Werbung und Nutzung besser zu verstehen.
                </p>
                <Link href="/datenschutz">Datenschutzerklärung</Link>
              </div>

              <div className="cookie-options">
                <label className="cookie-option">
                  <input type="checkbox" checked disabled />
                  <span>
                    <strong>Notwendige Cookies</strong>
                    <small>Immer aktiv, damit die Website technisch funktioniert.</small>
                  </span>
                </label>

                <label className="cookie-option">
                  <input
                    type="checkbox"
                    checked={marketingEnabled}
                    onChange={(event) => setMarketingEnabled(event.target.checked)}
                  />
                  <span>
                    <strong>Marketing & Analyse</strong>
                    <small>Google Ads und Google Analytics nach Ihrer Zustimmung.</small>
                  </span>
                </label>
              </div>

              <div className="cookie-actions">
                <button
                  type="button"
                  className="button button-outline-dark"
                  onClick={() => setShowSettings(false)}
                >
                  Zurück
                </button>
                <button
                  type="button"
                  className="button button-outline-dark"
                  onClick={() => updateConsent(marketingEnabled ? "granted" : "denied")}
                >
                  Auswahl speichern
                </button>
                <button type="button" className="button" onClick={() => updateConsent("granted")}>
                  Alle akzeptieren
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="cookie-copy">
                <strong>Tracking und Cookies nutzen</strong>
                <p>
                  Wir nutzen Google Ads und Google Analytics, um unsere Werbung zu messen und die
                  Website zu verbessern. Das Tracking startet erst nach Ihrer Zustimmung.
                </p>
                <Link href="/datenschutz">Mehr erfahren</Link>
              </div>
              <div className="cookie-actions">
                <button
                  type="button"
                  className="button button-outline-dark"
                  onClick={() => setShowSettings(true)}
                >
                  Einstellungen
                </button>
                <button type="button" className="button" onClick={() => updateConsent("granted")}>
                  Alle akzeptieren
                </button>
              </div>
            </>
          )}
        </div>
      ) : null}

      {isReady && consent ? (
        <button
          type="button"
          className="cookie-settings-button"
          onClick={() => {
            window.localStorage.removeItem(GOOGLE_ADS_CONSENT_KEY);
            applyGoogleConsent("denied");
            setConsent(null);
          }}
        >
          Cookies
        </button>
      ) : null}
    </>
  );
}
