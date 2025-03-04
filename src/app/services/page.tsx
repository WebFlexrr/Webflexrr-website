import HeroServices from "@/app/services/HeroServices";
import Footer from "@/components/Footer";
import MainTitle from "@/components/MainTitle";
import NavbarSection from "@/components/NavbarSection";
// import SocialCarousel from "@/components/ui/SocialPostsCarousel/SocialCarousel";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: {
		default: "Services",
		template: "%s | WebFlexrr Digital Services",
	},
	description: "This is services Page of Webflexrr Digital Services",
};

const Services = (): JSX.Element => {
	return (
		<main className="bg-background2 relative z-30 h-screen w-full overflow-x-hidden overflow-y-auto scroll-smooth dark:bg-black">
			<NavbarSection />
			<MainTitle heading={"Services"} />
			<HeroServices />
			{/* <SocialCarousel /> */}
			<Footer />
		</main>
	);
};

export default Services;
