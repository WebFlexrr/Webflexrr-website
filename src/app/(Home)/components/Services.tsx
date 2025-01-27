"use client";
import React from "react";

import Heading from "@/components/Heading";
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "next-themes";

const Services = () => {
	const { theme } = useTheme();
	return (
		<section className="w-full py-32 md:py-20 ">
			<section className="mx-auto  w-full  max-w-7xl px-6 ">
				<Heading
					heading={` Why Choose Us`}
					subHeading={"Our Unique Selling Point"}
					para="Discover our unique strength and distinctive value we offer"
				/>

				<div
					className={
						"flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
					}
				>
					<MagicCard
						className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
						gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
					>
						Magic
					</MagicCard>
					<MagicCard
						className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
						gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
					>
						Card
					</MagicCard>
				</div>
			</section>
		</section>
	);
};

export default Services;
