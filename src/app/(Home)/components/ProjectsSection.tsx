import Heading from "@/components/Heading";
import { imageUrlFor } from "@/config/SanityImageUrl";
import getAllProjects from "@/lib/getProjects";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const ProjectsSection = async (): Promise<React.JSX.Element> => {
	const projects = await getAllProjects();
	return (
		<section className=" h-auto w-full py-20 " id="projects">
			<section className=" mx-auto  flex h-auto w-full max-w-7xl flex-col gap-16  px-5 py-28    ">
				<Heading
					heading={"A glimpse into the projects that we have built."}
					subHeading={
						"Say goodbye to the lengthy onboarding processes associated with agencies. Simply subscribe, add your project details, then watch us set up and deliver your first task within 72 hours."
					}
				/>
				<section className="grid h-auto w-full md:grid-cols-2 md:gap-20 lg:gap-16 ">
					{projects.map((item, index) => (
						<Link href={item.link} key={index}>
							<Card className=" group bg-transparent p-0 hover:bg-primary hover:shadow-2xl">
								<CardBody>
									<Image
										src={imageUrlFor(item.thumbnail).url()}
										className=" h-[350px] w-full object-cover"
										alt={item.title}
									/>
								</CardBody>
								<CardFooter>
									<h5 className=" group-hover:text-white">{item.title}</h5>
								</CardFooter>
							</Card>
						</Link>
					))}
				</section>
			</section>
		</section>
	);
};

export default ProjectsSection;
