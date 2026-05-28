#!/usr/bin/env node
import { readdirSync, readFileSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join, resolve, basename } from "node:path";
import { Artifact, LoadedArtifact } from "./types.js";
import { renderIndex, renderProject } from "./render.js";
import { STYLE } from "./style.js";

function usage(): never {
  console.error("usage: build-report <extracted-dir> [out-dir]");
  console.error("  <extracted-dir>  directory of `verifier extract` JSON artifacts");
  console.error("  [out-dir]        output directory (default: ./out)");
  process.exit(2);
}

function main() {
  const args = process.argv.slice(2);
  if (args.length < 1 || args[0] === "-h" || args[0] === "--help") usage();
  const inputDir = resolve(args[0]);
  const outDir = resolve(args[1] ?? "out");

  let entries: string[];
  try {
    entries = readdirSync(inputDir).filter((f) => f.endsWith(".json"));
  } catch (e) {
    console.error(`error: cannot read ${inputDir}: ${(e as Error).message}`);
    process.exit(1);
  }
  if (entries.length === 0) {
    console.error(`warning: no *.json files found in ${inputDir}`);
  }

  const loaded: LoadedArtifact[] = [];
  for (const name of entries.sort()) {
    const path = join(inputDir, name);
    try {
      const data: Artifact = JSON.parse(readFileSync(path, "utf8"));
      const slug = basename(name, ".json");
      loaded.push({ slug, fileName: name, data });
    } catch (e) {
      console.error(`error: failed to parse ${path}: ${(e as Error).message}`);
    }
  }

  // Sort projects by display slug for stable ordering.
  loaded.sort((a, b) =>
    (a.data.project.name ?? a.data.project.crate ?? a.slug).localeCompare(
      b.data.project.name ?? b.data.project.crate ?? b.slug,
    ),
  );

  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });
  mkdirSync(join(outDir, "projects"), { recursive: true });

  writeFileSync(join(outDir, "style.css"), STYLE);
  writeFileSync(join(outDir, "index.html"), renderIndex(loaded));
  for (const art of loaded) {
    writeFileSync(join(outDir, "projects", `${art.slug}.html`), renderProject(art.data));
  }

  console.log(`Built report for ${loaded.length} project(s) → ${outDir}/index.html`);
}

main();
