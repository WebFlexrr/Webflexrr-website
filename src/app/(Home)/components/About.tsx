"use client";
import { TextReveal } from "@/components/ui/text-reveal";
import React from "react";

const About = () => {
	return (
		<section className="mx-auto mt-20 w-full  max-w-7xl px-4 sm:px-6">
			<div className="z-10 flex min-h-64 items-center justify-center rounded-lg  bg-white p-4 dark:bg-black sm:p-6">
				<TextReveal text="We're a AI based Software Development Agency. 💫 We turn business Into industry Leader" />
			</div>

			{/* <section className="flex w-full flex-col gap-4 text-6xl font-medium  text-white lg:text-7xl   ">
                <div className="flex gap-2">
                    <span>We're a</span>
                    <span className="text-primary">full-service</span>

                    <span>AI based Software</span>
                </div>
                <div className="flex gap-2">
                    <span>Development Agency. 💫</span>

                    <span>We turn</span>
                </div>
                <span className="flex gap-2 ">
                    business
                    <span className="text-primary">AI-driven</span>
                    Into industry leaders.
                </span>
            </section> */}
		</section>
	);
};

export default About;
