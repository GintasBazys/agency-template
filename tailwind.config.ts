import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		flowbite.content(),
	],
	theme: {
		extend: {
			colors: {
				primary: "#0A5C71",
				secondary: "#040046",
			},
			backgroundImage: () => ({
				"text-gradient": "linear-gradient(0deg, #6ed3f5 0%, #6b85f2 100%)",
				"bg-gradient": "linear-gradient(0deg, #6ed3f5 0%, #6b85f2 100%)",
			}),
			textFillColor: () => ({
				"text-gradient": "transparent",
			}),
			backgroundClip: () => ({
				text: "text",
			}),
		},
	},
	plugins: [
		require("flowbite/plugin"),
		function ({ addUtilities }: PluginAPI) {
			addUtilities({
				".bg-gradient": {
					backgroundImage: "linear-gradient(0deg, #6ed3f5 0%, #6b85f2 100%)",
				},
				".text-gradient": {
					backgroundImage: "linear-gradient(0deg, #6ed3f5 0%, #6b85f2 100%)",
					"-webkit-background-clip": "text",
					"-webkit-text-fill-color": "transparent",
					"background-clip": "text",
				},
			});
		},
	],
};
export default config;
