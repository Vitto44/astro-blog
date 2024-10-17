# Versatile Landing, Blog & Docs Template for a Simplified Web Presence

![CertainWager](https://github.com/mearashadowfax/CertainWager/assets/125820963/cdf299bd-414a-4a2d-baf0-d188bb4709c7)

CertainWager is an open-source template designed for quick and efficient web project setup, blending minimalism with functionality. Whether you're showcasing a portfolio, launching a company landing page, or running a blog, CertainWager provides everything you need. By combining the power of the [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and [Preline UI](https://preline.co/), this template offers a functional and aesthetically pleasing solution for your web presence.

**[View Live](https://certainwager.com/en)**

## Features

- **Astro-Powered:** Utilize a modern static-site generation framework.
- **Tailwind CSS:** Enjoy rapid UI development with a utility-first CSS framework.
- **Preline UI:** Implement prebuilt UI components for added elegance.
- **Internationalization (i18n):** Integrates Astro’s internationalization features.
- **SEO and Responsiveness:** Ensure your site is discoverable and accessible on any device.

## Getting Started

This guide will provide you with the necessary steps to set up and familiarize yourself with the Astro project on your local development machine.

### Installation

Start by installing the project dependencies. Open your terminal, navigate to the project's root directory, and execute:

```bash
npm install
```

This command will install all the necessary dependencies defined in the `package.json` file.

### Development Commands

With dependencies installed, you can utilize the following npm scripts to manage your project's development lifecycle:

- `npm run dev`: Starts a local development server with hot reloading enabled.
- `npm run preview`: Serves your build output locally for preview before deployment.
- `npm run build`: Bundles your site into static files for production.

For detailed help with Astro CLI commands, visit [Astro's documentation](https://docs.astro.build/en/reference/cli-reference/).

## Deployment

### Building Your Site

Before deployment, you need to create a production build:

```bash
npm run build
```

This creates a `dist/` directory with your built site (configurable via [outDir in Astro](https://docs.astro.build/en/reference/configuration-reference/#outdir)).

### Deploying to Vercel

Click the button below to start deploying your project on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FVitto44x%2FCertainWager)

## Static Assets and Public Resources

Static files served directly to the browser are within the `public` directory at the root of the project.

```md
public/
└── banner-pattern.svg
```

## Customization

CertainWager allows for easy customization to suit your specific needs. Here are a couple of ways you can configure components and content:

### Customizing Navigation and Footer Links

Edit the `navigation.ts` file within the `utils` directory to manage navigation bar and footer links:

#### Navigation Bar Links

Edit the `navBarLinks` array to adjust navigation bar links:

```typescript
// An array of links for the navigation bar
export const navBarLinks: NavLink[] = [
  { name: "Home", url: "/" },
  { name: "Reviews", url: "/reviews" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
```

Replace `name` with the display text and `url` with the appropriate path to pages on your site.

#### Social Media Links

Replace the placeholder URLs in the `socialLinks` object with your social media profiles:

```typescript
// An object of links for social icons
export const socialLinks: SocialLinks = {
  facebook: "#",
  twitter: "#",
  github: "#",
  linkedin: "#",
  instagram: "#",
};
```

> [!NOTE]
> Remember to add complete and valid URLs for the navigation to function properly. These customizations will reflect throughout your Astro site, promoting consistency across all pages.

#### Additional Components

We also have `Navbar.astro` and `NavbarMegaMenu.astro` components located in `src/components/sections/navbar&footer`. Ensure to update these components if additional customization or specific configurations are required for the navigation bar or mega menu.

## Integrations and Enhancements

CertainWager leverages the power of Astro — a modern, cutting-edge site building framework — and integrates it seamlessly with the utility-first CSS framework TailwindCSS, to deliver exceptional site performance and a seamless user experience. Here are some notable integrations and enhancements included in the project:

**Customizing Animations:**

Please tailor the GSAP animations within this script to fit your project's look and feel. The provided example is a starting point, representing how to leverage GSAP for immediate visual impact as a product page loads.

**Modifying or Removing Animations:**

- To modify an animation, update the properties and parameters within the `gsap.from()` method, or add new GSAP animation calls as required.
- Should GSAP not be needed, or if you prefer a different animation method, simply remove the aforementioned script segment.

> [!NOTE]
> We've chosen to keep the integration lean and focused, but GSAP's comprehensive documentation can be referred to for more complex animations: [GSAP Documentation](https://gsap.com/docs/v3/).

### Hiding Scrollbar

To achieve a cleaner and more spacious design, the default scrollbar has been visually removed. While this choice fits the aesthetic goals of the project, it's important to consider that hiding scrollbars can sometimes affect accessibility and user experience. We recommend evaluating this design decision within the context of your user base and their needs.

For those who prefer custom-styled scrollbars, we suggest using the [tailwind-scrollbar](https://adoxography.github.io/tailwind-scrollbar/) plugin, which adds Tailwind CSS utilities for scrollbar styles, allowing for more controlled customization that can also meet accessibility standards.

> [!NOTE]
> If you wish to return the default scrollbar, you can comment out or remove the following CSS from `src/layouts/MainLayout.astro`:

```html
<style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
```

Additionally, update the `<html>` tag to remove the `scrollbar-hide` class, resulting in:

```html
<html lang="en" class="scroll-pt-16"></html>
```

### SEO Configuration

The SEO Configuration in the CertainWager template is designed to empower users in optimizing their website's visibility on search engines and social media platforms. This documentation outlines the implementation details and usage instructions for effectively managing SEO settings.

#### Using constants.ts

The SEO configuration has been centralized using the `constants.ts` file. This file manages SEO-related data such as page titles, descriptions, structured data, and Open Graph tags, providing a more structured and manageable approach to SEO management.

To customize SEO settings, modify the values in the `constants.ts` file. Key configurations include SITE, SEO, and OG, allowing developers to define site-wide SEO parameters.

```astro
// constants.ts

export const SITE = {
  title: "CertainWager",
  // Other SITE properties...
};

export const SEO = {
  title: SITE.title,
  // Other SEO properties...
};

export const OG = {
  title: `${SITE.title}: Hardware Tools & Construction Services`,
  // Other OG properties...
};
```

#### Applying Metadata in Layouts

When applying metadata within your layouts, such as `MainLayout.astro`, you can pass the desired metadata values as props to the `Meta` component:

```astro
---
// In MainLayout.astro file
const { meta } = Astro.props;

interface Props {
  meta?: string;
}
---

<Meta meta={meta} />
```

#### Passing Individual Schema

For page-specific SEO overrides, developers can pass individual schema properties within specific page files.

```astro
---
import { SITE } from "@/data_files/constants";
---
<MainLayout
  title={`Example Page | ${SITE.title}`}
  structuredData={{
    "@type": "WebPage",
    // Other structured data properties...
  }}
>
  <!-- Page content -->
</MainLayout>

```

With this setup, the Meta component receives the custom meta description and applies it to the page's metadata. If no custom value is passed, the default from `Meta.astro` will be used instead.

#### Extending Metadata for SEO

For a more robust SEO strategy, you can create additional properties in the `Meta.astro` component. For instance, you may want to include specific Open Graph tags for article publishing dates or tags for Twitter-specific metadata.

#### Structured Data and Rich Snippets

Structured data in JSON-LD format can be managed by the `Meta.astro` component, improving how search engines understand your page content and potentially enhancing search results with rich snippets. Modify the `structuredData` property with relevant [schema.org](https://schema.org) types and properties:

```astro
<MainLayout
  structuredData={{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CertainWager",
    "url": "https://certainwager.com",
    "description": "Discover top-quality hardware tools and services"
  }}
>
```

#### Using Astro SEO Integrations

While the template provides a custom SEO solution, you may choose to utilize an Astro integration such as [Astro SEO](https://github.com/jonasmerlin/astro-seo#readme) for additional SEO features and optimizations. Integrating such a package might provide more automated metadata management and additional SEO-focused functionality.

### Robots.txt

`robots.txt` is dynamically generated using the code found in src/pages/robots.txt.ts. This configuration follows the example from the Astro Docs:

```ts
import type { APIRoute } from "astro";

const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
```

### Markdown/MDX

#### Image Integration

The addition of `.vscode/settings.json` file in the root directory facilitates image integration directly into content collections within Markdown editors. This feature enables effortless creation of Markdown links with media files and seamless copying into the workspace.

##### Usage

- **Paste/Drop Images**: Activate by pressing <kbd>Shift</kbd> while dropping the file.
- **Markdown Link**: Image is linked using Markdown syntax `(![alt text](../../images/content/<path>))`.
- **File Handling**: Images are organized in `src/images/content/<path>`.

##### Example

Pasting `getting-started.png` into `src/content/post-1.md` results in:

- Adding `![alt text](../../images/content/post-1/getting-started.png)` to `post-1.md`.
- Moving the image file to `src/images/content/post-1/getting-started.png`.

> [!NOTE]
> Remember to press <kbd>Shift</kbd> while dropping images.

### Astro Integrations

Maximize your website's efficiency with these built-in Astro integrations:

- [Astro Compressor](https://github.com/sondr3/astro-compressor#readme): Automatically compresses Astro-generated site using gzip or brotli, ensuring faster load times.
  Configure the compressor in `astro.config.mjs` file:

```mjs
   export default defineConfig({
     // ...other Astro configurations
    integrations: [...other Astro integrations, compressor({ gzip: false, brotli: true })],
   });
```

- [Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/): Automatically generates a sitemap for a website, which is vital for SEO and helping search engine bots crawl pages effectively. To set up the Astro Sitemap, be sure to specify your site's base URL and any additional options in `astro.config.mjs` file:

```mjs
export default defineConfig({
  // ...
  site: "https://example.com",
  integrations: [sitemap()],
});
```

- [Bag of Tricks for Astro's View Tran­si­tions](https://github.com/martrapp/astro-vtbot#readme): is a collection of extensions and support aimed at enhancing Astro's view transitions. Whether you're looking to add flair to your website or streamline user experience, this toolkit offers various techniques to elevate your projects. In the template, it was used to add View Transitions to a Starlight docs.

### Flexibility with Integrations

The great thing about Astro is its rich ecosystem of integrations, allowing you to tailor project functionalities to your exact needs. Feel free to explore [Astro integrations page](https://astro.build/integrations/) and add additional capabilities as you see fit.

## Tools and Technologies

This project is built using a variety of tools and technologies that enhance its performance, maintainability, and developer experience. Below is a list of the key tools and their roles in the project:

### Preline UI

Interactive components like navbars, modals, and accordions are built using [Preline UI](https://preline.co), a comprehensive open-source component library.

### Tailwind CSS

Styling across our project leverages the utility-first classes offered by [Tailwind CSS](https://tailwindcss.com). This methodology allows us to create custom layouts and components with speed and efficiency.

To ensure consistent code formatting, particularly for class sorting, we have integrated the `prettier-plugin-tailwindcss` [plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss). The following configuration is set in the `.prettierrc` file at the root of the project:

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### Deployment and Security

We deploy our project on [Vercel](https://vercel.com), capitalizing on their robust platform for seamless CI/CD workflows. Using `vercel.json`, we set stringent security headers and caching policies, ensuring adherence to security and performance best practices:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; [other-directives]"
        },
        "Additional security headers..."
      ]
    }
  ]
}
```

### HTML Minification

For optimal site performance, we post-process our HTML files with `process-html.mjs`, a [custom script](https://straffesites.com/en/blog/optimize-astro-html-post-build) that minifies HTML after the build phase to reduce file size and improve load times.

Here is a snippet from our HTML minification script in `process-html.mjs`:

```mjs
/process-html.mjs
// Post-build HTML minification script snippet
// ...
await Promise.all(
  files.map(async (file) => {
    // File processing and minification logic
  })
);
```

We encourage you to refer to the detailed documentation for each tool to fully understand their capabilities and how they contribute to the project:

- [Preline UI Documentation](https://preline.co/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [html-minifier-terser Documentation](https://github.com/terser/html-minifier-terser)

## Contributing

If you're interested in helping, you can contribute in several ways:

1. Reporting Issues: Feel free to use the issue tracker to report bugs or request features.
2. Submitting Pull Requests: If you've fixed a bug or added a new feature, submit a pull request with a clear description of your changes.
3. Providing Feedback: Share your thoughts on the project's current features and suggest improvements.

## License

This project is released under the MIT License. Please read the [LICENSE](https://github.com/Vitto44/CertainWager/blob/main/LICENSE) file for more details.
