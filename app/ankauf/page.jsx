import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  ClipboardCheck,
  Home,
  Mail,
  Ruler,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { ankaufCategories, processSteps } from "@/lib/siteData";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Antik Ankauf in Kappeln – Saijers Antik",
  description:
    "Antiquitäten, Schmuck, Uhren, Dokumente, Postkarten, Münzen, Orden, Designobjekte und Sammlerstücke verkaufen: Saijers Antik bewertet diskret und fair.",
  path: "/ankauf",
  image: "/images/dokumente-hintergrund.jpg",
  keywords: [
    "Antik Ankauf",
    "Antiquitäten verkaufen",
    "Sammlerstücke verkaufen",
    "Schmuck Ankauf",
    "Uhren Ankauf"
  ]
});

const trustItems = [
  {
    title: "Kostenlose Einschätzung",
    text: "Senden Sie uns Fotos oder bringen Sie Ihre Stücke nach Absprache vorbei.",
    icon: Sparkles
  },
  {
    title: "Diskret und fair",
    text: "Wir nehmen uns Zeit für Ihre Objekte und erklären unsere Einschätzung verständlich.",
    icon: ShieldCheck
  },
  {
    title: "Hausbesuche möglich",
    text: "Bei Nachlässen, Sammlungen oder größeren Mengen kommen wir gerne nach Absprache zu Ihnen.",
    icon: Home
  }
];

function getCategoryImage(item) {
  return item.image ?? item.header ?? "/images/dokumente1.jpeg";
}

const photoGuideItems = [
  {
    title: "Gesamtansicht",
    text: "Fotografieren Sie das Objekt oder die Sammlung einmal vollständig.",
    icon: Camera
  },
  {
    title: "Details",
    text: "Signaturen, Punzen, Stempel, Marken und Beschädigungen bitte nah aufnehmen.",
    icon: Sparkles
  },
  {
    title: "Größe und Menge",
    text: "Ein Maßstab, eine Mengenangabe oder ein kurzer Überblick hilft sehr.",
    icon: Ruler
  },
  {
    title: "Kurze Notiz",
    text: "Alles, was Sie zur Herkunft wissen, können Sie knapp dazuschreiben.",
    icon: ClipboardCheck
  }
];

export default function BuyPage() {
  return (
    <>
      <PageHero
        title="Antik Ankauf"
        accent="Ankauf"
        className="ankauf-hero"
        backgroundImage="/images/dokumente-hintergrund.jpg"
        
      >
        Wir kaufen Antiquitäten, Sammlerstücke und Designobjekte. 
        Mit Erfahrung, Leidenschaft und einem fairen Blick auf den Wert.
      </PageHero>

      <section className="section ankauf-intro-section">
        <div className="container ankauf-intro-grid">
          <div className="ankauf-intro-copy">
            <span className="eyebrow">Saijers Antik Ankauf</span>
            <h2>Wir kaufen Antiquitäten mit Geschichte</h2>
            <p>
              Viele Stücke wirken auf den ersten Blick unscheinbar, können aber
              für Sammler, Archive oder Liebhaber interessant sein. Wir kaufen sehr viele verschiedene Sachen an: 
               Briefe, Dokumente, Schmuck, Uhren, Münzen, Design,
                Nachlässe, sammlungen und vieles mehr. Wenn Sie etwas verkaufen möchten, freuen wir uns auf Ihre Anfrage.
            </p>
            <div className="ankauf-actions">
              <Link className="button" href="/kontakt">
                Einschätzung anfragen
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="button button-outline-dark" href="#ankaufbereiche">
                Bereiche ansehen
              </Link>
            </div>
          </div>

          <div className="ankauf-trust-panel panel">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <article className="ankauf-trust-item" key={item.title}>
                  <span>
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-soft ankauf-category-section" id="ankaufbereiche">
        <div className="container">
          <div className="section-intro ankauf-section-intro">
            <span className="eyebrow">Ankaufbereiche</span>
            <h2 className="section-heading">
              Was wir gerne <span className="accent">einkaufen</span>
            </h2>
            <p className="lead">
              Unsere Schwerpunkte reichen von alten Briefen und Dokumenten bis
              zu Schmuck, Uhren, Münzen, Designobjekten und Nachlässen.
            </p>
          </div>

          <div className="ankauf-grid ankauf-overview-grid">
            {ankaufCategories.map((item) => (
              <article className="ankauf-card" key={item.slug}>
                <Link href={`/ankauf/${item.slug}`}>
                  <div className="ankauf-card-image">
                    <Image
                      src={getCategoryImage(item)}
                      alt={item.title}
                      width={720}
                      height={460}
                      sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                    />
                  </div>
                  <div className="ankauf-card-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className="ankauf-card-link">
                      Mehr erfahren
                      <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ankauf-process-section">
        <div className="container">
          <div className="section-intro ankauf-section-intro">
            <span className="eyebrow">Ablauf</span>
            <h2 className="section-heading">So einfach läuft der Ankauf ab</h2>
            <p className="lead">
              Eine erste Einschätzung ist unkompliziert möglich. Je besser die
              Fotos und Angaben sind, desto genauer können wir antworten.
            </p>
          </div>

          <div className="ankauf-process-grid">
            {processSteps.map((step, index) => (
              <article className="ankauf-process-card" key={step.title}>
                <span>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ankauf-contact-section">
        <div className="container ankauf-contact-panel">
          <div>
            <span className="eyebrow light">Kostenlose Einschätzung</span>
            <h2>Sie möchten etwas verkaufen?</h2>
            <p>
              Schreiben Sie uns kurz, worum es geht, und senden Sie gerne erste
              Fotos mit. Wir melden uns mit einer ehrlichen Einschätzung zurück.
            </p>
          </div>
          <div className="ankauf-contact-actions">
            <Link className="button" href="/kontakt">
              <Mail size={18} aria-hidden="true" />
              Kontakt aufnehmen
            </Link>
            <Link className="button button-soft-light" href="/dienstleistungen">
              <BadgeCheck size={18} aria-hidden="true" />
              Dienstleistungen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
