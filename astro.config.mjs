// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // TODO: set to the real domain before deploying (used for RSS + canonical URLs)
  site: 'https://meandde.example',
  // The compressor eats meaningful whitespace around inline elements
  // (<a>, <em>, <abbr>) in .astro templates, gluing them to adjacent words.
  compressHTML: false,
});
