import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import { localSeoPages } from "@/lib/localSeoData";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Antik Ankauf in Schleswig-Holstein & Umgebung – Saijers Antik",
  description:
    "Saijers Antik kauft Antiquitäten, Schmuck, Uhren, Dokumente, Fotos, Designobjekte und Nachlässe in Kappeln, Schleswig, Kiel, Flensburg, Hamburg und Umgebung.",
  path: "/antik-ankauf",
  image: "/images/starthintergrund.jpg",
  keywords: [
    "Antik Ankauf Schleswig-Holstein",
    "Antiquitäten verkaufen Kappeln",
    "Antik Ankauf Kiel",
    "Antik Ankauf Flensburg",
    "Antik Ankauf Hamburg"
  ]
});

export default function LocalOverviewPage() {
  return (
    <>
      <PageHero
        title="Antik Ankauf in Schleswig-Holstein"
        accent="Ankauf"
        backgroundImage="/images/starthintergrund.jpg"
      >
        Antiquitäten, Schmuck, Dokumente, Sammlungen und Nachlässe verkaufen:
        regional verwurzelt in Kappeln, erreichbar für viele Orte im Norden.
      </PageHero>

      <section className="section local-landing-section">
        <div className="container">
          <div className="section-intro local-landing-intro">
            <span className="eyebrow">Regionen</span>
            <h2 className="section-heading">
              Wo wir regelmäßig <span className="accent">Anfragen</span> erhalten
            </h2>
            <p className="lead">
              Jede Region ist anders. Deshalb finden Sie hier eigene Hinweise
              zum Ankauf, zur ersten Einschätzung und zum passenden Ablauf.
            </p>
          </div>

          <div className="local-city-grid">
            {localSeoPages.map((page) => (
              <article className="local-city-card" key={page.slug}>
                <span>
                  <MapPin size={20} aria-hidden="true" />
                  {page.region}
                </span>
                <h3>{page.title}</h3>
                <p>{page.description}</p>
                <Link href={`/antik-ankauf/${page.slug}`}>
                  Region ansehen
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
