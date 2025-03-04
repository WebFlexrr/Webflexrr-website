import Heading from "@/components/SectionHeading";
import React from "react";
import Image from "next/image";

const WorksFlowSection = async (): Promise<React.JSX.Element> => {
	return (
		<section className="h-auto w-full py-20" id={"howItWorks"}>
			<section className="mx-auto h-auto w-full max-w-7xl px-6">
				<Heading
					heading={"How it Works"}
					subHeading={"How it Works"}
					para=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis."
				/>
				<section className="bg-background py-10 sm:py-16 lg:py-24">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="relative mt-12 lg:mt-20">
							<div className="absolute inset-x-0 top-2 hidden md:block md:px-20 lg:px-28 xl:px-44">
								<Image
									className="w-full"
									width={1000}
									height={0}
									src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
									alt=""
								/>
							</div>

							<div className="relative grid grid-cols-1 gap-x-12 gap-y-12 text-center md:grid-cols-4">
								<div>
									<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow-sm">
										<span className="text-xl font-semibold text-gray-700">
											{" "}
											1{" "}
										</span>
									</div>
									<h3 className="mt-6 text-center text-xl leading-tight font-semibold text-black md:mt-10 dark:text-white">
										Book a Schedule Call
									</h3>
									<p className="mt-4 text-base text-gray-600"></p>
								</div>

								<div>
									<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow-sm">
										<span className="text-xl font-semibold text-gray-700">
											{" "}
											2{" "}
										</span>
									</div>
									<h3 className="mt-6 text-center text-xl leading-tight font-semibold text-black md:mt-10 dark:text-white">
										Discuss About Your Idea
									</h3>
									<p className="mt-4 text-base text-gray-600">
										Amet minim mollit non deserunt ullamco est sit aliqua dolor
										do amet sint. Velit officia consequat duis enim velit
										mollit.
									</p>
								</div>

								<div>
									<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow-sm">
										<span className="text-xl font-semibold text-gray-700">
											{" "}
											3{" "}
										</span>
									</div>
									<h3 className="mt-6 text-center text-xl leading-tight font-semibold text-black md:mt-10 dark:text-white">
										Develope the product
									</h3>
									<p className="mt-4 text-base text-gray-600">
										Amet minim mollit non deserunt ullamco est sit aliqua dolor
										do amet sint. Velit officia consequat duis enim velit
										mollit.
									</p>
								</div>
								<div>
									<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow-sm">
										<span className="text-xl font-semibold text-gray-700">
											{" "}
											4{" "}
										</span>
									</div>
									<h3 className="mt-6 text-center text-xl leading-tight font-semibold text-black md:mt-10 dark:text-white">
										Deploy
									</h3>
									<p className="mt-4 text-base text-gray-600">
										Amet minim mollit non deserunt ullamco est sit aliqua dolor
										do amet sint. Velit officia consequat duis enim velit
										mollit.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
		</section>
	);
};

export default WorksFlowSection;
