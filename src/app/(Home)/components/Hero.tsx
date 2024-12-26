"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { Spotlight } from "@/components/ui/Spotlight";

import "swiper/css";
//import { Swiper, SwiperSlide } from "swiper/react";
//import { Autoplay } from "swiper/modules";

const words = ["Website", "Apps", "Software", "MVP"];

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
		<section id={"home"} className="relative w-full  ">
			<Spotlight
				className="-top-40 left-0 md:-top-20 md:left-60"
				fill="white"
			/>
			<section className="relative flex h-fit w-full items-center justify-center bg-background   pt-40 lg:h-screen lg:pt-28 ">
				<section className="mx-auto  flex h-fit w-full max-w-[90rem] flex-col items-center px-5 text-center md:px-14 xl:px-20">
					<motion.span
						initial={{ opacity: 0, scale: 0.7, y: "-70%" }}
						animate={{ opacity: 1, scale: 1, y: "0" }}
						transition={{ duration: 0.7, ease: "circInOut" }}
					>
						<Link
							href={"/plans"}
							className=" flex cursor-pointer items-center gap-5 rounded-full border px-4 py-2 text-sm font-bold text-black dark:text-white"
						>
							✨ See our Designs and compare plans <FaArrowRightLong />
						</Link>
					</motion.span>
					<motion.section
						initial={{ opacity: 0, scale: 0.7, y: "40%" }}
						animate={{ opacity: 1, scale: 0.8, y: "0" }}
						transition={{ duration: 0.7, ease: "circInOut" }}
						className=" mt-5 w-full max-w-5xl"
					>
						<h1 className="flex flex-col bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
							<span>
								We ship{" "}
								<FlipWords
									words={words}
									duration={2000}
									className=" text-red-400 dark:text-red-400"
								/>
								that
							</span>
							<span> standouts everywhere 🚀</span>
						</h1>
					</motion.section>
					<motion.section
						initial={{ opacity: 0, y: "30%" }}
						animate={{ opacity: 1, y: "0" }}
						transition={{ duration: 0.7, delay: 0.1, ease: "circInOut" }}
						className="w-full max-w-3xl "
					>
						<p className=" text-black">
							A Design and Development studio that helps passionate Startup and
							SaaS Founders build the products of their dreams.
						</p>
					</motion.section>
					<motion.span
						initial={{ opacity: 0, y: "30%" }}
						animate={{ opacity: 1, y: "0" }}
						transition={{ duration: 0.7, delay: 0.3, ease: "circInOut" }}
						className="my-7"
					>
						<Link href={process.env.NEXT_PUBLIC_MEETING_LINK ?? ""}>
							<Button className="text-font rounded-full bg-primary bg-gradient-to-b from-primary via-primary to-purple-300  p-7 text-lg font-bold text-white">
								Book a Call
							</Button>
						</Link>
					</motion.span>
					<span className="mx-auto  my-4 flex flex-col text-foreground-500  lg:flex-row">
						<motion.span
							initial={{ opacity: 0, x: "-20%", y: "30%" }}
							animate={{ opacity: 1, x: "0", y: "0" }}
							transition={{ duration: 0.7, delay: 0.6, ease: "circInOut" }}
							className="text-lg"
						>
							We use industry standard technologies
						</motion.span>
						<motion.span
							initial={{ opacity: 0, x: "20%", y: "30%" }}
							animate={{ opacity: 1, x: "0", y: "0" }}
							transition={{ duration: 0.7, delay: 0.6, ease: "circInOut" }}
							className="flex text-lg"
						>
							<motion.span whileHover={{ y: -10 }}>
								<Link
									href={"https://www.figma.com"}
									className=" mx-2 flex items-center justify-center gap-1 font-bold text-foreground"
								>
									<Image
										src={"/tech-logos/figma.png"}
										width={20}
										height={20}
										alt={"Figma logo"}
										className="h-[20px] w-[20px] "
									/>
									Figma
								</Link>
							</motion.span>
							,
							<motion.span whileHover={{ y: -10 }}>
								<Link
									href={"https://www.figma.com"}
									className=" mx-2 flex items-center justify-center gap-1 font-bold text-foreground"
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
									className=" mx-2 flex items-center gap-1 font-bold text-foreground"
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
