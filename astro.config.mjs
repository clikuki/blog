// @ts-check
import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://clikuki.github.io/blog",
  base: "/blog",
  integrations: [mdx({})],
});