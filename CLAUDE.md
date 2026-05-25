# Your Balance – Projektgedächtnis für Claude

## Projekt
- **Website:** https://www.your-balance.at
- **Inhaberin:** Susanne Wachter, Nüziders, Vorarlberg
- **Hosting:** GitHub Pages
- **Git Remote:** `github.com:susanne-wach/your-balance.git`
- **Projektordner:** `/Users/susannewachter/Documents/04_Homepage/Your-Balance-Homepage/`

---

## Neues Branding (aktuell, Mai 2026)

### Farben (CSS-Variablen via `assets/css/style.css`)
```
--cream:        #FBF5EC
--cream-dark:   #F3EBDC
--nude:         #E8DDD0
--dark:         #5B2A4A        ← LILA/BURGUND (NICHT mehr braun!)
--gold:         #CFAC5E
--gold-pale:    #E9D7A4
--gold-ultra:   #F7EDCC
--text:         #5B2A4A
--text-mid:     #7E5E72
--text-light:   #A98FA0
--serif:        'Cormorant Garamond', Georgia, serif
--sans:         'Montserrat', sans-serif
```

### Logo-Dateien (alle in `assets/images/`)
| Datei | Verwendung |
|-------|-----------|
| `logo-neu-dunkel.png` | Footer, Loader |
| `logo-neu-hell.png` | (helle Hintergründe) |
| `logo-neu-quer-dunkel.png` | Nav – unscrolled (`.nav-logo--top`) |
| `logo-neu-quer-hell.png` | Nav – scrolled (`.nav-logo--scrolled`) |
| `favicon-neu.png` | Favicon – lila/burgund YB-Monogramm |

### Nav-Dropdown (Hintergrundfarbe)
```css
background: #5B2A4A;   /* lila, NICHT dunkelbraun */
```

### Referenz-Design
Für neue Seiten immer `danke-kontakt.html` oder `danke-emotional-stability.html` als Vorlage nehmen – die zeigen das aktuelle Branding korrekt.

---

## Tracking

### Regel: Cookiebot
- **Hauptseiten:** Cookiebot Blocking Mode + `type="text/plain" data-cookieconsent="statistics"`
- **Produkt-Landingpages + Danke-Seiten:** KEIN Cookiebot – GA4 + Pixel feuern direkt

### IDs
- **GA4:** `G-NPPS5VX6GB`
- **Meta Pixel:** `626079095228912`
- **Cookiebot:** `1726067f-291c-417e-8fe4-2ab4307108f3`

---

## Wichtige URLs

### ThriveCart (Kauf-Links)
- `/21-tage-meditationsreise-n/`
- `/herzerinnerung-dein-kompass-n/`
- `/halt/`
- `/buch-je-nher-du-kommst-n/`
- `/warum-rckzug-dich-aus-der-bahn-wirft/`
- Basis: `https://your-balance.thrivecart.com/`

### Calendly
- ThetaHealing: `https://calendly.com/your-balance/thetahealing-persoenliche-begleitung`
- Akasha Reading: `https://calendly.com/your-balance/akasha_reading`
- Bioresonanz: `https://calendly.com/your-balance/bioresonanz`
- Alle Optionen: `https://calendly.com/your-balance`

### ActiveCampaign (JSONP via proc.php)
- Newsletter: `u=21 / f=21`
- Kontakt: `u=23 / f=23`
- Seelenverbindung Workbook: `u=1 / f=1`
- Herzöffnungs-Kompass: `u=29 / f=29`
- Basis: `https://your-balance61093.activehosted.com/`

---

## Technisches

### Git-Probleme mit Lock Files
```bash
find .git -name "*.lock" -delete
GIT_INDEX_FILE=.git/index git commit -m "..."
```

### Seite pushen (Standard)
```bash
git add DATEI.html && git commit -m "Beschreibung" && git push
```

### CTAs: Kontakt vs. Buchung
- **Buchungs-Buttons** → immer auf Calendly (NICHT auf kontakt.html)
- **"Kontakt"-Links in Nav/Footer** → bleiben auf `kontakt.html`
- Text: "buchen" (NICHT "anfragen" bei allgemeinen Buttons)

---

## Bekannte Seiten

| Datei | Zweck |
|-------|-------|
| `danke-emotional-stability.html` | Danke-Seite nach Kauf Emotional Stability Analyse™ |
| `danke-kontakt.html` | Danke-Seite nach Kontaktformular |
| `yb-anmeldung-bestaetigt.html` | Bestätigung YB-Newsletter (nach DOI) |
| `bestaetigt.html` | Bestätigung Seelenpartner-Newsletter |
| `seelenverbindung-workbook.html` | Freebie-Landingpage Seelenverbindung-Workbook |
| `herzoeffnungs-kompass.html` | Freebie-Landingpage Herzöffnungs-Kompass |
