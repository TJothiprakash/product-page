Deploying to Render
===================

Quick steps
-----------

1. Sign in to https://render.com and connect your GitHub account.
2. In Render, create a new **Static Site** and pick the repository `TJothiprakash/product-page`.
3. Use branch `main` (or whichever branch you want to deploy).
4. Use the build command: `npm ci && npm run build`
5. Set the publish directory to: `dist`
6. Create the site — Render will build and publish.

What I added to this repo
-------------------------

- `render.yaml` — declarative config for Render (static site). Render will auto-detect this file when importing the repo and apply the settings.
- `DEPLOY_RENDER.md` — this file (deployment steps).
- I updated `package.json` to point the `repository` field at your repo.

Commands to push these local changes (run from project root):

```bash
git add render.yaml DEPLOY_RENDER.md package.json
git commit -m "chore: add render.yaml and deploy instructions"
git push origin main
```

Notes
-----
- No environment variables are required for this static site.
- If you want a specific Node version, add an `.nvmrc` or set `engines` in `package.json`.
- If you want me to push these changes to GitHub for you, tell me and I can run the git commands here.
