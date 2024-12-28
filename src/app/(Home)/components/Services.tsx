"use client";
import { Search } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import { Laptop, Smartphone, Tablet, Monitor } from "lucide-react";
import Heading from "@/components/Heading";

const Services = () => {
	return (
		<section className="w-full py-32 md:py-20 ">
			<section className="mx-auto  w-full  max-w-7xl px-6 ">
				<Heading
					heading={` Why Choose Us`}
					subHeading={"Our Unique Selling Point"}
					para="Discover our unique strength and distinctive value we offer"
				/>

				<ul className="mt-20 grid w-full grid-flow-row-dense grid-cols-1   gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
					<motion.li
						initial={{ opacity: 0, y: 40, x: -50 }}
						whileInView={{ opacity: 1, y: 0, x: 0 }}
						transition={{
							duration: 0.7,
							ease: "backInOut",
						}}
						viewport={{ margin: "0px -20px -150px 100px" }}
						className="  flex w-full grid-cols-1 flex-col gap-7 rounded-lg border border-foreground-300 bg-gradient-to-br from-foreground-100 p-8 shadow-primary-200 drop-shadow-lg"
					>
						<section className="flex w-full  flex-col items-center justify-center rounded-sm border border-foreground-300 bg-background p-3">
							<section className="justify-left flex w-full items-center  gap-3 rounded-full border border-foreground-300 px-2 py-1.5 text-sm text-foreground ">
								<Search size={20} />
								Best Software Development Company??
							</section>
							<section className="flex flex-col gap-4 px-5 py-3 pr-6">
								<div className="flex flex-col text-xs text-foreground group-hover:animate-fade-down group-hover:delay-500">
									<span className="">https://www.webflexrr.com</span>
									<div>
										<span className="text-sm">
											I launched <b>Your website</b> helps me grow.
										</span>
									</div>
									<div className="mt-1.5">
										<span className="text-xs text-foreground-500  ">
											This guy does not know what heckernews comments are.
										</span>
									</div>
								</div>
							</section>
						</section>
						<section className="w-full text-left text-foreground">
							<h5 className="text-left">
								<span className="text-bold mr-2 text-3xl text-primary">
									01.
								</span>
								SEO Optimization
							</h5>
							<p className="mt-3 text-sm">
								We'll make sure your website is optimized for search engines, so
								you can get the traffic you're looking for.
							</p>
						</section>
					</motion.li>

					<motion.li
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.7,
							ease: "backInOut",
						}}
						viewport={{ margin: "0px -20px -150px 100px" }}
						className="flex w-full grid-cols-1 flex-col justify-between gap-4 rounded-lg border border-foreground-300 bg-gradient-to-br from-foreground-100 p-8 shadow-primary-200 drop-shadow-lg"
					>
						<section className="flex  w-full flex-col  items-end  justify-center overflow-hidden overflow-x-hidden rounded-sm  border-foreground-300  p-3">
							<motion.svg
								viewBox="0 0 100 50"
								className="h-48 w-full"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1 }}
								viewport={{ margin: "0px -20px -200px 100px" }}
							>
								{[0, 1, 2, 3, 4].map((i) => (
									<motion.line
										key={`h-${i}`}
										x1="0"
										y1={i * 12.5}
										x2="100"
										y2={i * 12.5}
										stroke="#333"
										strokeWidth="0.5"
										initial={{ pathLength: 0 }}
										animate={{ pathLength: 1 }}
										transition={{ duration: 1, delay: i * 0.1 }}
									/>
								))}
								{[0, 1, 2, 3, 4].map((i) => (
									<motion.line
										key={`v-${i}`}
										x1={i * 25}
										y1="0"
										x2={i * 25}
										y2="50"
										stroke="#333"
										strokeWidth="0.5"
										initial={{ pathLength: 0 }}
										animate={{ pathLength: 1 }}
										transition={{ duration: 1, delay: i * 0.1 }}
									/>
								))}
								<motion.path
									d="M0 50 Q25 50 50 25 T100 0"
									fill="none"
									stroke="#ADFF00"
									strokeWidth="2"
									initial={{ pathLength: 0 }}
									animate={{ pathLength: 1 }}
									transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
								/>
								<motion.circle
									cx="100"
									cy="0"
									r="3"
									fill="#ADFF00"
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ delay: 2.3, duration: 0.5, type: "spring" }}
								/>
							</motion.svg>
						</section>
						<section className="w-full text-left text-foreground">
							<h5 className="text-left text-2xl">
								<span className="text-bold mr-2 text-3xl text-primary">
									02.
								</span>
								High-Converting Design
							</h5>
							<p className="mt-3 text-sm">
								Our engaging design techniques drive remarkable increases in
								conversion rates by compelling visitors to take decisive,
								intentional action.
							</p>
						</section>
					</motion.li>

					<motion.li
						initial={{ opacity: 0, y: 40, x: 50 }}
						whileInView={{ opacity: 1, y: 0, x: 0 }}
						transition={{
							duration: 0.7,
							ease: "backInOut",
						}}
						viewport={{ margin: "0px -20px -150px 100px" }}
						className=" flex w-full grid-cols-1 flex-col justify-between gap-7 rounded-lg border border-foreground-300 bg-gradient-to-br from-foreground-100 p-8 shadow-primary-200 drop-shadow-lg md:grid-cols-2"
					>
						<section className="flex h-full w-full items-center justify-center rounded-sm border border-foreground-300 bg-background p-3">
							{[
								{ Icon: Monitor, label: "Desktop" },
								{ Icon: Laptop, label: "Laptop" },
								{ Icon: Tablet, label: "Tablet" },
								{ Icon: Smartphone, label: "Mobile" },
							].map(({ label }) => (
								<motion.div
									key={label}
									variants={{
										hidden: { opacity: 0, y: 20 },
										show: {
											opacity: 1,
											y: 0,
											transition: { duration: 0.6, ease: "easeInOut" },
										},
									}}
								></motion.div>
							))}
						</section>
						<section className="w-full text-left text-foreground">
							<h5 className="text-left">
								<span className="text-bold mr-2 text-3xl text-primary">
									03.
								</span>
								Peak Performance on Any Screen
							</h5>
							<p className="mt-3 text-sm">
								Our engaging design techniques drive remarkable increases in
								conversion rates by compelling visitors to take decisive,
								intentional action.
							</p>
						</section>
					</motion.li>

					<motion.li
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.7,
							ease: "backInOut",
						}}
						viewport={{ margin: "0px -20px -150px 100px" }}
						className="col-span-1 flex  w-full flex-col justify-between gap-7 rounded-lg border border-foreground-300 bg-gradient-to-br from-foreground-100 p-8 shadow-primary-200 drop-shadow-lg md:col-span-2"
					>
						<section className="flex h-full w-full items-center justify-center rounded-sm border border-foreground-300 bg-background p-3">
							{[
								{ Icon: Monitor, label: "Desktop" },
								{ Icon: Laptop, label: "Laptop" },
								{ Icon: Tablet, label: "Tablet" },
								{ Icon: Smartphone, label: "Mobile" },
							].map(({ label }) => (
								<motion.div
									key={label}
									variants={{
										hidden: { opacity: 0, y: 20 },
										show: {
											opacity: 1,
											y: 0,
											transition: { duration: 0.6, ease: "easeInOut" },
										},
									}}
								></motion.div>
							))}
						</section>
						<section className="w-full text-left text-foreground">
							<h5 className="text-left">
								<span className="text-bold mr-2 text-3xl text-primary">
									04.
								</span>
								Quality Without Overcharge
							</h5>
							<p className="mt-3 text-sm">
								Our engaging design techniques drive remarkable increases in
								conversion rates by compelling visitors to take decisive,
								intentional action.
							</p>
						</section>
					</motion.li>
					<motion.li
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.7,
							ease: "backInOut",
							delay: 0.7,
						}}
						viewport={{ margin: "0px -20px -150px 100px" }}
						className="col-span-1 row-span-1 flex w-full flex-col justify-between gap-7 rounded-lg border border-foreground-300 bg-gradient-to-br from-foreground-100 p-8 shadow-primary-200 drop-shadow-lg"
					>
						<section className="flex h-full w-full items-center justify-center rounded-sm border border-foreground-300 bg-background p-3">
							{[
								{ Icon: Monitor, label: "Desktop" },
								{ Icon: Laptop, label: "Laptop" },
								{ Icon: Tablet, label: "Tablet" },
								{ Icon: Smartphone, label: "Mobile" },
							].map(({ label }) => (
								<motion.div
									key={label}
									variants={{
										hidden: { opacity: 0, y: 20 },
										show: {
											opacity: 1,
											y: 0,
											transition: { duration: 0.6, ease: "easeInOut" },
										},
									}}
								></motion.div>
							))}
						</section>
						<section className="w-full text-left text-foreground">
							<h5 className="text-left">
								<span className="text-bold mr-2 text-3xl text-primary">
									05.
								</span>
								Quality Without Overcharge
							</h5>
							<p className="mt-3 text-sm">
								Our engaging design techniques drive remarkable increases in
								conversion rates by compelling visitors to take decisive,
								intentional action.
							</p>
						</section>
					</motion.li>
				</ul>
			</section>
		</section>
	);
};

export default Services;
