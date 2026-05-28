# Template 1 Production Memory

This repo is Template 1: `AG-MOD-01`.

Current positioning:

```text
White-label website production partner for reseller agencies.
```

This template should feel different from Template 2. Template 1 is about agency fulfillment, structured intake, template libraries, developer-ready briefs and white-label handoff. Template 2 is about local businesses getting websites for calls, maps and enquiries.

Use the central production memory files here:

```text
C:\Users\reddy\Documents\New project\website-production-os\templates\agency\agency-modern-01\site-production-memory.md
C:\Users\reddy\Documents\New project\website-production-os\templates\agency\agency-modern-01\client-change-request-format.md
C:\Users\reddy\Documents\New project\website-production-os\templates\agency\agency-modern-01\one-to-two-hour-customization-sop.md
C:\Users\reddy\Documents\New project\website-production-os\templates\agency\agency-modern-01\template-1-complete-code-snapshot.md
```

This repo also includes a local copy:

```text
TEMPLATE_1_COMPLETE_CODE_SNAPSHOT.md
```

Quick facts:

- `/` is the main agency website.
- `/intake` is the client information retrieval page.
- Main data file is `src/data/index.ts`.
- Intake page is `src/components/IntakePage.tsx`.
- Hero positioning file is `src/components/Hero.tsx`.
- Keep serious CTAs linked to `/intake`.
- Keep Vercel rewrite in `vercel.json`.

Verify after changes:

```text
npm.cmd run typecheck
npm.cmd run build
```
