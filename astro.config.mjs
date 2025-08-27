// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import remarkBaseUrl from './plugins/remark-baseurl.js';

import sitemap from "@astrojs/sitemap";

import { config } from './src/consts';

// https://astro.build/config
export default defineConfig({
  site: config.url,
  base: config.base,
  trailingSlash: "always",
  vite: { plugins: [tailwindcss()], },
  compressHTML: false,
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [
      [remarkBaseUrl, { baseUrl: config.base }],
    ],
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
    },
  },
});