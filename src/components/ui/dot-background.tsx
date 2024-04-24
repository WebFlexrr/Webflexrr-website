import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export function DotBackgroundDemo(): React.JSX.Element {
	return (
		<div className="relative flex h-[50rem] w-full items-center justify-center bg-white bg-dot-black/[0.6] dark:bg-black dark:bg-dot-white/[0.6]">
			{/* Radial gradient for the container to give a faded look */}
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] dark:bg-black"></div>
			<section className="mx-auto flex h-full w-full max-w-7xl flex-col items-center gap-10 text-center sm:px-5 md:px-14 xl:px-20">
				<section className="mt-32 w-full max-w-6xl">
					<h1 className="text-black">
						Crafting High-Performance Websites for
						<span className="text-green-600">
							{" "}
							Maximize your Business 10X 🚀
						</span>
					</h1>
				</section>
				<section className="w-full max-w-4xl">
					<p className="font-medium text-black">
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
		</div>
	);
}
