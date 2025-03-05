// tailwind.config.js
import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		// ...
		// make sure it's pointing to the ROOT node_module
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {},
	},
	darkMode: "class",
	plugins: [
		heroui({
			prefix: "heroui", // prefix for themes variables
			addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
			defaultTheme: "light", // default theme from the themes object
			defaultExtendTheme: "light", // default theme to extend on custom themes
			layout: {}, // common layout tokens (applied to all themes)
			themes: {
				light: {
					layout: {}, // light theme layout tokens
					colors: {}, // light theme colors
				},
				dark: {
					layout: {}, // dark theme layout tokens
					colors: {}, // dark theme colors
				},
				// ... custom themes
			},
		}),
	],
};

export default config;
