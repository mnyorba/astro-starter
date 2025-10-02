// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

import remarkBaseUrl from './plugins/remark-baseurl.js';
import remarkToc from 'remark-toc';
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import { config } from './src/consts';


// https://astro.build/config
export default defineConfig({
  site: config.url,
  base: config.base,
  trailingSlash: "always",
  compressHTML: false,
  output: "static",
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