# Your Balance – Branding Guide
**Susanne Wachter · your-balance.at**
Referenz: Homepage your-balance.at (März 2026)

> Dieses Dokument ist die verbindliche Design-Vorlage für alle Materialien von Your Balance.
> Landingpages, PDFs, Präsentationen, Newsletter, Social Media – alles richtet sich nach diesem Guide.
> Die Homepage your-balance.at ist das Original. Alles andere folgt ihr.

---

## 1. FARBEN

### Primäre Hintergrundfarben
| Name | Hex | Verwendung |
|------|-----|-----------|
| Cream | `#FBF7F0` | **Standard-Hintergrund** – immer die Basis |
| Cream Dark | `#F2EBE0` | Abwechselnde Sektionen, sanfte Trennung |
| Nude | `#E8DDD0` | Rahmen, Trennlinien, Kartenränder |
| Weiß | `#FFFFFF` | Karten, Boxen auf Cream-Hintergrund |

### Akzentfarben – Gold
| Name | Hex | Verwendung |
|------|-----|-----------|
| Gold | `#C9A84C` | **Hauptakzent** – Buttons, Highlights, Icons |
| Gold Light | `#D4AF37` | Gold-Verläufe |
| Gold Pale | `#E8D08A` | Helle Gold-Elemente |
| Gold Ultra | `#F7EDCC` | Sehr blasse Gold-Flächen, Hintergründe |

### Dunkel-Töne (für Kontrast-Sektionen)
| Name | Hex | Verwendung |
|------|-----|-----------|
| Dark | `#1C1208` | Navigation, dunkle Hero-Sektionen, Footer |
| Dark Mid | `#2E2010` | Dunkelbraune Zwischentöne |

### Textfarben
| Name | Hex | Verwendung |
|------|-----|-----------|
| Text | `#2A1F0E` | **Standard-Fließtext** |
| Text Dark | `#1A1208` | Überschriften, starke Betonung |
| Text Mid | `#5C4B35` | Sekundärer Text, Beschreibungen |
| Text Light | `#8A7260` | Labels, Hints, kleine Texte |

### Farbregel
> **Cream dominiert immer. Gold ist der Atem. Dunkelbraun für Kontrast.**
- ✅ Cream/Weiß als Hauptfläche
- ✅ Gold sparsam als Akzent auf Elementen die Aufmerksamkeit brauchen
- ✅ Dunkelbraun (`#1C1208`) für dunkle Kontrast-Sektionen
- ❌ Gold nie als großflächiger Hintergrund
- ❌ Kein reines Schwarz (`#000000`) – immer Dunkelbraun verwenden
- ❌ Kein Grau als Designelement – nur Cream-Töne und Nude

### Gold-Verlauf (für Überschriften-Highlights & Buttons)
```
linear-gradient(135deg, #9A7A10 0%, #C9A224 30%, #E8CE7A 60%, #C9A224 80%, #9A7A10 100%)
```

---

## 2. TYPOGRAFIE

### Schriftarten
| Schrift | Quelle | Verwendung |
|---------|--------|-----------|
| **Cormorant Garamond** | Google Fonts | Alle Überschriften (H1–H3), emotionale Texte, Zitate |
| **Montserrat** | Google Fonts | Fließtext, Labels, Buttons, Navigation, alles Lesbare |

### Google Fonts Einbindung
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Schrift-Hierarchie
| Element | Schrift | Gewicht | Besonderheit |
|---------|---------|---------|--------------|
| H1 Haupttitel | Cormorant Garamond | 300 (Light!) | Groß, elegant, viel Luft |
| H2 Abschnittstitel | Cormorant Garamond | 300–400 | Ruhig, nicht fett |
| H3 Untertitel | Cormorant Garamond | 400 | |
| Fließtext | Montserrat | 400 | Zeilenhöhe 1.8–1.9 |
| Labels / Badges | Montserrat | 700 | GROSSBUCHSTABEN, 3px Abstand |
| Buttons | Montserrat | 600–700 | GROSSBUCHSTABEN, 2px Abstand |
| Zitate / Pullquotes | Cormorant Garamond | 300, kursiv | |

