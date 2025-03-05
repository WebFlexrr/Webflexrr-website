import type { Metadata } from "next";
import "./globals.css";
import { type ReactNode } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import { Providers } from "./providers";

export const metadata: Metadata = {
	title: {
		default:
			"WebFlexrr Labs | Crafting High-Performance Websites for Maximize your Business 10X ",
		template: "%s | WebFlexrr Digital Services",
	},
	description:
		"WebFlexrr Digital Services: Elevate your online presence with WebFlexrr's Web Development . Specializing in E-commerce Solutions, Responsive Design, SEO, and more for impactful, custom web solutions. Learn more....",
	metadataBase: new URL("https://www.webflexrr.com"),
	alternates: {
		canonical: "/",
		languages: {
			"en-US": "/en-US",
			"de-DE": "/de-DE",
		},
	},
	verification: {
		google: process.env.GOOGLE_CONSOLE_VID,
	},
	referrer: "origin-when-cross-origin",
	keywords: [
		"WebFlexrr Web Development",
		"WebFlexrr Digital Services",
		"WebFlexrr SEO Solutions",
		"E-commerce Solutions by WebFlexrr",
		"Graphic Design by WebFlexrr",
		"WebFlexrr SEO Experts",
		"Responsive WebFlexrr Design",
		"Web Development",
		"SAAS Development",
		"Website Design",
		"SEO Services",
		"Online Presence",
		"E-commerce Solutions",
		"Responsive Design",
		"Content Marketing",
		"Branding Services",
		"Mobile App Development",
		"Search Engine Optimization",
		"Web Analytics",
		"User Experience (UX) Design",
		"Conversion Optimization",
		"Custom Web Solutions",
	],
	authors: { name: "WebFlexrr" },
	creator: "Tech Team of WebFlexrr",
	publisher: "WebFlexrr Digital Services",
	openGraph: {
		title: "WebFlexrr Digital Services",
		description:
			"WebFlexrr Digital Services | Empowering Your Online Presence with Expert Web Development and Strategic Digital Marketing Solutions",
		url: "https://www.webflexrr.com",
		siteName: "WebFlexrr Digital Services",
		images: [
			{
				url: "/logos/logo2.png",
				width: 1200,
				height: 630,
				alt: "WebFlexrr",
			},
		],
		type: "website",
	},
};

const RootLayout = ({ children }: { children: ReactNode }): JSX.Element => {
	return (
		<html lang="en" className="scroll-smooth!">
			<GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER ?? ""} />
			<Providers>
				<body className="dark">{children}</body>
			</Providers>
		</html>
	);
};
export default RootLayout;
