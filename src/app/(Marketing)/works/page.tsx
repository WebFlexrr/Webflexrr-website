import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import { Link } from "@heroui/link";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { MoveUpRight } from "lucide-react";
// import NavBar from "@/components/NavBar";
import { sanityFetch } from "@/sanity/lib/client";
import { PROJECT_QUERY } from "@/sanity/actions/queries";
import NavBar2 from "@/components/Navbar/NavBar2";

export const metadata: Metadata = {
	title: {
		default: "Our Portfolio of High Performing landing page",
		template: "%s | WebFlexrr Digital Services",
	},
	description: "This is Plan Page of Webflexrr Digital Services",
};

const Works = async (): Promise<React.JSX.Element> => {
	const projects = await sanityFetch<getAllProjects[]>({
		query: PROJECT_QUERY,
	});

	return (
		<main className="">
			<NavBar2 />
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
						isHoverable
						className="flex flex-col"
						// onPress={() => {console.log("item pressed")}}
					>
						<CardBody className="overflow-visible p-0">
							<Image
								alt={item.title}
								className="aspect-4/3 w-full object-cover"
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
								className="border-primary-200 hover:bg-primary-400 rounded-full border-2 p-2 hover:text-white"
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
