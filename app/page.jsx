import Image from "next/image";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  ClipboardCheck,
  MapPin,
  ShoppingBag,
  Star,
  Store
} from "lucide-react";
import { buyItems, featureItems, reviews } from "@/lib/siteData";
import { localSeoPages } from "@/lib/localSeoData";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Antik Ankauf in Kappeln – Antiquitäten, Schmuck & Nachlässe verkaufen",
  description:
    "Saijers Antik in Kappeln bewertet und kauft Antiquitäten, Schmuck, Uhren, Dokumente, Postkarten, Designobjekte, Trödel und Nachlässe fair und diskret.",
  path: "/",
  image: "/images/starthintergrund.jpg",
  keywords: [
    "Antik Ankauf Kappeln",
    "Antiquitäten verkaufen",
    "Schmuck verkaufen",
    "Nachlass verkaufen",
    "Trödel Ankauf Schleswig-Holstein"
  ]
});

function AccentTitle({ title, accent }) {
  const parts = title.split(accent);

  if (parts.length === 1) {
    return title;
  }

  return (
    <>
      {parts[0]}
      <span className="accent">{accent}</span>
      {parts.slice(1).join(accent)}
    </>
  );
}

const photoSteps = [
  {
    title: "Fotos senden",
    text: "Vorderseite, Rückseite und wichtige Details fotografieren.",
    icon: Camera
  },
  {
    title: "Kurz beschreiben",
    text: "Schreiben Sie dazu, was bekannt ist: Herkunft, Menge und Zustand.",
    icon: ClipboardCheck
  },
  {
    title: "Einschätzung erhalten",
    text: "Wir melden uns persönlich mit einer ehrlichen ersten Rückmeldung.",
    icon: Star
  }
];

