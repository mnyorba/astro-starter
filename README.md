# Astro Starter Theme: Enhanced

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made with Astro](https://img.shields.io/badge/Made%20with-Astro-blueviolet?logo=astro)](https://astro.build)
[![Styled with Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com)

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

## 🚀 Deployment

This starter theme comes with a pre-configured GitHub Actions workflow to automatically build and deploy your site to GitHub Pages.

The workflow is set to run manually. You can trigger it from the "Actions" tab in your GitHub repository.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
