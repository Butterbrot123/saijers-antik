import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  Home,
  Mail,
  PackageCheck,
  ShieldCheck,
  Truck
} from "lucide-react";
import CopyAddressButton from "@/components/CopyAddressButton";
import PageHero from "@/components/PageHero";
import ShippingLetterForm from "@/components/ShippingLetterForm";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Versand & Begleitschreiben – Saijers Antik",
  description:
    "Wollen sie gerne ihre Ware zu uns schicken? Begleitschreiben für den Antik Ankauf ausfüllen, ausdrucken und Antik senden, geld erhalten",
  path: "/begleitschreiben",
  image: "/images/postkarten-hintergrund.png",
  keywords: [
    "Begleitschreiben Antik Ankauf",
     "Versand Antik Ankauf",
     "Antik verkaufen",
     "Trödel verkaufen",
      "Sammlerstücke verkaufen",
       "Schmuck verkaufen",
        "Uhren verkaufen",
         "Münzen verkaufen",
          "Orden verkaufen",
           "Designobjekte verkaufen",
            "Antiquitäten versenden",
             "Saijers Antik Versand",
              "Begleitschreiben Antiquitäten",
    "Antiquitäten versenden",
    "Saijers Antik Versand",
    "Begleitschreiben Antiquitäten"
  ]
});

const processSteps = [
  {
    title: "Begleitschreiben ausfüllen",
    text: "Tragen Sie Ihre Kontaktdaten und die enthaltenen Stücke ein. Konto-Angaben können Sie optional ergänzen.",
    icon: FileText
  },
  {
    title: "Versandart wählen",
    text: "Wählen Sie je nach Wert und Umfang eine passende Versandart. Bei sehr wertvollen Sendungen bitte vorher Kontakt aufnehmen.",
    icon: ShieldCheck
  },
  {
    title: "Neutral verpacken",
    text: "Legen Sie das unterschriebene Begleitschreiben bei und verwenden Sie eine neutrale Verpackung ohne Hinweis auf den Inhalt.",
    icon: PackageCheck
  },
  {
    title: "Sendung verschicken",
    text: "Bringen Sie das Paket zur Annahmestelle, lassen Sie es abholen oder vereinbaren Sie einen persönlichen Termin.",
    icon: Truck
  }
];

const shippingOptions = [
  {
    title: "Zur Annahmestelle",
    label: "DHL / Deutsche Post",
    bestFor: "Wenn Sie das Paket selbst abgeben möchten.",
    text: "Erstellen Sie den Paketschein online und bringen Sie die Sendung selbst zu einer Filiale, Packstation oder Annahmestelle.",
    icon: PackageCheck,
    action: "DHL Paketschein ausfüllen",
    href: "https://www.dhl.de/de/privatkunden/pakete-versenden/online-frankieren.html"
  },
  {
    title: "Abholung zuhause",
    label: "DHL Abholung",
    bestFor: "Wenn das Paket bei Ihnen abgeholt werden soll.",
    text: "Wenn Sie das Paket nicht selbst abgeben möchten, können Sie je nach Anbieter eine Abholung an Ihrer Adresse buchen.",
    icon: Home,
    action: "DHL Abholung buchen",
    href: "https://www.dhl.de/de/privatkunden/pakete-versenden/pakete-abgeben/pakete-abholen-lassen.html"
  },
  {
    title: "UPS Abholung",
    label: "UPS",
    bestFor: "Wenn UPS für Sie besser erreichbar ist.",
    text: "Für bequemes Abholen zuhause, im Büro oder im Geschäft kann auch UPS genutzt werden. Bitte Versicherung und Bedingungen prüfen.",
    icon: Truck,
    action: "UPS Abholung beauftragen",
    href: "https://www.ups.com/ipr/schedule-pickup?loc=de_DE"
  }
];

const addressLines = [
  "Saijers Antik / Antikladen Kappeln",
  "Querstraße 4",
  "24376 Kappeln"
];

const prepLists = [
  {
    title: "Bitte beilegen",
    items: [
      "ausgedrucktes und unterschriebenes Begleitschreiben",
      "Ihre Kontaktdaten und die Vorgangsnummer",
      "bei Bedarf kurze Hinweise zu Herkunft oder Zustand"
    ]
  },
  {
    title: "Bitte vermeiden",
    items: [
      "Aufschriften wie Schmuck, Gold, Silber oder Antik",
      "lose Stücke ohne Polsterung im Paket",
      "Versand ohne Absender oder ohne Begleitschreiben"
    ]
  }
];

