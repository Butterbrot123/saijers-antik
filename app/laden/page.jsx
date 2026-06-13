import Image from "next/image";
import Link from "next/link";
import {
  Accessibility,
  ExternalLink,
  Gem,
  HeartHandshake,
  MapPin,
  Sparkles,
  Store,
  Ticket,
} from "lucide-react";
import CopyAddressButton from "@/components/CopyAddressButton";
import PageHero from "@/components/PageHero";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Antikladen in Kappeln – Saijers Antik besuchen",
  description:
    "Besuchen Sie den Antikladen Saijers Antik in Kappeln: Antiquitäten, Trödel, Schmuck, Postkarten, Dokumente, Designobjekte und besondere Fundstücke entdecken.",
  path: "/laden",
  image: "/images/briefmarken-hintergrund.jpg",
  keywords: [
    "Antikladen Kappeln",
    "Antiquitätenladen Kappeln",
    "Trödelladen Kappeln",
    "Saijers Antik Laden"
  ]
});

const addressLines = [
  "Saijers Antik / Antikladen Kappeln",
  "Querstraße 4",
  "24376 Kappeln"
];

const assortmentItems = [
  {
    title: "Antiquitäten & Trödel",
    text: "Möbel, Dekoration, Geschirr und besondere Einzelstücke.",
    icon: Store
  },
  {
    title: "Schmuck & Modeschmuck",
    text: "Handverlesene Stücke, Broschen, Ketten und kleine Fundstücke.",
    icon: Gem
  },
  {
    title: "Postkarten & Dokumente",
    text: "Historische Briefe, Fotos, Postkarten und Papierobjekte.",
    icon: Ticket
  },
  {
    title: "Design & 70er-Jahre",
    text: "Teak, Platten, Meißelmännchen und ausgesuchte Designobjekte.",
    icon: Sparkles
  }
];

const visitTips = [
  "Für reine Ladenbesuche können Sie während der Öffnungszeiten vorbeikommen.",
  "Für Ankauf, größere Mengen oder Nachlässe ist eine kurze Vorab-Anfrage hilfreich.",
  "Fotos von Stücken können Sie uns vorab per E-Mail senden.",
  "Wenn Sie etwas mitbringen möchten, verpacken Sie empfindliche Stücke bitte sicher."
];

export default function ShopPage() {
  return (
    <>
      <PageHero
        title="Unser Laden in Kappeln"
        accent="Laden"
        backgroundImage="/images/briefmarken-hintergrund.jpg"
      
      >
       In unserem Geschäft erwartet Sie eine vielseitige Auswahl an Antiquitäten, Sammlerstücken, Schmuck, Möbeln, Dokumenten, Postkarten und Trödel. 
       

      </PageHero>

      <section className="section shop-story-section" id="besuch-planen">
        <div className="container shop-story-grid">
          <div className="shop-story-copy">
            <span className="eyebrow">Antikladen Kappeln</span>
            <h2>Ein Laden mit Geschichte, Charakter und vielen kleinen Entdeckungen</h2>
            <p>
              Unser Antikladen blickt auf eine lange und liebevoll gepflegte
              Tradition zurück. Viele Kappelnerinnen und Kappelner erinnern sich
              noch an Herrn Birkenhauer, der das Geschäft über viele Jahre
              führte und zusätzlich einen großen Trödelhof betrieb.
            </p>
            <p>
              Nach ihm übernahm Frau Anna Jakobsen den Laden und führte ihn mit
              viel Herzblut weiter. Seit April 2025 führen wir diese Geschichte
              fort und verbinden persönliche Beratung mit Freude am Stöbern,
              Entdecken und Bewahren.
            </p>
          
          </div>
          <div className="shop-story-image">
            <Image
              src="/images/laden1.jpg"
              alt="Saijers Antik Laden in Kappeln"
              width={980}
              height={720}
              sizes="(max-width: 980px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

   

      <section className="section shop-experience-section">
        <div className="container shop-experience-grid">
          <div className="shop-experience-image">
            <Image
              src="/images/laden2.jpeg"
              alt="Antiquitäten und Sammlerstücke im Laden"
              width={980}
              height={720}
              sizes="(max-width: 980px) 100vw, 46vw"
            />
          </div>
          <div className="shop-experience-copy">
            <span className="eyebrow">Stöbern & beraten lassen</span>
            <h2>Ruhig schauen, Fragen stellen und Lieblingsstücke entdecken</h2>
            <p>
              In unserem Geschäft erwartet Sie eine Mischung aus Antiquitäten,
              Sammlerstücken, Schmuck, Möbeln, Dokumenten, Postkarten und
              Trödel. Besonders beliebt ist unser Raum mit Originalstücken aus
              den 1970er-Jahren sowie unser separater Trödelbereich.
            </p>
            <ul className="shop-check-list">
              <li>
                <HeartHandshake size={19} aria-hidden="true" />
                persönliche Beratung ohne Druck
              </li>
              <li>
                <Accessibility size={19} aria-hidden="true" />
                gut zugänglich, auch mit Rollator
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section shop-visit-section">
        <div className="container shop-visit-grid">
          <article className="shop-visit-card">
            <span className="eyebrow">Besuch & Öffnungszeiten</span>
            <h2>Adresse, Saisonzeiten und Kontakt</h2>
            <div className="shop-address-box">
              <MapPin size={22} aria-hidden="true" />
              <p>
                {addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
            <CopyAddressButton text={addressLines.join("\n")} />

            <div className="shop-hours-grid">
              <div>
                <h3>Sommer</h3>
                <p>1. April bis 30. Oktober</p>
                <ul>
                  <li>Montag und Freitag: 11:00 bis 16:00 Uhr</li>
                   <li>Mittwoch: Geschlossen</li>
                  <li>Samstag: 11:00 bis 14:00 Uhr</li>
                  <li>Sonntag: 12:00 bis 15:00 Uhr</li>
                </ul>
              </div>
              <div>
                <h3>Winter</h3>
                <p>1. November bis 31. Dezember</p>
                <ul>
                  <li>Samstag: 12:00 bis 14:00 Uhr</li>
                </ul>
              </div>
            </div>

            <p className="shop-visit-note">
              Termine, Ankäufe und Hausbesuche sind nach Absprache möglich.
            </p>
          </article>

          <article className="shop-map-card">
            <div className="shop-map-toolbar">
              <div>
                <span>Route zum Laden</span>
                <strong>Querstraße 4, 24376 Kappeln</strong>
              </div>
              <a href={siteConfig.googleMapsUrl} target="_blank" rel="noreferrer">
                Google Maps
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="map-embed-wrapper shop-map-frame">
              <iframe
                title="Antikladen Kappeln Karte"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=de&amp;q=querstra%C3%9Fe%204%20Kappeln+(Antikladen%20Kappeln)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </article>
        </div>
      </section>

   
    </>
  );
}
