import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { ankaufCategories } from "@/lib/siteData";
import { absoluteUrl, createMetadata } from "@/lib/seo";

const categoryEnhancements = {
  "alte-briefe": {
    seoTitle: "Alte Briefe verkaufen – Ankauf historischer Briefe & Feldpost",
    seoDescription:
      "Alte Briefe, Feldpost, Korrespondenzen, Autogramme und historische Schriftstücke verkaufen: Saijers Antik bewertet diskret und fair.",
    intro:
      "Alte Briefe sind persönliche Zeitzeugen. Handschriften, Poststempel, Inhalte und Herkunft können viel über Familiengeschichte, Reisen, Kriege oder historische Ereignisse erzählen. Deshalb betrachten wir Briefe nicht nur als Papier, sondern als Dokumente mit Geschichte.",
    wanted: [
      "Feldpostbriefe aus dem Ersten und Zweiten Weltkrieg",
      "Historische Korrespondenzen und Nachlässe",
      "Liebesbriefe, Tagebücher und handschriftliche Dokumente",
      "Kolonialbriefe, Asien-Korrespondenzen und Reisebriefe",
      "Autogramme, amtliche Schreiben und seltene Belege"
    ]
  },
  uhren: {
    seoTitle: "Alte Uhren verkaufen – Ankauf von Taschenuhren & Armbanduhren",
    seoDescription:
      "Sie möchten alte Uhren, Taschenuhren oder Sammleruhren verkaufen? Saijers Antik bewertet mechanische Uhren fair, diskret und fachkundig.",
    intro:
      "Alte Uhren verbinden Technik, Handwerk und Geschichte. Ob Taschenuhr, mechanische Armbanduhr oder Sammlerstück aus einem Nachlass: Für eine faire Einschätzung zählen Marke, Werk, Zustand, Alter und Originalität.",
    wanted: [
      "Taschenuhren aus Gold, Silber oder Metall",
      "Mechanische Armbanduhren und Chronographen",
      "Reiseuhren, Tischuhren und besondere Sammleruhren",
      "Uhren aus Nachlässen, auch defekt oder reparaturbedürftig",
      "Zubehör, Etuis, Papiere und alte Rechnungen"
    ]
  },
  dokumente: {
    seoTitle: "Historische Dokumente verkaufen – Ankauf von Urkunden & Ausweisen",
    seoDescription:
      "Historische Dokumente, Urkunden, Ausweise, Pässe, Zertifikate und Schriftstücke verkaufen: Saijers Antik prüft diskret und fair.",
    intro:
      "Historische Dokumente bewahren offizielle und private Geschichte. Urkunden, Ausweise, Pässe, Zertifikate und alte Unterlagen können für Sammler und Archive interessant sein, wenn Herkunft, Zustand und geschichtlicher Bezug stimmen.",
    wanted: [
      "Urkunden, Zeugnisse, Zertifikate und amtliche Papiere",
      "Alte Ausweise, Pässe, Militärpapiere und Besitzurkunden",
      "Nachlassunterlagen, Familienpapiere und handschriftliche Dokumente",
      "Dokumente mit regionalem, militärischem oder historischem Bezug",
      "Briefe, Fotos und Begleitmaterial zu Dokumenten"
    ]
  }
};

const defaultWanted = [
  "Einzelstücke aus Familienbesitz oder Nachlässen",
  "Sammlungen, Konvolute und ergänzendes Zubehör",
  "Stücke mit nachvollziehbarer Herkunft oder Geschichte",
  "Objekte in gutem Zustand, aber auch restaurationsbedürftige Stücke",
  "Besondere, seltene oder handwerklich hochwertige Objekte"
];

const steps = [
  {
    title: "Fotos senden",
    text: "Schicken Sie uns erste Bilder und eine kurze Beschreibung. Je mehr Details wir sehen, desto besser können wir einschätzen."
  },
  {
    title: "Einschätzung erhalten",
    text: "Wir prüfen Ihre Stücke mit Erfahrung und erklären transparent, wie unsere Einschätzung entsteht."
  },
  {
    title: "Fair verkaufen",
    text: "Wenn alles passt, vereinbaren wir einen Ankauf oder einen Termin vor Ort in Kappeln und Umgebung."
  }
];

