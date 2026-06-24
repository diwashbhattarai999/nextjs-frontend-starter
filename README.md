# Next.js 16 Frontend Starter

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8)
![Biome](https://img.shields.io/badge/Biome-Configured-60a5fa)
![Ultracite](https://img.shields.io/badge/Ultracite-Configured-8b5cf6)
![Lefthook](https://img.shields.io/badge/Lefthook-Configured-f97316)
![Commitlint](https://img.shields.io/badge/Commitlint-Configured-orange)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI-success)

A production-oriented Next.js starter with TypeScript, Tailwind CSS 4, shadcn/ui, TanStack Query, i18n, multi-theme support, and an opinionated feature-based architecture — so you can ship features, not boilerplate.

> **Note**  
> This project is under active development. See [Roadmap](#roadmap) for planned additions.

## Features

### Core

- **Next.js 16** — App Router, Server Components, and React Compiler
- **React 19** — Latest React with compiler optimizations
- **TypeScript 5** — Strict typing across the codebase

### UI & styling

- **Tailwind CSS 4** — Utility-first styling with PostCSS
- **shadcn/ui + Base UI** — Accessible, composable UI primitives
- **Tabler Icons** — Consistent icon set
- **Multi-theme system** — Claude, Supabase, Vercel, Mono, Notebook, Paila (see [`docs/themes.md`](docs/themes.md))
- **Light / dark mode** — Theme mode toggle with persisted preference

### Data & forms

- **TanStack Query 5** — Server-state caching, mutations, and devtools
- **Zustand** — Lightweight client state
- **Zod 4** — Schema validation
- **React Hook Form** — Form state and validation integration
- **Axios** — Typed HTTP clients (`src/lib/http/`)

### Platform

- **next-intl** — Internationalization (`en`, `ne`, `hi`, `fr`, `es`) with locale-aware routing
- **nuqs** — Type-safe URL search parameter state
- **Sonner** — Toast notifications
- **nextjs-toploader** — Route transition progress indicator
- **t3-env** — Typed environment variables (`src/env/`)

### Developer experience

- **Biome + Ultracite** — Linting and formatting (`pnpm lint:check`, `pnpm lint:fix`)
- **Lefthook** — Git hooks for lint, build, branch naming, and commitlint
- **Commitlint** — Conventional Commits enforcement
- **GitHub Actions** — CI on push/PR: production build, Biome lint, and commitlint (see `.github/workflows/ci.yml`)
- **pnpm** — Fast, disk-efficient package management
- **Docker** — Multi-environment Compose setup via `Makefile`

### Architecture

- **Feature folders** — Business logic lives in `src/features/<feature>/`
- **Centralized configs** — Routes, endpoints, query keys, storage keys
- **Service layer** — API functions in `src/services/<feature>/`
- **Query options** — Reusable TanStack Query options in `src/lib/query-options/`

## Getting started

### Prerequisites

- Node.js 22+
- [pnpm](https://pnpm.io/) 11+

### Local development

1. Clone the repository:

   ```sh
   git clone https://github.com/diwashbhattarai999/nextjs-frontend-template.git
   cd nextjs-frontend-template
   ```

2. Install dependencies:

   ```sh
   pnpm install
   ```

3. Copy environment variables:

   ```sh
   cp .env.example .env.local
   ```

4. Start the development server:

   ```sh
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `pnpm dev`         | Start the Next.js development server |
| `pnpm build`       | Create a production build            |
| `pnpm start`       | Serve the production build           |
| `pnpm lint:check`  | Run Ultracite / Biome checks         |
| `pnpm lint:fix`    | Auto-fix lint and format issues      |
| `pnpm type-check`  | Run TypeScript compiler checks       |
| `pnpm clean`       | Remove `.next` and test artifacts    |

### Docker

Docker Compose configs live in `docker/`. Use the `Makefile` from the repo root:

```sh
make help                # List available commands
make build-development   # Build development image
make run-development     # Start → http://localhost:3002
make stop-development    # Stop containers
make logs-development    # Follow logs
```

Environment-specific env files are expected (for example `.env.development`, `.env.production`). See `.env.example` for required variables.

## Folder structure

```txt
.
├── .github/                    # GitHub Actions workflows
├── docker/                     # Dockerfile and Compose configs
├── docs/                       # Project documentation
├── public/                     # Static assets
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/           # Locale-scoped routes
│   │   │   ├── (public)/       # Public pages (landing)
│   │   │   └── (not-found)/    # Catch-all 404 handling
│   │   ├── layout.tsx          # Root layout
│   │   ├── manifest.ts         # Web app manifest
│   │   ├── robots.ts           # robots.txt
│   │   └── sitemap.ts          # sitemap.xml
│   ├── assets/                 # Icons and images
│   ├── components/
│   │   ├── layout/             # App-wide layout providers
│   │   ├── shared/             # Shared reusable components
│   │   ├── themes/             # Theme provider and switcher
│   │   └── ui/                 # shadcn/ui primitives
│   ├── configs/                # Routes, endpoints, query keys, storage
│   ├── env/                    # Typed client and server env
│   ├── features/               # Feature modules (landing, auth, …)
│   ├── hooks/                  # Shared React hooks
│   ├── i18n/                   # next-intl routing and messages
│   ├── lib/                    # Utilities, HTTP clients, query helpers
│   ├── services/               # API service functions
│   ├── styles/                 # Global CSS and theme definitions
│   ├── types/                  # Shared TypeScript types
│   └── proxy.ts                # Next.js proxy / middleware
├── .env.example
├── biome.json
├── commitlint.config.ts
├── components.json             # shadcn/ui configuration
├── lefthook.yml
├── Makefile
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
└── tsconfig.json
```

### Feature module layout

Each feature under `src/features/<name>/` is self-contained:

```txt
features/landing/
├── components/     # Feature UI
├── constants/      # Feature constants
├── data/           # Static data
├── hooks/          # Feature hooks
└── types/          # Feature types
```

## Roadmap

Planned for upcoming releases:

| Feature              | Description                                                    |
| -------------------- | -------------------------------------------------------------- |
| Authentication       | OAuth and credential flows with protected routes               |
| Testing suite        | Playwright E2E and Vitest unit tests                           |
| Dashboard layouts    | Sidebar navigation and example app pages                       |
| Form patterns        | React Hook Form + Zod examples                                 |
| API integration      | Service layer examples with TanStack Query hooks               |
| Deployment workflows | Automated deploy to staging/production environments            |

## Contributing

Contributions are welcome. Please fork the repository, create a feature branch (`feature/<name>`), and open a pull request with a clear description of your changes. Follow [Conventional Commits](https://www.conventionalcommits.org/) — commitlint runs on push and in CI.

## License

This project is licensed under the MIT License — see [LICENSE.md](LICENSE.md).
