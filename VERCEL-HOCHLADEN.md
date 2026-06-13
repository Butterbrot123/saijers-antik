# Saijers Antik mit Vercel hochladen

Vercel ist fuer diese Website die beste Variante, weil Next.js, die
Kontaktformulare und das Begleitschreiben zusammen funktionieren.

## Wichtig

Bei Vercel wird **nicht** der Ordner `out` hochgeladen.
Vercel braucht den normalen Projektordner mit `app`, `components`, `lib`,
`public`, `package.json` und `next.config.mjs`.

## Empfohlener Weg: GitHub + Vercel

1. Projekt zu GitHub hochladen.
2. In Vercel auf **Add New Project** gehen.
3. Das GitHub-Repository importieren.
4. Framework Preset: **Next.js**.
5. Build Command: `npm run build`.
6. Output Directory leer lassen.
7. Deploy starten.

Vercel erstellt danach automatisch eine Vorschau-Adresse mit `vercel.app`.

## Environment Variables

Im Vercel-Projekt unter **Settings > Environment Variables** eintragen:

```txt
RESEND_API_KEY=...
RESEND_FROM=Saijers Antik <kontakt@saijersantik.de>
SAIJERS_LETTER_TO=inessayers@googlemail.com
SAIJERS_CONTACT_TO=inessayers@googlemail.com
```

Nach dem Eintragen der Variablen muss neu deployed werden.

## E-Mail-Absender

`RESEND_FROM=Saijers Antik <kontakt@saijersantik.de>` funktioniert nur dann
zuverlaessig, wenn die Domain `saijersantik.de` bei Resend als Absenderdomain
eingerichtet ist. Falls Resend die Domain noch nicht akzeptiert, kommt beim
Formularversand eine Fehlermeldung vom Maildienst.

## Bilder im Kontaktformular

Vercel Functions erlauben maximal 4,5 MB pro Anfrage. Deshalb ist der Upload im
Kontaktformular auf insgesamt 4 MB begrenzt.

## Domain verbinden

Wenn die Vercel-Vorschau funktioniert:

1. In Vercel zum Projekt gehen.
2. **Settings > Domains** öffnen.
3. `saijersantik.de` und optional `www.saijersantik.de` hinzufügen.
4. Die DNS-Werte, die Vercel anzeigt, bei Simply eintragen.

Bitte die DNS-Werte nicht raten, sondern genau die Werte aus Vercel kopieren.

### Simply-Domain auf Vercel zeigen lassen

Die Domain muss nicht unbedingt zu Vercel transferiert werden. Am sichersten ist:
Domain bei Simply lassen und nur die DNS-Eintraege fuer die Website aendern.

In Simply im DNS-Bereich:

1. Den bestehenden Website-Record fuer `saijersantik.de` suchen.
2. Den Apex-Record, also `@` oder leeres Feld, als `A`-Record auf den Wert setzen,
   den Vercel im Domain-Bereich anzeigt.
3. Den `www`-Record als `CNAME` auf den Wert setzen, den Vercel im Domain-Bereich
   anzeigt.
4. Alte `A`-, `AAAA`- oder `CNAME`-Records fuer `@` und `www` entfernen, wenn sie
   noch auf den Simply-Webspace zeigen.
5. Mail-Records wie `MX`, `SPF`, `DKIM`, `DMARC` und andere TXT-Records nicht
   loeschen, damit E-Mail bei Simply weiter funktioniert.

Vercel zeigt im Projekt unter **Settings > Domains** genau an, welche Records
fehlen oder falsch gesetzt sind. Nach der Aenderung kann es einige Minuten bis
24 Stunden dauern, bis alles ueberall aktualisiert ist.

### Aktuelle DNS-Werte fuer saijersantik.de

Diese Werte wurden von Vercel fuer dieses Projekt angezeigt:

```txt
Type:  A
Name:  @
Value: 216.198.79.1
```

```txt
Type:  CNAME
Name:  www
Value: db687286b7479389.vercel-dns-017.com.
```

Wenn Simply den Punkt am Ende beim CNAME nicht akzeptiert, diesen Punkt
weglassen:

```txt
db687286b7479389.vercel-dns-017.com
```

## Test nach dem Deploy

Nach dem Deployment bitte prüfen:

- Startseite lädt
- `/kontakt` lädt
- Kontaktformular sendet eine Testnachricht
- `/begleitschreiben` lädt
- Begleitschreiben erzeugt eine Vorgangsnummer
- Bestätigungsmail kommt beim Kunden an
