// Place any global data here.
// You can import data from anywhere in your site by using the `import` statement.

export const metadata = {
  // Site metadata
  title: "Astro starter theme with Tailwind CSS",
  description:
    "A starter theme for Astro project with Tailwind CSS and other useful tools to get you started quickly.",
  keywords: "Astro, starter, theme, basics, tutorial, example",
  robots: "index, follow",
  author: "Your Name",
  image: "/images/site-image.jpg",
  type: "website", // 'website' | 'article'
};

// Site configuration
export const config = {
  url: "https://mnyorba.github.io/", // Your site's deploy URL. It must start with `https://` or `http://`.
  base: "/astro-starter", // The base path of your site in your deploy URL. e.g. "/blog".
  postsPerPage: 3, // Number of posts per page.
};

// Site social
export const social = {
  facebook: "https://facebook.com/username",
  twitter: "https://twitter.com/username",
  instagram: "https://instagram.com/username",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  youtube: "https://youtube.com/username",
};

// Site analytics
export const analytics = {
  plausible: {
    domain: "mnyorba.github.io",
    apiHost: "https://analytics.mnyorba.dev",
  },
  google: {
    id: "GTM-52VX65NP",
  },
};

// Site locale
export const locale = {
  default: "en-US",
  date: {
    locale: "en-US",
    options: {
      year: "numeric",
      month: "long",
      day: "numeric",
    } as Intl.DateTimeFormatOptions,
  },
};
