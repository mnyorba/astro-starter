// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

import mdx from "@astrojs/mdx";

import remarkBaseUrl from './plugins/remark-baseurl.js';

import remarkToc from 'remark-toc';

import sitemap from "@astrojs/sitemap";

import { config } from './src/consts';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: config.url,
  base: config.base,
  trailingSlash: "always",
  compressHTML: false,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag'],
      }
    })
  ],
  markdown: {
    remarkPlugins: [
      [remarkBaseUrl, { baseUrl: config.base }],
      [remarkToc, { heading: 'Table of Contents', maxDepth: 3 }],
    ],
  },
});