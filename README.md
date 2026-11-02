# GPS2UTM Koordinaten

**Aktuelle Version:** v26.5.3 (Änderungen: [`CHANGELOG.md`](CHANGELOG.md))

## Versionierung

GPS2UTM verwendet wie alle öffentlichen Apps von Michael Radeck das Schema
`Jahr.Push.Iteration`, angezeigt als `vJJ.P.I` (z. B. `v26.5.1`):

- `Jahr` – zweistellige Jahreszahl,
- `Push` – laufende Zahl der GitHub-Pushes auf `main` im jeweiligen Jahr,
- `Iteration` – lokale Iteration seit dem letzten Push.

Vor jedem Push wird der Push-Zähler erhöht und die Iteration auf `1` gesetzt;
CHANGELOG und README werden dabei nachgezogen. Bis v26.11.4.0 (lokal) bzw.
v26.08.3.0 (veröffentlicht) galt das Schema `vYY.MM.major.subversion`.
Die vollständige Nummer steht zentral in `APP_VERSION` und erscheint im
Browser-Tab, neben der Wortmarke im App-Kopf, in der Fußleiste und im Betreff
der Kontakt-Mails. Bei jeder neuen Version wird auch der Cache-Name in `sw.js`
angepasst, damit installierte Fassungen die neuen Dateien laden.

Mobile, installierbare Single-Page-App zur direkten Umrechnung des
Handy-Standorts:

- WGS84/ETRS89 geografisch, dezimal und Grad/Minute/Sekunde
- ETRS89/UTM mit automatischer Zone, Band und EPSG-Code
- Gauß-Krüger/DHDN für die Streifen 2–5
- GCG2016-Geoidundulation und DHHN2016-Normalhöhe
- eingebauter amtlicher Kontrollpunkt Lübben zur numerischen Prüfung
- Offlinebetrieb als Progressive Web App
- Kopfleiste im Stil des Geodata Inspector & Cleaner, von links nach rechts: „Über“ (Menü mit „Über mich“ und „Copyright“), Hilfe „(i)“ (Kurzanleitung als Dialog), Interface-Knopf und Sprachknopf
- Oberfläche auf Deutsch und Englisch (Knopf mit Fahne, Wahl wird im Browser gespeichert, beim ersten Aufruf gilt die Browsersprache)
- Interface automatisch / hell / dunkel (Knopf, Wahl wird im Browser gespeichert; „automatisch“ folgt der Systemeinstellung)
- zwei Fußleisten: „Weitere Apps“ mit Links zu den übrigen Werkzeugen von Michael Radeck sowie Version, Datenquellen, Quellcode, Hilfe / Bugreport / Kontakt, Lizenzen / Copyright, Impressum und Ko-fi

## Schrift

Die Oberfläche nutzt die Schrift [Inter](https://github.com/rsms/inter)
(© The Inter Project Authors, SIL Open Font License 1.1). Sie liegt als
WOFF2-Datei aus `@fontsource-variable/inter` 5.3.0 (Unicode-Bereiche latin und
latin-ext, variable Strichstärke) in `vendor/fonts/`, zusammen mit dem
Lizenztext `vendor/fonts/OFL.txt`, und gehört zum Offline-Cache. Es gibt keine
Anfragen an Google Fonts oder andere Schrift-CDNs.

## Benutzung

Die App benötigt HTTPS oder `localhost`, damit der Browser auf die
Standortdaten zugreifen darf. Nach dem Antippen von **GPS-Standort erfassen**
wird die Position laufend aktualisiert. Die GPS-Höhe kann gerätebedingt fehlen
oder deutlich ungenauer als die horizontale Position sein.

## Lokaler Start

```bash
python3 -m http.server 8767
```

Danach `http://127.0.0.1:8767/` öffnen.

## Prüfung

```bash
node scripts/test-coordinate-tools.cjs
```

Der Lübben-Kontrollpunkt muss auf Zentimeterniveau treffen:

- UTM 33U: E 424122,72 m / N 5755180,43 m
- ellipsoidische Höhe: 94,04 m
- DHHN2016-Normalhöhe: 53,03 m

## Genauigkeit und Bezugssysteme

Für kartografische Anwendungen werden WGS84 und ETRS89 gleichgesetzt. Die
UTM-Berechnung verwendet das GRS80-Ellipsoid. Gauß-Krüger nutzt die
bundesweite 7-Parameter-Transformation und ist ohne das amtliche BeTA2007-Gitter
nur als Näherung zu verstehen.

Die Höhenumrechnung folgt `H_DHHN2016 = h_ETRS89 − ζ_GCG2016`.

## Datenquelle

GCG2016 © GeoBasis-DE / BKG (2026),
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de).
Weitere Angaben stehen in [`data/README.md`](data/README.md).

## Lizenz

Der Quellcode dieser App steht unter der [MIT-Lizenz](LICENSE),
Copyright (c) 2026 Michael Radeck. Für die GCG2016-Daten gelten die oben
genannten Bedingungen des BKG (CC BY 4.0), für die Schrift Inter die SIL Open
Font License 1.1.