export default function ShippingLetterPage() {
  return (
    <>
      <PageHero
        title="Versand"
        accent="Versand"
        backgroundImage="/images/postkarten-hintergrund.png"
        actions={
          <>
            <Link className="button" href="#begleitschreiben">
              Begleitschreiben ausfüllen
              <FileText size={18} aria-hidden="true" />
            </Link>
            <Link className="button button-outline-dark" href="#versandoptionen">
              Versandoptionen ansehen
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </>
        }
      >
       Antiquitäten einfach per Post verkaufen. 
       Begleitschreiben ausfüllen, ausdrucken und zusammen mit Ihrer Sendung an uns schicken. 
       Nach der Prüfung erhalten Sie ein faires Angebot und eine schnelle Auszahlung.

      </PageHero>

      <section className="section letter-intro-section">
        <div className="container letter-intro-grid">
          <div className="letter-intro-copy">
            <span className="eyebrow">Saijers Antik Ankauf</span>
            <h2>Geld verdienen mit Ihrem Antiquitäten</h2>
            <p>
             Wenn Sie Ihre Antiquitäten, Sammlerstücke oder Wertgegenstände verkaufen möchten, können Sie uns diese bequem zusenden. 
             Wir sind stets auf der Suche nach interessanten Objekten wie Antiquitäten, Briefen, Dokumenten, Postkarten, Uhren, Schmuck, Münzen, Orden, Designobjekten und Sammlerstücken.
             Falls Sie unsicher sind, ob sich ein Versand lohnt, senden Sie uns gerne vorab Fotos oder werfen Sie einen Blick auf unsere Ankaufbereiche. 
             Alternativ können Sie uns auch telefonisch kontaktieren. 
             Wir beraten Sie gerne, damit Ihre Sendung sicher bei uns ankommt und wir Ihnen ein faires Angebot machen können.

            </p>
            <div className="shipping-intro-actions">
              <Link className="button" href="/kontakt">
                Vor Versand Kontakt aufnehmen
                <Mail size={18} aria-hidden="true" />
              </Link>
              <Link className="button button-outline-dark" href="/ankauf">
                Ankaufbereiche ansehen
              </Link>
            </div>
          </div>
          

          <div className="letter-process-mini">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title}>
                  <span>
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-soft letter-form-section-wrap" id="begleitschreiben">
        <div className="container">
          <div className="section-intro">
            <span className="eyebrow">Begleitschreiben</span>
            <h2 className="section-heading">Ausfüllen, absenden, drucken</h2>
            <p className="lead">
              Nach dem Absenden erhalten Sie eine Bestätigung per E-Mail mit
              Vorgangsnummer. Bitte drucken Sie das Begleitschreiben zusätzlich
              aus, unterschreiben Sie es und legen Sie es in die Sendung.
            </p>
          </div>

          <ShippingLetterForm />
        </div>
      </section>

      <section className="section shipping-options-section" id="versandoptionen">
        <div className="container">
          <div className="shipping-options-head">
            <div>
              <span className="eyebrow">Versandmöglichkeiten</span>
              <h2 className="section-heading">Passende Versandart wählen</h2>
              <p className="lead">
                Bitte wählen Sie für den Versand einen geeigneten Umschlag oder
                ein stabiles Päckchen. Die Verpackung sollte neutral aussehen und
                keine Aufschrift tragen, die auf den Inhalt schließen lässt.
              </p>
            </div>
            <aside className="shipping-help-card">
              <ShieldCheck size={24} aria-hidden="true" />
              <p>
                Bei wertvollen oder empfindlichen Stücken stimmen Sie den
                Versand bitte vorher mit uns ab.
              </p>
            </aside>
          </div>

          <div className="shipping-notice">
            <h3>Vor dem Versand wichtig</h3>
          <ul>
    <li>Bitte das ausgefüllte und unterschriebene Begleitschreiben beilegen.</li>
    <li>Bei wertvollen Stücken Versicherung und Versandart passend zum Wert wählen.</li>
    <li>Die Versandkosten für die Einsendung werden nach vorheriger Abstimmung vom Ankaufsbetrag abgezogen.</li>
    <li>Kommt kein Ankauf zustande oder wünschen Sie eine Rücksendung, erfolgt diese auf Ihre Kosten.</li>
    <li>Bei Unsicherheit vor dem Versand kurz telefonisch oder per E-Mail abstimmen.</li>
  </ul>
          </div>

          <div className="shipping-option-grid">
            {shippingOptions.map((option) => {
              const Icon = option.icon;
              return (
                <article className="shipping-option-card" key={option.title}>
                  <span>
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <small>{option.label}</small>
                  <h3>{option.title}</h3>
                  <strong>{option.bestFor}</strong>
                  <p>{option.text}</p>
                  <a
                    className="button button-outline-dark"
                    href={option.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {option.action}
                    <ExternalLink size={17} aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>

          <div className="shipping-address-panel">
            <div>
              <span className="eyebrow">Postanschrift</span>
              <h3>Empfängeradresse</h3>
              <p>{addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}</p>
              <CopyAddressButton text={addressLines.join("\n")} />
            </div>
            <p>
              Wenn Sie den Paketschein händisch ausfüllen, achten Sie bitte auf
              eine vollständige und gut lesbare Adresse. Vermeiden Sie
              Aufschriften wie „Schmuck“, „Gold“, „Silber“, „Antik“ oder
              ähnliche Hinweise auf den Inhalt. Maße, Gewicht, Versicherung und
              Versandbedingungen bitte direkt beim gewählten Paketdienst prüfen.
            </p>
          </div>

          <div className="shipping-prep-grid">
            {prepLists.map((list) => (
              <article className="shipping-prep-card" key={list.title}>
                <h3>{list.title}</h3>
                <ul>
                  {list.items.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={18} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
