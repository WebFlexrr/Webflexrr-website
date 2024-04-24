import ProjectSection from "@/app/portfolio/ProjectSection";
import Footer from "@/components/Footer";
import MainTitle from "@/components/MainTitle";
import React from "react";
import type { Metadata } from "next";
import NavbarSection from "@/components/NavbarSection";

export const metadata: Metadata = {
	title: {
		default: "Projects",
		template: "%s | WebFlexrr Digital Services",
	},
	description: "This is projects Page of Webflexrr Digital Services",
};

const Portfolio = (): React.JSX.Element => {
	return (
		<main className="bg-background2 relative z-30 h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth">
			<NavbarSection />
			<MainTitle heading={"Portfolio"} />
			<ProjectSection />
			<Footer />
		</main>
	);
};

export default Portfolio;
