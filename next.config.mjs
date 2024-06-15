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
	experimental: {
		reactCompiler: {
			compilationMode: "annotation",
		},
	},
};

export default nextConfig;
