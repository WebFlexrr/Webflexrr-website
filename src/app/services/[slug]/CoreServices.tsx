"use client";
import Heading from "@/components/Heading";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { type FC } from "react";

interface CoreServicesProps {
	services: ServiceServices[];
}

const CoreServices: FC<CoreServicesProps> = ({ services }) => {
	// const CoreServices = useRef<HTMLDivElement>(null);
	// gsap.registerPlugin(ScrollTrigger);
	// gsap.registerPlugin(useGSAP);

	// useGSAP(() => {
	// 	gsap.from(".core_servicesSection", {
	// 		y: 100,
	// 		opacity: 0,
	// 		stagger: 0.2,
	// 		ease: "power4.out",
	// 		scrollTrigger: {
	// 			trigger: CoreServices.current,
	// 			scroller: "main",
	// 			start: "30% 80%",
	// 		},
	// 	});
	// });

	return (
		<section
			// ref={CoreServices}
			className="bg-background2 h-auto w-full border-t border-black"
		>
			<section className="relative h-fit w-full">
				<section className="flex h-auto w-full flex-col items-center px-5 py-20 xl:px-0 xl:py-28">
					<Heading heading={"Services"} subHeading={"We are Mastery in "} />
					{/* <h1>We can offer</h1> */}
					<section className="h-auto w-full xl:mt-10">
						{/* <section className="w-full h-full flex flex-col md:flex-row md:flex-wrap  lg:gap-0  text-secondary border-tertiary "> */}
						<section className="border-tertiary text-secondary grid h-full w-full grid-cols-1 xl:grid-cols-4">
							{services?.map((items) => (
								<section
									key={items._key}
									className="core_servicesSection h-auto w-full"
								>
									<div className="group border-secondary relative h-[22rem] w-full xl:border-x">
										<div className="relative mx-auto flex h-full w-full flex-col items-center gap-5 md:p-8 xl:px-12">
											<span className="text-primary group-hover:text-primary xl:text-secondary text-center text-[30px] leading-[41.76px] font-bold transition duration-500 ease-in-out md:text-[34px]">
												{items.title}
											</span>
											<span className="">
												<p className="text-center text-lg text-black">
													{items.description}
												</p>
											</span>
										</div>
										<Image
											src={items.image}
											width={"1080"}
											height={"0"}
											alt={""}
											className="absolute top-0 -z-10 w-full opacity-30 transition duration-300 ease-in-out xl:absolute xl:scale-75 xl:opacity-0 xl:group-hover:visible xl:group-hover:scale-100 xl:group-hover:opacity-30"
										/>
									</div>
								</section>
							))}
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default CoreServices;
