# Deploying this Next.js app to Netlify

This repository is prepared to deploy to Netlify using the official Netlify Next.js plugin.
I added `netlify.toml` and the plugin to `devDependencies` so you can deploy from GitHub or with the Netlify CLI.

Below are step-by-step instructions and PowerShell commands for Windows.

---

## Quick checklist (what I changed)
- Added `netlify.toml` with the plugin configuration.
- Added `@netlify/plugin-nextjs` to `devDependencies` in `package.json`.
- `Procfile` and `engines` are already in the repo (Procfile from earlier is harmless on Netlify).

---

## Deploy via Netlify (recommended: GitHub integration)
This is the simplest: connect your GitHub repository to Netlify and enable continuous deploys.

1. Push all local changes to GitHub (if you haven't already):

```powershell
cd 'C:\Users\pranj\Downloads\pranjal-portfolio'
git add .
git commit -m "Prepare repo for Netlify: add netlify.toml and plugin"
git push origin main
```

2. Create a Netlify account (if you don't have one) and sign in: https://app.netlify.com/

3. In the Netlify dashboard, click "New site from Git" → Choose GitHub → authorize Netlify.

4. Select your repository `PranjalPortfolio` and the `main` branch.

5. Netlify will auto-detect your app and the build command from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `.next`

6. Click "Deploy site". Netlify will run the build and serve the Next.js site using the plugin.

7. After deploy completes, visit the generated URL from the Netlify dashboard.


## Deploy using Netlify CLI (manual/development)
If you prefer to deploy manually from your machine, use Netlify CLI.

1. Install Netlify CLI globally (if not installed):
```powershell
npm install -g netlify-cli
```

2. Login:
```powershell
netlify login
```

3. From the project root, run a one-time build to confirm no local build issues:
```powershell
npm install
npm run build
```

4. Create and deploy the site:
```powershell
# Link to an existing Netlify site or create a new one
netlify init
# or immediate deploy
netlify deploy --prod --dir=.next
```

Note: When using `netlify deploy --prod`, the CLI uploads the `.next` directory and Netlify will serve the app using the plugin runtime. For local dev with Netlify's dev: `netlify dev` is available (requires plugin installation).


## Environment variables
- If your app needs runtime environment variables, set them in Netlify dashboard → Site settings → Build & deploy → Environment → Environment variables.
- For example, add keys that start with `NEXT_PUBLIC_` for client usage.


## Troubleshooting
- Build fails on Netlify:
  - Check `netlify logs` in the UI and re-run `npm run build` locally to reproduce the error.
  - Make sure `node` engine in `package.json` is compatible (we set `18.x`).

- Next.js features not supported:
  - The Netlify Next plugin supports most Next.js features. If you use Edge functions or unsupported APIs, check Netlify docs.


## Optional: Configure automatic deploys from GitHub
- In Netlify > Site > Deploys, enable automatic deploys for the `main` branch. Netlify will build on every push.


---

If you'd like, I can also:
- Add a GitHub Actions workflow to run tests/build and call Netlify's deploy API.
- Add a small `netlify` script to `package.json` for convenience.

Tell me which you want next and I'll implement it.
