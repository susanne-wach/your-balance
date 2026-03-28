# Your Balance – Vollständige Projekt-Dokumentation
**Susanne Wachter · your-balance.at**
Erstellt: März 2026 · Mit Claude Code

---

## INHALTSVERZEICHNIS

1. [Projekt-Überblick](#1-projekt-überblick)
2. [Design-System & Farben](#2-design-system--farben)
3. [Technische Infrastruktur](#3-technische-infrastruktur)
4. [Datei-Struktur](#4-datei-struktur)
5. [Seiten-Übersicht](#5-seiten-übersicht)
6. [Kontaktformular & ActiveCampaign](#6-kontaktformular--activecampaign)
7. [Analytics & Tracking](#7-analytics--tracking)
8. [SEO-Setup](#8-seo-setup)
9. [Änderungen vornehmen](#9-änderungen-vornehmen)
10. [Neue Seite erstellen](#10-neue-seite-erstellen)
11. [Neue Homepage von Grund auf – Schritt für Schritt](#11-neue-homepage-von-grund-auf--schritt-für-schritt)
12. [Wichtige Zugangsdaten & Links](#12-wichtige-zugangsdaten--links)

---

## 1. PROJEKT-ÜBERBLICK

**Was wurde gebaut:**
Eine vollständige, statische Website für Susanne Wachters Praxis „Your Balance" – ThetaHealing®, Akasha Reading, Bioresonanz, persönliche Begleitung.

**Technologie:**
- Reines HTML + CSS + JavaScript (kein WordPress, kein CMS)
- Hosting: GitHub Pages (kostenlos, schnell, zuverlässig)
- Domain: `your-balance.at` (registriert bei All-Inkl)
- Formular: ActiveCampaign (direkt eingebunden)

**Warum kein WordPress:**
- Kein monatlicher Hosting-Aufwand
- Kein Sicherheitsrisiko durch Plugins
- Sehr schnell (kein PHP, kein Server)
- Code bleibt privat (nicht öffentlich lesbar via „Quellcode anzeigen" auf Seiteninhalten)
- GitHub = automatisches Backup jeder Änderung

**Live-URL:** https://your-balance.at
**GitHub Repository:** https://github.com/susanne-wach/your-balance

---

## 2. DESIGN-SYSTEM & FARBEN

### Farbpalette (CSS Custom Properties)

| Variable | Hex | Verwendung |
|----------|-----|-----------|
| `--cream` | `#FBF7F0` | Seitenhintergrund |
| `--cream-dark` | `#F2EBE0` | Sektions-Hintergrund |
| `--nude` | `#E8DDD0` | Rahmen, Trennlinien |
| `--dark` | `#1C1208` | Navigation, dunkle Bereiche |
| `--gold` | `#C9A84C` | Hauptakzent, Buttons, Überschriften-Highlights |
| `--gold-light` | `#D4AF37` | Gold-Verläufe |
| `--gold-pale` | `#E8D08A` | Helle Gold-Töne |
| `--gold-ultra` | `#F7EDCC` | Sehr blasse Gold-Flächen |
| `--text` | `#2A1F0E` | Haupt-Textfarbe |
| `--text-dark` | `#1A1208` | Sehr dunkler Text |
| `--text-mid` | `#5C4B35` | Sekundärer Text, Beschreibungen |
| `--text-light` | `#8A7260` | Hints, Labels |
| `--white` | `#FFFFFF` | Cards, Boxen |

### Farbregel (energetisch)
> **Weiß dominiert. Gold als Atem. Magenta nur als Impuls.**
- Weiß / Cream = Klarheit + Weite
- Gold = Wärme + Seelenenergie
- Magenta `#dd3089` = Herzöffnung, nur punktuell einsetzen

### Typografie

| Variable | Schriftart | Verwendung |
|----------|-----------|-----------|
| `--serif` | Cormorant Garamond, Georgia | Überschriften (h1–h3), emotionale Texte |
| `--sans` | Montserrat, sans-serif | Fließtext, Labels, Buttons, Navigation |

**Schrift-Prinzip:**
- Große, elegante Serif-Überschriften (font-weight: 300 – sehr leicht!)
- Montserrat für alles Lesbare
- Letter-spacing bei Labels: `3px` in Großbuchstaben

### Gold-Verlauf (für Text-Highlights)
```css
background: linear-gradient(135deg, #9A7A10 0%, #C9A224 30%, #E8CE7A 60%, #C9A224 80%, #9A7A10 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### Buttons

```html
<!-- Gold-Button (Haupt-CTA) -->
<a href="..." class="btn btn-gold">Text</a>

<!-- Outline-Button (sekundär) -->
<a href="..." class="btn btn-outline">Text</a>

<!-- Mit Pfeil -->
<a href="..." class="btn btn-gold btn-arrow">Text</a>

<!-- Klein -->
<a href="..." class="btn btn-gold btn-sm">Text</a>

<!-- Groß -->
<a href="..." class="btn btn-gold btn-lg">Text</a>
```

### Ornament (Trennlinie mit ✦)
```html
<div class="ornament">
  <div class="ornament-line"></div>
  <div class="ornament-gem">✦</div>
  <div class="ornament-line"></div>
</div>
```

### Section-Label (kleine Beschriftung über Überschriften)
```html
<span class="section-label">Bezeichnung</span>
```

---

## 3. TECHNISCHE INFRASTRUKTUR

### GitHub Pages – Wie es funktioniert
1. Alle HTML/CSS/JS-Dateien liegen im Ordner `/Your Balance Homepage/`
2. Dieser Ordner ist ein Git-Repository → verknüpft mit GitHub
3. Bei jedem `git push` aktualisiert sich die Website automatisch (ca. 2 Min.)
4. GitHub Pages hostet die Seite kostenlos unter `susanne-wach.github.io`
5. Die eigene Domain `your-balance.at` wird per DNS-Eintrag darauf gezeigt

### DNS-Konfiguration (All-Inkl)
Bei All-Inkl sind folgende DNS-Einträge gesetzt:

**A-Records (für Root-Domain `your-balance.at`):**
```
@ → 185.199.108.153
@ → 185.199.109.153
@ → 185.199.110.153
@ → 185.199.111.153
```

**CNAME (für www):**
```
www → susanne-wach.github.io
```

### CNAME-Datei im Repo
Im Hauptordner liegt eine Datei namens `CNAME` (ohne Endung) mit dem Inhalt:
```
your-balance.at
```
Diese Datei ist zwingend notwendig damit GitHub Pages die eigene Domain erkennt.

### SSH-Zugang zu GitHub
- SSH-Key liegt auf dem Mac unter `~/.ssh/id_ed25519`
- Ist bei GitHub unter dem Account `susanne-wach` registriert
- Remote URL des Repos: `git@github.com:susanne-wach/your-balance.git`

---

## 4. DATEI-STRUKTUR

```
Your Balance Homepage/
│
├── index.html                    ← Startseite
├── ueber-mich.html               ← Über mich
├── angebote.html                 ← Angebots-Übersicht
├── einzeltermine.html            ← Einzeltermine
├── persoenliche-begleitung.html  ← Persönliche Begleitung
├── seelenpartner.html            ← Seelenpartner
├── online-kurse-*.html           ← Online-Kurse (2 Seiten)
├── blog.html                     ← Blog-Übersicht
├── blog-[thema].html             ← 18 Blog-Artikel
├── kontakt.html                  ← Kontaktseite mit Formular
├── danke.html                    ← Danke nach Kauf (ThriveCart)
├── danke-kontakt.html            ← Danke nach Kontaktanfrage
├── impressum.html                ← Impressum
├── datenschutz.html              ← Datenschutzerklärung
├── agb.html                      ← AGB
├── 404.html                      ← Fehlerseite
├── sitemap.xml                   ← Sitemap für Google
├── robots.txt                    ← Suchmaschinen-Anweisungen
├── CNAME                         ← Domain-Datei für GitHub Pages
├── .gitignore                    ← Ausgeschlossene Dateien
│
├── assets/
│   ├── css/
│   │   └── style.css             ← ALLE Styles (1 zentrale Datei)
│   ├── js/
│   │   └── main.js               ← Animationen, Navigation, Cursor
│   └── images/
│       ├── logo.png              ← Your Balance Logo
│       ├── favicon.svg           ← Browser-Icon (YB auf dunkelbraun)
│       ├── og-image.jpg          ← Standard-Bild für Social Media
│       ├── susanne-*.jpg/png     ← Fotos von Susanne
│       └── blog-*.jpg            ← Blog-Bilder
```

---

## 5. SEITEN-ÜBERSICHT

### Haupt-Seiten
| Seite | Datei | Zweck |
|-------|-------|-------|
| Startseite | `index.html` | Hero, Angebote, Über mich, Blog-Vorschau |
| Über mich | `ueber-mich.html` | Susannes Geschichte, Ausbildungen |
| Angebote | `angebote.html` | Übersicht aller Leistungen |
| Einzeltermine | `einzeltermine.html` | Buchungs-Seite |
| Pers. Begleitung | `persoenliche-begleitung.html` | Langzeit-Begleitung |
| Seelenpartner | `seelenpartner.html` | Seelenpartner-Thema |
| Online-Kurse | `online-kurse-*.html` | 2 Kurs-Seiten |
| Blog | `blog.html` | Übersicht aller Artikel |
| Kontakt | `kontakt.html` | Formular + Kontaktinfos |

### System-Seiten (noindex – Google findet sie nicht)
| Seite | Datei | Zweck |
|-------|-------|-------|
| Danke (Kauf) | `danke.html` | Nach ThriveCart-Kauf, Pixel: Purchase |
| Danke (Anfrage) | `danke-kontakt.html` | Nach Kontaktformular, Pixel: Lead |
| Impressum | `impressum.html` | Pflicht |
| Datenschutz | `datenschutz.html` | Pflicht |
| AGB | `agb.html` | Pflicht |
| 404 | `404.html` | Fehlerseite |

---

## 6. KONTAKTFORMULAR & ACTIVECAMPAIGN

### Wie es funktioniert
1. Besucherin füllt Formular auf `kontakt.html` aus
2. Daten werden per JSONP direkt an ActiveCampaign gesendet
3. Kontakt wird in AC angelegt (Liste: alle Listen)
4. Tag `Kontaktanfrage-Website` wird gesetzt
5. Automation „Anfrage über Homepage" feuert
6. Susanne bekommt Benachrichtigungs-E-Mail
7. Besucherin wird zu `danke-kontakt.html` weitergeleitet

### AC Custom Fields (Field IDs)
| Feld im Formular | AC Field ID | AC Merge Tag |
|-----------------|-------------|--------------|
| Thema (Dropdown) | `field[17]` | `%THEMA%` |
| Nachricht (Textarea) | `field[18]` | `%NACHRICHT%` |
| Format (Dropdown) | `field[19]` | `%FORMAT%` |

### AC Benachrichtigungs-Mail Template
```
Neue Terminanfrage über die Homepage:

Name: %FIRSTNAME% %LASTNAME%
E-Mail: %EMAIL%
Thema: %THEMA%
Nachricht: %NACHRICHT%
Format: %FORMAT%
```

### AC Formular-Daten (proc.php)
- **Account:** `your-balance61093.activehosted.com`
- **Form ID:** `23`
- **OR-Token:** `474cb6e1-c906-4c37-8b20-c89871964cb4`
- **Automation:** „Anfrage über Homepage" (Automation 51)

### ThriveCart → danke.html
Für Kurs-Käufe: Erfolgs-URL in ThriveCart auf folgendes setzen:
```
https://your-balance.at/danke.html?firstname={first_name}
```

---

## 7. ANALYTICS & TRACKING

### Google Analytics 4
- **Measurement ID:** `G-NPPS5VX6GB`
- Eingebunden auf allen Seiten
- Nur aktiv nach Cookie-Zustimmung (Cookiebot)

### Meta Pixel
- **Pixel ID:** `626079095228912`
- Nur aktiv nach Cookie-Zustimmung
- Events:
  - `PageView` → alle Seiten
  - `Purchase` → `danke.html` (nach Kauf)
  - `Lead` → `danke-kontakt.html` (nach Kontaktanfrage)

### Cookiebot (DSGVO)
- **Account ID:** `1726067f-291c-417e-8fe4-2ab4307108f3`
- Blockiert GA + Pixel automatisch bis zur Zustimmung
- Muss auf allen Seiten als erstes Script eingebunden sein

---

## 8. SEO-SETUP

### Was auf jeder Seite vorhanden ist
- `<title>` – eindeutig pro Seite
- `<meta name="description">` – 150-160 Zeichen
- `<link rel="canonical">` – verhindert Duplicate Content
- Open Graph Tags (`og:title`, `og:description`, `og:image` etc.)
- Twitter Card Tags
- Favicon (`assets/images/favicon.svg`)

### Zusätzlich auf Blog-Artikeln
- JSON-LD Schema (`@type: Article`) mit Autor, Datum, Publisher
- Strukturierte Daten für Google

### sitemap.xml
- Enthält alle 34 öffentlichen Seiten
- Prioritäten: Index 1.0, Blog-Übersicht 0.9, Artikel 0.8
- URL: `https://your-balance.at/sitemap.xml`
- In Google Search Console einreichen!

### robots.txt
- Blockiert: `danke.html`, `danke-kontakt.html`, `ai.html`
- Erlaubt alles andere
- Verweist auf sitemap.xml

---

## 9. ÄNDERUNGEN VORNEHMEN

### Voraussetzungen
- Terminal / Claude Code geöffnet
- Arbeitsverzeichnis: `/Users/susannewachter/Documents/Firma/Your Balance Homepage/`

### Text auf einer Seite ändern
1. Datei öffnen (z. B. `index.html`)
2. Text finden und ändern
3. Speichern
4. Im Terminal:
```bash
cd "/Users/susannewachter/Documents/Firma/Your Balance Homepage"
git add .
git commit -m "Text auf Startseite angepasst"
git push origin main
```
5. Ca. 2 Minuten warten → Änderung ist live

### Bild austauschen
1. Neues Bild in `assets/images/` kopieren
2. In der HTML-Datei den Dateinamen anpassen
3. Gleicher Git-Prozess wie oben

### Neuen Blog-Artikel hinzufügen
→ Siehe Abschnitt 10 „Neue Seite erstellen"

---

## 10. NEUE SEITE ERSTELLEN

### Blog-Artikel erstellen (Schritt für Schritt)

**Schritt 1: Bild vorbereiten**
- Format: JPG, ca. 1200×800px
- Dateiname: `blog-[thema].jpg` (z. B. `blog-stressabbau.jpg`)
- Ablegen in: `assets/images/`

**Schritt 2: HTML-Datei anlegen**
Kopiere eine bestehende Blog-Datei, z. B. `blog-theta-healing.html`, und speichere sie unter neuem Namen.

**Schritt 3: Diese Stellen anpassen:**
```html
<!-- Im <head>: -->
<title>TITEL DES ARTIKELS | Your Balance – Susanne Wachter</title>
<meta name="description" content="KURZBESCHREIBUNG (150 Zeichen)" />
<link rel="canonical" href="https://your-balance.at/blog-DATEINAME.html" />
<meta property="og:url" content="https://your-balance.at/blog-DATEINAME.html" />
<meta property="og:title" content="TITEL" />
<meta property="og:description" content="KURZBESCHREIBUNG" />
<meta property="og:image" content="https://your-balance.at/assets/images/blog-BILD.jpg" />

<!-- JSON-LD: -->
"headline": "TITEL",
"description": "KURZBESCHREIBUNG",
"image": "https://your-balance.at/assets/images/blog-BILD.jpg",
"url": "https://your-balance.at/blog-DATEINAME.html",
"datePublished": "2026-XX-XX",

<!-- Hero-Bild: -->
<img src="assets/images/blog-BILD.jpg" alt="BESCHREIBUNG" ... />

<!-- Artikel-Inhalt: -->
<h1>TITEL</h1>
<p>TEXT...</p>
```

**Schritt 4: Artikel in `blog.html` eintragen**
In der Blog-Übersicht eine neue Karte hinzufügen (bestehende Karte kopieren und anpassen).

**Schritt 5: In `sitemap.xml` eintragen**
```xml
<url>
  <loc>https://your-balance.at/blog-DATEINAME.html</loc>
  <lastmod>2026-XX-XX</lastmod>
  <priority>0.8</priority>
</url>
```

**Schritt 6: Pushen**
```bash
git add .
git commit -m "Neuer Blog-Artikel: TITEL"
git push origin main
```

---

## 11. NEUE HOMEPAGE VON GRUND AUF – SCHRITT FÜR SCHRITT

Falls du jemals eine komplett neue Website erstellst, hier die bewährte Vorgehensweise:

### Phase 1: Vorbereitung
- [ ] Ordner anlegen (lokal auf dem Mac)
- [ ] Unterordner: `assets/css/`, `assets/js/`, `assets/images/`
- [ ] Google Fonts einbinden (Cormorant Garamond + Montserrat)
- [ ] `style.css` mit CSS Custom Properties aufbauen (Farben, Fonts)
- [ ] `main.js` für Navigation, Loader, Cursor, Scroll-Effekte

### Phase 2: Seiten bauen
- [ ] `index.html` (Startseite) zuerst
- [ ] Navigation & Footer als wiederverwendbares Template
- [ ] Alle Unterseiten
- [ ] Blog-Artikel
- [ ] System-Seiten: `danke.html`, `danke-kontakt.html`, `impressum.html`, `datenschutz.html`, `agb.html`
- [ ] `404.html`
- [ ] `favicon.svg`

### Phase 3: Technisches Setup
- [ ] `sitemap.xml` erstellen (alle Seiten)
- [ ] `robots.txt` erstellen
- [ ] `CNAME` Datei erstellen (mit Domain-Name)
- [ ] `.gitignore` erstellen

### Phase 4: SEO
Auf jeder Seite einbauen:
- [ ] `<title>`
- [ ] `<meta name="description">`
- [ ] `<link rel="canonical">`
- [ ] Open Graph Tags
- [ ] Twitter Card Tags
- [ ] JSON-LD Schema (auf Blog-Artikeln)
- [ ] Favicon-Links

### Phase 5: Tracking einbauen
- [ ] Cookiebot Script (immer als ERSTES im `<head>`)
- [ ] Google Analytics 4 (mit `data-cookieconsent="statistics"`)
- [ ] Meta Pixel (mit `data-cookieconsent="marketing"`)
- [ ] Purchase-Event auf Danke-Seite
- [ ] Lead-Event auf Kontakt-Danke-Seite

### Phase 6: Formular einrichten
- [ ] In ActiveCampaign: neues Formular anlegen
- [ ] Custom Fields anlegen (Thema, Nachricht, Format)
- [ ] Field-IDs notieren (aus Embed-Code ablesen)
- [ ] Formular in `kontakt.html` einbauen (proc.php + JSONP)
- [ ] Automation in AC einrichten (Auslöser: Formular)
- [ ] Benachrichtigungs-E-Mail mit Merge-Tags konfigurieren
- [ ] Redirect zu `danke-kontakt.html` einbauen

### Phase 7: GitHub & Domain
```bash
# Im Projektordner:
git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:BENUTZERNAME/REPO-NAME.git
git branch -M main
git push -u origin main
```

Dann auf GitHub:
- [ ] Settings → Pages → Branch: main → Save
- [ ] Custom Domain eintragen
- [ ] „Enforce HTTPS" aktivieren

DNS bei All-Inkl:
- [ ] 4x A-Record: `185.199.108-111.153`
- [ ] CNAME: `www → BENUTZERNAME.github.io`
- [ ] Warten (bis zu 24h für DNS-Propagation)

### Phase 8: Go-Live Checkliste
- [ ] Website auf Handy testen
- [ ] Website auf iPad testen
- [ ] Formular testen (Testabsendung)
- [ ] Danke-Seiten testen
- [ ] GA4 in Real-Time prüfen
- [ ] Meta Pixel Helper im Browser testen
- [ ] Google Search Console: Sitemap einreichen
- [ ] `sitemap.xml` URL: `https://domain.at/sitemap.xml`

---

## 12. WICHTIGE ZUGANGSDATEN & LINKS

### Website & Hosting
| Was | Wert |
|-----|------|
| Live-URL | https://your-balance.at |
| GitHub Repo | https://github.com/susanne-wach/your-balance |
| GitHub Account | susanne-wach |
| Hosting | GitHub Pages (kostenlos) |
| Domain-Registrar | All-Inkl |

### Tracking & Analytics
| Was | ID / Wert |
|-----|----------|
| Google Analytics | `G-NPPS5VX6GB` |
| Meta Pixel | `626079095228912` |
| Cookiebot | `1726067f-291c-417e-8fe4-2ab4307108f3` |

### ActiveCampaign
| Was | Wert |
|-----|------|
| Account | `your-balance61093.activehosted.com` |
| Formular | Kontaktformular Website (Form ID 23) |
| Automation | Anfrage über Homepage (Nr. 51) |
| Field: Thema | `field[17]` / `%THEMA%` |
| Field: Nachricht | `field[18]` / `%NACHRICHT%` |
| Field: Format | `field[19]` / `%FORMAT%` |

### E-Mail
| Was | Adresse |
|-----|---------|
| Kontakt | susanne@your-balance.at |
| Benachrichtigungen | susanne@your-balance.at |

### Google Search Console
- Sitemap einreichen: https://search.google.com/search-console
- Sitemap-URL: `https://your-balance.at/sitemap.xml`

---

## SCHNELL-REFERENZ: GIT-BEFEHLE

```bash
# Zum Projektordner navigieren
cd "/Users/susannewachter/Documents/Firma/Your Balance Homepage"

# Status anzeigen (welche Dateien wurden geändert?)
git status

# Alle Änderungen stagen
git add .

# Commit erstellen
git commit -m "Beschreibung der Änderung"

# Live schalten (pushen)
git push origin main

# Alles auf einmal (wenn du sicher bist)
git add . && git commit -m "Änderung" && git push origin main
```

---

*Dokumentation erstellt mit Claude Code · März 2026*
