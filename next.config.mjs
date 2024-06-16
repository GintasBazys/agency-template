/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "localhost",
			},
		],
	},
	async headers() {
		return [
			{
				source: "/robots.txt",
				headers: [
					{
						key: "cache-control",
						value: "max-age=0",
					},
				],
			},
		];
	},
	experimental: {
		reactCompiler: {
			compilationMode: "annotation",
		},
	},
};

export default nextConfig;
