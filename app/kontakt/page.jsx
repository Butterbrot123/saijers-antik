import Link from "next/link";
import {
  Camera,
  CalendarCheck,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import CopyAddressButton from "@/components/CopyAddressButton";
import PageHero from "@/components/PageHero";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Kontakt – Saijers Antik",
  description:
    "Kontakt zu Saijers Antik in Kappeln: Antiquitäten, Schmuck, Uhren, Dokumente, Nachlässe und Designobjekte kostenlos und unverbindlich einschätzen lassen.",
  path: "/kontakt",
  image: "/images/kontakt.jpg",
  keywords: [
    "Saijers Antik Kontakt",
    "Antiquitäten schätzen lassen",
    "Antik Ankauf Kappeln",
    "Nachlass bewerten lassen"
  ]
});

const contactMethods = [
  {
    label: "E-Mail",
    value: "inessayers@googlemail.com",
    href: "mailto:inessayers@googlemail.com",
    icon: Mail
  },
  {
    label: "Telefon",
    value: "0461 80799494",
    href: "tel:+4946180799494",
    icon: MessageCircle
  },
  {
    label: "Mobil",
    value: "0171 9988876",
    href: "tel:+491719988876",
    icon: Phone
  }
];

const addressLines = [
  "Saijers Antik / Antikladen Kappeln",
  "Querstraße 4",
  "24376 Kappeln"
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Kontakt aufnehmen"
        accent="Kontakt"
        backgroundImage="/images/postkarten-hintergrund.png"
       
      >
        Wir freuen uns auf Ihre Nachricht. Ob per E-Mail, Telefon oder direkt vor Ort.
      </PageHero>

     

      <section className="section contact-overview-section">
        <div className="container contact-intro-grid">
          <article className="contact-card contact-main-card">
            <span className="eyebrow">Saijers Antik Kontakt</span>
            <h2>
              Wie können wir Sie <span className="text-highlight">behilflich</span> sein?
            </h2>
            <p className="contact-intro">
              Für weitere Informationen oder Fragen erreichen Sie uns über:
            </p>

            <div className="contact-list">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a className="contact-item" href={method.href} key={`${method.label}-${method.value}`}>
                    <span className="contact-icon">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span>
                      <strong>{method.label}</strong>
                      {method.value}
                    </span>
                  </a>
                );
              })}
            </div>
          </article>

          <aside className="contact-card contact-letter-card">
            <span className="contact-rechner-icon">
              <FileText size={28} aria-hidden="true" />
            </span>
            <h2>Etwas per Paket senden?</h2>
            <p>
              Das Begleitschreiben hilft uns, Ihre Sendung eindeutig
              zuzuordnen. Sie können es online ausfüllen, drucken und
              unterschrieben beilegen.
            </p>
            <Link className="button" href="/versand">
              Begleitschreiben öffnen
              <Send size={18} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section contact-location-section" id="kontakt-besuch">
        <div className="container contact-find-grid">
          <article className="contact-card contact-location-card">
            <span className="eyebrow">Besuch in Kappeln</span>
            <h2>Adresse & Öffnungszeiten</h2>

            <div className="contact-address-block">
              <MapPin size={22} aria-hidden="true" />
              <p className="contact-address">
                {addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
            <div className="contact-location-actions">
              <CopyAddressButton text={addressLines.join("\n")} />
              <a
                className="button button-outline-dark"
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Route planen
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="schedule-grid">
              <div className="schedule-card">
                <Clock size={20} aria-hidden="true" />
                <h3>Sommer</h3>
                <p className="schedule-date">1. April bis 30. Oktober</p>
                <ul>
                  <li>Montag und Freitag: 11:00 bis 16:00 Uhr</li>
                  <li>Samstag: 11:00 bis 14:00 Uhr</li>
                  <li>Sonntag: 12:00 bis 15:00 Uhr</li>
                  <li>Mittwoch: Geschlossen</li>
                </ul>
              </div>
              <div className="schedule-card">
                <CalendarCheck size={20} aria-hidden="true" />
                <h3>Winter</h3>
                <p className="schedule-date">1. November bis 31. Dezember</p>
                <ul>
                  <li>Donnerstag und Freitag: 11:00 bis 13:00 Uhr</li>
                  <li>Samstag: 12:00 bis 14:00 Uhr</li>
                </ul>
                <p className="schedule-note">
                  Winterpause vom 1. Januar bis 31. März.
                </p>
              </div>
            </div>

            <p className="contact-appointment-note">
              Ankäufe und Haustermine sind nach Absprache möglich.
            </p>
          </article>

          <article className="contact-card contact-map-card">
            <div className="contact-map-toolbar">
              <div>
                <span>Route zum Laden</span>
                <strong>Querstraße 4, 24376 Kappeln</strong>
              </div>
              <a href={siteConfig.googleMapsUrl} target="_blank" rel="noreferrer">
                Google Maps
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="map-embed-wrapper contact-map-frame">
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

      <section className="section contact-form-section" id="kontaktformular">
        <div className="container contact-form-grid">
          <div className="contact-form-copy">
            <span className="eyebrow">Nachricht schreiben</span>
            <h2>Beschreiben Sie kurz, worum es geht</h2>
            <p>
              Brauchen Sie eine Einschätzung oder haben Sie Fragen zu unseren Dienstleistungen? 
              Schreiben Sie uns gerne eine Nachricht. 
              Je mehr Informationen und Fotos Sie direkt mitschicken, desto besser können wir antworten.
            </p>
            
          </div>

          <article className="contact-card contact-form-panel">
            <ContactForm />
          </article>
        </div>
      </section>

    </>
  );
}
