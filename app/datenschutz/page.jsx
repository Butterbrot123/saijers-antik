import PageHero from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Datenschutz – Saijers Antik",
  description:
    "Datenschutzerklärung von Saijers Antik mit Informationen zur Verarbeitung personenbezogener Daten.",
  path: "/datenschutz",
  image: "/images/dokumente-hintergrund.jpg"
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Datenschutz" accent="Datenschutz" backgroundImage="/images/dokumente-hintergrund.jpg">
        Informationen zur Verarbeitung personenbezogener Daten.
      </PageHero>
      <section className="section">
        <div className="legal-copy panel">
          <h2>Datenschutz</h2>
          <p>Ihre Privatsphäre ist uns wichtig.</p>

          <h3>Datenschutzerklärung</h3>
          <p>Informationen zur Verarbeitung Ihrer personenbezogenen Daten und Ihren Rechten.</p>

          <h3>Grundsätze der Datenverarbeitung</h3>
          <p>
            Soweit nachstehend keine anderen Angaben gemacht werden, ist die Bereitstellung Ihrer personenbezogenen Daten weder gesetzlich noch vertraglich vorgeschrieben und nicht für einen Vertragsabschluss erforderlich. Sie sind zur Bereitstellung der Daten nicht verpflichtet; eine Nichtbereitstellung hat in der Regel keine Folgen. Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.
          </p>

          <h3>Server-Logfiles</h3>
          <p>
            Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer Person zu machen. Bei jedem Zugriff werden technische Nutzungsdaten (Server-Logfiles) gespeichert, z. B. aufgerufene Seiten, Datum und Uhrzeit, IP-Adresse und übertragene Datenmenge. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Gewährleistung eines störungsfreien Betriebs und zur Verbesserung unseres Angebots.
          </p>

          <h3>Kontakt & Verantwortliche Stelle</h3>
          <p>
            Ines Wiechmann
            <br />Bachstraße 24
            <br />24943 Flensburg
            <br />Deutschland
            <br />Laden: Querstraße 4, 24376 Kappeln
          </p>
          <p>
            Tel.: +49 177 1446123 — E‑Mail: ineswiechmann@outlook.com
          </p>

          <h3>Initiativ-Kontaktaufnahme per E-Mail</h3>
          <p>
            Wenn Sie uns per E‑Mail kontaktieren, erheben wir die von Ihnen mitgeteilten personenbezogenen Daten (z. B. Name, E‑Mail, Nachricht). Diese Daten werden zur Beantwortung Ihrer Anfrage verarbeitet (Rechtsgrundlage: Art. 6 Abs.1 lit. b oder f DSGVO, je nach Anliegen).
          </p>

          <h3>Begleitschreiben und Versandformular</h3>
          <p>
            Wenn Sie das Begleitschreiben auf unserer Website absenden,
            verarbeiten wir die von Ihnen eingetragenen Kontaktdaten,
            Versandangaben, Angaben zu den eingesendeten Gegenständen sowie
            gegebenenfalls Konto- und Steuerdaten. Die Verarbeitung erfolgt zur
            Zuordnung Ihrer Sendung, zur Bearbeitung Ihrer Anfrage und zur
            Vorbereitung einer möglichen Rückmeldung oder eines Angebots. Sie
            erhalten eine automatische Bestätigung per E-Mail; zugleich wird
            Ihre Anfrage an uns übermittelt.
          </p>

          <h3>Google Ads, Google Analytics und Conversion-Tracking</h3>
          <p>
            Wir können Google Ads und Google Analytics einsetzen, um die
            Wirksamkeit unserer Werbung und die Nutzung unserer Website zu
            messen. Dabei können nach Ihrer ausdrücklichen Zustimmung
            Marketing- und Analyse-Cookies gesetzt sowie Conversion-Ereignisse
            erfasst werden, zum Beispiel wenn ein Kontaktformular oder ein
            Begleitschreiben erfolgreich abgesendet wurde. Ohne Ihre Zustimmung
            werden diese Google-Dienste auf unserer Website nicht geladen.
          </p>
          <p>
            Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung nach Art.
            6 Abs. 1 lit. a DSGVO. Sie können Ihre Entscheidung über den
            Cookie-Hinweis auf der Website ändern. Weitere Informationen zur
            Datenverarbeitung durch Google finden Sie in den Datenschutz- und
            Nutzungsbedingungen von Google.
          </p>

          <h3>Betroffenenrechte & Speicherdauer</h3>
          <p>
            Sie haben Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruchsrechte nach den Artikeln 15–21 DSGVO. Daten werden nur so lange gespeichert, wie es für die Verarbeitungszwecke erforderlich oder gesetzlich vorgeschrieben ist.
          </p>

          <h3>Beschwerderecht</h3>
          <p>
            Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren (z. B. Unabhängiges Landeszentrum für Datenschutz Schleswig‑Holstein).
          </p>
          <p>
            Unabhängiges Landeszentrum für Datenschutz Schleswig‑Holstein
            <br />Postfach 71 16, 24171 Kiel
            <br />Tel.: +49 431 9881200 — E‑Mail: mail@datenschutzzentrum.de
          </p>

          <p>
            Letzte Aktualisierung: 15.06.2026
          </p>
        </div>
      </section>
    </>
  );
}
