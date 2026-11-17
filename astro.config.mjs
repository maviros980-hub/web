// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Cuando tengas la dirección definitiva, cámbiala aquí
// (p. ej. 'https://manuelaviles.es' o 'https://TU_USUARIO.github.io').
export default defineConfig({
  site: 'https://maviros980-hub.github.io',
  base: '/web',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
