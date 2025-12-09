# Frontend Interview Prep

One monorepo to practice all frontend interview topics for interview preparation — JavaScript/TypeScript coding, React UI (machine-coding), design patterns, and frontend system design — in one place.

Note: Content is compiled from publicly available sources at the time it was added.

## Top-level structure

Workspace packages (managed via pnpm):

- machine-coding-topics — JS/TS interview practice (fundamentals, DSA, async, patterns)
- machine-coding-ui — React + TypeScript + Vite app for UI/machine-coding components
- frontend-system-design — Frontend system design case studies (plus a small React app scaffold)
- design-patterns — TypeScript implementations and notes for classic design patterns

Other folders:

- scripts — repo automation (generators, README updates)
- templates — blueprints used by generators
- utils — shared utilities/helpers
- .windsurf, .zed — editor/IDE configuration
- node_modules — workspace dependencies

## Prerequisites

- Node.js ≥ 22 (required by ui and system-design packages)
- pnpm (workspace/package manager)
- Bun (optional) — needed for some root automation scripts

## Getting started

Clone and install dependencies:

```
git clone <repository-url>
cd frontend-prep
pnpm install
```

## Root scripts

Run from the repo root:

```
pnpm test           # Run vitest (if tests are present)
pnpm lint           # Biome lint
pnpm lint:fix       # Biome lint with fixes
pnpm format         # Biome format (write)
pnpm format:check   # Biome format (check only)
pnpm check          # Biome check
pnpm check:fix      # Biome check with fixes

# Generator/automation (requires Bun)
pnpm update-readme
pnpm make
pnpm generate:topics
pnpm generate:design-patterns
```

## Commands per folder

You can either cd into each package or run via pnpm’s workspace filtering (-F).

- machine-coding-topics (JS/TS practice)

```
# Option A: from root
pnpm -F machine-coding-topics test

# Option B: from the package
cd machine-coding-topics
pnpm test
```

- machine-coding-ui (React + TS + Vite)

```
# Option A: from root
pnpm -F machine-coding-ui dev
pnpm -F machine-coding-ui build
pnpm -F machine-coding-ui preview
pnpm -F machine-coding-ui lint

# Option B: from the package
cd machine-coding-ui
pnpm dev
pnpm build
pnpm preview
pnpm lint
```

- frontend-system-design (case studies + app scaffold)

```
# Option A: from root
pnpm -F frontend-system-design dev
pnpm -F frontend-system-design build
pnpm -F frontend-system-design preview
pnpm -F frontend-system-design lint

# Option B: from the package
cd frontend-system-design
pnpm dev
pnpm build
pnpm preview
pnpm lint
```

- design-patterns (TypeScript examples)

```
# No npm scripts defined.
# Explore pattern implementations in subfolders.
# If you want to compile TS locally, you can set up a tsconfig or run tsc manually.
```

## Repo purpose

- Practice JavaScript/TypeScript fundamentals, data structures, algorithms, async, and patterns (machine-coding-topics).
- Build and refine interview-style React components (machine-coding-ui).
- Study and implement classic design patterns in TypeScript (design-patterns).
- Prepare for frontend system design interviews with structured case studies and templates (frontend-system-design).

## Contributing

- Add new problems, components, or case studies.
- Improve solutions, docs, and structure.
- Enhance generators/templates under scripts and templates.
