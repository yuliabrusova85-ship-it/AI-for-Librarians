# AI for Academic Libraries — Learning Portal

A structured, multi-page learning portal that teaches academic librarians how to use AI — from absolute beginner to building their own tools. Mapped to the **ACRL AI Competencies for Academic Library Workers (October 2025)** at the sub-competency level.

**Live site:** *(deploy to Vercel — see deployment section)*  
**Built by:** A MILS student and circulation desk staff at St. Louis Community College  
**Tech stack:** Next.js 14 · Tailwind CSS · TypeScript · Vercel

---

## What this is

A practitioner-first learning portal with 16 modules across three levels:

| Level | Focus | Modules | Status |
|-------|-------|---------|--------|
| **Foundations** | How AI works, how to use it, ethics | 01–05 | ✅ Published |
| **Applied** | Research support, instruction, metadata, collections, prompt library, administration | 06–11 | ✅ Published |
| **Advanced** | Automation, agentic AI, vibe coding, systems integration | 12–16 | 🔒 Coming soon |

**Published as of May 2026:** Modules 01–11 (10 modules). Module 14 (Vibe coding) content is written but held pending Level 3 launch.

Level 3 is the differentiator — no other library portal, course, or LibGuide teaches vibe coding for library practitioners, workflow automation, or agentic AI in library contexts (verified May 2026).

---

## Quick start

```bash
git clone https://github.com/vladimirbrusov83-hub/Ailibraries.git
cd Ailibraries
npm install
npm run dev
```

Open http://localhost:3000.

---

## Project structure

```
/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout — nav + footer + fonts
│   ├── page.tsx                # Homepage
│   ├── curriculum/
│   │   └── page.tsx            # All 16 modules in one view
│   ├── level/[level]/
│   │   └── page.tsx            # Level hub pages (foundations/applied/advanced)
│   ├── module/[slug]/
│   │   └── page.tsx            # Individual module pages
│   ├── about/
│   │   └── page.tsx            # Author story and positioning
│   ├── resources/
│   │   └── page.tsx            # Curated external links by category
│   └── newsletter/
│       └── page.tsx            # Email signup page
│
├── components/
│   ├── nav.tsx                 # Sticky header — mobile hamburger menu
│   ├── footer.tsx              # Site footer with ACRL/ARL attribution
│   ├── badges.tsx              # Level, audience, ACRL, gap, coming-soon badges
│   ├── module-card.tsx         # Card component used on curriculum/level pages
│   └── email-capture.tsx       # Email form — 3 variants (default, compact, coming-soon)
│
├── content/
│   └── modules.ts              # ★ All 16 modules — the only file the author edits
│
├── lib/
│   └── types.ts                # TypeScript interfaces for Module, Level, Audience, etc.
│
├── CURRICULUM_CHANGES.md       # Research findings + curriculum decisions (pre-build)
├── CONTENT_GUIDE.md            # Plain-language author guide for adding/editing content
└── README.md                   # This file
```

---

## Architecture decisions

### Content as TypeScript data
All module content lives in `content/modules.ts` as typed objects — no CMS, no database, no markdown parsing. This keeps the build simple, the author's workflow straightforward, and the type safety complete.

Trade-off: content changes require a redeploy. Acceptable at this scale. When the author workflow outgrows this, the `Module` interface in `lib/types.ts` maps cleanly to a Supabase table schema.

### Static site generation
Every page is statically generated at build time (`generateStaticParams` on dynamic routes). This gives fast page loads, zero server costs, and simple Vercel deployment.

### No auth, no database
All content is public at launch. The email capture form uses Formspree as a placeholder. A `TODO` comment in `components/email-capture.tsx` marks exactly where Supabase replaces the Formspree call.

### Color system
Three level colors are applied consistently across badges, cards, level hubs, and module pages:

```
Level 1 — Foundations:  primary #0F6E56 / light #E1F5EE  (forest green)
Level 2 — Applied:      primary #185FA5 / light #E6F1FB  (navy)
Level 3 — Advanced:     primary #854F0B / light #FAEEDA  (amber)
```

---

## Pages and routes

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, audience paths, Level 1 preview, Level 3 differentiator |
| `/curriculum` | All 16 modules with level headers and grid layout |
| `/level/foundations` | Level 1 hub — all Foundations modules |
| `/level/applied` | Level 2 hub — Applied modules with role-split note |
| `/level/advanced` | Level 3 hub — coming-soon state with email capture |
| `/module/[slug]` | Individual module page (published or coming-soon) |
| `/about` | Author background, practitioner positioning, ACRL alignment |
| `/resources` | 5 curated sections: frameworks, communities, tools |
| `/newsletter` | Email capture with Level 3 preview list |

