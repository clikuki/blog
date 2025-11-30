import type { Post, PostInstance } from "../misc";
import Path from "path/win32";

const files = import.meta.glob<PostInstance>("../content/*.astro", { eager: true });
export const posts = Object.entries(files).map<Post>(([path, file]) => ({
	slug: Path.basename(path, ".astro"),
	path,
	file,
}));
