import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	loader: glob({ pattern: "*.(md|mdx)", base: "./src/content/blog/" }),
	schema: () => z.object({
		title: z.string(),
		date: z.coerce.date(),
		tag: z.array(z.string()),
		excerpt: z.string(),
	}),
})

export const collections = {
	blog: postsCollection,
};