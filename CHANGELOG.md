# Changelog

Versionsschema `vYY.MM.major.subversion` (siehe README, Abschnitt „Versionierung“).

## v26.11.4.0 — 2026-11-02

- Einheitliches Erscheinungsbild der öffentlichen Apps von Michael Radeck: neutrales Farbschema (Grau/Blau) in hell und dunkel statt des bisherigen Blau-/Cyan-Schemas, auch für App-Icon, Manifest und `theme-color`.
- Sprachwahl Deutsch/Englisch über einen Knopf mit Fahne (Vektorgrafik) und Kürzel „DE“/„EN“. Alle sichtbaren Texte, auch Statusmeldungen und Ergebnisse, wechseln mit; Zahlen werden passend zur Sprache formatiert. Neue Datei `i18n.js`.
- Interface-Knopf automatisch / hell / dunkel; die Wahl wird im Browser gespeichert und vor dem ersten Zeichnen gesetzt.
- Zwei Fußleisten: „Weitere Apps“ (Geodata Inspector & Cleaner, GeoTIFF Inspector, MeasureMap, Geoid Forge, DXF Coordinate Forge, PointCloud Manager, SkyCheck, michael-radeck.de) sowie Autor, Version, GCG2016-/BKG-Quellen, Quellcode, Hilfe / Bugreport / Kontakt, Lizenzen / Copyright, Impressum und Ko-fi. Hilfe/Kontakt und Lizenzen öffnen je ein Dialogfenster. Der Link zu SkyAlarm entfällt.
- Service-Worker-Cache `gps2utm-26.11.4.0`, `i18n.js` im Offline-Cache.
- Umrechnung und Offline-Betrieb unverändert.

## v26.08.3.0

- Härtung des Geoid-Ladens gegen veraltete Caches; Versionsanzeige im Kopf.
