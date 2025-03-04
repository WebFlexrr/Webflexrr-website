import Heading from "@/components/Heading";
import { getProjectsActions } from "@/sanity/actions/queryActions";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const ProjectsSection = async (): Promise<React.JSX.Element> => {
	const projects = await getProjectsActions();
	return (
		<section className="h-auto w-full py-20 pt-28" id="projects">
			<section className="mx-auto w-full max-w-7xl px-5">
				<Heading
					heading={"Our Work Showcase"}
					subHeading={"Showcase our Best Works"}
				/>
				<section className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
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
									className="border-primary-200 bg-secondary hover:bg-primary-400 flex rounded-full border-2 p-3 hover:text-white"
								>
									Open <MdOutlineArrowOutward size={26} />
								</Link>
							</CardFooter>
						</Card>
					))}
				</section>
				<section className="mt-16 flex w-full items-center justify-center">
					<Link href={"/works"}>
						<Button className="bg-secondary font-inter rounded-full p-6 py-7 text-lg font-medium">
							See All Projects <ArrowRight />
						</Button>
					</Link>
				</section>
			</section>
		</section>
	);
};

export default ProjectsSection;
