"use client";
import React from "react";

const About = () => {
	return (
		<section className="mx-auto w-full  max-w-7xl  px-6 pt-40 md:py-20 ">
			<section className="flex w-full flex-col gap-4 text-6xl font-medium  text-white lg:text-7xl   ">
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
			</section>
		</section>
	);
};

export default About;
