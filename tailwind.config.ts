import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const defaultTheme = require("tailwindcss/defaultTheme");

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				prompt: "Prompt, sans-serif",
				inter: "Inter, sans-serif",
				"schibsted-grotesk": "Schibsted Grotesk, sans-serif",
				"dm-sans": "DM Sans, sans-serif",
			},
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				tertiary: "var(--color-tertiary)",
				subHeading: "var(--color-subHeading)",
				paragraph: "var(--color-paragraph)",
				background: "var(--color-background)",
				background2: "var(--color-background2)",
				background3: "var(--color-background3)",
				holo: "-webkit-text-stroke:5px black, -webkit-text-fill-color:transparent",
			},
			animation: {
				wiggle: "wiggle 700ms ease-in-out",
				"visible-from-left":
					"visible-from-left 1.5s cubic-bezier(0.785, 0.135, 0.150, 0.860)",
				"visible-from-right":
					"visible-from-right 1.5s cubic-bezier(0.785, 0.135, 0.150, 0.860) ",
				"visible-from-up":
					"visible-from-up 1s cubic-bezier(0.785, 0.135, 0.150, 0.860)",
				"visible-from-down":
					"visible-from-down 1s cubic-bezier(0.785, 0.135, 0.150, 0.860)",
				scroll: "scroll 10s ease-in-out",
			},
			transitionTimingFunction: {
				"in-out-circ": "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
				"in-out-expo": "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
			},
			keyframes: {
				wiggle: {
					"0%": { transform: "rotate(0deg)" },
					"25%": { transform: "rotate(-8deg)" },
					"50%": { transform: "rotate(8deg)" },
					"100%": { transform: "rotate(0deg)" },
				},
				"visible-from-up": {
					"0%": { translate: "0 30% 0", opacity: "0" },
					"100%": { translate: "0 0 0", opacity: "1" },
				},
				"visible-from-down": {
					"0%": { translate: "0 -30% 0", opacity: "0" },
					"100%": { translate: "0 0 0", opacity: "1" },
				},
				"visible-from-left": {
					"0%": { translate: "-30% 0 0", opacity: "0" },
					"100%": { translate: "0 0 0", opacity: "1" },
				},
				"visible-from-right": {
					"0%": { translate: "30% 0 0", opacity: "0" },
					"100%": { translate: "0 0 0", opacity: "1" },
				},
				scroll: {
					"0%": {
						translate: "-100% 0 0",
					},
					"100%": {
						transform: "100% 0 0",
					},
				},
			},
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			prefix: "nextui", // prefix for themes variables
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
		addVariablesForColors,
		function ({ matchUtilities, theme }: any) {
			matchUtilities(
				{
					"bg-grid": (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					"bg-grid-small": (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					"bg-dot": (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
						)}")`,
					}),
				},
				{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
			);
		},
	],
	// purge: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.jsx"],
};

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}
export default config;
