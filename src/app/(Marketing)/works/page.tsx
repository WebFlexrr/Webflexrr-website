import React from "react";
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import getAllProjects from "@/lib/getProjects";

export const metadata: Metadata = {
	title: {
		default: "Our Portfolio of High Performing landing page",
		template: "%s | WebFlexrr Digital Services",
	},
	description: "This is Plan Page of Webflexrr Digital Services",
};

const Works = async (): Promise<React.JSX.Element> => {
	const projects = await getAllProjects();

	return (
		<main>
			<Heading
				heading={"Our Works"}
				subHeading={"Projects We've Delivered"}
				para={
					"See how we've helped businesses achieve their goals through innovative design and development"
				}
			/>
			<section className="mx-auto my-20 mb-40 grid w-full max-w-5xl grid-cols-2 gap-8">
				{projects.map((item, index) => (
					/* eslint-disable no-console */
					<Card
						key={index}
						isPressable
						shadow="sm"
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
						<CardFooter className="justify-between">
							<section className="">
								<span>{item.title}</span>
								<p className="text-default-500">{item.title}</p>
							</section>

							<Button>Open</Button>
						</CardFooter>
					</Card>
				))}
			</section>
			<Footer />
		</main>
	);
};

export default Works;
