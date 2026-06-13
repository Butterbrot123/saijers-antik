import PageHero from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "FAQ zum Antik Ankauf – Häufige Fragen | Saijers Antik",
  description:
    "Antworten auf häufige Fragen zu Antik Ankauf, Einschätzung, Versand, Abholung, Bezahlung, Öffnungszeiten und dem Laden von Saijers Antik in Kappeln.",
  path: "/faq",
  image: "/images/postkarten-hintergrund.png"
});

const faqItems = [

  {
    question: "Welche Gegenstände kaufen Sie an?",
    answer:
      "Wir kaufen Antiquitäten, Kunstgegenstände, Porzellan, Besteck, Schmuck und Sammlerobjekte und vieles mehr. Kleinere Elektrogeräte, Möbel oder moderne Massenware nehmen wir in der Regel nicht an. Senden Sie gern Fotos per E-Mail oder WhatsApp für eine erste Einschätzung. Mehr Informationen finden Sie hier."
  },
  {
    question: "Wie läuft eine Begutachtung / ein Ankauf ab?",
    answer:
      "Schicken Sie vorab Fotos und eine kurze Beschreibung per E-Mail oder WhatsApp. Bei Interesse vereinbaren wir einen Termin zur Begutachtung im Laden oder bei Ihnen zu Hause."
  },
  {
    question: "Wie schnell läuft die Bezahlung ab?",
    answer:
      "Die Bezahlung erfolgt in der Regel direkt bei Übergabe. Bei speziellen Fällen klären wir die Zahlungsmodalitäten individuell."
  },
  {
    question: "Können Sie Artikel abholen oder verschicken?",
    answer:
      "Für größere oder schwerere Stücke bieten wir in vielen Fällen Abholung an (nach Absprache). Kleinere Gegenstände können Sie gerne vorbeibringen. Auf Wunsch organisieren wir auch den Versand; die Versandkosten trägt in der Regel der Empfänger bzw. Absender. Bitte klären Sie Abholung/Versand vorab telefonisch oder per E-Mail."
  },
  {
    question: "Haben Sie mehrere Läden?",
    answer:
      "Nein, wir haben keine weiteren Filialen – unser Geschäft befindet sich ausschließlich in Kappeln."
  }
];

export default function FaqPage() {
  const faqJsonLd = {
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

  return (
    <>
      <PageHero title="FAQ" accent="FAQ" backgroundImage="/images/postkarten-hintergrund.png">
        Häufige Fragen zum Antik Ankauf und zur Zusammenarbeit.
      </PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="section section-soft">
        <div className="container">
          <article className="panel faq-panel">
            <h2>Häufige Fragen (FAQ)</h2>
            <p>
              Hier finden Sie Antworten auf häufig gestellte Fragen zu Ankauf, Beratung,
              Versand und unseren Leistungen. Wenn Ihre Frage nicht dabei ist, kontaktieren
              Sie uns gern direkt.
            </p>
            {faqItems.map((item, index) => (
              <details className="faq-item" key={item.question} open={index === faqItems.length - 1}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
