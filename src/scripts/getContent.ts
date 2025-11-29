import type { PostInstance } from "../misc";
import Path from "path/win32";

export interface Post {
	slug: string,
	path: string,
	file: PostInstance,
}

const files = import.meta.glob<PostInstance>("../content/*.astro", { eager: true });
export const posts = Object.entries(files).map<Post>(([path, file]) => ({
	slug: Path.basename(path, ".astro"),
	path,
	file,
}));
