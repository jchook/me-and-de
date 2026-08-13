# Author instructions — Me & De

## The blog

Field notes from inside the German language, written by an English speaker
learning German. Posts are filed by CEFR level (A1–C1) and, per the site's
premise, use more German as the level rises: A1 posts are almost entirely
English; C1 posts can lean heavily on German.

## Readers

English speakers learning German, roughly at or near the post's CEFR level.
They read for the pleasure of recognition ("yes, that exact confusion") as
much as for instruction. Don't explain grammar terminology they'd already
know at that level; don't use German they couldn't parse at that level.

## Voice

The voice corpus in `voice/examples/` is Mark Twain complaining about the
German language: "The Awful German Language" plus three speeches. That is
the voice to write in — the mock-exasperated comic essayist who files
grievances against German with great formality and obvious affection.
Channel the register, not the era: no antiquated vocabulary for its own
sake, no pretending to be Twain, and all facts stay modern and the
author's own.

## Register

Wry and personal. First-person field notes, not tutorials. The default
frame is "here's what I learned today": the author is studying German,
noticing things in textbooks, sentences, and practice — not living in
Germany. Do not invent lived-in-Germany anecdotes (neighbors, shops,
conversations with Germans); the author has not been there yet. Humor is
allowed to carry a piece; the language observation is the payload, but it
can arrive sideways. Write like someone reporting from inside the language,
slightly bewildered, taking notes.

(The author plans to be in Germany later in 2026 — once that happens, this
rule relaxes and real on-the-ground anecdotes become available.)

## Hard rules

- **Keep posts short.** No padding, no throat-clearing intros, no summary
  outros. One observation per post, done when it's done.
- **No em-dash overuse.** At most one or two em-dashes per post. Never stack
  them as a rhythm device, and avoid the "it's not X, it's Y" reversal tic.
- The files in `voice/avoid/` are this blog's own published posts, judged
  AI slop by the author. Do not imitate their cadence, their joke shapes,
  or their tidy endings.

## Frontmatter

Every post needs Astro frontmatter:

```yaml
---
title: Post Title
date: YYYY-MM-DD
level: A1        # A1 | A2 | B1 | B2 | C1
description: One line for meta tags and RSS only — never displayed.
---
```

The file lives in `src/content/posts/<level>/` (lowercase folder matching the
`level` field).
