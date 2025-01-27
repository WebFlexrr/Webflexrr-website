import React from "react";

import Heading from "@/components/Heading";

import { ShineBorder } from "@/components/ui/shine-border";

const Services = () => {
	return (
		<section className="w-full py-32 md:py-20 ">
			<section className="mx-auto  w-full  max-w-7xl px-6 ">
				<Heading
					heading={` Services`}
					subHeading={"We serve Founders"}
					para="Discover our unique strength and distinctive value we offer"
				/>

				<div
					className={
						"mt-16 flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
					}
				>
					<ShineBorder
						className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl"
						color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
					>
						<span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
							Shine Border
						</span>
					</ShineBorder>
					<ShineBorder
						className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
						color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
					>
						<span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
							Shine Border
						</span>
					</ShineBorder>
				</div>
			</section>
		</section>
	);
};

export default Services;
