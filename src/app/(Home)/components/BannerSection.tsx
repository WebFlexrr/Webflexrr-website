"use client";
import { Image } from "@nextui-org/react";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const BannerSection = (): React.JSX.Element => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
	});

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const translateX1 = useSpring(
		useTransform(scrollYProgress, [0, 1], [-300, 39]),
		springConfig
	);

	// const gap = useTransform(
	// 	scrollYProgress,
	// 	[0, 20],
	// 	[1, 60],
	// 	// springConfig
	// );

	const translateX2 = useSpring(
		useTransform(scrollYProgress, [0, 1], [300, 39]),
		springConfig
	);

	// const gap = useTransform(scrollYProgress, [0, 1], [-300, 39]);

	return (
		<section ref={ref} className=" h-auto w-full bg-slate-500 py-20 ">
			<section className=" mx-auto flex h-auto w-full max-w-7xl flex-col gap-10 ">
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
					<motion.section
						style={{
							translateX: translateX1,
							// gap,
						}}
						className="flex items-center gap-20"
					>
						<span className="rounded-full bg-white px-4 py-2 ">
							<Image
								width={130}
								alt="NextUI Fruit Image with Zoom"
								src="/com-logos/nextjs.png"
								className=" rounded-none bg-white p-4 "
							/>
						</span>
						<span className="rounded-full bg-white px-4 py-2 ">
							<Image
								width={130}
								alt="NextUI Fruit Image with Zoom"
								src="/com-logos/reactjs.png"
								className="rounded-none "
							/>
						</span>
						<span className="rounded-full bg-white px-4 py-1 ">
							<Image
								width={100}
								alt="NextUI Fruit Image with Zoom"
								src="/com-logos/node-js.png"
							/>
						</span>
						<span className="rounded-full bg-white px-4 py-5 ">
							<Image
								width={200}
								alt="NextUI Fruit Image with Zoom"
								src="/com-logos/tailwindcss.png"
								className=" rounded-none "
							/>
						</span>
					</motion.section>
					<motion.section
						style={{
							translateX: translateX2,
						}}
						className="flex items-center gap-20"
					>
						<span className="rounded-full bg-white px-7 py-2 ">
							<Image
								width={60}
								alt="NextUI Fruit Image with Zoom"
								src="/com-logos/framer-motion.png"
								className="rounded-none "
							/>
						</span>
						<span className="rounded-full bg-white px-4 py-2 ">
							<Image
								width={120}
								alt="NextUI Fruit Image with Zoom"
								src="/com-logos/stripe.png"
								className=" "
							/>
						</span>
						<span className="rounded-full bg-white px-4 py-2 ">
							<Image
								width={120}
								alt="NextUI Fruit Image with Zoom"
								src="/com-logos/sanity.png"
								className=" "
							/>
						</span>
						<span className="rounded-full bg-white px-4 py-2 ">
							<Image
								width={80}
								alt="NextUI Fruit Image with Zoom"
								src="/com-logos/aws.png"
								className=" "
							/>
						</span>
					</motion.section>
				</section>
			</section>
		</section>
	);
};

export default BannerSection;
