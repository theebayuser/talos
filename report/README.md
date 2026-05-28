# talos-report

Static-site generator that turns `verifier extract` JSON artifacts into a
browsable progress report.

## Usage

```bash
cd report
npm install
npm run build-report -- ../programs/extracted
open out/index.html
```

A second argument overrides the output directory (default `./out`):

```bash
npm run build-report -- ../programs/extracted ./public
```

## What it shows

- **Index** — one row per project: export count, spec count, verification
  count, diagnostic count, and a status badge (`verified`, `N/M proven`,
  `N errors`, `no specs`).
- **Project page** — exported functions (Rust signatures + docstrings),
  the Lean `Program` module, formal specs (with informal blocks, refs,
  matching proofs), orphan verifications, diagnostics, and every
  tracked source file in a collapsible viewer.

The schema this consumes is defined in
[`../tasks/extract-schema.md`](../tasks/extract-schema.md).

## Layout

```
report/
  src/
    build.ts     ← entry point; CLI + filesystem glue
    render.ts    ← HTML for index + per-project pages
    style.ts     ← inline CSS (emitted as out/style.css)
    types.ts     ← extraction-schema types
    html.ts      ← tiny escape / codeBlock helpers
  package.json
  tsconfig.json
```

Syntax highlighting is loaded from the highlight.js CDN at view time, so
there is no bundling step beyond `tsc`.
