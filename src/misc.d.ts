import type { AstroInstance } from "astro";

export interface PostInstance extends AstroInstance {
  title: string;
	date: Date;
	excerpt: string;
}

export interface Post {
	slug: string,
	path: string,
	file: PostInstance,
}