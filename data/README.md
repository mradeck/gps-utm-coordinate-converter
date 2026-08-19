# GCG2016-Webraster

`gcg2016v2023-cm.i16` ist eine für den Browser optimierte Ableitung des amtlichen
GCG2016-GeoTIFFs des Bundesamts für Kartographie und Geodäsie.

- Raster: 950 × 1052 Punkte, nordwärts beginnend
- Bezugssystem: ETRS89, EPSG:4258
- Rasterweite: 45″ Länge × 30″ Breite
- Kodierung: vorzeichenbehaftetes Int16, Little Endian, Zentimeter
- NoData: 32767
- Quelldatei: `de_bkg_GCG2016v2023.tif`
- SHA-256 der Quelldatei: `a4a6e4737d81a6ff2116a64852f63458c3ba70dc5cf33c14db4d533fde6f493a`

Quelle und Lizenz: © GeoBasis-DE / BKG (2026), CC BY 4.0.

- [Produktmetadaten](https://mis.bkg.bund.de/trefferanzeige?docuuid=983fac52-b7de-4f43-a6f5-91e007a6f963)
- [Creative Commons BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de)

Das Webraster wird mit `scripts/build-gcg-web-grid.mjs` reproduzierbar aus dem
GeoTIFF erzeugt. Rundung auf Zentimeter verursacht höchstens 5 mm
Quantisierungsfehler.
