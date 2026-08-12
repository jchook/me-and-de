// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://meandde.com',
  // The compressor eats meaningful whitespace around inline elements
  // (<a>, <em>, <abbr>) in .astro templates, gluing them to adjacent words.
  compressHTML: false,
});
