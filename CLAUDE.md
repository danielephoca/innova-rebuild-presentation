# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project overview

Standalone React + Vite fullscreen presentation app for Innova managers, explaining the migration to Claude Code + MCP infrastructure. Presented live by Daniel Saul in a browser, fullscreen. No server, no WordPress, no Cloudflare. GitHub: `ephoca-org/innova-presentation`.

All branding is Innova only. No Ephoca references in visible content.

---

## Commands

```bash
npm install
npm run dev      # development server
npm run build    # outputs to dist/
```

Open in Chrome. Press F11 for fullscreen before presenting.

---

## Tech stack

- React 18 + Vite
- framer-motion (all animations)
- Tailwind CSS with custom Innova tokens
- react-icons (fa, md, hi sets)
- No UI component libraries, no backend, no API calls, no database

---

## File structure

```
src/
  main.jsx
  App.jsx
  slideshow/
    Slideshow.jsx       # shell, keyboard nav, persistent UI
    Navigation.jsx
    Overview.jsx        # O key: 2x4 thumbnail grid
    PresenterNotes.jsx  # P key: slides up from bottom
  slides/
    index.js
    Slide01Cover.jsx    # one file per slide
    ...
  components/
    AnimatedCard.jsx
    StatCallout.jsx
    FlowDiagram.jsx
    Timeline.jsx
    CompareTable.jsx
    InnovaButton.jsx
    InnovaLogo.jsx
  styles/
    globals.css
  data/
    slides-meta.js      # speaker notes, 2-4 bullets per slide
```

---

## Brand: Innova

### Colors

```
Primary green:   #009883   hover: #2DB9A5   dark: #007F6D
Light variants:  #D9F2EF (light)   #B0E4DD (press)

Slide dark theme:
  bg:        #060F0E
  surface:   #0D1A18
  surface-2: #132420
  border:    #1A3330
  text:      #F0FAF8
  muted:     #6B9E98
  warning:   #BA7517
```

No purple, orange, or red accents. Innova is green only.

### Typography

Font: **Poppins only** (400/500/600/700). Import from Google Fonts. Never mix with Inter, Sora, or any other font.

| Element            | Size  | Weight |
|--------------------|-------|--------|
| Slide title hero   | 52px  | 600    |
| Slide title normal | 44px  | 600    |
| Section header     | 24px  | 600    |
| Sub headline       | 20px  | 600    |
| Body text          | 16px  | 400    |
| Captions           | 13px  | 400    |
| Stat callout num   | 64px  | 700    |

### Tailwind tokens

```js
// tailwind.config.js
colors: {
  innova: {
    green: '#009883', hover: '#2DB9A5', dark: '#007F6D',
    light: '#D9F2EF', press: '#B0E4DD', gray: '#999999',
    stoneGray: '#767676', mistGray: '#B3B3B3', silver: '#D9D9D9',
  },
  slide: {
    bg: '#060F0E', surface: '#0D1A18', surface2: '#132420',
    border: '#1A3330', text: '#F0FAF8', muted: '#6B9E98',
  }
}
```

---

## Design system

### Slide background (all slides)

```css
.slide-root {
  width: 100vw; height: 100vh;
  background-color: #060F0E;
  background-image: radial-gradient(#1A3330 1px, transparent 1px);
  background-size: 28px 28px;
  font-family: 'Poppins', sans-serif;
  color: #F0FAF8;
  overflow: hidden;
}
```

No gradient backgrounds. No accent lines under titles.

### Cards

```css
background: #0D1A18;
border: 1px solid #1A3330;
border-radius: 12px;
padding: 28px 32px;
/* Left accent variant: */ border-left: 3px solid #009883;
/* Top accent variant:  */ border-top:  3px solid #009883;
```

### Buttons (InnovaButton)

All buttons: `border-radius: 6px`, Poppins 400 16px.
- Size lg: `padding: 15px 45px`, height 59px
- Size sm: `padding: 12px 32px`, height 47px

Variants: `primary` | `secondary` | `outline` | `outlineGrey` | `grey`
Props: `variant`, `size`, `arrow` (bool), `disabled`, `onClick`

---

## Animations (framer-motion)

