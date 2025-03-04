import Footer from "@/components/Footer";
import MainTitle from "@/components/MainTitle";
import React from "react";
import type { Metadata } from "next";
import NavbarSection from "@/components/NavbarSection";
import ContactUs from "./ContactUs";

export const metadata: Metadata = {
	title: {
		default: "Contact",
		template: "%s | WebFlexrr Digital Services",
	},
	description: "This is Plan Page of Webflexrr Digital Services",
};
const Plans = (): React.JSX.Element => {
	return (
		<main className="bg-background2 relative z-30 h-screen w-full overflow-x-hidden overflow-y-auto scroll-smooth">
			<NavbarSection />
			<MainTitle heading={"Contact"} />
			<ContactUs />
			<Footer />
		</main>
	);
};

export default Plans;
