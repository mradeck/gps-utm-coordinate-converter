# Changelog

Versionsschema `Jahr.Push.Iteration` (siehe README, Abschnitt „Versionierung“); ältere Einträge folgen dem früheren Schema `vYY.MM.major.subversion`.

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
