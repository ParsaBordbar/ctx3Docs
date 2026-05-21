# ctx3 Docs

Documentation site for [ctx3](https://github.com/parsabordbar/ctx3) and deployed to GitHub Pages at [parsabordbar.github.io/ctx3](https://parsabordbar.github.io/ctx3/).

## Local Development

```bash
npm install
npm start
```

Opens a browser window at `http://localhost:3000/ctx3/`. Most changes are reflected live without restarting the server.

## Build

```bash
npm run build
```

Generates static output into the `build/` directory. Test the production build locally with:

```bash
npm run serve
```

## Deployment

The site deploys automatically to GitHub Pages via GitHub Actions on every push to `main` that touches the `docs/` folder. See [`.github/workflows/deploy-docs.yml`](../.github/workflows/deploy-docs.yml).

To deploy manually:

```bash
GIT_USER=parsabordbar npm run deploy
```

> Make sure GitHub Pages is set to **GitHub Actions** as the source under Settings → Pages.