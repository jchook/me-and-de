// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import satteriCallouts from 'satteri-callouts';
import { satteriSnippets } from './src/lib/snippets.mjs';

export default defineConfig({
  site: 'https://meandde.com',
  // The compressor eats meaningful whitespace around inline elements
  // (<a>, <em>, <abbr>) in .astro templates, gluing them to adjacent words.
  compressHTML: false,
  markdown: {
    processor: satteri({
      // ::name on its own line expands to the markdown in src/lib/snippets.mjs
      mdastPlugins: [satteriSnippets],
      hastPlugins: [
        // > [!NOTE] etc. in markdown become callouts; no icons — the
        // monochrome styling lives in global.css.
        satteriCallouts({
          theme: 'github',
          showIndicator: false,
          callouts: {
            note: { title: 'Note' },
            tip: { title: 'Tip' },
            important: { title: 'Important' },
            warning: { title: 'Warning' },
            caution: { title: 'Caution' },
          },
        }),
      ],
    }),
  },
});
