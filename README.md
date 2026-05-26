# Woodside Boxing Academy — Website Redesign Demo

Modern, mobile-first redesign demo for [Woodside Boxing Academy](https://www.woodsideboxingacademy.com/) — a Queens-based boxing gym focused on fundamentals, discipline, and competitive development.

**Live site:** [https://astridbonoan.github.io/WoodsideBoxing.io/](https://astridbonoan.github.io/WoodsideBoxing.io/)

## Tech Stack

- React + TypeScript (Vite)
- Tailwind CSS v4
- Component-based architecture
- Subtle scroll animations

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment (GitHub Pages — Deploy from branch)

This project uses **GitHub Actions** to build the site and push static files to the **`gh-pages`** branch. GitHub Pages serves the site from that branch.

### One-time GitHub setup

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Set **Branch** to `gh-pages` and folder to **`/ (root)`**
4. Save

Every push to `main` triggers the workflow in `.github/workflows/deploy.yml`, which builds and updates `gh-pages`.

## Design Direction

Dark, raw, professional — classic NYC boxing gym meets modern athletic web design. No luxury fitness aesthetics.
