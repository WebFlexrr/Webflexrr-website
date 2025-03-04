"use client";
// import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

import { motion } from "motion/react";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";

import "swiper/css";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { CallToActionButton } from "@/components/CallToActionButton";

//import { Swiper, SwiperSlide } from "swiper/react";
//import { Autoplay } from "swiper/modules";

const words = ["Landing Pages", "Apps", "Software", "MVP"];

{
	/*
	const websites = [
		"https://cdn.sanity.io/images/ewohzuts/production/18706afcdaf93f6f8853c237d2d4e93577f41d3f-1918x914.png",
		"https://cdn.sanity.io/images/ewohzuts/production/18706afcdaf93f6f8853c237d2d4e93577f41d3f-1918x914.png",
		"https://cdn.sanity.io/images/ewohzuts/production/18706afcdaf93f6f8853c237d2d4e93577f41d3f-1918x914.png",
		"https://cdn.sanity.io/images/ewohzuts/production/18706afcdaf93f6f8853c237d2d4e93577f41d3f-1918x914.png",
		"https://cdn.sanity.io/images/ewohzuts/production/18706afcdaf93f6f8853c237d2d4e93577f41d3f-1918x914.png",
		"https://cdn.sanity.io/images/ewohzuts/production/18706afcdaf93f6f8853c237d2d4e93577f41d3f-1918x914.png",
		"https://cdn.sanity.io/images/ewohzuts/production/18706afcdaf93f6f8853c237d2d4e93577f41d3f-1918x914.png",
		"https://cdn.sanity.io/images/ewohzuts/production/18706afcdaf93f6f8853c237d2d4e93577f41d3f-1918x914.png",
	];
	*/
}

