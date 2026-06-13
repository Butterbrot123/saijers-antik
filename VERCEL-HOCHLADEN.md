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

## Test nach dem Deploy

Nach dem Deployment bitte prüfen:

- Startseite lädt
- `/kontakt` lädt
- Kontaktformular sendet eine Testnachricht
- `/begleitschreiben` lädt
- Begleitschreiben erzeugt eine Vorgangsnummer
- Bestätigungsmail kommt beim Kunden an
