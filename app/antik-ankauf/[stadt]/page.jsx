import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  ChevronRight,
  Mail,
  MapPin,
  PackageCheck
} from "lucide-react";
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

function buildBreadcrumbJsonLd(page) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: absoluteUrl("/")
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Antik Ankauf",
        item: absoluteUrl("/antik-ankauf")
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.city,
        item: absoluteUrl(`/antik-ankauf/${page.slug}`)
      }
    ]
  };
}

function getLocalFaqItems(page) {
  return [
    {
      question: `Kann ich Antiquitäten aus ${page.city} bei Saijers Antik verkaufen?`,
      answer: `Ja, Sie können uns Antiquitäten, Schmuck, Uhren, alte Fotos, Dokumente, Postkarten, Sammlungen und Nachlässe aus ${page.city} anbieten. Am einfachsten senden Sie zuerst einige Fotos mit einer kurzen Beschreibung.`
    },
    {
      question: `Ist ein Hausbesuch in ${page.city} möglich?`,
      answer:
        `Ja, ein Hausbesuch ist in ${page.city} möglich. Sie können aber auch gerne in unseren Laden nach Kappeln kommen oder uns Fotos und Informationen zu Ihren Stücken senden. Wir besprechen dann gemeinsam, welcher Weg am besten passt.`
    },
    {
      question: "Kann ich meine Stücke auch per Versand anbieten?",
      answer:
        "Ja, kleinere und gut verpackbare Stücke können Sie nach vorheriger Abstimmung per Versand anbieten. Bitte legen Sie dafür das ausgefüllte Begleitschreiben bei, damit wir Ihre Sendung eindeutig zuordnen können."
    }
  ];
}

function buildFaqJsonLd(faqItems) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
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

  const faqItems = getLocalFaqItems(page);
  const relatedLocalPages = localSeoPages
    .filter((item) => item.slug !== page.slug)
    .slice(0, 4);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd(page)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(faqItems)) }}
      />

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container breadcrumbs-inner">
          <Link href="/">Startseite</Link>
          <ChevronRight size={15} aria-hidden="true" />
          <Link href="/antik-ankauf">Antik Ankauf</Link>
          <ChevronRight size={15} aria-hidden="true" />
          <span aria-current="page">{page.city}</span>
        </div>
      </nav>

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

      <section className="section local-faq-section">
        <div className="container">
          <article className="panel local-faq-panel">
            <div className="local-faq-head">
              <span className="eyebrow">Häufige Fragen</span>
              <h2>
                Fragen zum Antik Ankauf in <span className="accent">{page.city}</span>
              </h2>
              <p>
                Die wichtigsten Antworten zu unserem Ankauf aus {page.city} finden Sie hier. Wenn Sie weitere Fragen haben, kontaktieren Sie uns gerne.
              </p>
            </div>

            <div className="local-faq-list">
              {faqItems.map((item, index) => (
                <details className="faq-item" key={item.question} open={index === 0}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </article>
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
