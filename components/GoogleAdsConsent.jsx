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
    window.dispatchEvent(
      new CustomEvent(GOOGLE_ADS_CONSENT_EVENT, {
        detail: { consent: nextConsent }
      })
    );
  }

  const showBanner = isReady && !consent;
  const canLoadGoogleAds = isReady && consent === "granted" && googleAdsConfig.id;

  return (
    <>
      {canLoadGoogleAds ? (
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
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsConfig.id}`}
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
                gtag('config', '${googleAdsConfig.id}');
              `
            }}
          />
        </>
      ) : null}

      {showBanner ? (
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie-Hinweis">
          <div>
            <strong>Marketing-Cookies</strong>
            <p>
              Wir nutzen Google Ads, um Anfragen und Werbung besser zu messen.
              Das Tracking startet erst, wenn Sie zustimmen.
            </p>
            <Link href="/datenschutz">Mehr erfahren</Link>
          </div>
          <div className="cookie-actions">
            <button type="button" className="button button-outline-dark" onClick={() => updateConsent("denied")}>
              Ablehnen
            </button>
            <button type="button" className="button" onClick={() => updateConsent("granted")}>
              Akzeptieren
            </button>
          </div>
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
