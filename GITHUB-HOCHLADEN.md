# Projekt zu GitHub hochladen

Die lokale Codex-Umgebung kann die `.git`-Datenbank nicht selbst schreiben.
Diese Befehle bitte im normalen Terminal auf deinem Mac im Projektordner
ausfuehren.

## 1. In den Projektordner wechseln

```bash
cd "/Users/merle/Documents/Codex/2026-06-10/https-saijersantik-de-ich-m-chte"
```

## 2. Git-Name und E-Mail setzen

Diese Einstellung gilt nur fuer dieses Projekt:

```bash
git config user.name "Merle Sayers"
git config user.email "merle.sayers@outlook.com"
```

## 3. Git-Auswahl sauber neu aufbauen

Dadurch werden Build-Ordner aus der Vormerkung entfernt, aber keine Dateien
von deinem Computer geloescht.

```bash
git rm --cached -r .
git add .
git status
```

Im Status sollten **nicht** auftauchen:

- `.next`
- `node_modules`
- `out`
- `outputs`
- `work`
- `.DS_Store`

## 4. Ersten Commit erstellen

```bash
git commit -m "Initial Saijers Antik Next.js site"
```

## 5. GitHub-Repository verbinden

Auf GitHub ein neues leeres Repository erstellen, zum Beispiel:

```txt
saijers-antik
```

Dann die Repository-Adresse einsetzen:

```bash
git branch -M main
git remote add origin https://github.com/DEIN-GITHUB-NAME/saijers-antik.git
git push -u origin main
```

Falls `origin` schon existiert:

```bash
git remote set-url origin https://github.com/DEIN-GITHUB-NAME/saijers-antik.git
git push -u origin main
```

## 6. Danach in Vercel importieren

In Vercel:

1. **Add New Project**
2. GitHub-Repository `saijers-antik` auswaehlen
3. Framework: **Next.js**
4. Build Command: `npm run build`
5. Output Directory leer lassen
6. Environment Variables aus `VERCEL-HOCHLADEN.md` eintragen
7. Deploy starten
