"use client";

import React from "react";
import {
	motion,
	// animate,
	// useScroll,
	// useSpring,
	// useTransform,
	type Variants,
} from "framer-motion";
import Image from "next/image";

interface ArrayLogos {
	image: string;
	altText: string;
	width: number;
	height: number;
}
const Logos: ArrayLogos[] = [
	{
		image: "/com-logos/nextjs.png",
		altText: "next js",
		width: 140,
		height: 0,
	},
	{
		image: "/com-logos/reactjs.png",
		altText: "react js",
		width: 100,
		height: 0,
	},
	{
		image: "/com-logos/node-js.png",
		altText: "node js",
		width: 90,
		height: 0,
	},
	{
		image: "/com-logos/tailwindcss.png",
		altText: "tailwind css",
		width: 200,
		height: 0,
	},
	{
		image: "/com-logos/framer-motion.png",
		altText: "framer motion",
		width: 70,
		height: 0,
	},
	{
		image: "/com-logos/stripe.png",
		altText: "stripe",
		width: 100,
		height: 0,
	},
	{
		image: "/com-logos/sanity.png",
		altText: "sanity",
		width: 120,
		height: 0,
	},
	{
		image: "/com-logos/aws.png",
		altText: "aws",
		width: 80,
		height: 0,
	},
];

const BannerSection = (): React.JSX.Element => {
	// const ref = useRef(null);
	// const { scrollYProgress } = useScroll({
	// 	target: ref,
	// });

	// const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	// const translateX1 = useSpring(
	// 	useTransform(scrollYProgress, [0, 1], [-300, 39]),
	// 	springConfig
	// );

	// const translateX2 = useSpring(
	// 	useTransform(scrollYProgress, [0, 1], [300, 39]),
	// 	springConfig
	// );

	// const gap = useTransform(scrollYProgress, [0, 1], [-300, 39]);

	const staggerVarients: Variants = {
		initial: {
			opacity: 0,
			y: 100,
		},
		animate: (index: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: index * 0.05,
			},
		}),
	};

	return (
		<section className=" h-auto w-full bg-primary py-20 ">
			<section className=" mx-auto flex h-auto w-full max-w-7xl flex-col gap-10 px-5 ">
				<section className="mx-auto flex w-full max-w-4xl flex-col gap-10 text-center">
					<h4 className=" mx-5 text-center text-white">
						We Always Took advantage of new technologies in your environments
						for solve your business problem
					</h4>
					<p className="text-white">
						Leverage built-in integrations or use extensible APIs and webhooks
						to easily integrate with the upstream and downstream applications in
						your tech stack.
					</p>
				</section>
				<section className=" flex w-full flex-col flex-wrap items-center justify-evenly gap-10 ">
					<section className="flex flex-wrap items-center justify-evenly gap-10 lg:flex-nowrap ">
						{Logos.map((item, index) => (
							<motion.span
								key={index}
								initial={"initial"}
								whileInView={"animate"}
								viewport={{
									once: true,
								}}
								custom={index}
								variants={staggerVarients}
								className="rounded-full bg-white px-2 py-3 "
							>
								<Image
									width={item.width}
									height={item.height}
									alt={item.altText}
									src={item.image}
									className=" rounded-none bg-white px-4 py-1 "
								/>
							</motion.span>
						))}

						{/* <motion.span
							variants={staggerVarients}
							initial={"initial"}
							whileInView={"animate"}
							viewport={{
								once: true,
							}}
							transition={{
								delay: 1 * 0.05,
							}}
							className="rounded-full bg-white px-2 py-3 "
						>
							<Image
								width={140}
								height={0}
								alt="NextUI Fruit Image with Zoom"
								src="/com-logos/nextjs.png"
								className=" rounded-none bg-white px-4 py-1 "
							/>
						</motion.span>
						<motion.span
							variants={staggerVarients}
							initial={"initial"}
							whileInView={"animate"}
							viewport={{
								once: true,
							}}
							transition={{
								delay: 2 * 0.05,
							}}
							className="rounded-full bg-white px-4 py-3 "
						>
							<Image
								width={100}
								height={0}
								alt="NextUI Fruit Image with Zoom"
								src="/com-logos/reactjs.png"
								className="rounded-none "
							/>
						</motion.span>
						<motion.span
							variants={staggerVarients}
							initial={"initial"}
							whileInView={"animate"}
							viewport={{
								once: true,
							}}
							transition={{
								delay: 3 * 0.05,
							}}
							className="rounded-full bg-white px-4 py-1 "
						>
							<Image
								width={90}
								height={0}
								alt="NextUI Fruit Image with Zoom"
								src="/com-logos/node-js.png"
							/>
						</motion.span>
						<motion.span
							variants={staggerVarients}
							initial={"initial"}
							whileInView={"animate"}
							viewport={{
								once: true,
							}}
							transition={{
								delay: 4 * 0.05,
							}}
							className="rounded-full bg-white px-4 py-4 "
						>
							<Image
								width={200}
								height={0}
								alt="NextUI Fruit Image with Zoom"
								src="/com-logos/tailwindcss.png"
								className=" rounded-none "
							/>
						</motion.span>

						<motion.span
							variants={staggerVarients}
							initial={"initial"}
							whileInView={"animate"}
							viewport={{
								once: true,
							}}
							transition={{
								delay: 5 * 0.05,
							}}
							className="rounded-full bg-white px-7 py-2 "
						>
							<Image
								width={50}
								height={0}
								alt="NextUI Fruit Image with Zoom"
								src="/com-logos/framer-motion.png"
								className="rounded-none "
							/>
						</motion.span>
						<motion.span
							variants={staggerVarients}
							initial={"initial"}
							whileInView={"animate"}
							viewport={{
								once: true,
							}}
							transition={{
								delay: 6 * 0.05,
							}}
							className="rounded-full bg-white px-4 py-2 "
						>
							<Image
								width={100}
								height={0}
								alt="NextUI Fruit Image with Zoom"
								src="/com-logos/stripe.png"
								className=" "
							/>
						</motion.span>
						<motion.span
							variants={staggerVarients}
							initial={"initial"}
							whileInView={"animate"}
							viewport={{
								once: true,
							}}
							transition={{
								delay: 7 * 0.05,
							}}
							className="rounded-full bg-white px-4 py-4 "
						>
							<Image
								width={120}
								height={0}
								alt="NextUI Fruit Image with Zoom"
								src="/com-logos/sanity.png"
								className=" "
							/>
						</motion.span>
						<motion.span
							variants={staggerVarients}
							initial={"initial"}
							whileInView={"animate"}
							viewport={{
								once: true,
							}}
							transition={{
								delay: 8 * 0.05,
							}}
							className="rounded-full bg-white px-4 py-2 "
						>
							<Image
								width={80}
								height={0}
								alt="NextUI Fruit Image with Zoom"
								src="/com-logos/aws.png"
								className=" "
							/>
						</motion.span> */}
					</section>
				</section>
			</section>
		</section>
	);
};

export default BannerSection;
