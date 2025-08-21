// Import utilites from "astro:content".
import { z, defineCollection, reference } from "astro:content";

// Import loader(s).
import { glob } from "astro/loaders";

// Define a schema for each collection.
const blogCollection = defineCollection({
  // loader: glob({ pattern: ["*.md", "*.mdx"], base: "src/data/blog" }),
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/blog" }),
  schema: z.object({
    publishDate: z.date().default(new Date()), // e.g. 2019-12-01 00:00:00
    updateDate: z.date().optional(), // e.g. 2019-12-01 00:00:00
    draft: z.boolean().optional(),

    title: z.string(),
    description: z.string(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),

    category: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    author: reference("authors"),
  }),
});

const authorsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.json", base: "./src/data/authors" }),
  schema: z.object({
    name: z.string(),
    site: z.string().url(),
  }),
});

// Export a single `collections` object to register your collection(s).
export const collections = {
  blog: blogCollection,
  authors: authorsCollection,
};
