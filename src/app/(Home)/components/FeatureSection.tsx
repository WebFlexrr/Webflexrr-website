import {
	BellIcon,
	CalendarIcon,
	FileTextIcon,
	GlobeIcon,
	InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const Row1 = [
	{
		name: "AWS",
		icon: "/com-logos/Aws.png",
	},
	{
		name: "ReactJs",
		icon: "/com-logos/React.png",
	},
	{
		name: "Tailwind",
		icon: "/com-logos/Tailwind.png",
	},
	{
		name: "Sanity",
		icon: "/com-logos/Sanityicon.png",
	},
	{
		name: "Framer",
		icon: "/com-logos/Framer.png",
	},
	{
		name: "Appwrite",
		icon: "/com-logos/Appwrite.png",
	},
	{
		name: "Redis",
		icon: "/com-logos/Redis.png",
	},
	{
		name: "GraphQL",
		icon: "/com-logos/GraphQL.png",
	},

	{
		name: "Postman",
		icon: "/com-logos/Postman.png",
	},
	{
		name: "Vercel",
		icon: "/com-logos/Vercel.png",
	},
	{
		name: "GraphQL",
		icon: "/com-logos/GraphQL.png",
	},
];
const Row2 = [
	{
		name: "Github",
		icon: "/com-logos/Github.png",
	},

	{
		name: "Framer",
		icon: "/com-logos/Framer.png",
	},
	{
		name: "ReactJs",
		icon: "/com-logos/React.png",
	},
	{
		name: "Tailwind",
		icon: "/com-logos/Tailwind.png",
	},
	{
		name: "Sanity",
		icon: "/com-logos/Sanityicon.png",
	},

	{
		name: "Appwrite",
		icon: "/com-logos/Appwrite.png",
	},

	{
		name: "Postman",
		icon: "/com-logos/Postman.png",
	},
	{
		name: "Vercel",
		icon: "/com-logos/Vercel.png",
	},
	{
		name: "Redis",
		icon: "/com-logos/Redis.png",
	},
	{
		name: "GraphQL",
		icon: "/com-logos/GraphQL.png",
	},
];

const features = [
	{
		Icon: FileTextIcon,
		name: "Hosting, deployment and maintenance",
		description:
			"We'll Get your website out there in the world, where it belongs, with our lightning- fast deployment services.",
		href: "/",
		cta: "Learn more",
		background: <div className="absolute -right-20 -top-20 opacity-60" />,
		className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
	},
	{
		Icon: InputIcon,
		name: "SEO Optimized",
		description:
			"We ensure your website ranks higher through advanced SEO strategies",
		href: "/",
		cta: "Learn more",
		background: (
			<div className="flex flex-col gap-6 rounded-xl border border-foreground/10 bg-gradient-to-br from-foreground/5 to-transparent p-6 shadow-lg transition-colors hover:border-primary/20">
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
								<span>Expert web development solutions for your business</span>
							</div>
						</div>
					</section>
				</section>
				<section className="space-y-3">
					<h5 className="flex items-baseline">
						<span className="mr-2 text-2xl font-bold text-primary">01.</span>
						<span className="text-xl font-semibold">SEO Optimization</span>
					</h5>
					<p className="text-sm text-foreground/80">
						We ensure your website ranks higher through advanced SEO strategies,
						driving organic traffic and improving visibility.
					</p>
				</section>
			</div>
		),
		className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
	},
	{
		Icon: GlobeIcon,
		name: "Multilingual",
		description: "Supports 100+ languages and counting.",
		href: "/",
		cta: "Learn more",
		background: <div className="absolute -right-20 -top-20 opacity-60" />,
		className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
	},
	{
		Icon: CalendarIcon,
		name: "Calendar",
		description: "Use the calendar to filter your files by date.",
		href: "/",
		cta: "Learn more",
		background: <div className="absolute -right-20 -top-20 opacity-60" />,
		className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
	},
	{
		Icon: BellIcon,
		name: "Notifications",
		description:
			"Get notified when someone shares a file or mentions you in a comment.",
		href: "/",
		cta: "Learn more",
		background: (
			<section className="  relative flex h-full w-full flex-col justify-between gap-5 overflow-hidden rounded-2xl shadow-xl">
				<section className=" mt-12 flex w-full flex-col  justify-end space-y-6 text-white   ">
					<div className=" relative z-20 w-full overflow-hidden">
						<div
							style={{ animationDirection: "normal" }}
							className=" flex w-max  min-w-full shrink-0 animate-left-to-right flex-nowrap gap-5 text-white  "
						>
							<div className="relative z-40 mb-4 flex flex-shrink-0 space-x-4">
								{Row1.map((item, i) => (
									<div
										key={i}
										className=" flex h-6 items-center justify-center gap-2 rounded-md border bg-foreground px-6 py-4  text-sm  font-medium text-background shadow-md"
									>
										<Image
											src={item.icon}
											width={16}
											height={16}
											alt={item.name}
										/>
										{/* {items.name} */}
										{item.name}
									</div>
								))}
							</div>
							<div className="relative z-40 mb-4 flex flex-shrink-0 space-x-4">
								{Row1.map((item, i) => (
									<div
										key={i}
										className=" flex h-6 items-center justify-center gap-2 rounded-md border bg-foreground px-6 py-4  text-sm  font-medium text-background shadow-md"
									>
										<Image
											src={item.icon}
											width={16}
											height={16}
											alt={item.name}
										/>
										{/* {items.name} */}
										{item.name}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className=" relative z-20 w-full overflow-hidden">
						<div
							style={{ animationDirection: "reverse" }}
							className=" flex w-max min-w-full shrink-0 animate-left-to-right flex-row-reverse flex-nowrap gap-5 "
						>
							<div className="relative z-40 mb-4 flex flex-shrink-0 space-x-4">
								{Row2.map((item, i) => (
									<div
										key={i}
										className=" flex h-6  items-center justify-center gap-2 rounded-md border bg-foreground px-6 py-4  text-sm  font-medium text-background shadow-md"
									>
										<Image
											src={item.icon}
											width={16}
											height={16}
											alt={item.name}
										/>
										{/* {items.name} */}
										{item.name}
									</div>
								))}
							</div>
							<div className="relative z-40 mb-4 flex flex-shrink-0 space-x-4">
								{Row2.map((item, i) => (
									<div
										key={i}
										className=" flex h-6 items-center justify-center gap-2 rounded-md border bg-foreground px-6 py-4  text-sm  font-medium text-background shadow-md"
									>
										<Image
											src={item.icon}
											width={16}
											height={16}
											alt={item.name}
										/>
										{/* {items.name} */}
										{item.name}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="  relative z-20 w-full overflow-hidden ">
						<div
							style={{ animationDirection: "normal" }}
							className=" flex  w-max min-w-full shrink-0 animate-left-to-right flex-nowrap gap-5"
						>
							<div className="relative z-40 mb-4 flex flex-shrink-0 space-x-4">
								{Row1.map((item, i) => (
									<div
										key={i}
										className=" flex h-6 items-center justify-center gap-2 rounded-md border bg-foreground px-6 py-4  text-sm  font-medium text-background shadow-md"
									>
										<Image
											src={item.icon}
											width={16}
											height={16}
											alt={item.name}
										/>
										{/* {items.name} */}
										{item.name}
									</div>
								))}
							</div>
							<div className="relative z-40 mb-4 flex flex-shrink-0 space-x-4">
								{Row1.map((item, i) => (
									<div
										key={i}
										className=" flex h-6  items-center justify-center gap-2 rounded-md border px-6  py-4  text-sm font-medium shadow-md"
									>
										<Image
											src={item.icon}
											width={16}
											height={16}
											alt={item.name}
										/>
										{/* {items.name} */}
										{item.name}
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
				<section className=" mt-4 h-auto w-full ">
					<div
						id={"Website"}
						className=" mx-auto  h-[130px] w-[160px] rounded-lg border-x-2 border-t-2 bg-white shadow-2xl  "
					>
						<div className="flex h-2 w-full items-center gap-1 rounded-t-md  px-2">
							<div className="h-[4px] w-[4px] rounded-full bg-red-600"></div>
							<div className="h-[4px] w-[4px] rounded-full bg-yellow-300"></div>
							<div className="h-[4px] w-[4px] rounded-full bg-green-700"></div>
						</div>
						<section className=" flex h-full w-full items-center justify-center gap-2">
							<div className="flex h-10 w-10 items-center justify-center rounded-full border bg-black  ">
								<FaCode className="text-lg text-white" />
							</div>
							{/* <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-black  ">
										<FaCodeBranch className="text-lg text-white" />
									</div> */}
						</section>
					</div>
					<div className="absolute  -bottom-16 left-28 -z-10 h-44 w-44 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-2xl"></div>
				</section>
			</section>
		),
		className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
	},
];

import React from "react";
import Heading from "@/components/Heading";
import { Search } from "lucide-react";

import Image from "next/image";
import { FaCode } from "react-icons/fa";

const FeatureSection = () => {
	return (
		<section className="w-full bg-background py-16 md:py-24">
			<section className="mx-auto w-full max-w-7xl px-4 md:px-6">
				<Heading
					heading="Why Choose Us"
					subHeading="Our Unique Selling Points"
					para="We handle everything from design to deployment to get your website shipped and ready to go!"
				/>
				<BentoGrid className="mt-10 lg:grid-rows-3">
					{features.map((feature) => (
						<BentoCard key={feature.name} {...feature} />
					))}
				</BentoGrid>
			</section>
		</section>
	);
};

export default FeatureSection;
