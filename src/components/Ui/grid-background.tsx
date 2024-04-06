import { Button } from "@nextui-org/react";
import React from "react";

export function GridBackgroundDemo(): React.JSX.Element {
	return (
		<div className="relative flex h-[50rem] w-full  items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]">
			{/* Radial gradient for the container to give a faded look */}
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
			<section className="mx-auto flex h-full w-full max-w-7xl flex-col items-center gap-10 text-center sm:px-5 md:px-14 xl:px-20">
				<section className="mt-32 w-full max-w-6xl">
					<h1>
						Crafting High-Performance Websites with
						<span className="text-primary"> Stunning Design & Speed 🚀</span>
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
					{" "}
					<Button
						variant="solid"
						className="rounded-full bg-black px-10 py-7 text-lg text-white "
					>
						Book a Call
					</Button>
				</section>
			</section>
		</div>
	);
}
