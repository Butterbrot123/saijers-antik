import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  HeartHandshake,
  History,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Über Saijers Antik – Antik Ankauf in Kappeln mit Erfahrung",
  description:
    "Lernen Sie Saijers Antik kennen: Familienunternehmen für Antik Ankauf, Antiquitäten, Schmuck, Design, Trödel, Postkarten, Dokumente und Nachlässe in Kappeln.",
  path: "/ueber-uns",
  image: "/images/wir.png",
  keywords: [
    "Saijers Antik",
    "Antik Ankauf Kappeln",
    "Antiquitäten Händler Schleswig-Holstein",
    "Antikladen Kappeln",
    "Nachlass Ankauf Kappeln"
  ],
});

const valueCards = [
  {
    title: "Fair einschätzen",
    text: "Wir erklären nachvollziehbar, welche Merkmale den Wert eines Stücks beeinflussen.",
    icon: BadgeCheck
  },
  {
    title: "Diskret beraten",
    text: "Nachlässe, Sammlungen und persönliche Erinnerungsstücke behandeln wir vertraulich.",
    icon: ShieldCheck
  },
  {
    title: "Geschichte bewahren",
    text: "Uns interessiert nicht nur der Preis, sondern auch Herkunft, Handwerk und Zeitgeschichte.",
    icon: History
  },
  {
    title: "Persönlich erreichbar",
    text: "Im Laden in Kappeln, per E-Mail oder nach Absprache auch bei Ihnen vor Ort.",
    icon: MapPin
  }
];

const processItems = [
  {
    title: "Stücke zeigen",
    text: "Sie senden Fotos, bringen Objekte vorbei oder vereinbaren einen Termin.",
    icon: Search
  },
  {
    title: "Ruhig prüfen",
    text: "Wir betrachten Zustand, Alter, Material, Herkunft, Seltenheit und Nachfrage.",
    icon: Sparkles
  },
  {
    title: "Fair entscheiden",
    text: "Sie erhalten eine ehrliche Einschätzung und bei Interesse ein klares Angebot.",
    icon: HeartHandshake
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        className="page-hero-compact about-hero"
        title="Über Saijers Antik"
        accent="Saijers Antik"
        backgroundImage="/images/hunde-hintergrund.jpg"
      >
        Ines Wiechmann Saijers und Merle Saijers verbinden Familiengeschichte,
        Erfahrung und ein gutes Auge für Antiquitäten, Design und besondere
        Erinnerungsstücke.
      </PageHero>

      <section className="section about-story-section">
        <div className="container about-story-grid">
          <div className="about-story-image">
            <Image
              src="/images/wir.png"
              alt="Ines Wiechmann Saijers und Merle Saijers"
              width={609}
              height={887}
              sizes="(max-width: 980px) 100vw, 44vw"
              priority
            />
          </div>

          <div className="about-story-copy">
            <span className="eyebrow">Familienunternehmen in Kappeln</span>
            <h2>Antikhandel mit Erfahrung, Ruhe und Freude an echten Stücken</h2>
            <p>
              Saijers Antik steht für persönlichen Antik Ankauf in Kappeln und
              Schleswig-Holstein. Wir kaufen und bewerten Antiquitäten, Schmuck,
              Uhren, Postkarten, historische Dokumente, Fotos, Designobjekte,
              Trödel, Sammlungen und Nachlässe.
            </p>
            <p>
              Viele Stücke erzählen mehr als man auf den ersten Blick sieht.
              Deshalb nehmen wir uns Zeit: für Material, Zustand, Herkunft,
              Geschichte und die Frage, was heute für Sammlerinnen und Sammler
              interessant ist.
            </p>
            <p>
              Unsere Arbeit ist geprägt von Familientradition, ehrlichem Handel
              und Respekt vor den Menschen, die uns ihre Stücke anvertrauen.
            </p>

            <div className="about-fact-row" aria-label="Saijers Antik Schwerpunkte">
              <span>Antik Ankauf</span>
              <span>Nachlässe</span>
              <span>Design & Schmuck</span>
            </div>
          </div>
        </div>
      </section>


    

      
    </>
  );
}
