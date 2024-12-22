import Footer from "@/components/Footer";
import MainTitle from "@/components/MainTitle";
import type { Metadata } from "next";
import Hero from "./components/Hero";

export const metadata: Metadata = {
	title: "Our team",
	description: "Generated by create next app",
};
const Teams = (): JSX.Element => {
	return (
		<main>
			<MainTitle heading={"Our Team"} />
			<Hero />
			<Footer />
		</main>
	);
};

export default Teams;
