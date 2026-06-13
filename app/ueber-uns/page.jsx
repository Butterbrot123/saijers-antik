import Image from "next/image";
import PageHero from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Über Saijers Antik – Antik Ankauf mit Erfahrung",
  description:
    "Lernen Sie Saijers Antik kennen: Familienunternehmen für Antik Ankauf, Antiquitäten, Schmuck, Design, Trödel und Nachlässe in Kappeln und Schleswig-Holstein.",
  path: "/ueber-uns",
  image: "/images/wir.png",
  keywords: [
    "Saijers Antik",
    "Antik Ankauf Kappeln",
    "Antiquitäten Händler Schleswig-Holstein",
  ],
});

const sections = [
  {
    title: "Zwei",
    accent: "Generationen",
    suffix: "mit Leidenschaft für Design und Antik",
    text: `Das Unternehmen wird bis heute von den Werten und der Leidenschaft der Familie für Antiquitäten, Kunst, Design und Handel geleitet. 
Diese Werte sind tief in unserer Arbeitsweise verwurzelt und werden von Generation zu Generation weitergegeben. 
In enger Zusammenarbeit mit der vorherigen Generation und unter der liebevollen Anleitung meiner Mutter, Ines Saijers, setzen wir diese Tradition fort.`,
  },
  {
    title: "Unsere",
    accent: "Vision",
    suffix: "für die Zukunft",
    text: `Unsere Unternehmensvision ruht auf den Fundamenten von Tradition, Wertschätzung, Glaubwürdigkeit, Kompetenz und langjähriger Erfahrung. 
Zugleich glauben wir fest daran, dass die Zukunft formbar ist und wir sie durch unsere Visionen aktiv mitgestalten können. 
Unser Ziel ist es, Tradition und Kultur zu bewahren und dabei den Respekt für das Kunsthandwerk unserer Vergangenheit zu zeigen.`,
  },
  {
    title: "Unsere Werte:",
    accent: "Tradition und Vertrauen im Handel",
    suffix: "",
    text: `Die Grundpfeiler unseres Unternehmens waren schon immer Professionalität, Ehrlichkeit und Arbeitsdisziplin, verbunden mit einer tiefen Leidenschaft für Antiquitäten und den Handel. 
Die Familiengeschichte der Saijers reicht bis ins 17. Jahrhundert zurück, als Händler in Amsterdam. 
Über Generationen hinweg haben wir uns dem Handel mit Kolonialwaren gewidmet. 
Diese lange Tradition prägt unseren heutigen Umgang mit Antiquitäten und unterstreicht die Bedeutung eines fairen und respektvollen Handels.`,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="Über Uns" accent="Über" backgroundImage="/images/hunde-hintergrund.jpg">
        Ines Wiechmann Saijers und Merle Saijers verbinden Erfahrung,
        Familiengeschichte und ein gutes Auge für besondere Stücke.
      </PageHero>

      <section className="section">
        <div className="container about-grid">
          <div className="about-image">
            <Image
              src="/images/wir.png"
              alt="Ines Wiechmann Saijers und Merle Saijers"
              width={609}
              height={887}
              priority
            />
          </div>

          <div className="rich-text">
            {sections.map((section) => (
              <article key={section.accent} className="about-section">
                <h2 className="eyebrow-heading">
                  {section.title}{" "}
                  <span className="accent">{section.accent}</span>{" "}
                  {section.suffix}
                </h2>

                <p>{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}