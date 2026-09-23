# PRO1 G40 — Aula Lliure

> Portal d'apunts, consells d'examen i exercicis resolts per a **PRO1 — Programació 1 (FIB-UPC)**.

**Web en producció:** <https://pro1-aula-lliure.vercel.app>

Portal **no oficial** de recursos complementaris creat per a l'aula lliure del grup G40. El contingut es basa en el temari oficial de l'assignatura.

## Característiques

- 📚 **Temari de 11 temes** amb teoria, errors típics i plantilles de C++ copiables (temes 1–6 al parcial, 7–11 al final).
- 🎯 **Exercicis resolts** amb enunciats, exemples, pistes, solucions i explicació pas a pas.
- 🧮 **Calculadora de notes interactiva** amb la fórmula d'avaluació `N = max(0,4 × P + 0,6 × F, F)`, incloent-hi quant necessites al Final per a un 5.0 o un 7.0.
- 🗓️ **Calendari de sessions** i **countdown** cap als exàmens de parcial i final.
- 🌗 **Mode clar/fosc** (persistit a `localStorage`).
- 🌐 **Multillenguatge**: català, castellà i anglès (canvi en temps real des del selector d'idioma).
- 🔍 **Cerca global** i **filtres** per àmbit (Tots / Parcial / Final) al temari.
- 🔒 **Contingut del Final bloquejat** automàticament fins a la data de l'examen (2026-10-30).
- 📱 Disseny responsive (mobile-first) amb Tailwind CSS.
- ⚡ Lloc **estàtic**, generat amb Astro (SSG).

## Tecnologies

| Tecnologia | Versió | Ús |
|---|---|---|
| [Astro](https://astro.build) | ^4.16 | Framework i generació de lloc estàtic |
| [Tailwind CSS](https://tailwindcss.com) | ^3.4 | Estils (via `@astrojs/tailwind`) |
| TypeScript | strict (`astro/tsconfigs/strict`) | Tipatge |
| JSON | — | Contingut (temes, exercicis, avaluació) |

## Requisits

- [Node.js](https://nodejs.org) ≥ 18
- npm

## Instal·lació

```bash
git clone https://github.com/cescfeliu/pro1-web.git
cd pro1-web
npm install
```

## Desenvolupament

```bash
npm run dev       # servidor de desenvolupament (http://localhost:4321)
npm run start     # alias de dev
npm run build     # build de producció a ./dist
npm run preview   # previsualitza el build localment
```

## Estructura del projecte

```
├── astro.config.mjs          # Configuració d'Astro + Tailwind
├── tailwind.config.mjs       # Tema (colors UPC, tipografies Inter/Fira Code)
├── public/
│   ├── i18n/                 # Traduccions carregades al client (ca/es/en)
│   ├── favicon.svg
│   └── logo-upc-fib.svg
└── src/
    ├── pages/
    │   ├── index.astro       # Inici (hero, countdown, CTA)
    │   ├── temari.astro      # Graella de temes
    │   ├── tema/[id].astro   # Detall de cada tema (SSG)
    │   ├── sessions.astro    # Calendari de sessions
    │   ├── avaluacio.astro   # Fórmula + calculadora de notes
    │   ├── enllacos.astro    # Enllaços d'utilitat
    ├── components/           # Navbar, Footer, TopicCard, TopicGrid,
    │                         # GradeCalculator, ExerciseViewer, LanguageSelector
    ├── layouts/Layout.astro  # Layout base (dark mode, i18n, metadades)
    ├── data/
    │   ├── topics.json       # 11 temes: teoria, errors típics, plantilles
    │   ├── exercises.json    # Exercicis resolts
    │   └── evaluation.json   # Pesos i regles d'avaluació
    ├── i18n/                 # Fitxers de traducció (font)
    └── scripts/i18n.ts       # Utilitats d'internacionalització
```

## Contingut

### Temari

Cada tema (`src/data/topics.json`) conté:

- `scope`: àmbit (`Parcial` o `Final`).
- `theory.sections`: seccions de teoria amb codi Markdown/C++.
- `commonErrors`: llista d'errors típics.
- `template`: plantilla de C++ copiable.

### Avaluació

| Component | Pes |
|---|---|
| Controls de laboratori / Jutge (CL) | 10% |
| Examen parcial (P) | 40% |
| Examen final (F) | 60% |

**Fórmula:** `N = max(0,4 × P + 0,6 × F, F)` — si l'examen final supera la mitjana ponderada, la nota del final mana. Un examen amb cap entrega rep nota **NP**.

## Configuració

### Desplegament a Vercel

El projecte és una app estàtica d'Astro; a Vercel només cal:

- **Framework Preset:** Astro
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

## Llengües

El idioma es desa a `localStorage` i s'aplica a l'atribut `data-i18n` de cada element. Per afegir una llengua nova, cal crear el fitxer corresponent a `src/i18n/` i `public/i18n/` i registrar-lo a `public/i18n/translations.js`.

## Crèdits

- Autor: **Cesc Feliu**
- Recurs **no oficial** de la UPC.
- Contingut basat en els apunts oficials de **PRO1 (FIB-UPC)**.
- Enllaços: [Web oficial PRO1](https://pro1.cs.upc.edu) · [Jutge.org](https://jutge.org) · [Lliçons de C++](https://llicons.jutge.org/cpp/) · [Minidosis](https://minidosis.org)

## Llicència

Recurs acadèmic complementari. Revisa el repositori per a més detalls.
