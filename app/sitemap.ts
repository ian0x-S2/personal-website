import type { MetadataRoute } from "next";
import { getAllPosts } from "@/app/blog/utils/posts-utils";

export const baseUrl =
	process.env.NODE_ENV === "development"
		? "http://localhost:3000"
		: "https://ian-developer.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const allPosts = await getAllPosts();
	const posts = allPosts.map((post) => ({
		url: `${baseUrl}/blog/${post.slug}`,
		lastModified: post.frontmatter.publishDate,
	}));

	const routes = ["", "/blog", "/projects"].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString(),
	}));

	return [...routes, ...posts];
}
