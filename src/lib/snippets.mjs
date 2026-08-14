// Reusable content snippets ("dotphrases") for markdown posts.
//
// Write `::name` alone on a line in any post and it expands to the
// markdown registered here — callouts, links, whatever. Wired into the
// Sätteri pipeline in astro.config.mjs. Unknown names emit a build
// warning and are left as-is.

import { defineMdastPlugin } from 'satteri';

export const SNIPPETS = {
  'anki-a2': `
> [!NOTE]
> This word came from my Anki flashcards, the [Goethe Institute A2 Wortliste](https://ankiweb.net/shared/info/1386119660).
`,
};

export const satteriSnippets = defineMdastPlugin({
  name: 'snippets',
  paragraph(node, ctx) {
    if (node.children.length !== 1 || node.children[0].type !== 'text') return;
    const match = /^::([a-z0-9-]+)$/.exec(node.children[0].value.trim());
    if (!match) return;
    const snippet = SNIPPETS[match[1]];
    if (!snippet) {
      ctx.report({ message: `Unknown snippet "::${match[1]}"`, node, severity: 'warning' });
      return;
    }
    ctx.replaceNode(node, { raw: snippet.trim() });
  },
});
