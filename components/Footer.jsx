import Link from "next/link";
import { footerLinks, socials } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h2>
            Saijers <span className="accent">Antik</span>
          </h2>
          <p>
            Saijers Antik ist ein Familienunternehmen mit Leidenschaft für Antiquitäten,
            Design und Geschichte. Seit Generationen stehen wir für Qualität, Ehrlichkeit
            und Expertise im An- und Verkauf.
          </p>
          <p style={{ marginTop: 22 }}>
            © 2026 Saijers-Antik.de
            <br />
            Alle Rechte vorbehalten.
          </p>
        </section>

        <section>
          <h3>Öffnungszeiten</h3>
          <p>
            <strong>Sommer (1. Apr – 30. Okt)</strong>
            <br />
            Mo &amp; Fr: 11:00 – 16:00 Uhr
            <br />
            Sa: 11:00 – 14:00 Uhr
            <br />
            So: 12:00 – 15:00 Uhr
            <br />
            Mi: Geschlossen
          </p>
          <p>
            <strong>Winter (1. Nov – 31. Dez)</strong>
            <br />
            Sa: 12:00 – 14:00 Uhr
          </p>
          <p>
            <strong>Winterpause (1. Dez – 31. März)</strong>
            <br />
            Geschlossen
          </p>
          <p>Termine und Hausbesuche nach Absprache möglich.</p>
        </section>

        <section>
          <h3>Navigation</h3>
          <ul>
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Folgen Sie uns</h3>
          <div className="social-links">
            {socials.map(({ href, label, icon: Icon }) => (
              <Link href={href} aria-label={label} key={label}>
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </section>
      </div>
      <div className="footer-bottom">Entwickelt mit <span className="accent">❤️ von Saijers Antik</span></div>
    </footer>
  );
}
