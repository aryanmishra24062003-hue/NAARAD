# Naard

Monorepo for the Naard platform — PWA, API, and shared packages.

## Structure

```
naard/
├── apps/
│   ├── pwa/          → Vite + React PWA (port 3000)
│   └── api/          → Express + Prisma API (port 4000)
├── packages/
│   ├── ui/           → Shared React components
│   ├── shared/       → Types, utils, constants
│   └── config/       → ESLint, TS configs
├── turbo.json        → Turborepo task pipeline
├── pnpm-workspace.yaml
└── docker-compose.yml → Local Postgres
```

## Quick start

```bash
# Install dependencies
pnpm install

# Start local database
docker compose up -d

# Copy env file
cp .env.example .env

# Run all apps in dev mode
pnpm dev
```

## Commands

| Command | Description |
|---|---|
| `pnpm dev` | Start all apps in dev mode |
| `pnpm build` | Build all apps and packages |
| `pnpm lint` | Lint everything |
| `pnpm format` | Format with Prettier |
| `pnpm clean` | Remove all build artifacts |

## Tech stack

- **Package manager**: pnpm (workspaces)
- **Build orchestrator**: Turborepo
- **Frontend**: Vite + React + TypeScript
- **PWA**: vite-plugin-pwa (Workbox)
- **Backend**: Express + Prisma
- **Database**: PostgreSQL
- **CI**: GitHub Actions
