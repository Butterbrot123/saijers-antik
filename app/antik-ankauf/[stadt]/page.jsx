import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Camera, CheckCircle2, Mail, MapPin, PackageCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import { getLocalSeoPage, localSeoPages } from "@/lib/localSeoData";
import { absoluteUrl, createMetadata, siteConfig } from "@/lib/seo";

export function generateStaticParams() {
  return localSeoPages.map((page) => ({ stadt: page.slug }));
}

export async function generateMetadata({ params }) {
  const { stadt } = await params;
  const page = getLocalSeoPage(stadt);

  if (!page) return {};

  return createMetadata({
    title: `${page.title} – Antiquitäten verkaufen | Saijers Antik`,
    description: page.description,
    path: `/antik-ankauf/${page.slug}`,
    image: "/images/starthintergrund.jpg",
    keywords: [
      page.title,
      `Antiquitäten verkaufen ${page.city}`,
      `Schmuck verkaufen ${page.city}`,
      `Nachlass verkaufen ${page.city}`,
      `Antikladen ${page.city}`
    ]
  });
}

function buildJsonLd(page) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    areaServed: {
      "@type": "City",
      name: page.city
    },
    provider: {
      "@id": `${siteConfig.url}/#localbusiness`
    },
    url: absoluteUrl(`/antik-ankauf/${page.slug}`),
    serviceType: "Antik Ankauf"
  };
}

const steps = [
  {
    title: "Die erste Anfrage",
    text: "Sie rufen an oder senden uns Fotos und schreiben kurz, was Sie verkaufen möchten.",
    icon: Camera
  },
  {
    title: "Einschätzung und Termin",
    text: "Wir geben eine erste Rückmeldung und besprechen, ob Ladenbesuch, Versand oder Hausbesuch sinnvoll ist.",
    icon: CheckCircle2
  },
  {
    title: "Angebot und Bezahlung",
    text: "Nach der Begutachtung erhalten Sie ein transparentes Angebot. Die Bezahlung erfolgt nach Einigung direkt.",
    icon: PackageCheck
  }
];

export default async function LocalCityPage({ params }) {
  const { stadt } = await params;
  const page = getLocalSeoPage(stadt);

  if (!page) notFound();

  return (
    <>
      <PageHero
        title={page.hero}
        accent="Ankauf"
        className="page-hero-compact local-city-hero"
        backgroundImage="/images/starthintergrund.jpg"
        actions={
          <>
            <Link className="button" href="/kontakt">
              Anfrage senden
              <Mail size={18} aria-hidden="true" />
            </Link>
            <Link className="button button-outline-dark" href="/ankauf">
              Ankaufbereiche ansehen
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </>
        }
      >
        Antiquitäten, Modeschmuck und Schmuck, Trödel, Uhren, Dokumente, Fotos, Sammlungen und
        Nachlässe aus {page.city} verkaufen. 
      </PageHero>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(page)) }}
      />

      <section className="section local-city-section">
        <div className="container local-city-layout">
          <article className="local-city-main panel">
            <span className="eyebrow">
              <MapPin size={16} aria-hidden="true" />
              {page.region}
            </span>
            <h2>{page.title}: seriöse Einschätzung für Ihre Stücke</h2>
            <p>{page.intro}</p>
            <p>{page.localFocus}</p>
            <p>{page.serviceNote}</p>

            

            <div className="local-city-actions">
              <Link className="button" href="/kontakt">
                Fotos oder Anfrage senden
              </Link>
              <Link className="button button-outline-dark" href="/versand">
                Versand mit Begleitschreiben
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-soft local-process-section">
        <div className="container">
          <div className="section-intro local-landing-intro">
            <span className="eyebrow">Ablauf</span>
            <h2 className="section-heading">
              So läuft der Ankauf aus <span className="accent">{page.city}</span>
            </h2>
            <p className="lead">
              Der Ablauf ist unkompliziert und transparent.
            </p>
          </div>

          <div className="local-step-grid">
            {steps.map(({ title, text, icon: Icon }) => (
              <article className="local-step-card" key={title}>
                <span>
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section local-city-cta-section">
        <div className="container local-city-cta panel">
          <div>
            <span className="eyebrow light">Geld verdienen mit ihren Schätzen</span>
            <h2>Sie möchten ihre Schätze aus {page.city} verkaufen?</h2>
            <p>
              Schreiben Sie uns kurz, was Sie anbieten möchten. Fotos,
              ungefähre Menge und bekannte Herkunft helfen bei der Einordnung. Wir freuen uns auf Ihre Anfrage!
            </p>
          </div>
          <Link className="button" href="/kontakt">
            Kontakt aufnehmen
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
