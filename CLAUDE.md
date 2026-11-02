# GPS / UTM Converter — Hinweise für Claude

Statische PWA ohne Build, GitHub Pages über `.github/workflows/pages.yml`. Bei jeder Version den Service-Worker-Cache-Namen in `sw.js` und die `?v=`-Parameter in `index.html` mitziehen. Prüfen: `node scripts/test-coordinate-tools.cjs` (Kontrollpunkt Lübben).

## Gemeinsame Regeln der Vermessertools

Für diese App gelten die gemeinsamen Regeln aller öffentlichen Vermessertools von Michael Radeck (Version `Jahr.Push.Iteration`, Look wie Geodata Inspector & Cleaner, Kopf- und Fußleisten, Sprache/Interface, Schrift Inter, Favicon, Prüfung). Sie stehen an einer Stelle: `CLAUDE-APPS.md` im privaten Repo [mradeck/vermessertools-notizen](https://github.com/mradeck/vermessertools-notizen/blob/main/CLAUDE-APPS.md). Bei Arbeit an dieser App das Repo in die Sitzung holen und die Datei lesen. Diese CLAUDE.md enthält nur app-eigene Regeln.

**Notizen nachziehen:** Nach jedem Push dieser App auf `main` in derselben Sitzung im Repo `mradeck/vermessertools-notizen` die Projektseite der App und die Zeile in `Übersicht Vermessertools Code Entwicklung.md` (samt Änderungsprotokoll) aktualisieren.