- Slide entrance: fade + `translateY(20px → 0)`, 0.4s easeOut
- Stagger children: 0.12s delay between items
- Card entrance: `scale(0.97 → 1.0)`
- Stat counters: count up from 0, 1.2s, on slide enter
- Diagram lines: `pathLength(0 → 1)`, 0.6s, sequential
- Hover on cards: `scale(1.02)`, border-color → #009883

**Trigger via `isActive` prop. Animate when `isActive` becomes true. Never re-trigger on revisit.**

---

## Slideshow shell

### Keyboard navigation

| Key         | Action                        |
|-------------|-------------------------------|
| Right/Space | Next slide                    |
| Left        | Previous slide (no loop)      |
| O           | Overview (2x4 thumbnail grid) |
| P           | Presenter Notes panel         |
| F           | Fullscreen toggle             |
| Escape      | Close any open panel          |

### Persistent UI (all slides)

- Top left: `<InnovaLogo size="sm" />`
- Top right: Fullscreen toggle (outline button, Innova green)
- Bottom right: "3 / 8" counter, Poppins 13px, color `#6B9E98`
- Top edge: Progress bar, height 3px, color `#009883`, width = `currentSlide/total * 100%`

### InnovaLogo placeholder

```jsx
export default function InnovaLogo({ size = 'md' }) {
  const sizes = { sm: { box: 24, font: 12, text: 14 }, md: { box: 32, font: 16, text: 18 }, lg: { box: 44, font: 22, text: 24 } }
  const s = sizes[size]
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ width: s.box, height: s.box, borderRadius: 8, background: '#009883', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#fff', fontFamily: 'Poppins', fontWeight: 700, fontSize: s.font }}>I</span>
      </div>
      <span style={{ color: '#F0FAF8', fontFamily: 'Poppins', fontWeight: 600, fontSize: s.text }}>Innova</span>
    </div>
  )
}
```

---

## Reusable components

| Component      | Key props                                                                 |
|----------------|---------------------------------------------------------------------------|
| AnimatedCard   | `children`, `delay` (s), `accent` (bool), `accentTop` (bool)             |
| StatCallout    | `value` (string), `label`, `color` (default #009883) — counts up if int  |
| Timeline       | `phases: [{ label, title, desc, status: 'active'|'upcoming' }]`          |
| FlowDiagram    | `nodes: [{ id, label, tooltip, position }]` — pure SVG, hub-and-spoke    |
| CompareTable   | `rows: [{ label, before, after }]` — stagger animation, green right col  |

FlowDiagram: no external diagram libraries. Center node larger with #009883 fill. Spoke lines animate pathLength.

---

## Speaker notes (slides-meta.js)

```js
export const slidesMeta = [
  { id: 'cover', title: 'Cover', notes: ['...spoken sentence...'] }
]
```

2-4 bullets per slide, written as spoken sentences. First person for Daniel Saul only.

---

## Audience and language rules

Audience: Zev (CEO), Pearly (COO), Moishy (Web Dev Manager), others with zero technical knowledge.

**Benefits before mechanics on every slide.**

### Banned words

`MCP`, `API`, `PHP`, `SSH`, `OOM`, `WAF`, `CLI`, `DNS`, `nginx`, `MySQL`, `droplet`, `vhost`, `cron`, `FPM`

### Translation table

| Avoid           | Use instead                                      |
|-----------------|--------------------------------------------------|
| MCP             | AI connector                                     |
| API             | connection between systems                       |
| SSH             | secure access to the server                      |
| Nginx / PHP-FPM | the software that runs the websites              |
| MySQL           | the database that stores all site data           |
| Cloudflare WAF  | the security filter that blocks attacks          |
| OOM crash       | the server ran out of memory and stopped working |
| Droplet         | our cloud server                                 |
| Claude Code     | our AI co-engineer                               |

---

## Output rules

- No em dashes. Use commas, colons, or split the sentence.
- Innova: always capitalized.
- Claude Code: always two words, both capitalized.
- Company name: Innova only. Never Ephoca in visible content.
- Israel time for any dates (NYC/EDT + 6 hours = IST).

## What NOT to build

- No backend, authentication, or external data fetching
- No auto-play timers, sound, or laggy transitions
- No accent lines under titles
- No gradient backgrounds
- No fonts other than Poppins
