# GPS2UTM Koordinaten

**Aktuelle Version:** v26.08.3.0

## Versionierung

GPS2UTM verwendet wie der PointCloud Manager das Anzeigeformat
`vYY.MM.major.subversion`. Die aktuelle fortlaufende App-Version bildet die
`major`-Stelle; ein neuer Funktionsstand setzt `subversion` auf `0`, reine
Hotfixes erhöhen nur die letzte Stelle. Die vollständige Nummer steht zentral
in `APP_VERSION` und erscheint im Browser-Tab sowie neben der Wortmarke im
App-Kopf.

Mobile, installierbare Single-Page-App zur direkten Umrechnung des
Handy-Standorts:

- WGS84/ETRS89 geografisch, dezimal und Grad/Minute/Sekunde
- ETRS89/UTM mit automatischer Zone, Band und EPSG-Code
- Gauß-Krüger/DHDN für die Streifen 2–5
- GCG2016-Geoidundulation und DHHN2016-Normalhöhe
- eingebauter amtlicher Kontrollpunkt Lübben zur numerischen Prüfung
- Offlinebetrieb als Progressive Web App
- direkte Links zu SkyCheck, SkyAlarm und PointCloud Manager sowie zu michael-radeck.de und Ko-fi

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
