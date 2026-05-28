export interface Span {
  start: { line: number; column: number };
  end: { line: number; column: number };
}

export interface Location {
  file: string;
  span: Span;
}

export interface SourceFile {
  filepath: string;
  body: string;
  language: string;
  sha256: string;
  git_blob: string;
  last_commit: string;
  line_count: number;
}

export interface ExportedFunction {
  name: string;
  crate: string;
  signature: string;
  docstring: string;
  location: Location;
}

export interface Program {
  module: string;
  location: Location;
  body: string;
}

export interface Reference {
  kind: "rust-exported" | "rust-internal" | "lean";
  target: string;
  resolved: boolean;
}

export interface FormalSpec {
  name: string;
  statement: string;
  docstring: { raw: string; prose: string };
  informal: string | null;
  refs: Reference[];
  location: Location;
}

export interface Verification {
  name: string;
  proves: string;
  resolved: boolean;
  location: Location;
}

export interface Diagnostic {
  severity: "info" | "warn" | "error";
  kind: string;
  location: Location | null;
  message: string;
}

export interface ProjectId {
  rust: string;
  lean: string;
  // The extract artifact uses `crate` as the slug; `name` per schema docs.
  // Accept either at parse time and normalize.
  crate?: string;
  name?: string;
}

export interface Artifact {
  schema_version: number;
  extractor_version: string;
  extracted_at: string;
  repo_commit: string;
  toolchains: { rustc?: string | null; lean: string };
  project: ProjectId;
  code: SourceFile[];
  exported: ExportedFunction[];
  program: Program | null;
  specs: FormalSpec[];
  verifications: Verification[];
  diagnostics: Diagnostic[];
}

export interface LoadedArtifact {
  slug: string;
  fileName: string;
  data: Artifact;
}
