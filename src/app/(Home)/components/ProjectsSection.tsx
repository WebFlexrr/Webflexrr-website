import Heading from "@/components/SectionHeading";
import { getProjectsActions } from "@/sanity/actions/queryActions";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { MdOutlineArrowOutward } from "react-icons/md";

const ProjectsSection = async (): Promise<React.JSX.Element> => {
	const projects = await getProjectsActions();
	return (
		<section className="h-auto w-full py-20" id="projects">
			<section className="mx-auto w-full max-w-7xl px-5">
				<Heading heading={"Our Works"} subHeading={"Our works"} />
				<section className="mt-12 grid w-full grid-cols-1 gap-6">
					{projects.map((item, index) => (
						<Card
							key={index}
							shadow="sm"
							className="mx-auto w-full max-w-4xl rounded-2xl border"
						>
							<CardBody>
								<section className="flex gap-2">
									<section className="w-1/2">
										<Image
											alt={item.title}
											className="aspect-4/3 w-full rounded-xl object-cover"
											src={item.thumbnail}
											width={1000}
											height={0}
										/>
									</section>
									<section className="flex w-1/2 flex-col justify-between p-3">
										<section className="flex flex-col items-start">
											<h5 className="text-left">{item.title}</h5>
											<p className="text-foreground/55 mt-3">
												Streamline your hiring process with automated candidate
												screening, saving time and ensuring quality talent with
												each call.
											</p>
										</section>
										<section className="flex flex-col gap-2">
											<section className="flex w-full gap-2">
												<span className="w-fit rounded-lg border px-2 py-1 text-sm">
													SAAS
												</span>
												<span className="w-fit rounded-lg border px-2 py-1 text-sm">
													Personal
												</span>
												<span className="border-primary w-fit rounded-lg border px-2 py-1 text-sm">
													Business
												</span>
											</section>

											<Link
												href={item.link}
												className="border-primary-200 bg-primary hover:bg-primary-400 flex rounded-full border-2 p-2 hover:text-white"
											>
												Open <MdOutlineArrowOutward size={26} />
											</Link>
										</section>
									</section>
								</section>
							</CardBody>
						</Card>
					))}
				</section>
				<section className="mt-16 flex w-full items-center justify-center">
					<Link href={"/works"}>
						<Button className="bg-primary font-inter rounded-full p-6 py-7 text-lg font-medium">
							See All Projects <ArrowRight />
						</Button>
					</Link>
				</section>
			</section>
		</section>
	);
};

export default ProjectsSection;