const Hero = () => {
	return (
		<section className="relative w-full">
			{/* <Spotlight
				className="-top-40 left-0 md:-top-20 md:left-60"
				fill="white"
			/> */}

			<section className="relative mb-20 flex h-auto w-full items-center justify-center px-7 pt-20 md:pt-20 lg:h-screen lg:pt-8">
				<section className="mx-auto flex h-fit w-full max-w-[90rem] flex-col items-center text-center md:items-center md:px-14 xl:px-20">
					{/* <motion.span
						initial={{ opacity: 0, scale: 0.7, y: "-70%" }}
						animate={{ opacity: 1, scale: 1, y: "0" }}
						transition={{ duration: 0.7, ease: "circInOut" }}
					>
						<Link
							href={"/plans"}
							className=" flex cursor-pointer items-center gap-5 rounded-full border px-4 py-2 text-base font-bold text-black dark:text-white md:text-sm"
						>
							✨ See our Designs and compare plans <FaArrowRightLong />
						</Link>
					</motion.span> */}
					<motion.div
						initial={{ opacity: 0, scale: 0.7, y: "-70%" }}
						animate={{ opacity: 1, scale: 1, y: "0" }}
						transition={{ duration: 0.7, ease: "circInOut" }}
						className="z-10 flex items-center justify-center"
					>
						{/* <div
							className={cn(
								"group rounded-full border  border-primary bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
							)}
						>
							<AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out  hover:text-neutral-600 hover:duration-300 dark:hover:text-neutral-200">
								<span>✨ Introducing Webflexrr Labs</span>
								<ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
							</AnimatedShinyText>
						</div> */}
						<AnimatedGradientText>
							🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
							<span
								className={cn(
									`animate-gradient inline bg-linear-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-white`
								)}
							>
								Introducing Webflexrr Labs &gt;
							</span>
							<ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
						</AnimatedGradientText>
					</motion.div>
					{/* <motion.section
						initial={{ opacity: 0, scale: 0.7, y: "40%" }}
						animate={{ opacity: 1, scale: 0.8, y: "0" }}
						transition={{ duration: 0.7, ease: "circInOut" }}
						className=" mt-5 w-full lg:max-w-5xl  border "
					>
						<h1 className="  gap-2  bg-opacity-50 bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-6xl font-bold  text-transparent md:text-5xl lg:text-7xl">
							<span className="flex flex-col items-start  lg:items-center justify-center lg:flex-row">
								We ship
								<FlipWords
									words={words}
									duration={2000}
									className=" text-red-400 dark:text-red-400"
								/>
								<span className="hidden lg:flex">that</span>
							</span>
							<span className=" border ">
								<span className="mx-2 lg:hidden">That</span>
								Standouts Everywhere 🚀
							</span>
						</h1>
					</motion.section> */}
					<motion.section
						initial={{ opacity: 0, scale: 0.7, y: "40%" }}
						animate={{ opacity: 1, scale: 1, y: "0" }}
						transition={{ duration: 0.7, ease: "circInOut" }}
						className="mt-16 w-full lg:mt-5 lg:max-w-5xl"
					>
						<h1 className="flex flex-col flex-wrap items-start gap-2 md:items-center">
							<span className="flex flex-col gap-2 md:flex-row">
								<span>We Ship</span>
								<FlipWords
									words={words}
									duration={2000}
									className="text-red-400 dark:text-red-400"
								/>
							</span>
							<span className="flex flex-col gap-2 md:flex-row">
								<span>That Standout</span>
								<span>Everything</span>
							</span>
						</h1>
					</motion.section>
					{/* <motion.section
						initial={{ opacity: 0, scale: 0.7, y: "40%" }}
						animate={{ opacity: 1, scale: 0.8, y: "0" }}
						transition={{ duration: 0.7, ease: "circInOut" }}
						className=" mt-5 w-full lg:max-w-5xl  border "
					>
						<h1 className="  gap-2  bg-opacity-50 bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-6xl font-bold  text-transparent md:text-5xl lg:text-7xl">
							<span className="flex flex-col items-start  lg:items-center justify-center lg:flex-row">
								We ship
								<FlipWords
									words={words}
									duration={2000}
									className=" text-red-400 dark:text-red-400"
								/>
								<span className="hidden lg:flex">that</span>
							</span>
							<span className=" border ">
								<span className="mx-2 lg:hidden">That</span>
								Standouts Everywhere 🚀
							</span>
						</h1>
					</motion.section> */}
					<motion.section
						initial={{ opacity: 0, y: "30%" }}
						animate={{ opacity: 1, y: "0" }}
						transition={{ duration: 0.7, delay: 0.1, ease: "circInOut" }}
						className="mt-10 w-full max-w-3xl md:mt-0"
					>
						<p className="text-start text-black md:text-center">
							A Design and Development studio that helps passionate Startup and
							SaaS Founders build the products of their dreams.
						</p>
					</motion.section>
					<motion.span
						initial={{ opacity: 0, y: "30%" }}
						animate={{ opacity: 1, y: "0" }}
						transition={{ duration: 0.7, delay: 0.3, ease: "circInOut" }}
						className="my-7 w-full md:w-auto"
					>
						<Link href={process.env.NEXT_PUBLIC_MEETING_LINK ?? ""}>
							{/* <Button className="text-font w-full scale-110 rounded-lg bg-primary bg-linear-to-b from-primary via-primary to-purple-300 p-7 text-lg  font-bold text-white md:scale-100 lg:rounded-full">
								Book a Free Call
							</Button> */}
							<CallToActionButton />
						</Link>
					</motion.span>
					<span className="text-foreground-500 mx-auto my-4 flex flex-col gap-2 text-2xl md:text-lg lg:flex-row">
						<motion.span
							initial={{ opacity: 0, x: "-20%", y: "30%" }}
							animate={{ opacity: 1, x: "0", y: "0" }}
							transition={{ duration: 0.7, delay: 0.6, ease: "circInOut" }}
							className=""
						>
							We use industry standard technologies
						</motion.span>
						<motion.span
							initial={{ opacity: 0, x: "20%", y: "30%" }}
							animate={{ opacity: 1, x: "0", y: "0" }}
							transition={{ duration: 0.7, delay: 0.6, ease: "circInOut" }}
							className="flex flex-wrap justify-center"
						>
							<motion.span whileHover={{ y: -10 }}>
								<Link
									href={"https://www.figma.com"}
									className="text-foreground mx-2 flex items-center justify-center gap-1 font-bold"
								>
									<Image
										src={"/tech-logos/figma.png"}
										width={20}
										height={20}
										alt={"Figma logo"}
										className="h-[20px] w-[20px]"
									/>
									Figma
								</Link>
							</motion.span>
							,
							<motion.span whileHover={{ y: -10 }}>
								<Link
									href={"https://www.figma.com"}
									className="text-foreground mx-2 flex items-center justify-center gap-1 font-bold"
								>
									<Image
										src={"/tech-logos/react.png"}
										width={20}
										height={20}
										alt={"Figma logo"}
										className="h-[20px] w-[20px]"
									/>
									React
								</Link>
							</motion.span>
							and{" "}
							<motion.span whileHover={{ y: -10 }}>
								<Link
									href={"https://www.figma.com"}
									className="text-foreground mx-2 flex items-center gap-1 font-bold"
								>
									<Image
										src={"/tech-logos/framer.png"}
										width={30}
										height={30}
										alt={"Figma logo"}
										className="h-[30px] w-[30px]"
									/>
									Framer
								</Link>
							</motion.span>
						</motion.span>
					</span>
					{/*
					<Swiper
						slidesPerView="auto"
						spaceBetween={10}
						loop={true}
						speed={4000}
						allowTouchMove={false}
						autoplay={{
							delay: 1,
							disableOnInteraction: false,
						}}
						modules={[Autoplay]}
						className=" mt-16 "
					>
						{websites.map((website, index) => (
							<SwiperSlide
								key={index}
								className="aspect-video w-full max-w-[200px] bg-white"
							>
								<Image src={website} width={1024} height={0} alt={website} />
							</SwiperSlide>
						))}
					</Swiper>
					*/}
				</section>
			</section>
		</section>
	);
};

export default Hero;
