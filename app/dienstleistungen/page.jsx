import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  Clock3,
  ShieldCheck
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { processSteps, services } from "@/lib/siteData";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Dienstleistungen – Saijers Antik",
  description:
    "Womit wir Ihnen helfen können: Bewertung, Ankauf und Beratung für Antiquitäten, Schmuck, Dokumente, Designobjekte, Nachlässe und besondere Sammlerstücke.",
  path: "/dienstleistungen",
  image: "/images/dienstleistungen-hintergrund.jpg",
  keywords: [
    "Antiquitäten schätzen lassen",
    "Haushaltsauflösung Kappeln",
    "Nachlass Ankauf",
    "Antik Beratung",
    "Antik Ankauf Schleswig-Holstein"
  ]
});

const serviceActions = {
  "Einschätzung Ihrer Kostbarkeiten": {
    label: "Einschätzung anfragen",
    href: "/kontakt"
  },
  "Wir helfen bei Haushaltsauflösungen": {
    label: "Besuch vereinbaren",
    href: "/kontakt"
  },
  "Suchen Sie ein bestimmtes Objekt?": {
    label: "Ankaufbereiche ansehen",
    href: "/ankauf"
  },
  "Wir beraten Sie gerne": {
    label: "Beratung anfragen",
    href: "/kontakt"
  }
};

const trustItems = [
  {
    title: "Kostenlose Ersteinschätzung",
    text: "Senden Sie Fotos oder beschreiben Sie kurz, worum es geht.",
    icon: Camera
  },
  {
    title: "Diskrete Abwicklung",
    text: "Nachlässe und private Sammlungen behandeln wir vertraulich.",
    icon: ShieldCheck
  },
  {
    title: "Persönlich in Kappeln",
    text: "Termin im Laden, Hausbesuch oder Vorab-Prüfung per E-Mail.",
    icon: BadgeCheck
  },
  {
    title: "Schneller nächster Schritt",
    text: "Wir sagen ehrlich, ob ein Verkauf oder eine Prüfung sinnvoll ist.",
    icon: Clock3
  }
];

const userQuestions = [
  "Was ist mein Stück ungefähr wert?",
  "Kaufen Sie auch komplette Nachlässe?",
  "Kann ich zuerst Fotos schicken?",
  "Welche Stücke sind für den Ankauf interessant?"
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        className="page-hero-compact services-hero"
        title="Unsere Dienstleistungen"
        accent="Dienstleistungen"
        backgroundImage="/images/dienstleistungen-hintergrund.jpg"
      >
        Vertrauen, Erfahrung und Leidenschaft. Wir begleiten Sie von der Beratung bis zur Umsetzung.
      </PageHero>

    


      <section className="section services-main-section">
        <div className="container">
          <div className="section-intro">
            <span className="eyebrow">Leistungen</span>
            <h2 className="section-heading">
              Persönlich, fair und <span className="accent">transparent</span>
            </h2>
            <p className="lead">
              Wählen Sie den Bereich, der zu Ihrer Situation passt. Wir stehen sie immer mit Rat und Tat zur Seite.
            </p>
          </div>

          <div className="service-grid">
            {services.map(({ title, text, image, icon: Icon }) => (
              <article className="service-card panel" key={title}>
                <div className="service-image">
                  <Image
                    src={image}
                    alt={title}
                    width={760}
                    height={480}
                    sizes="(max-width: 980px) 100vw, 33vw"
                  />
                </div>
                <div className="service-card-content">
                  <div className="feature-icon service-icon">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link
                    className="service-card-link"
                    href={serviceActions[title]?.href ?? "/kontakt"}
                  >
                    {serviceActions[title]?.label ?? "Kontakt aufnehmen"}
                    <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

     
    </>
  );
}
