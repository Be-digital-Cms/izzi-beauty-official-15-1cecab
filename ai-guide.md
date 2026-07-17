# AI-guide — IZZI Beauty template

> ⚠️ Dit bestand is SPECIFIEK voor het izzi-beauty template (Nederlandstalig; routes zoals
> `/behandelingen`, `/opleidingen`, `/wenkbrauwen/[stad]`). **Bij het kopiëren naar een nieuw
> template moet je de volledige routes-tabel, de collectie-lijst én de types hieronder vervangen
> door die van het nieuwe template** — anders zoekt de agent naar niet-bestaande izzi-routes.

Dit bestand beschrijft de structuur van **deze** website (het izzi-beauty template) voor de
AI Website-agent. Lees dit eerst. Het is leidend voor routes, content-bestanden en hoe je een
nieuwe pagina toevoegt. Structuur bewerk je door de juiste `content/*.json` te editen — niet door
nieuwe route-bestanden te maken (behalve bij een écht nieuw paginatype).

> Kernregel: tekst/data staat in `content/*.json`; layout/componenten in `components/*.tsx` +
> `app/**`. Bij alleen tekst/beeld wijzigen → alleen de JSON editen. Beeldpaden leeg (`""`) laten
> tenzij er een echt geüpload `/media/...` pad is (leeg → nette placeholder via `<Media>`).

## Routes → content-bestand

| Route | Type | Content-bestand | Renderer |
|---|---|---|---|
| `/` | homepage | `content/home.json` | `app/page.tsx` (eigen secties) |
| — | site (logo/nav/footer/locaties) | `content/site.json` | `Header.tsx` / `Footer.tsx` |
| `/behandelingen` | hub/overzicht | `content/behandelingen.json` | `HubPage` |
| `/behandelingen/<slug>` | detail (collectie) | `content/services.json` | `app/behandelingen/[slug]` → `DetailPage` |
| `/opleidingen` | hub/overzicht | `content/opleidingen.json` | `HubPage` |
| `/opleidingen/<slug>` | detail (collectie) | `content/trainings-detail.json` | `app/opleidingen/[slug]` → `DetailPage` |
| `/online-trainingen` | hub/overzicht | `content/online-trainingen.json` | `HubPage` |
| `/wenkbrauwen/<stad>` | SEO-locatie (collectie) | `content/locaties.json` | `app/wenkbrauwen/[stad]` → `LocationPage` |
| `/blog` | index | `content/blog.json` (`index`) | `app/blog/page.tsx` |
| `/blog/<slug>` | artikel (collectie) | `content/blog.json` (`posts`) | `app/blog/[slug]` |
| `/prijzen` | prijzen | `content/prijzen.json` | `PriceList` |
| `/over-izzi` | over | `content/over.json` | `app/over-izzi/page.tsx` |
| `/portfolio` | galerij | `content/portfolio.json` | `Gallery` |
| `/contact` | contact + formulier | `content/contact.json` + `forms.json` | `app/contact/page.tsx` |
| `/veelgestelde-vragen`, `/werken-bij-izzi-beauty`, `/uwv-subsidie`, `/ggd-gecertificeerd` | info (collectie) | `content/info.json` | eigen routes → `InfoPage` |
| `/algemene-voorwaarden`, `/privacy-verklaring`, `/opleidingen-voorwaarden` | juridisch (collectie) | `content/legal.json` | eigen routes → `LegalPage` |

## Keyed collections (⭐ zo voeg je pagina's toe zónder nieuwe route)

Deze bestanden zijn `{ "<slug>": {…} }`. Een nieuwe key = een nieuwe pagina. **Maak GEEN nieuw
route-bestand** — de `[slug]`-route rendert elke key automatisch. Kopieer de vorm van een
bestaande entry.

- `content/services.json` → `/behandelingen/<slug>` (type `DetailContent`). Voeg ook een kaart toe
  in `content/behandelingen.json` (in een `groups[].items` met `url: "/behandelingen/<slug>"`) en,
  indien in het menu, een link in `content/site.json` (`nav[].columns[].links`).
- `content/trainings-detail.json` → `/opleidingen/<slug>` (type `DetailContent`). Kaart in
  `content/opleidingen.json`, evt. nav in `site.json`.
- `content/locaties.json` → `/wenkbrauwen/<stad>` (type `LocationPageContent`). Voeg de stad toe
  aan de footerkolom in `site.json` indien gewenst.
- `content/blog.json` → posts staan onder de key `posts` (`{ "posts": { "<slug>": {…} } }`, type
  `BlogPost`). De blogindex (`/blog`) toont ze automatisch — geen kaart nodig.
- `content/info.json` en `content/legal.json` → keyed per slug. Deze hebben WÉL een eigen kleine
  route-bestand per pagina (bv. `app/uwv-subsidie/page.tsx`) dat één key rendert. Voor een geheel
  nieuwe info/juridische pagina: voeg de key toe én maak een klein route-bestand naar het patroon
  van een bestaande (bv. kopieer `app/uwv-subsidie/page.tsx`).

## Herbruikbare renderers (in `components/sections.tsx`)

`HubPage`, `DetailPage`, `LocationPage`, `InfoPage`, `LegalPage`, `PageHero`, `CardGrid`,
`PriceList`, `Steps`, `FaqList`, `Gallery`, `ReviewGrid`, `ReviewMarquee`, `CtaBand`, `BlogGrid`.
Nieuwe pagina van een bestaand type heeft doorgaans GEEN nieuwe renderer nodig — alleen nieuwe data.

## Types

Alle content-types staan in `lib/types.ts` (o.a. `HomeContent`, `SiteContent`, `HubContent`,
`DetailContent`, `DetailCollection`, `LocationPageContent`, `BlogPost`, `PrijzenContent`,
`OverContent`, `PortfolioContent`, `ContactContent`, `InfoContent`, `LegalContent`). Kopieer de
vorm; verzin geen nieuwe velden tenzij nodig.

## Media

Gebruik `<Media src={…} shape="card|wide|portrait|square|free" label="…" />` voor content-beelden
(geen kale `<img src="">`). Laat `image`/`images` velden **leeg** bij nieuwe content — de placeholder
verschijnt vanzelf; de klant vult later beeld via de CMS.

## editable.json

`content/editable.json` bepaalt welke content-bestanden in de CMS Content Editor verschijnen. De
bestaande collecties staan er al in (met `itemsArePages`/`itemBase` waar van toepassing). Voeg een
regel toe alléén voor een écht nieuw content-bestand (nieuw paginatype), niet voor een nieuwe key
in een bestaande collectie.

## Forms & redirects

Zie de universele conventies in de system-prompt: `content/forms.json` (+ `<Form slug="…"/>`) en
`content/redirects.json`. Niet zelf een submit-handler of `next.config` redirect schrijven.