function getCategoryContent(category) {
  const content = category.pageContent ?? {};
  const enhancement = categoryEnhancements[category.slug] ?? {};
  const title = category.title;

  return {
    ...content,
    ...enhancement,
    heroDescription:
      content.heroDescription ??
      enhancement.seoDescription ??
      category.description,
    intro:
      enhancement.intro ??
      content.sectionText ??
      category.description,
    sectionHeading:
      content.sectionHeading ?? `${title} verkaufen`,
    sectionText:
      content.sectionText ??
      category.description,
    focusHeading:
      content.focusHeading ?? "Worauf wir bei der Bewertung achten",
    focusText:
      content.focusText ??
      `Beim Ankauf von ${title} achten wir auf Echtheit, Zustand, Herkunft, Seltenheit und aktuelle Nachfrage. So entsteht eine nachvollziehbare und faire Einschätzung.`,
    wanted:
      content.wanted ?? enhancement.wanted ?? defaultWanted,
    ctaHeading:
      content.ctaHeading ??
      content.contactTitle ??
      `Möchten Sie ${title} verkaufen?`,
    ctaText:
      content.ctaText ??
      content.contactText ??
      "Kontaktieren Sie uns für eine kostenlose Schätzung und ein faires Angebot. Wir freuen uns auf Ihre Anfrage!",
    cta:
      content.cta ?? "Kostenlose Einschätzung anfragen"
  };
}

function getImage(category, content) {
  return content.sectionImage ?? category.image ?? "/images/dokumente1.jpeg";
}

function getHeaderImage(category, content) {
  return content.headerImage ?? category.header ?? category.image ?? "/images/dokumente-hintergrund.jpg";
}

export function generateStaticParams() {
  return ankaufCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = ankaufCategories.find((item) => item.slug === slug);

  if (!category) {
    return { title: "Ankauf – Saijers Antik" };
  }

  const content = getCategoryContent(category);
  const title = content.seoTitle ?? `${category.title} verkaufen – Saijers Antik Ankauf`;
  const description =
    content.seoDescription ??
    `${category.title} verkaufen: Saijers Antik bewertet Ihre Stücke fair, diskret und mit Erfahrung.`;

  return createMetadata({
    title,
    description,
    path: `/ankauf/${category.slug}`,
    image: getHeaderImage(category, content),
    keywords: [
      `${category.title} verkaufen`,
      `${category.title} Ankauf`,
      "Antik Ankauf",
      "Saijers Antik"
    ]
  });
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = ankaufCategories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const content = getCategoryContent(category);
  const sectionImage = getImage(category, content);
  const headerImage = getHeaderImage(category, content);
  const relatedCategories = ankaufCategories
    .filter((item) => item.slug !== category.slug)
    .slice(0, 4);
  const breadcrumbJsonLd = {
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
        name: "Ankauf",
        item: absoluteUrl("/ankauf")
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${category.title} verkaufen`,
        item: absoluteUrl(`/ankauf/${category.slug}`)
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        title={`${category.title} verkaufen`}
        accent="verkaufen"
        backgroundImage={headerImage}
      >
        {content.heroDescription}
      </PageHero>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container breadcrumbs-inner">
          <Link href="/">Startseite</Link>
          <ChevronRight size={15} aria-hidden="true" />
          <Link href="/ankauf">Ankauf</Link>
          <ChevronRight size={15} aria-hidden="true" />
          <span aria-current="page">{category.title} verkaufen</span>
        </div>
      </nav>

      <section className="section category-overview-section">
        <div className="container category-page-layout">
          <article className="category-main panel">
            <div className="category-intro-grid">
              <div className="category-detail-image">
                <Image
                  src={sectionImage}
                  alt={content.sectionImageAlt ?? category.title}
                  width={980}
                  height={700}
                  sizes="(max-width: 980px) 100vw, 46vw"
                  priority
                />
              </div>

              <div className="category-intro-copy">
                <span className="eyebrow">Saijers Antik Ankauf</span>
                <h2>{content.sectionHeading}</h2>
                <p className="category-lead">{content.intro}</p>
              </div>
            </div>

            <div className="category-content-block">
              <h2>{content.focusHeading}</h2>
              <p>{content.focusText}</p>
            </div>

            <div className="category-info-grid">
              <section className="category-info-card">
                <h3>Was wir ankaufen</h3>
                <ul>
                  {content.wanted.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="category-process">
              <h2>So läuft der Ankauf ab</h2>
              <div className="category-process-grid">
                {steps.map((step, index) => (
                  <article key={step.title}>
                    <span>{index + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </section>
          </article>

          <aside className="category-sidebar">
            <div className="panel category-sidebar-cta">
              <span className="eyebrow light">Kostenlose Einschätzung</span>
              <h2>{content.ctaHeading}</h2>
              <p>{content.ctaText}</p>
              <Link className="button" href="/kontakt">
                {content.cta}
              </Link>
            </div>

            <div className="panel category-trust-card">
              <h2>Warum Saijers Antik?</h2>
              <ul>
                <li>Fachkundige Bewertung</li>
                <li>Faire und transparente Preise</li>
                <li>Diskrete Abwicklung</li>
                <li>Hausbesuche nach Absprache</li>
              </ul>
            </div>

            <div className="panel category-related-card">
              <h2>Weitere Ankaufbereiche</h2>
              {relatedCategories.map((item) => (
                <Link href={`/ankauf/${item.slug}`} key={item.slug}>
                  {item.title}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