---

## Module data shape

Each module in `content/modules.ts` is a `Module` object:

```typescript
interface Module {
  id: number;                          // 1–16
  slug: string;                        // URL slug — never change after publish
  title: string;
  level: "foundations" | "applied" | "advanced";
  audience: "practicing" | "digital" | "both";
  acrlCompetencies: AcrlCompetency[];  // ["ethics", "knowledge", "analysis", "application"]
  acrlSubCompetencies: string[];       // ["2.1", "4.3", ...] — specific sub-competency codes
  topics: string[];                    // Shown on hover/card
  objectives: string[];                // 5 learning outcomes
  estimatedMinutes: number;
  status: "published" | "coming-soon";
  isGap: boolean;                      // true = ★ "First in field" badge (Level 3)
  description: string;                 // One-paragraph summary
  content?: ModuleContent;             // Present only for published modules
  relatedModules: string[];            // Slugs of related modules
}

interface ModuleContent {
  intro: string;                       // Opening practitioner-voice paragraph
  sections: { heading: string; body: string }[];
  practitionerNote?: string;           // Optional "From my library" box
  summary?: string[];                  // 5–6 bullet takeaways shown at module end
}
```

---

## ACRL AI Competency mapping

All modules are tagged to the [ACRL AI Competencies for Academic Library Workers (October 2025)](https://www.ala.org/acrl/standards/ai) at the sub-competency level.

| Code | Sub-Competency |
|------|---------------|
| 1.1 | Facilitate and advocate for equitable access to AI technologies |
| 1.2 | Promote fairness in data use and AI system design |
| 1.3 | Protect autonomy, privacy, cultural diversity, and intellectual property |
| 1.4 | Ensure accountability, transparency, and reliability of AI systems |
| 1.5 | Consider broader impacts on communities, workers, and environment |
| 2.1 | Develop basic understanding of AI technologies |
| 2.2 | Understand AI attribution and detection |
| 2.3 | Stay current with AI applications via reliable sources |
| 2.4 | Critically evaluate AI information sources |
| 2.5 | Understand AI-related policies and regulations |
| 3.1 | Explain AI technologies and library service impacts |
| 3.2 | Evaluate benefits and risks in AI deployment |
| 3.3 | Critically analyze AI using multifaceted approach |
| 3.4 | Evaluate AI tools for specific library tasks |
| 4.1 | Apply AI for task efficiency and quality enhancement |
| 4.2 | Use AI to facilitate workplace communication and collaboration |
| 4.3 | Develop effective prompting strategies |
| 4.4 | Explore AI capabilities for innovation |
| 4.5 | Select accessible and usable AI tools |

Five guiding mindsets thread through the curriculum: **Curiosity · Skepticism · Judgment · Responsibility · Collaboration**

---

## Curriculum overview

### Level 1: Foundations (Modules 01–05)
*Both audiences. All published at launch.*

| # | Module | Audience | ACRL Sub-competencies |
|---|--------|----------|----------------------|
| 01 | What AI actually is | Both | 2.1, 3.1 |
| 02 | Talking to AI effectively | Both | 4.3, 2.1 |
| 03 | Picking the right tool | Both | 3.4, 4.5, 2.3 |
| 04 | Ethics, copyright & policy | Both | 1.1–1.5, 2.2, 2.5 |
| 05 | Critical evaluation of AI output | Both | 3.1–3.4, 2.4 |

### Level 2: Applied (Modules 06–11)
*Role-split. All published.*

| # | Module | Audience | ACRL Sub-competencies | Status |
|---|--------|----------|----------------------|--------|
| 06 | AI for research support | Practicing | 4.1, 4.4, 3.2 | ✅ |
| 07 | Reference & instruction | Practicing | 4.1, 4.2, 4.3 | ✅ |
| 08 | Metadata & cataloging | Digital | 4.1, 3.4, 4.4 | ✅ |
| 09 | Digital collections & discovery | Digital | 4.1, 4.4, 3.2 | ✅ |
| 10 | Prompt library for library work | Both | 4.3, 4.1 | ✅ |
| 11 | Making the case to administration | Both | 1.4, 1.5, 4.2 | ✅ |

### Level 3: Advanced (Modules 12–16)
*Both audiences. Coming soon — ★ no competing library-sector content exists for any of these.*

| # | Module | Audience | Gap | Status |
|---|--------|----------|-----|--------|
| 12 | Automating repetitive tasks | Both | ★ First in field | 🔒 |
| 13 | Agentic AI — what it means | Both | ★ First in field | 🔒 |
| 14 | Vibe coding for librarians | Both | ★ First in field | 🔒 (written, held) |
| 15 | AI & library systems integration | Digital | ★ First in field | 🔒 |
| 16 | Your AI strategy & next steps | Both | ★ First in field | 🔒 |

---

## Adding a new module (developer)

1. Add a new `Module` object to the array in `content/modules.ts`
2. Set `status: "published"` and include a `content` block
3. Add the slug to `relatedModules` arrays in adjacent modules
4. Run `npm run build` to verify — new static pages generate automatically

No routing changes needed. `generateStaticParams` picks up new slugs automatically.

---

## Publishing a Level 3 module (author workflow)

See `CONTENT_GUIDE.md` for plain-language instructions. In brief:

1. Open `content/modules.ts`
2. Find the module (e.g., Module 12)
3. Change `status: "coming-soon"` → `status: "published"`
4. Add the `content` block with `intro`, `sections`, and optional `practitionerNote`
5. Run `npm run build`, push to GitHub, Vercel redeploys

---

## Email capture / newsletter

The form in `components/email-capture.tsx` has three variants:
- `default` — full form with audience selector (homepage, newsletter page)
- `compact` — email-only inline form (Level 3 callout blocks)
- `coming-soon` — full form with amber styling (Level 3 module pages)

**Current state:** Uses Formspree (placeholder ID). To activate:
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form project
3. Replace `YOUR_FORM_ID` in `email-capture.tsx` with your form ID

**Future Supabase integration:** A `TODO` comment in `email-capture.tsx` marks the exact location. Create a `subscribers` table:

```sql
CREATE TABLE subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  audience TEXT,
  module TEXT,
  source TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

Then replace the Formspree `fetch()` with:
```typescript
const { error } = await supabase.from('subscribers').insert({ email, audience, module, source });
```

---

## Deployment (Vercel)

```bash
npm install -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

Or connect the GitHub repo in the Vercel dashboard — it auto-detects Next.js and deploys on every push to `main`.

**No environment variables required at launch.**

When Supabase is added:
```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

---

## SEO

Each page has unique `<title>` and `<meta description>` via Next.js `Metadata` API. Target keywords: *AI for academic libraries · AI training for librarians · ACRL AI competencies · AI workflow for librarians*.

Module slugs are descriptive: `/module/vibe-coding-for-librarians`, `/module/what-is-ai-for-librarians`.

Schema markup for educational content is a planned enhancement for after launch.

---

## Accessibility

- Proper heading hierarchy (H1 → H2 → H3) on all pages
- `aria-label` on navigation, breadcrumbs, and icon-only buttons
- `aria-hidden` on decorative icons
- `role="alert"` on form error messages
- `sr-only` labels on compact form inputs
- Color contrast: all text/background combinations meet WCAG AA minimum
- Keyboard navigable — interactive elements are focusable with visible focus states

---

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge — current and one version back). No IE11 support.

---

## Research and curriculum documentation

See `CURRICULUM_CHANGES.md` for:
- Verified ACRL AI Competencies (20 sub-competencies with codes)
- ARL Guiding Principles (7 principles confirmed)
- Competitive landscape analysis (LibTech/Clarivate, OCUL, LibGuides at Northwestern/FIU/UNC/HKU)
- Market data (Pulse of the Library 2024 + 2025 — Clarivate)
- Vibe coding gap confirmation (no competing content exists as of May 2026)
- Every curriculum change made from v2 spec, with reasoning

---

## License

Content © the author. Code available for reference and adaptation with attribution.

---

## Key external references

- [ACRL AI Competencies for Academic Library Workers (2025)](https://www.ala.org/acrl/standards/ai)
- [ARL Guiding Principles for Artificial Intelligence (2024)](https://www.arl.org/resources/research-libraries-guiding-principles-for-artificial-intelligence/)
- [Pulse of the Library 2024 (Clarivate)](https://clarivate.com/pulse-of-the-library/report-2024/)
- [Pulse of the Library 2025 (Clarivate)](https://clarivate.com/news/pulse-of-the-library-report-reveals-link-between-ai-literacy-ai-implementation-and-confidence/)
- [LibTech Insights AI Literacy Micro-Course (Choice360)](https://www.choice360.org/ai-literacy-essentials-for-academic-libraries/)
- [OCUL AI Tools for Academic Libraries Series](https://www.choice360.org/libtech-insights/category/oculs-ai-tools-for-academic-libraries/)
