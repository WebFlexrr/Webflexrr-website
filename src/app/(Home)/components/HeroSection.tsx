import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = (): React.JSX.Element => {
	return (
		<section id={"home"} className="relative  w-full  ">
			<div className="relative flex h-fit w-full items-center justify-center bg-white pb-28 bg-grid-black/[0.09] lg:h-screen lg:pt-28 dark:bg-black dark:bg-grid-white/[0.2]">
				{/* Radial gradient for the container to give a faded look */}
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)] dark:bg-black"></div>
				<section className="mx-auto flex h-full w-full max-w-[90rem] flex-col items-center gap-10 px-5 text-center md:px-14 xl:px-20">
					<section className="mt-32 w-full max-w-6xl">
						<h1 className="">
							<span className="text-green-600">
								Grow your startup by 200% 🚀
							</span>
							with our stunning, scalable websites and apps!
						</h1>
					</section>
					<section className="w-full max-w-4xl ">
						<p className="text-xl text-black">
							We empower start-up businesses with our technical expertise. We
							deliver beautifully designed websites and highly scalable mobile
							and web apps, ensuring technical compliance. Our solutions are
							essential for the success of early-stage startups.
						</p>
					</section>
					<section>
						<button className=" relative inline-flex h-14 overflow-hidden rounded-full p-[3px] drop-shadow-2xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
							<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
							<Link
								href={process.env.NEXT_PUBLIC_MEETING_LINK ?? ""}
								className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-10 py-1 text-xl font-bold backdrop-blur-3xl transition-all duration-700 ease-in-out-expo hover:bg-black  hover:text-white dark:bg-transparent dark:text-white"
							>
								Book a Call <FaArrowRightLong className="ml-2" />
							</Link>
						</button>
					</section>
				</section>
			</div>
		</section>
	);
};

export default HeroSection;
