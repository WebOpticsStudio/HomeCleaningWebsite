# Home Cleaning Website

Production-ready starter for a home cleaning business website.

**Stack:** Next.js (App Router) · React · TypeScript · ESLint · npm

## Requirements

- Node.js 20.9 or newer (22 LTS recommended; see `.nvmrc`)
- npm 10 or newer

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

The app runs at <http://localhost:3000>.

## Scripts

| Script              | Purpose                          |
| ------------------- | -------------------------------- |
| `npm run dev`       | Start the development server     |
| `npm run build`     | Create a production build        |
| `npm run start`     | Serve the production build       |
| `npm run lint`      | Lint the project with ESLint     |
| `npm run typecheck` | Type-check with the TS compiler  |

## Environment variables

Defined in `.env.example`, read in one place (`lib/env.ts`).

| Variable                | Description                    |
| ----------------------- | ------------------------------ |
| `NEXT_PUBLIC_SITE_URL`  | Public site URL (no trailing slash) |
| `NEXT_PUBLIC_SITE_NAME` | Site name used in page titles  |

## Routes

| Path        | Entry point                  | Feature module        |
| ----------- | ---------------------------- | --------------------- |
| `/services` | `app/services/page.tsx`      | `features/services`   |
| `/about`    | `app/about/page.tsx`         | `features/about`      |
| `/contact`  | `app/contact/page.tsx`       | `features/contact`    |

No route is defined for `/` yet; add `app/page.tsx` when the homepage is built.

## Project structure

| Directory     | Responsibility                                                       |
| ------------- | -------------------------------------------------------------------- |
| `app/`        | Routes, layouts, and loading / error / not-found boundaries          |
| `components/` | Reusable, feature-agnostic UI components                             |
| `features/`   | Page-specific functionality, one folder per feature                  |
| `lib/`        | Shared utilities and configuration helpers                           |
| `hooks/`      | Reusable React hooks                                                 |
| `types/`      | Shared TypeScript definitions                                        |
| `config/`     | Application configuration (site metadata, routes)                    |
| `styles/`     | Global styles                                                        |
| `public/`     | Static assets                                                        |

## Conventions

- Routes in `app/` stay thin: they export metadata and render a feature view.
- Each feature exposes its public API through its `index.ts`.
- Use the `@/` import alias for all cross-folder imports.
- Add a client boundary (`"use client"`) only where interactivity requires it.