### Schrift-Prinzip
> Überschriften sind **leicht und groß** (font-weight: 300). Nie fett bei Überschriften.
> Emotionale Inhalte = Cormorant Garamond kursiv.
> Labels immer in GROSSBUCHSTABEN mit letter-spacing: 3px.

### Schriftgrößen (responsiv)
| Element | Größe |
|---------|-------|
| H1 | `clamp(38px, 5vw, 72px)` |
| H2 | `clamp(28px, 4vw, 48px)` |
| H3 | `clamp(20px, 2.5vw, 32px)` |
| Fließtext | `16px` |
| Labels | `10–11px` |
| Kleine Texte | `13–14px` |

---

## 3. LOGO & BILDER

### Logo
- **Datei:** `logo.png`
- **Verwendung:** Immer auf hellem Hintergrund (Cream/Weiß)
- **Auf dunklem Hintergrund:** Weiße Version verwenden (falls vorhanden) oder Logo auf Cream-Box platzieren
- **Nie:** Logo verzerren, einfärben oder mit Effekten versehen
- **Mindestgröße:** 120px Breite

### Favicon / Icon
- **Datei:** `favicon.svg`
- **Design:** „YB" in Cormorant Garamond, Gold auf Dunkelbraun (`#1C1208`), abgerundete Ecken
- **Verwendung:** Browser-Tab, App-Icons, kleine quadratische Repräsentationen

### Fotos von Susanne
Alle Fotos liegen unter `assets/images/`:

| Datei | Stimmung / Verwendung |
|-------|-----------------------|
| `susanne-hero.jpg` | Professionell, warm – ideal für Hero-Sektionen |
| `susanne-portrait.jpg` | Klassisches Portrait – Über-mich, Biografie |
| `susanne-smile.png` | Offen, einladend – Kontaktseite, persönliche Nähe |
| `susanne-warm.png` | Warm, authentisch – Newsletter, persönliche Texte |
| `susanne-blazer.png` | Professionell – Angebote, Kurse |
| `susanne-outdoor.jpg` | Natürlich, leicht – Blog, Social Media |
| `susanne-sunset.png` | Emotional, stimmungsvoll – Hero, emotionale Sektionen |
| `susanne-herz.webp` | Herzlich, nah – persönliche Begleitung |
| `susanne-reel.jpg` | Dynamisch – Social Media, Video-Thumbnails |

### Atmosphären-Bilder
| Datei | Verwendung |
|-------|-----------|
| `woman-beach.jpg` | Weite, Leichtigkeit |
| `woman-lake.png` | Ruhe, Tiefe |
| `woman-serene.png` | Stille, Klarheit |
| `woman-walk.jpg` | Aufbruch, Bewegung |
| `meditation-beach.png` | Spiritualität, Stille |
| `visual-break.webp` | Dekorative Trenner |

### Bild-Prinzip
> Alle Bilder wirken **warm, natürlich, geerdet**. Keine kalten Filter, kein helles Blau.
> Cream- und Goldtöne im Bild bevorzugen.
> Bilder zeigen **echte Menschen in echten Momenten** – keine Stockfoto-Ästhetik.

---

## 4. DESIGN-ELEMENTE

### Ornament (Trennlinie)
Das Ornament ist das Markenelement von Your Balance – es trennt Sektionen elegant.
```
── ✦ ──
```
**In HTML:**
```html
<div style="display:flex; align-items:center; gap:14px; justify-content:center; margin:32px 0;">
  <div style="flex:1; max-width:80px; height:1px; background:linear-gradient(90deg, transparent, #C9A84C);"></div>
  <span style="color:#C9A84C; font-size:14px;">✦</span>
  <div style="flex:1; max-width:80px; height:1px; background:linear-gradient(270deg, transparent, #C9A84C);"></div>
</div>
```
**In Canva/Word:** Dünne Linie links, ✦ Zeichen in Gold, dünne Linie rechts.

### Section-Label (Kleine Beschriftung)
Über jeder Hauptüberschrift steht ein kleines Label:
```
DEINE REISE BEGINNT HIER
```
- Montserrat, 700, 10px, GROSSBUCHSTABEN, letter-spacing: 3px, Farbe: Gold `#C9A84C`

### Buttons

