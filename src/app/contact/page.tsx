import Hero from "@/app/contact/Hero";
import Footer from "@/components/Footer";
import MainTitle from "@/components/MainTitle";
import React from "react";
import type { Metadata } from "next";
import NavbarSection from "@/components/ui/Navbar/NavbarSection";

export const metadata: Metadata = {
	title: {
		default: "Contact",
		template: "%s | WebFlexrr Digital Services",
	},
	description: "This is Plan Page of Webflexrr Digital Services",
};
const Plans = (): React.JSX.Element => {
	return (
		<main className="relative z-30 h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth bg-background2">
			<NavbarSection />
			<MainTitle heading={"Contact"} />
			<Hero />
			<Footer />
		</main>
	);
};

export default Plans;
