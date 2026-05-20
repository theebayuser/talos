# Contributing to Talos

Thanks for your interest. This document covers how the project is structured, how to build and test it, and how to contribute.

## Architecture overview

The codebase has five main parts — described at a level that shouldn't go stale as features are added:

- **Interpreter** — the core Wasm semantics. A pure, fuel-bounded big-step interpreter; the same definitions used for execution are the ones proofs reason about.
- **Decoder** — parses `.wat` text format (and `.wasm` binaries via `wasm-tools`) into the interpreter's AST.
- **Runner** — CLI front-end that loads a module and invokes a function on supplied arguments.
- **WP theory** — weakest precondition calculus built on top of the interpreter. This is the primary reasoning layer; most proofs are written against the WP API rather than unfolding the interpreter directly.
- **Wast support** — runs the official WebAssembly spec testsuite (`.wast` files) against the interpreter to track coverage.

## Building

```bash
lake build
```

Dependencies:

- **Lean 4** — toolchain is pinned in `lean-toolchain` and fetched automatically by [`elan`](https://github.com/leanprover/elan).
- **[`wasm-tools`](https://github.com/bytecodealliance/wasm-tools)** — decodes `.wasm` binaries and drives the testsuite. Install with `brew install wasm-tools` or `cargo install wasm-tools`.

## Running the Wasm spec testsuite

```bash
just testsuite
```

Filter to a specific `.wast` file by passing a substring of its name:

```bash
just testsuite i32
```

The testsuite is the primary signal for interpreter coverage. **If you want to extend the project, increasing testsuite coverage is the best place to start.** Pick a failing test, trace why it fails, implement the missing feature or fix the bug, and verify the test now passes.

## Contributing code

Pull requests are welcome. A few guidelines:

**Own your PR.** If you used AI tooling to write or review code, say so in the PR description. The human author is still fully accountable — you should understand every line, be prepared to answer questions, and be ready to address review feedback. Reviewers have the same responsibility: don't approve what you don't understand.

**Keep PRs focused.** One logical change per PR. A new instruction, a bug fix, a proof — not all three. Easier to review, easier to revert if something goes wrong.

**Proofs over tests.** Where a behavioral claim can be stated as a Lean theorem, prefer that over an ad-hoc test. The testsuite covers interpreter correctness at the spec level; theorems cover semantic properties of specific programs.

**Prefer clarity over cleverness.** The interpreter is intentionally simple so proofs stay tractable. Don't introduce complexity in the interpreter for performance reasons; if you need a faster path, prove it equivalent to the reference interpreter and keep them separate.

## Code of conduct

This is a collaborative project in a public space. Treat everyone respectfully — no harassment, no personal attacks, no dismissiveness toward newcomers or non-native speakers. Disagreement about code or design is fine and expected; make it about the ideas, not the people. If something feels off, reach out to a maintainer.
