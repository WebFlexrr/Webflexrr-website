"use client";
import React from "react";
import { WavyBackground } from "../wavy-background";
import { FaArrowRightLong } from "react-icons/fa6";

export function WavyBackgroundDemo(): React.JSX.Element {
	return (
		<WavyBackground
			backgroundFill="white"
			speed={"slow"}
			blur={5}
			className="mx-auto  max-w-7xl pb-40"
		>
			<section className="mx-auto flex h-full w-full max-w-7xl flex-col items-center gap-10 text-center sm:px-5 md:px-14 xl:px-20">
				<section className="mt-32 w-full max-w-6xl">
					<h1>
						Crafting High-Performance Websites for
						<span className="text-green-600">
							{" "}
							Maximize your Business 10X 🚀
						</span>
					</h1>
				</section>
				<section className="w-full max-w-4xl">
					<p>
						We build website for your business that actually converts.
						Wonderfully designed, masterfully created websites and layouts,
						created by the founders of Google and Facebook. The ideal beginning
						stage for your next project.
					</p>
				</section>
				<section>
					<button className=" relative inline-flex h-14 overflow-hidden rounded-full p-[3px] drop-shadow-2xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-10 py-1 text-xl font-bold backdrop-blur-3xl transition-all duration-700 ease-in-out-expo hover:bg-black  hover:text-white dark:bg-transparent dark:text-white">
							Book a Call <FaArrowRightLong className="ml-2" />
						</span>
					</button>
				</section>
			</section>
		</WavyBackground>
	);
}
