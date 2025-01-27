"use client";
import Heading from "@/components/Heading";
import { Search } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import { Laptop, Smartphone, Tablet, Monitor } from "lucide-react";

const WhyChooseUs = () => {
	return (
		<section className="w-full bg-background py-16 md:py-24">
			<section className="mx-auto w-full max-w-7xl px-4 md:px-6">
				<Heading
					heading="Why Choose Us"
					subHeading="Our Unique Selling Points"
					para="Discover the exceptional value and distinctive strengths we bring to your digital journey"
				/>

				<ul className="mt-16 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					<motion.li
						initial={{ opacity: 0, y: 40, x: -50 }}
						whileInView={{ opacity: 1, y: 0, x: 0 }}
						transition={{ duration: 0.7, ease: "backInOut" }}
						viewport={{ once: true }}
						className="flex flex-col gap-6 rounded-xl border border-foreground/10 bg-gradient-to-br from-foreground/5 to-transparent p-6 shadow-lg transition-colors hover:border-primary/20"
					>
						<section className="flex flex-col space-y-4 rounded-lg border border-foreground/10 bg-background/50 p-4">
							<section className="flex items-center gap-2 rounded-full border border-foreground/10 px-3 py-2 text-sm">
								<Search className="h-4 w-4 text-primary" />
								<span>Best Software Development Company</span>
							</section>
							<section className="space-y-3 px-3">
								<div className="text-xs text-foreground/80">
									<span>https://www.webflexrr.com</span>
									<div className="mt-2">
										<span className="text-sm font-medium">
											Transform your online presence with us
										</span>
									</div>
									<div className="mt-1.5 text-foreground/60">
										<span>
											Expert web development solutions for your business
										</span>
									</div>
								</div>
							</section>
						</section>
						<section className="space-y-3">
							<h5 className="flex items-baseline">
								<span className="mr-2 text-2xl font-bold text-primary">
									01.
								</span>
								<span className="text-xl font-semibold">SEO Optimization</span>
							</h5>
							<p className="text-sm text-foreground/80">
								We ensure your website ranks higher through advanced SEO
								strategies, driving organic traffic and improving visibility.
							</p>
						</section>
					</motion.li>

					<motion.li
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "backInOut" }}
						viewport={{ once: true }}
						className="flex flex-col gap-6 rounded-xl border border-foreground/10 bg-gradient-to-br from-foreground/5 to-transparent p-6 shadow-lg transition-colors hover:border-primary/20"
					>
						<section className="relative h-48 rounded-lg border border-foreground/10 bg-background/50 p-4">
							<motion.svg
								viewBox="0 0 100 50"
								className="h-full w-full"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1 }}
							>
								{[0, 1, 2, 3, 4].map((i) => (
									<motion.line
										key={`h-${i}`}
										x1="0"
										y1={i * 12.5}
										x2="100"
										y2={i * 12.5}
										stroke="currentColor"
										strokeOpacity="0.1"
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
										stroke="currentColor"
										strokeOpacity="0.1"
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
						<section className="space-y-3">
							<h5 className="flex items-baseline">
								<span className="mr-2 text-2xl font-bold text-primary">
									02.
								</span>
								<span className="text-xl font-semibold">
									High-Converting Design
								</span>
							</h5>
							<p className="text-sm text-foreground/80">
								Our data-driven design approach focuses on maximizing conversion
								rates through compelling user experiences.
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
							].map(({ Icon, label }) => (
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
								>
									<DeviceIcon Icon={Icon} label={label} />
								</motion.div>
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
							].map(({ Icon, label }) => (
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
								>
									<DeviceIcon Icon={Icon} label={label} />
								</motion.div>
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
							].map(({ Icon, label }) => (
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
								>
									<DeviceIcon Icon={Icon} label={label} />
								</motion.div>
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

export default WhyChooseUs;

const DeviceIcon = ({
	Icon,
	label,
}: {
	Icon: React.ElementType;
	label: string;
}) => (
	<motion.div
		className="flex flex-col items-center justify-center p-4"
		whileHover={{ scale: 1.05 }}
		whileTap={{ scale: 0.95 }}
	>
		<motion.div
			whileHover={
				label === "Desktop"
					? { rotateY: 180 }
					: label === "Laptop"
						? { rotateX: 180 }
						: label === "Tablet"
							? { rotate: 360 }
							: { scale: 1.2 }
			}
			transition={{ duration: 0.6, ease: "easeInOut" }}
		>
			<Icon className="mb-2 h-8 w-8 text-[#ADFF00]" />
		</motion.div>
		<span className="text-sm text-zinc-400">{label}</span>
	</motion.div>
);
