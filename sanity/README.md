# Leo Medhub Sanity Studio

This folder is a standalone Sanity Studio app.

## Local development

```bash
cd sanity
npm install
npm run dev
```

## Vercel settings

Set the Vercel project root directory to:

```text
sanity
```

Use these environment variables in Vercel:

```text
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_API_VERSION=2026-04-16
```

The build command is `npm run build` and the output directory is `dist`.
