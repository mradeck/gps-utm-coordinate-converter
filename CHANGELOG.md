# Changelog

Versionsschema `Jahr.Push.Iteration` (siehe README, Abschnitt „Versionierung“); ältere Einträge folgen dem früheren Schema `vYY.MM.major.subversion`.

## v26.6.1 — 2026-11-02

- „Über mich“ beschreibt jetzt den GPS / UTM Converter statt des Geodata Inspector & Cleaner (DE/EN).
- Service-Worker-Cache `gps2utm-26.6.1`.

## v26.5.3 — 2026-11-02

- Favicon: Variante mit kräftigeren Linien (bei 16 px besser lesbar).
- Service-Worker-Cache `gps2utm-26.5.3`.

## v26.5.2 — 2026-11-02

- Favicon neu und sichtbar: `favicon.svg` zeigt das Markenzeichen der Kopfleiste (Fadenkreuz mit Positionsmarke, Blau `#1f6fd1` auf Hellgrau, Rahmen mit Radius 9/34) in der Darstellung des hellen Interfaces. Dazu `favicon-32.png`, `apple-touch-icon.png` (180 × 180) und `icon-512.png` (Manifest, maskierbar). Das alte `icon.svg` entfällt.
- Das bisherige Icon wich vom Markenzeichen ab: dunkler Hintergrund (`#14171c`), hellere Linien und ein grüner Punkt, wirkte also gegenüber der hellen Kopfleiste invertiert. Jetzt sind Favicon und Markenzeichen identisch. `index.html` verweist auf SVG, PNG und `apple-touch-icon` (mit `?v=` gegen veraltete Caches), Manifest und Offline-Cache führen die neuen Dateien.
- Service-Worker-Cache `gps2utm-26.5.2`.
- Sonst keine Änderungen an Design, Kopf- und Fußleisten oder Umrechnung.

## v26.5.1 — 2026-11-02

- Erscheinungsbild an den Geodata Inspector & Cleaner angeglichen: Kopfleiste über die ganze Breite mit Markenzeichen, Titel „GPS2UTM“ in Großbuchstaben, Version und Unterzeile; Eyebrow-Überschriften, Karten, Knöpfe, Eingabefelder und Dialogfenster im Stil des Cleaners. Neutrales Farbschema (Grau/Blau) bleibt. Auf dem Handy rücken die Kopfleisten-Knöpfe in eine eigene Zeile unter den Titel.
- Kopfleiste in fester Reihenfolge: „Über“ (Menü mit „Über mich“ und „Copyright“), Hilfe als „(i)“-Symbol, Interface-Knopf, Sprachknopf. „Über mich“ zeigt denselben Text wie im Cleaner, „Copyright“ den Lizenzdialog.
- Neuer Hilfedialog (DE/EN) mit Kurzanleitung zu GPS-Erfassung, Prüfpunkt, manueller Eingabe, Genauigkeit und Offline-Betrieb sowie Wegen zu Bugreport/Kontakt und README.
- Schrift Inter selbst gehostet (`vendor/fonts/`, aus `@fontsource-variable/inter` 5.3.0, SIL OFL 1.1, Lizenztext `vendor/fonts/OFL.txt`); im Lizenzdialog und im README aufgeführt, im Offline-Cache enthalten. Keine Anfragen an Google Fonts.
- Link zu MeasureMap auf https://measuremap-viewer-editor.netlify.app/ geändert.
- Fehlerbehebung: Leere Felder bei der manuellen Eingabe werden nicht mehr als 0° / 0° umgerechnet, sondern melden „Bitte gültige Breite und Länge eingeben.“
- Service-Worker-Cache `gps2utm-26.5.1`.
- Umrechnung unverändert.

## v26.4.1 — 2026-11-02

- Umstellung des Versionsschemas von `vYY.MM.major.subversion` (zuletzt v26.08.3.0 bzw. lokal v26.11.4.0) auf `Jahr.Push.Iteration`; der Push-Zähler ist aus der Zahl der `main`-Commits 2026 abgeleitet (drei bisher, dies ist der vierte).
- Fehlerbehebung: Bei ungültiger manueller Eingabe erscheint wieder die Meldung „Bitte gültige Breite und Länge eingeben.“ (EN: „Please enter a valid latitude and longitude.“). Bisher fing ein synchrones `try` den Fehler der asynchronen Umrechnung nicht ab, die Meldung blieb aus und die Konsole zeigte eine nicht abgefangene Rejection. Gleiches gilt für Koordinaten aus der Adresszeile (`?lat=…&lon=…`).
- Lizenz: Datei `LICENSE` (MIT, Copyright (c) 2026 Michael Radeck); der Lizenzdialog führt die App als „MIT © Michael Radeck“.
- Einheitliches Erscheinungsbild der öffentlichen Apps von Michael Radeck (lokal zunächst als v26.11.4.0 geführt): neutrales Farbschema (Grau/Blau) in hell und dunkel statt des bisherigen Blau-/Cyan-Schemas, auch für App-Icon, Manifest und `theme-color`.
- Sprachwahl Deutsch/Englisch über einen Knopf mit Fahne (Vektorgrafik) und Kürzel „DE“/„EN“. Alle sichtbaren Texte, auch Statusmeldungen und Ergebnisse, wechseln mit; Zahlen werden passend zur Sprache formatiert. Neue Datei `i18n.js`.
- Interface-Knopf automatisch / hell / dunkel; die Wahl wird im Browser gespeichert und vor dem ersten Zeichnen gesetzt.
- Zwei Fußleisten: „Weitere Apps“ (Geodata Inspector & Cleaner, GeoTIFF Inspector, MeasureMap, Geoid Forge, DXF Coordinate Forge, PointCloud Manager, SkyCheck, michael-radeck.de) sowie Autor, Version, GCG2016-/BKG-Quellen, Quellcode, Hilfe / Bugreport / Kontakt, Lizenzen / Copyright, Impressum und Ko-fi. Hilfe/Kontakt und Lizenzen öffnen je ein Dialogfenster. Der Link zu SkyAlarm entfällt.
- Service-Worker-Cache `gps2utm-26.4.1`, `i18n.js` im Offline-Cache.
- Umrechnung und Offline-Betrieb unverändert.

## v26.08.3.0

- Härtung des Geoid-Ladens gegen veraltete Caches; Versionsanzeige im Kopf.