**Gold-Button (Haupt-CTA):**
- Hintergrund: Gold-Verlauf
- Textfarbe: Dunkelbraun `#1C1208`
- Schrift: Montserrat 700, GROSSBUCHSTABEN, 2px Abstand
- Rahmen: keiner
- Ecken: vollständig rund (`border-radius: 100px`)
- Padding: 16px oben/unten, 36px links/rechts

**Outline-Button (Sekundär):**
- Hintergrund: transparent
- Rand: 1.5px, Farbe Nude/Dark
- Textfarbe: Dunkelbraun
- Gleiche Form wie Gold-Button

### Karten / Cards
- Hintergrund: Weiß `#FFFFFF`
- Rand: 1px, Nude `#E8DDD0`
- Ecken: 12–16px abgerundet
- Schatten: `0 4px 20px rgba(0,0,0,0.06)` (sehr dezent)
- Padding: 24–32px

### Highlight-Box (Gold-Rahmen)
Für besondere Zitate, emotionale Momente, wichtige Aussagen:
- Hintergrund: `rgba(201,168,76,0.05)` (Gold, fast transparent)
- Rand: 1px, `rgba(201,168,76,0.25)`
- Ecken: 14–16px
- Text: Cormorant Garamond, kursiv, 300

### Dunkle Sektion
Für Kontrast-Bereiche (z.B. Preis, CTA am Ende):
- Hintergrund: `#1C1208` (Dunkelbraun)
- Überschriften: Gold `#C9A84C`
- Text: `rgba(255,255,255,0.7)`
- Labels: `rgba(201,168,76,0.7)`

---

## 5. ABSTÄNDE & LAYOUT

### Weißraum-Prinzip
> **Viel Luft ist kein leerer Raum – es ist Eleganz.**
> Lieber zu viel als zu wenig Abstand zwischen Elementen.

### Standard-Abstände
| Element | Abstand |
|---------|---------|
| Zwischen Sektionen | 80–120px |
| Zwischen H1 und erstem Text | 24–32px |
| Zwischen Absätzen | 16–20px |
| Innen in Karten | 24–32px |
| Zwischen Karten | 16–20px |

### Max-Breite
- Hauptinhalt: `max-width: 1200px`, zentriert
- Textspalten (lesbare Breite): `max-width: 680–780px`
- Immer `padding: 0 24px` auf mobilen Geräten

### Grid-System
- 2-spaltig: für Karten, Vorteile, Features
- 3-spaltig: für Steps, kleine Karten
- 1-spaltig auf Mobile (unter 600px)

---

## 6. CANVA – UMSETZUNG

### Farbpalette in Canva speichern
1. In Canva: Markenkit → Neue Farbe hinzufügen
2. Diese Farben anlegen:
   - `#FBF7F0` – Cream (Hintergrund)
   - `#C9A84C` – Gold (Akzent)
   - `#1C1208` – Dunkelbraun (Kontrast)
   - `#2A1F0E` – Text
   - `#5C4B35` – Text Sekundär
   - `#E8DDD0` – Nude (Linien)

### Schriften in Canva
- Überschriften: **Cormorant Garamond** (in Canva verfügbar)
- Text: **Montserrat** (in Canva verfügbar)

### Canva-Vorlage Grundstruktur
1. Hintergrund: Cream `#FBF7F0`
2. Oben: Logo + kleines Label in Gold
3. Hauptüberschrift: Cormorant Garamond, 300, groß
4. Ornament: ── ✦ ──
5. Inhalt in Karten oder Fließtext
6. Gold-Button als CTA
7. Unten: Signatur „Susanne · Your Balance"

---

## 7. NEWSLETTER (ACTIVECAMPAIGN)

### Farben im Newsletter
- Hintergrund: `#FBF7F0` (Cream)
- Textbereich-Hintergrund: `#FFFFFF`
- Akzentfarbe: `#C9A84C` (Gold)
- Text: `#2A1F0E`
- Links: `#C9A84C`

### Schriften im Newsletter
- Überschriften: Georgia (Serif-Fallback für E-Mail, da Cormorant Garamond in E-Mails nicht immer lädt)
- Fließtext: Arial oder Helvetica (Sans-Fallback für E-Mail)
- Zeilenhöhe: 1.8

