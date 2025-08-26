import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { metadata } from "../consts";

export function GET(context) {
  // Get all posts from the "blog" collection
  const blog = getCollection("blog");
  return rss({
    // `<title>` field in output xml
    title: metadata.title,
    // `<description>` field in output xml
    description: metadata.description,
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/blog/${post.id}`,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
