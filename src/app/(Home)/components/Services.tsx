import React from "react";
import Heading from "@/components/Heading";
import { ShineBorder } from "@/components/ui/shine-border";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { PanelsTopLeft } from "lucide-react";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoAndroid } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { BsTypeH1 } from "react-icons/bs";

const services = [
	{
		title: "Landing Page",
		description:
			"We ensure your website ranks higher through advanced SEO strategies, driving organic traffic and improving visibility.",
		background: (
			<section className="from-primary flex h-full w-full items-center justify-center rounded-lg bg-linear-to-tr to-[#549493]">
				<PanelsTopLeft size={80} />
			</section>
		),
	},
	{
		title: "App Developement",
		description:
			"We ensure your website ranks higher through advanced SEO strategies, driving organic traffic and improving visibility.",
		background: (
			<section className="from-primary flex h-full w-full items-center justify-center rounded-lg bg-linear-to-tr to-[#549493]">
				<IoLogoAndroid className="text-7xl" /> <FaPlus className="text-xl" />
				<TbBrandReactNative className="text-7xl" />
			</section>
		),
	},
	{
		title: "SEO",
		description:
			"We ensure your website ranks higher through advanced SEO strategies, driving organic traffic and improving visibility.",
		background: (
			<section className="from-primary flex h-full w-full items-center justify-center rounded-lg bg-linear-to-tr to-[#549493]">
				<BsTypeH1 className="text-7xl" />
			</section>
		),
	},
];

const Services = () => {
	return (
		<section className="w-full py-32 md:py-20">
			<section className="mx-auto w-full max-w-7xl px-5">
				<Heading
					heading={` Services`}
					subHeading={"Our Services"}
					para="Empowering startups with innovative solutions and strategic insights to accelerate growth and success."
				/>

				<div
					className={
						"mt-16 grid w-full grid-cols-1 flex-col gap-6 lg:grid-cols-3"
					}
				>
					{services.map((service) => (
						<ShineBorder
							key={service.title}
							className="bg-background relative flex w-full flex-col items-center justify-center overflow-hidden p-1 md:shadow-xl"
							color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
						>
							<Card className="bg-background w-full p-6">
								<CardHeader className="border-foreground/10 aspect-4/3 w-full rounded-lg border">
									{service.background}
								</CardHeader>
								<CardBody className="mt-10">
									<section className="space-y-3">
										<h4 className="flex items-baseline">
											<span className="font-normal">{service.title}</span>
										</h4>
										<p className="text-foreground/80 text-base">
											{service.description}
										</p>
									</section>
								</CardBody>
							</Card>
						</ShineBorder>
					))}
				</div>
			</section>
		</section>
	);
};

export default Services;
