import React from "react";
import type { Metadata } from "next";
import Hero from "./Hero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: {
		default: "Plans",
		template: "%s | WebFlexrr Digital Services",
	},
	description: "This is Plan Page of Webflexrr Digital Services",
};

const Plans = async (): Promise<React.JSX.Element> => {
	// const getPlans = await getAllPlans();
	// const allPlans = getPlans.sort((a, b) => a.id - b.id);
	return (
		<main className="relative z-30 overflow-x-hidden dark:bg-black">
			{/* <NavbarSection /> */}
			{/* <MainTitle heading={"Our Plans"} /> */}
			<Hero />
			<Footer />
		</main>
	);
};

export default Plans;
