import React from "react";
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";

import getAllProjects from "@/lib/getProjects";
import { MoveUpRight } from "lucide-react";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
	title: {
		default: "Our Portfolio of High Performing landing page",
		template: "%s | WebFlexrr Digital Services",
	},
	description: "This is Plan Page of Webflexrr Digital Services",
};

const Works = async (): Promise<React.JSX.Element> => {
	const projects = await getAllProjects();
	// const projects = [];

	return (
		<main>
			<NavBar />
			<Heading
				heading={"Our Works"}
				subHeading={"Projects We've Delivered"}
				para={
					"See how we've helped businesses achieve their goals through innovative design and development"
				}
			/>
			<section className="mx-auto my-20 mb-40 grid w-full max-w-6xl grid-cols-1 gap-8 px-5 md:grid-cols-2">
				{projects.map((item, index) => (
					<Card
						key={index}
						isPressable
						shadow="sm"
						className="flex flex-col"
						// onPress={() => {console.log("item pressed")}}
					>
						<CardBody className="overflow-visible p-0">
							<Image
								alt={item.title}
								className=" aspect-[4/3]  w-full object-cover"
								radius="lg"
								shadow="sm"
								src={item.thumbnail}
								width={"100%"}
							/>
						</CardBody>
						<CardFooter className="justify-between p-6">
							<section className="flex flex-col items-start">
								<span>{item.title}</span>
								<p className="text-default-500">{item.title}</p>
							</section>
							<Link
								href={item.link}
								className="rounded-full  border-2 border-primary-200 p-2 hover:bg-primary-400 hover:text-white "
							>
								Open <MoveUpRight size={20} strokeWidth={2} className="ml-2" />
							</Link>
						</CardFooter>
					</Card>
				))}
			</section>
			<Footer />
		</main>
	);
};

export default Works;