### Newsletter-Struktur
1. **Header:** Logo zentriert, Cream-Hintergrund
2. **Begrüßung:** Persönlich, z.B. „Liebe [Vorname],"
3. **Hauptinhalt:** Weißer Hintergrund-Block, gut lesbar
4. **Ornament:** ── ✦ ──
5. **CTA-Button:** Gold, zentriert
6. **Signatur:** „Von Herzen, Susanne" + kleines Logo
7. **Footer:** Dunkelbraun `#1C1208`, Abmelde-Link, Adresse

---

## 8. PDFs & ARBEITSBLÄTTER

### Seitenaufbau
- Hintergrund: Cream `#FBF7F0`
- Ränder: 2cm rundum
- Header jeder Seite: Logo links, Seitentitel rechts (klein, Gold)
- Footer: „Your Balance · susanne@your-balance.at" (klein, Text Mid)

### Typografie im PDF
- H1: Cormorant Garamond, 300, 28–36pt
- H2: Cormorant Garamond, 400, 20–24pt
- Fließtext: Montserrat, 400, 11–12pt, Zeilenhöhe 1.7
- Labels: Montserrat, 700, 8pt, GROSSBUCHSTABEN

### Boxen im PDF
- Wichtige Infos: Gold-Rand links (3pt), Cream-Hintergrund
- Übungen/Aufgaben: Weißer Hintergrund, Nude-Rand
- Zitate: Cormorant Garamond kursiv, eingerückt

---

## 9. SOCIAL MEDIA

### Formate
| Format | Größe | Verwendung |
|--------|-------|-----------|
| Feed-Post | 1080×1080px | Instagram, Facebook |
| Story/Reel-Cover | 1080×1920px | Instagram Stories |
| Pinterest | 1000×1500px | Blog-Inhalte |

### Social Media Design-Prinzip
- Immer Cream oder Weiß als Hintergrund
- Maximal 2 Schriften (Cormorant + Montserrat)
- Gold-Akzent nur auf einem Element pro Bild
- Viel Weißraum – nicht überladen
- Susannes Fotos zeigen echte, warme Momente
- Ornament ✦ als wiederkehrendes Element

### Profilbild
- Susannes Portrait, warm und authentisch
- Kreisausschnitt, kein Filter

---

## 10. STIMME & ENERGIE DES DESIGNS

### Wofür steht das Design?
- **Klarheit** – viel Raum, keine Überladung
- **Wärme** – Cream-Töne, warme Fotos, Gold
- **Tiefe** – elegante Serif-Schriften, Stille im Layout
- **Echtheit** – keine perfekte Hochglanz-Ästhetik, echte Momente

### Was das Design NICHT ist
- ❌ Bunt oder schrill
- ❌ Minimalistisch-kalt (kein Schwarz-Weiß-Business-Look)
- ❌ Verspielt oder kindlich
- ❌ Überladen mit Elementen
- ❌ Corporate oder distanziert

### Kurz-Check vor jeder Veröffentlichung
Bevor du ein Design veröffentlichst, frage dich:
1. ✅ Cream-Hintergrund vorhanden?
2. ✅ Cormorant Garamond für Überschriften?
3. ✅ Gold nur als Akzent, nicht dominant?
4. ✅ Genug Weißraum?
5. ✅ Logo sichtbar?
6. ✅ Wirkt es warm, ruhig und professionell?

---

## KURZREFERENZ FÜR KI-TOOLS

Wenn du eine KI bittest etwas zu gestalten, kopiere diesen Block als Anweisung:

```
Branding Your Balance – Susanne Wachter:
- Hintergrund: Cream #FBF7F0
- Akzentfarbe: Gold #C9A84C
- Dunkel: #1C1208 (Dunkelbraun, kein Schwarz)
- Text: #2A1F0E
- Überschriften: Cormorant Garamond, Gewicht 300 (leicht!), groß
- Fließtext: Montserrat, 400
- Labels: Montserrat 700, GROSSBUCHSTABEN, letter-spacing 3px
- Buttons: Gold-Verlauf, runde Ecken, Dunkelbraun-Text
- Stil: warm, ruhig, elegant, viel Weißraum, keine grellen Farben
- Ornament: ── ✦ ── als Trenner zwischen Sektionen
- Referenz: your-balance.at
```

---

*Branding Guide erstellt März 2026 · Your Balance – Susanne Wachter*
