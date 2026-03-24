/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";

const withMDX = createMDX({});
const nextConfig = {
	transpilePackages: ["next-mdx-remote", 'three'],
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

	async redirects() {
		return [
			{
				source: "/pt/blog",
				destination: "/en/blog",
				permanent: true,
			},
		];
	},

	eslint: {
		ignoreDuringBuilds: true,
	},

	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "unsplash.com",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "plus.unsplash.com",
			},
		],
	},
};

export default withMDX(nextConfig);
