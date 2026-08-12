# Me & De

*Me and DE. Also: mäandern, to meander.*

Field notes from inside the German language, by an English speaker. Posts are
filed by CEFR level (A1–C1) and get more German as they go.

Built with [Astro](https://astro.build). No client-side JavaScript.

## Writing a post

Drop a Markdown file in `src/content/posts/<level>/`:

```markdown
---
title: The Girl Is Neuter
date: 2026-07-05
level: A1            # A1 | A2 | B1 | B2 | C1
description: Optional, used for meta tags and RSS only — never displayed.
draft: true          # optional, hides the post
---

Body goes here. Keep it short.
```

The folder (`a1/`, `b2/`, …) sets the URL (`/posts/a1/slug/`); the `level`
frontmatter drives the index grouping. Keep them in agreement.

## Commands

| Command           | Action                              |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Dev server at `localhost:4321`      |
| `npm run build`   | Build the static site to `./dist/`  |
| `npm run preview` | Preview the production build        |

Before deploying, set the real domain in `astro.config.mjs` (`site`) — RSS and
canonical URLs use it.
