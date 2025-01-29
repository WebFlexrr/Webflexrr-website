"use client";
import React from "react";

const TagLine = (): React.JSX.Element => {
	// const tagLine = useRef<HTMLDivElement>(null);
	// gsap.registerPlugin(ScrollTrigger);
	// gsap.registerPlugin(useGSAP);

	// useGSAP(() => {
	// 	gsap.from(".tagLineContent", {
	// 		x: -90,
	// 		duration: 1.3,
	// 		opacity: 0,
	// 		ease: "power2.out",
	// 		scrollTrigger: {
	// 			trigger: tagLine.current,
	// 			scroller: ".main",
	// 			start: "top 90%",
	// 		},
	// 	});
	// 	gsap.from(".tagLineContent2", {
	// 		x: 90,
	// 		duration: 1,
	// 		opacity: 0,
	// 		ease: "power2.out",
	// 		scrollTrigger: {
	// 			trigger: tagLine.current,
	// 			scroller: ".main",
	// 			start: "40% 90%",
	// 		},
	// 	});
	// });

	return (
		// <section ref={tagLine} className=" bg-background2 relative h-auto w-full ">
		<section className=" bg-background2 relative h-auto w-full ">
			<section className="w-full py-20 lg:py-36 ">
				<section className="mx-auto flex w-full max-w-[90rem] flex-col gap-10 px-5 md:px-10 lg:gap-16 xl:gap-28 ">
					<section className="tagLineContent mx-auto flex w-full max-w-5xl flex-col gap-14 text-center">
						<h3>
							It&apos;s Time To Take Your Digital Presence To The Next Level We
							Are Always Here To Help You Grow Your Business
						</h3>
					</section>
					<section className="tagLineContent2  text-tertiary h-auto items-center  justify-between lg:mx-auto lg:min-w-[40rem] lg:justify-evenly  xl:w-full">
						<section className="mx-auto grid h-auto w-fit md:w-full md:grid-cols-2 lg:gap-7 xl:grid-cols-4">
							<div className="flex h-32 w-60 items-center gap-5 lg:w-80   ">
								<div className="stroke-text border-secondary text-[75px] font-semibold leading-[87px] text-transparent transition duration-500 ease-in-out hover:text-primary lg:text-[100px] xl:text-[120px]">
									2+
								</div>
								<div className="text-tertiary flex w-fit flex-col text-left text-2xl leading-10 transition duration-500 ease-in-out hover:text-secondary">
									Years Experience
								</div>
							</div>
							<div className="flex h-32 w-60  items-center gap-5 lg:w-80 ">
								<div className="stroke-text border-secondary text-[75px]  font-semibold leading-[87px] text-transparent transition duration-500 ease-in-out hover:text-primary lg:text-[100px] xl:text-[120px]">
									12+
								</div>
								<span className="text-tertiary flex flex-col text-left text-2xl leading-10 transition duration-500 ease-in-out hover:text-secondary">
									Advanced Tools
								</span>
							</div>
							<div className="flex h-32 w-60  items-center gap-5 lg:w-80 ">
								<div className="stroke-text border-secondary text-[75px]  font-semibold leading-[87px] text-transparent transition duration-700 ease-in-out hover:text-primary lg:text-[100px] xl:text-[120px]">
									10+
								</div>
								<span className="text-tertiary flex flex-col text-left text-2xl leading-10 transition duration-700 ease-in-out hover:text-secondary">
									Satisfied Clients
								</span>
							</div>
							<div className="flex h-32 w-60 items-center gap-5 lg:w-80 ">
								<div className="stroke-text border-secondary text-[75px]  font-semibold leading-[87px] text-transparent transition duration-500 ease-in-out hover:text-primary lg:text-[100px] xl:text-[120px]">
									20+
								</div>
								<span className="text-tertiary flex flex-col text-left text-2xl leading-10 transition duration-500 ease-in-out hover:text-secondary">
									Projects Completed
								</span>
							</div>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default TagLine;
