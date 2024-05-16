"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
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
		altText: "next js Logo",
		width: 140,
		height: 0,
	},
	{
		image: "/com-logos/reactjs.png",
		altText: "react js Logo",
		width: 120,
		height: 0,
	},
	{
		image: "/com-logos/node-js.png",
		altText: "node js Logo",
		width: 90,
		height: 0,
	},
	{
		image: "/com-logos/tailwindcss.png",
		altText: "tailwind css Logo",
		width: 200,
		height: 0,
	},
	{
		image: "/com-logos/framer-motion.png",
		altText: "framer motion Logo",
		width: 80,
		height: 0,
	},
	{
		image: "/com-logos/stripe.png",
		altText: "stripe Logo",
		width: 100,
		height: 0,
	},
	{
		image: "/com-logos/sanity.png",
		altText: "sanity Logo",
		width: 120,
		height: 0,
	},
	{
		image: "/com-logos/aws.png",
		altText: "aws Logo",
		width: 80,
		height: 0,
	},
	{
		image: "/com-logos/bubble.png",
		altText: "bubble Logo",
		width: 150,
		height: 0,
	},
	{
		image: "/com-logos/python.png",
		altText: "python Logo",
		width: 130,
		height: 0,
	},
	{
		image: "/com-logos/django.png",
		altText: "Django Logo",
		width: 120,
		height: 0,
	},
	{
		image: "/com-logos/fastApi.png",
		altText: "fastApi Logo",
		width: 130,
		height: 0,
	},
	{
		image: "/com-logos/pytorch.png",
		altText: "pytorch Logo",
		width: 120,
		height: 0,
	},
	{
		image: "/com-logos/tensorFlow.png",
		altText: "tensorFlow Logo",
		width: 180,
		height: 0,
	},
];

const BannerSection = (): React.JSX.Element => {
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
		<section className=" h-auto w-full bg-foreground py-20 ">
			<section className=" mx-auto flex h-auto w-full max-w-7xl flex-col gap-10 px-3 lg:px-0 ">
				<section className="mx-auto flex w-full max-w-4xl flex-col gap-10 text-center">
					<h3 className=" mx-5 text-center text-white">
						We Always Took advantage of new technologies in your environments
						for solve your business problem
					</h3>
					<p className="text-white">
						Leverage built-in integrations or use extensible APIs and webhooks
						to easily integrate with the upstream and downstream applications in
						your tech stack.
					</p>
				</section>
				<section className=" flex w-full flex-wrap  items-center justify-evenly gap-4   lg:gap-10 ">
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
								className=" rounded-none  px-4 py-1 "
							/>
						</motion.span>
					))}
				</section>
			</section>
		</section>
	);
};

export default BannerSection;
