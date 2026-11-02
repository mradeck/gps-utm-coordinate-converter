/*
 * Übersetzungen DE/EN. Schlüssel → Text mit Platzhaltern {name}.
 * Läuft im Browser (window.I18N) und in Node (module.exports).
 * Beide Sprachen müssen dieselben Schlüssel haben.
 */
(function (root) {
  'use strict';

  const TEXT = {
    de: {
      'app.title': 'Koordinaten',
      'app.tagline': 'WGS 84 zu ETRS89 / UTM, Gauß‑Krüger und DHHN2016',
      'lang.toggle': 'Sprache: Deutsch — zu Englisch wechseln',
      'theme.auto': 'Interface: automatisch (Systemeinstellung) — klicken für hell',
      'theme.light': 'Interface: hell — klicken für dunkel',
      'theme.dark': 'Interface: dunkel — klicken für automatisch',

      'btn.gps': '◎ GPS-Standort erfassen',
      'btn.gpsStop': '■ GPS stoppen',
      'btn.reference': 'Prüfpunkt Lübben',

      'status.ready': 'Bereit – Standortzugriff startet erst nach Antippen.',
      'status.noApi': 'Dieses Gerät stellt keine Standort-API bereit.',
      'status.paused': 'Live-Aktualisierung angehalten.',
      'status.locating': 'GPS-Position wird ermittelt…',
      'status.live': 'Live · aktualisiert {time}',
      'status.denied': 'Standortzugriff wurde nicht erlaubt.',
      'status.unavailable': 'GPS-Position ist derzeit nicht verfügbar.',
      'status.reference': 'Amtlicher Kontrollpunkt Lübben geladen.',
      'status.manual': 'Manuelle Koordinate umgerechnet.',
      'status.invalid': 'Bitte gültige Breite und Länge eingeben.',
      'status.copied': 'Koordinate kopiert.',
      'status.query': 'Übergebene Kartenposition umgerechnet.',

      'utm.meta': 'Zone {zone} · EPSG:{epsg} · Zonenpräfix {prefixed}',
      'card.geo': 'WGS 84 / ETRS89 geografisch',
      'row.decimal': 'Dezimal',
      'row.lat': 'Breite',
      'row.lon': 'Länge',
      'row.accuracy': 'GPS-Genauigkeit',
      'acc.value': '± {v} m horizontal',
      'acc.na': 'nicht verfügbar',

      'card.heights': 'Höhen',
      'row.ellHeight': 'Ellipsoidisch h',
      'heights.note': 'H = h − ζ. Eine Handy-GPS-Höhe ist häufig deutlich ungenauer als die Lage und kann fehlen.',
      'ell.missing': 'vom Gerät nicht geliefert',
      'geoid.loading': 'wird geladen…',
      'geoid.outside': 'außerhalb des Deutschland-Gitters',
      'geoid.failed': 'GCG2016 konnte nicht geladen werden – bitte Seite neu laden',
      'normal.calc': 'wird berechnet…',
      'normal.noAlt': 'ohne GPS-Höhe nicht berechenbar',
      'normal.na': 'nicht berechenbar',

      'card.gk': 'Gauß‑Krüger (DHDN)',
      'gk.row': 'Streifen {zone} · EPSG:{epsg}',
      'gk.auto': '· automatisch',
      'gk.value': 'R {e} · H {n} m',
      'gk.note': 'Automatisch wird der nächstgelegene 3°-Streifen hervorgehoben. Die Transformation nutzt die bundesweite 7‑Parameter-Näherung; für amtliche Dezimeter-Genauigkeit ist das BeTA2007-Gitter erforderlich.',

      'ref.title': 'Prüfung gegen amtlichen Kontrollpunkt',
      'ref.target': 'Soll: UTM 33U 424122,72 / 5755180,43 m, h 94,04 m, H 53,03 m.',
      'ref.deviation': 'Abweichung: UTM E {de} m · N {dn} m · DHHN2016 {dh} m.',

      'manual.summary': 'Koordinate manuell prüfen',
      'manual.lat': 'Breite',
      'manual.latAria': 'Breitengrad',
      'manual.lon': 'Länge',
      'manual.lonAria': 'Längengrad',
      'manual.go': 'Umrechnen',

      'disclaimer': 'Koordinaten sind eine Orientierungshilfe, kein Vermessungsnachweis. Für kartografische Anwendungen werden WGS 84 und ETRS89 gleichgesetzt.',

      'footer.apps': 'Weitere Apps',
      'footer.author': 'Ein Werkzeug von Michael Radeck',
      'footer.linksAria': 'Datenquellen, Hilfe und rechtliche Hinweise',
      'footer.gcg': 'GCG2016 © GeoBasis-DE / BKG · CC BY 4.0',
      'footer.bkg': 'BKG Koordinatentransformation',
      'footer.support': 'Hilfe / Bugreport / Kontakt',
      'footer.licenses': 'Lizenzen / Copyright',
      'footer.imprint': 'Impressum',
      'footer.kofiAria': 'Michael Radeck auf Ko-fi unterstützen',
      'footer.source': 'Quellcode',
      'footer.version': 'Version {v}',

      'support.intro': 'Fragen zur Bedienung, einen Fehler gefunden oder eine Idee für die App?',
      'support.help': 'Anleitung (README) öffnen',
      'support.bugreport': 'Bugreport per E-Mail',
      'support.contact': 'Kontakt per E-Mail',
      'support.bugHint': 'Für einen Bugreport helfen die Schritte zum Fehler, die erwartete und tatsächliche Reaktion sowie Gerät, Browser und Betriebssystem. Die App-Version steht bereits im E-Mail-Betreff.',
      'support.privacy': 'Öffnet dein E-Mail-Programm. Die App versendet nichts selbst und hängt keine Standortdaten an. Bitte den eigenen Standort nur freiwillig teilen.',
      'support.bugSubject': 'Bugreport',
      'support.contactSubject': 'Kontakt / Hilfe',
      'support.bugBody': 'Schritte zum Fehler:\n\nErwartetes Ergebnis:\n\nTatsächliches Ergebnis / Fehlermeldung:\n\nGerät, Browser und Betriebssystem:',
      'dialog.close': 'Schließen',

      'lic.intro': 'Die App enthält keine fremden Programmbibliotheken. Verwendete Daten und Dienste:',
      'lic.component': 'Komponente',
      'lic.license': 'Lizenz',
      'lic.use': 'Verwendung',
      'lic.app': 'GPS / UTM Converter',
      'lic.appUse': 'diese App (Quellcode unter MIT-Lizenz, siehe Datei LICENSE)',
      'lic.gcg': 'Geoidundulation für die DHHN2016-Normalhöhe (Webraster, auf Zentimeter gerundet)',
      'lic.gcgHolder': '© GeoBasis-DE / BKG (2026)',
      'lic.transform': 'Transformationsparameter',
      'lic.transformUse': 'bundesweite 7-Parameter-Näherung DHDN ↔ ETRS89 nach BKG',
    },

    en: {
      'app.title': 'Coordinates',
      'app.tagline': 'WGS 84 to ETRS89 / UTM, Gauss–Krüger and DHHN2016',
      'lang.toggle': 'Language: English — switch to German',
      'theme.auto': 'Interface: automatic (system setting) — click for light',
      'theme.light': 'Interface: light — click for dark',
      'theme.dark': 'Interface: dark — click for automatic',

      'btn.gps': '◎ Capture GPS position',
      'btn.gpsStop': '■ Stop GPS',
      'btn.reference': 'Lübben check point',

      'status.ready': 'Ready – location access starts only after you tap.',
      'status.noApi': 'This device does not provide a location API.',
      'status.paused': 'Live updates paused.',
      'status.locating': 'Determining GPS position…',
      'status.live': 'Live · updated {time}',
      'status.denied': 'Location access was not allowed.',
      'status.unavailable': 'GPS position is currently unavailable.',
      'status.reference': 'Official Lübben control point loaded.',
      'status.manual': 'Manual coordinate converted.',
      'status.invalid': 'Please enter a valid latitude and longitude.',
      'status.copied': 'Coordinate copied.',
      'status.query': 'Map position from link converted.',

      'utm.meta': 'Zone {zone} · EPSG:{epsg} · zone prefix {prefixed}',
      'card.geo': 'WGS 84 / ETRS89 geographic',
      'row.decimal': 'Decimal',
      'row.lat': 'Latitude',
      'row.lon': 'Longitude',
      'row.accuracy': 'GPS accuracy',
      'acc.value': '± {v} m horizontal',
      'acc.na': 'not available',

      'card.heights': 'Heights',
      'row.ellHeight': 'Ellipsoidal h',
      'heights.note': 'H = h − ζ. A phone GPS height is often much less accurate than the position and may be missing.',
      'ell.missing': 'not provided by the device',
      'geoid.loading': 'loading…',
      'geoid.outside': 'outside the Germany grid',
      'geoid.failed': 'GCG2016 could not be loaded – please reload the page',
      'normal.calc': 'calculating…',
      'normal.noAlt': 'cannot be computed without GPS height',
      'normal.na': 'cannot be computed',

      'card.gk': 'Gauss–Krüger (DHDN)',
      'gk.row': 'Zone {zone} · EPSG:{epsg}',
      'gk.auto': '· automatic',
      'gk.value': 'E {e} · N {n} m',
      'gk.note': 'The nearest 3° zone is highlighted automatically. The transformation uses the nationwide 7-parameter approximation; official decimetre accuracy requires the BeTA2007 grid.',

      'ref.title': 'Check against official control point',
      'ref.target': 'Expected: UTM 33U 424,122.72 / 5,755,180.43 m, h 94.04 m, H 53.03 m.',
      'ref.deviation': 'Deviation: UTM E {de} m · N {dn} m · DHHN2016 {dh} m.',

      'manual.summary': 'Check a coordinate manually',
      'manual.lat': 'Latitude',
      'manual.latAria': 'Latitude',
      'manual.lon': 'Longitude',
      'manual.lonAria': 'Longitude',
      'manual.go': 'Convert',

      'disclaimer': 'Coordinates are a guide for orientation, not a survey record. For mapping purposes WGS 84 and ETRS89 are treated as identical.',

      'footer.apps': 'More apps',
      'footer.author': 'A tool by Michael Radeck',
      'footer.linksAria': 'Data sources, help and legal information',
      'footer.gcg': 'GCG2016 © GeoBasis-DE / BKG · CC BY 4.0',
      'footer.bkg': 'BKG coordinate transformation',
      'footer.support': 'Help / bug report / contact',
      'footer.licenses': 'Licenses / copyright',
      'footer.imprint': 'Imprint',
      'footer.kofiAria': 'Support Michael Radeck on Ko-fi',
      'footer.source': 'Source code',
      'footer.version': 'Version {v}',

      'support.intro': 'Questions about the app, found a bug or have an idea?',
      'support.help': 'Open guide (README)',
      'support.bugreport': 'Report a bug by email',
      'support.contact': 'Contact by email',
      'support.bugHint': 'For bug reports, include steps to reproduce, expected and actual behaviour, plus your device, browser and operating system. The app version is already in the email subject.',
      'support.privacy': 'Opens your email application. The app does not send anything itself and attaches no location data. Please share your own location only voluntarily.',
      'support.bugSubject': 'Bug report',
      'support.contactSubject': 'Contact / help',
      'support.bugBody': 'Steps to reproduce:\n\nExpected result:\n\nActual result / error message:\n\nDevice, browser and operating system:',
      'dialog.close': 'Close',

      'lic.intro': 'The app contains no third-party program libraries. Data and services used:',
      'lic.component': 'Component',
      'lic.license': 'License',
      'lic.use': 'Used for',
      'lic.app': 'GPS / UTM Converter',
      'lic.appUse': 'this app (source code under the MIT License, see the LICENSE file)',
      'lic.gcg': 'geoid undulation for the DHHN2016 normal height (web grid, rounded to centimetres)',
      'lic.gcgHolder': '© GeoBasis-DE / BKG (2026)',
      'lic.transform': 'Transformation parameters',
      'lic.transformUse': 'nationwide 7-parameter approximation DHDN ↔ ETRS89 according to BKG',
    },
  };

  let lang = 'de';
  try {
    const stored = root.localStorage && root.localStorage.getItem('gps2utm.lang');
    if (stored === 'de' || stored === 'en') lang = stored;
    else if (root.navigator) lang = /^de\b/i.test(root.navigator.language || '') ? 'de' : 'en';
  } catch (_) { /* ohne Speicher: Browsersprache */ }
  const listeners = new Set();

  function t(key, params) {
    const dict = TEXT[lang] || TEXT.de;
    let s = dict[key] ?? TEXT.de[key] ?? key;
    if (params) s = s.replace(/\{(\w+)\}/g, (m, k) => (params[k] !== undefined ? String(params[k]) : m));
    return s;
  }
  function getLanguage() { return lang; }
  function setLanguage(next) {
    lang = next === 'en' ? 'en' : 'de';
    listeners.forEach(fn => fn(lang));
  }
  function onLanguageChange(fn) { listeners.add(fn); return () => listeners.delete(fn); }
  function locale() { return lang === 'en' ? 'en-GB' : 'de-DE'; }

  const api = { TEXT, t, getLanguage, setLanguage, onLanguageChange, locale };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.I18N = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
