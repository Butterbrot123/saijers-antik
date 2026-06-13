import PageHero from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Impressum – Saijers Antik",
  description: "Impressum und rechtliche Anbieterangaben von Saijers Antik.",
  path: "/impressum",
  image: "/images/buecher-hintergrund.jpg"
});

export default function ImprintPage() {
  return (
    <>
      <PageHero title="Impressum" accent="Impressum" backgroundImage="/images/buecher-hintergrund.jpg">
        Rechtliche Angaben zum Anbieter.
      </PageHero>
      <section className="section">
        <div className="legal-copy panel">
          <h2>Angaben gemäß § 5 TMG / gesetzliche Anbieterkennzeichnung</h2>
          <h3>Anbieter / Verantwortlich</h3>
          <p>
            Ines Wiechmann
            <br />Querstraße 4
            <br />24376 Kappeln
            <br />Deutschland
          </p>
          <p>
            Telefon: +49 177 1446123
            <br />E‑Mail: ineswiechmann@outlook.com
          </p>

          <h3>Umsatzsteuer / Sonstiges</h3>
          <p>
            USt-IdNr.: DE365412385
            <br />Hinweis: Aufgrund des Kleinunternehmerstatus wird gemäß § 19 UStG die Umsatzsteuer in Rechnungen nicht ausgewiesen.
          </p>

          <h3>Streitbeilegung</h3>
          <p>
            Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor Verbraucherschlichtungsstellen teilzunehmen.
          </p>

          <h3>Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </div>
      </section>
    </>
  );
}
