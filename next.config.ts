import type { NextConfig } from "next";

/*
  GitHub Pages serves plain, pre-built files (no live server), so we tell
  Next.js to "export" the whole site into a folder of static HTML/CSS/JS.

  - output: "export"        → build the site as static files into an `out/` folder
  - images.unoptimized      → GitHub Pages can't run Next's image optimizer, so serve images as-is
  - basePath / assetPrefix  → on GitHub Pages your site lives under /<repo-name>,
                              so links and assets need that prefix. We read it from
                              an environment variable that the deploy automation sets,
                              so local `npm run dev` (where it's empty) still works normally.
*/
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
