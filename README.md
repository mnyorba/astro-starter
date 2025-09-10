# Astro Starter Theme: Enhanced

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made with Astro](https://img.shields.io/badge/Made%20with-Astro-blueviolet?logo=astro)](https://astro.build)
[![Styled with Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![Powered by daisyUI](https://img.shields.io/badge/Powered%20by-daisyUI-green?logo=daisyui)](https://daisyui.com/)

---

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/s/github/mnyorba/astro-starter)
[![Open in Gitpod](https://img.shields.io/badge/Open%20in-Gitpod-blue?logo=gitpod)](https://gitpod.io/#https://github.com/mnyorba/astro-starter)
[![Open in StackBlitz](https://img.shields.io/badge/Open%20in-StackBlitz-blue?logo=stackblitz)](https://stackblitz.com/github/mnyorba/astro-starter)

A feature-rich starter theme for Astro, designed for simplicity, best practices, and high performance. Pre-configured with Tailwind CSS, MDX, and several other quality-of-life tools to get you started quickly.

**Live Demo:** [https://mnyorba.github.io/astro-starter/](https://mnyorba.github.io/astro-starter/)

---

## Features

-   **Astro 5.0**: The latest version of the powerful web framework.
-   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
-   **Dark/Light Mode**: Theme toggle for user preference.
-   **MDX & Markdown Support**: Write content in either `.md` or `.mdx`.
-   **Content Collections**: Type-safe and organized content for your blog.
-   **Automatic Sitemap**: `@astrojs/sitemap` is configured to generate a sitemap on build.
-   **Custom Base URL Handling**: A custom remark plugin ensures that all asset paths work correctly, even when deploying to a subfolder.
-   **Pagination for Blog**: Built-in SEO-friendly pagination for blog posts with customizable navigation.
-   **Localization**: Global locale and date formatting settings for easy adaptation to your language and region.
-   **Google Analytics & Tag Manager via Partytown**: Easily connect Google Analytics or GTM using the [@astrojs/partytown](https://docs.astro.build/en/guides/integrations-guide/partytown/) integration for optimal performance.
-   **Prettier**: Code formatter is set up with plugins for Astro and Tailwind CSS for consistent code style.
-   **GitHub Actions CI/CD**: A pre-configured workflow to build and deploy your site to GitHub Pages.

## 🚀 Getting Started

1.  **Create a new project from the template**:
    ```sh
    npm create astro@latest -- --template mnyorba/astro-starter
    ```

2.  **Install dependencies**:
    ```sh
    cd your-new-project
    npm install
    ```

3.  **Start the development server**:
    ```sh
    npm run dev
    ```
    Your site will be available at `http://localhost:4321`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                          |
| :-------------- | :---------------------------------------------- |
| `npm install`   | Installs dependencies                           |
| `npm run dev`   | Starts local dev server at `localhost:4321`     |
| `npm run build` | Build your production site to `./dist/`         |
| `npm run preview` | Preview your build locally, before deploying    |
| `npm run format`  | Formats all files in `src` using Prettier.      |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## 🗂️ Project Structure

Here is an overview of the project structure:

```text
/
├── public/                     # Static assets (images, fonts, etc.)
├── src/
│   ├── assets/                 # Project-specific assets (like CSS, SVGs)
│   ├── components/             # Reusable Astro components
│   ├── consts.ts               # Global constants and site configuration
│   ├── data/                   # Content collections (e.g., blog posts)
│   ├── layouts/                # Base layouts for pages
│   ├── pages/                  # Astro pages and API endpoints
│   └── styles/                 # Global styles
├── .github/
│   └── workflows/
│       └── astro.yml           # GitHub Actions workflow for deployment
├── astro.config.mjs            # Astro configuration file
├── package.json                # Project dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

## ⚙️ Configuration

All site-wide configuration is managed in `src/consts.ts`.

### Metadata

The `metadata` object contains all the SEO and general site information.

```typescript
export const metadata = {
  title: "Astro starter theme with Tailwind CSS",
  description: "A starter theme for Astro project with Tailwind CSS...",
  keywords: "Astro, starter, theme, basics, tutorial, example",
  robots: "index, follow",
  author: "Your Name",
  image: "/images/site-image.jpg",
  type: "website",
};
```

### Site Configuration

The `config` object contains settings related to deployment and content.

```typescript
export const config = {
  url: "https://mnyorba.github.io/",
  base: "/astro-starter",
  postsPerPage: 10,
};
```

-   `url`: Your site's deploy URL.
-   `base`: The base path of your site (e.g., `/blog`).
-   `postsPerPage`: Number of posts to display per page in the blog index.

### Pagination

Blog pagination is implemented with dynamic routes (`/blog/2/`, `/blog/3/`, etc.) and a reusable pagination component.  
You can set the number of posts per page in `config.postsPerPage` in `src/consts.ts`.

### Table of Contents

The theme uses `remark-toc` to automatically generate a table of contents for your markdown and MDX files.
To add a TOC to a post, simply add a heading with the text `Table of Contents` where you want the TOC to appear. The plugin will then generate a TOC with a maximum heading depth of 3.

For example:
```markdown
## Table of Contents
```

### Localization

Locale and date formatting are configured globally in `src/consts.ts` under the `locale` object.  
Change `locale.default` and `locale.date` to set your preferred language and date format for the entire site.

### Analytics

Analytics settings are managed in the `analytics` object in `src/consts.ts`.  
By default, Google Tag Manager is integrated via [@astrojs/partytown](https://docs.astro.build/en/guides/integrations-guide/partytown/) for better performance.

```typescript
export const analytics = {
  google: {
    id: "GTM-XXXXXXX" // Your Google Tag Manager ID
  }
}
```

The ID is automatically injected into the analytics script in `src/components/common/Analytics.astro`.  
To enable analytics, simply set your GTM or Google Analytics ID in `consts.ts` — no need to edit component code.

**How it works:**
- The theme uses [@astrojs/partytown](https://docs.astro.build/en/guides/integrations-guide/partytown/) to offload analytics scripts to a web worker, improving site performance.
- The `<Analytics />` component is included in the `<head>` of every page.
- You can use Google Tag Manager or Google Analytics by specifying the correct ID.

## 🚀 Deployment
  [![Deploy to GitHub Pages](https://img.shields.io/badge/Deploy%20to-GitHub%20Pages-blue?logo=github)](https://github.com/mnyorba/astro-starter/actions)
  [![Deploy to Vercel](https://img.shields.io/badge/Deploy%20to-Vercel-blue?logo=vercel)](https://vercel.com/new/clone?repository-url=https://github.com/mnyorba/astro-starter)
  [![Deploy to Netlify](https://img.shields.io/badge/Deploy%20to-Netlify-blue?logo=netlify)](https://app.netlify.com/start/deploy?repository=https://github.com/mnyorba/astro-starter)

This project can be deployed to a variety of platforms.

- **GitHub Pages**: 
  A pre-configured GitHub Actions workflow is included to build and deploy your site to GitHub Pages. Make sure to set the `site` and `base` properties in `astro.config.mjs` correctly for your repository. You can trigger the workflow manually from the "Actions" tab in your GitHub repository.

- **Vercel & Netlify**: 
  Deploying to Vercel and Netlify is a zero-configuration process. Connect your GitHub repository and the platforms will automatically detect and build your Astro site.

- **Other Platforms**: Astro supports deployment to many other platforms like AWS, Cloudflare Pages, and more. Check out the [Astro documentation](https://docs.astro.build/en/guides/deploy/) for more information.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
