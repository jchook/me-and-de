# fused

A blog. Posts are filed by category (folder) and listed chronologically.
The brand (short/robust forms, site description) lives in `src/lib/site.ts`.

Built with [Astro](https://astro.build). No client-side JavaScript.

## Writing a post

Drop a Markdown file in `src/content/posts/<category>/`:

```markdown
---
title: The Girl Is Neuter
date: 2026-07-05
description: Optional, used for meta tags and RSS only — never displayed.
tags: [wotd]         # optional
draft: true          # optional, hides the post
---

Body goes here. Keep it short.
```

The folder is the category and sets the URL (`/<category>/<slug>/`). Each
category with posts gets a page at `/<category>/` (its tags + recent posts)
and a link in the masthead nav. Category labels and optional intro lines live
in `src/lib/categories.ts`; tag labels and notes in `src/lib/tags.ts`. Both
fall back to the raw code, so unregistered categories and tags still work.

## Commands

| Command           | Action                              |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Dev server at `localhost:4321`      |
| `npm run build`   | Build the static site to `./dist/`  |
| `npm run preview` | Preview the production build        |

## Deploying

Every push to `main` deploys automatically: GitHub Actions builds the site and
rsyncs `dist/` to `/var/www/meandde.com/htdocs` on `texas`, where Caddy serves
it as [meandde.com](https://meandde.com). The deploy key (repo secret
`DEPLOY_SSH_KEY`) is rrsync-restricted on the server to that directory only.