export default function HomePage() {
  return (
    <>
      <PageHero
        title="Antik Ankauf – Wir kaufen Antik, Trödel & Schmuck"
        backgroundImage="/images/starthintergrund.jpg"
      >
        Ihr Partner für faire Bewertungen, Diskretion und schnelle Abwicklung.
      </PageHero>

    

      <section className="section">
        <div className="container about-grid">
          <div className="about-image">
            <Image
              src="/images/wir.png"
              alt="Ines und Merle Saijers"
              width={609}
              height={887}
              sizes="(max-width: 980px) 100vw, 48vw"
            />
          </div>
          <div>
            <h2 className="eyebrow-heading">
              <span className="accent">Wer,</span> sind wir?
            </h2>
            <div className="rich-text">
              <p>
                Wir, <strong>Ines Wiechmann Saijers</strong> und{" "}
                <strong>Merle Saijers</strong>, sind Ihr zuverlässiger Ansprechpartner
                für professionellen Antik Ankauf. Wir kaufen klassische{" "}
                <strong>Antiquitäten, Schmuck, Design und Trödel</strong> sowohl{" "}
                <strong>national</strong> als auch <strong>international</strong> an.
              </p>
              <p>
                Als Ansprechpartner für Antik Ankauf in Kappeln (Schleswig-Holstein)
                sind wir regional verwurzelt und gleichzeitig bundesweit für Sie tätig, unter
                anderem in <strong>Kiel, Eckernförde, Hamburg, Flensburg, Schleswig, Husum</strong>{" "}
                und vielen weiteren Städten.
              </p>
              <p>
                Unser engagiertes Team steht für eine <strong>fachkundige Bewertung,
                transparente Abläufe</strong> und <strong>faire Preise</strong> im Antik
                Ankauf. Unser Ziel ist es, Ihnen eine seriöse, unkomplizierte Abwicklung
                und das bestmögliche Ergebnis zu bieten.
              </p>
              <Link className="button" href="/ueber-uns">
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <h2 className="section-heading">
            Warum sollten Sie mit uns <br />
            <span className="accent">Zusammenarbeiten?</span>
          </h2>
          <div className="feature-grid">
            {featureItems.map(({ title, label, text, icon: Icon, href, action }) => (
              <article className="feature-card" key={title}>
                <div className="feature-card-head">
                  <div className="feature-icon">
                    <Icon size={24} strokeWidth={1.9} />
                  </div>
                  {label ? <span>{label}</span> : null}
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                {href ? (
                  <Link className="feature-link" href={href}>
                    {action}
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section buy-overview-section">
        <div className="container">
          <div className="section-intro buy-section-head">
            <span className="eyebrow">Ankaufbereiche</span>
            <h2 className="section-heading">
              Was <span className="accent">kaufen</span> wir an?
            </h2>
            <p className="lead">
              Eine Auswahl der Bereiche, für die wir regelmäßig Anfragen
              erhalten. Auch wenn Ihr Objekt hier nicht dabei ist, lohnt sich
              eine kurze Nachricht mit Fotos.
            </p>
          </div>

          <div className="buy-card-grid">
            {buyItems.map((item) => (
              <article className="buy-card" key={item.title}>
                <Link className="buy-card-media" href={item.href}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1182}
                    height={887}
                    sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                </Link>
                <div className="buy-card-body">
                  <span className="buy-card-kicker">{item.category}</span>
                  <h3>
                    <Link href={item.href}>
                      <AccentTitle title={item.title} accent={item.accent} />
                    </Link>
                  </h3>
                  <p>{item.text}</p>
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <Link className="buy-card-link" href={item.href}>
                    Mehr erfahren
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="section-action buy-overview-action">
            <Link className="button" href="/ankauf">
              Alle Ankaufbereiche ansehen
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

       <section className="cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-copy">
              <span className="eyebrow">Persönliche Einschätzung</span>
              <h2>
                Verkaufen, stöbern oder erst einmal in Ruhe fragen?
              </h2>
              <p>
                Wir kaufen Antiquitäten, Schmuck, Design-Stücke und Trödel in Kappeln, Schleswig-Holstein sowie Umgebung, inklusive Hamburg, Flensburg, Eckernförde und Schleswig. 
                Vereinbaren Sie ein kostenloses und unverbindliches Gespräch. 
                Wir beantworten Ihre Fragen und beraten Sie beim fairen Ankauf Ihrer Schätze.
                Oder besuchen Sie uns direkt in unserem Laden in Kappeln. 
                Stöbern Sie in unserer Auswahl und entdecken Sie vielleicht Ihren neuen Schatz!
              </p>
             
            </div>

            <div className="cta-choice-grid">
              <Link className="cta-choice-card" href="/versand">
                <span>
                  <ShoppingBag size={22} aria-hidden="true" />
                </span>
                <strong>Antik verkaufen</strong>
                <p>Fotos senden, Termin anfragen oder Nachlass besprechen.</p>
                <small>
                  Kontakt aufnehmen
                  <ArrowRight size={15} aria-hidden="true" />
                </small>
              </Link>
              <Link className="cta-choice-card" href="/laden">
                <span>
                  <Store size={22} aria-hidden="true" />
                </span>
                <strong>Laden besuchen</strong>
                <p>Antiquitäten, Trödel und besondere Fundstücke in Kappeln entdecken.</p>
                <small>
                  Laden ansehen
                  <ArrowRight size={15} aria-hidden="true" />
                </small>
              </Link>
            </div>

          </div>
        </div>
      </section>

      <section className="section section-offwhite">
        <div className="container">
          <div className="section-intro reviews-intro">
            <span className="eyebrow">Google Maps</span>
            <h2 className="section-heading">
              Was <span className="accent">Kunden</span> über uns sagen
            </h2>
            <p className="lead">
              Auszüge aus Bewertungen, die Kunden bei Google Maps hinterlassen
              haben.
            </p>
            <Link
              className="text-link google-review-link"
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Bewertungen bei Google Maps ansehen
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="reviews">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <span className="quote-mark">“</span>
                <blockquote>„{review.quote}“</blockquote>
                <footer>
                  {review.name}
                  <span>Google Maps</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section local-seo-section">
        <div className="container local-seo-grid">
          <div>
            <span className="eyebrow">Antikladen Kappeln</span>
            <h2>
              Vor Ort in Kappeln, unterwegs in Schleswig-Holstein und darüber
              hinaus
            </h2>
            <p>
              Unser Antikladen liegt in der Querstraße 4 in Kappeln. Viele
              Kundinnen und Kunden kommen aus der Schleiregion, aus Schleswig,
              Eckernförde, Flensburg, Kiel oder Hamburg. Bei Nachlässen,
              Sammlungen und größeren Mengen sprechen wir gern über einen
              passenden Termin oder Hausbesuch.
            </p>
            <div className="local-actions">
              <Link className="button" href="/laden">
                Laden in Kappeln ansehen
                <MapPin size={18} aria-hidden="true" />
              </Link>
              <Link className="button button-outline-dark" href="/kontakt">
                Termin anfragen
              </Link>
            </div>
          </div>
          <aside className="local-seo-card">
            <h3>Regionen, aus denen wir häufig Anfragen bekommen</h3>
            <ul>
              {localSeoPages.map((area) => (
                <li key={area.slug}>
                  <Link href={`/antik-ankauf/${area.slug}`}>{area.city}</Link>
                </li>
              ))}
              <li>
                <Link href="/antik-ankauf">Alle Regionen ansehen</Link>
              </li>
            </ul>
          </aside>
        </div>
      </section>

     

     

    </>
  );
}
