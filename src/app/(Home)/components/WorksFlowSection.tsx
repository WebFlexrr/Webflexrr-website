import Heading from "@/components/Heading";
import React from "react";
// import getAllProcess from "@/lib/getProcess";
// import WorkFlowSectionItem from "./WorkFlowSectionItem";
// import { imageUrlFor } from "@/config/SanityImageUrl";
import Image from "next/image";

const WorksFlowSection = async (): Promise<React.JSX.Element> => {
	// const getProcesses = await getAllProcess();
	// const processes = getProcesses.sort((a, b) => a.step - b.step);

	return (
		<section className="  h-auto w-full  " id={"howItWorks"}>
			<section className=" mx-auto h-auto w-full max-w-[60rem] px-6 py-20 xl:py-36">
				<Heading
					heading={"How it Works"}
					subHeading={
						"Say goodbye to the lengthy onboarding processes associated with agencies. Simply subscribe, add your project details, then watch us set up and deliver your first task within 72 hours."
					}
				/>
				{/* <section className="mx-auto mt-20  grid h-auto w-full grid-cols-1 gap-4 ">
					{processes.map((process) => (
						<WorkFlowSectionItem
							key={process.step}
							step={process.step}
							name={process.name}
							description={process.description}
							picture={imageUrlFor(process.picture).url()}
						/>
					))}
				</section> */}
				<section className="bg-white py-10 sm:py-16 lg:py-24">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-2xl text-center">
							<h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
								How does it work?
							</h2>
							<p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-600">
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis.
							</p>
						</div>

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

							<div className="relative grid grid-cols-1 gap-x-12 gap-y-12 text-center md:grid-cols-3">
								<div>
									<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow">
										<span className="text-xl font-semibold text-gray-700">
											{" "}
											1{" "}
										</span>
									</div>
									<h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
										Create a free account
									</h3>
									<p className="mt-4 text-base text-gray-600">
										Amet minim mollit non deserunt ullamco est sit aliqua dolor
										do amet sint. Velit officia consequat duis enim velit
										mollit.
									</p>
								</div>

								<div>
									<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow">
										<span className="text-xl font-semibold text-gray-700">
											{" "}
											2{" "}
										</span>
									</div>
									<h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
										Build your website
									</h3>
									<p className="mt-4 text-base text-gray-600">
										Amet minim mollit non deserunt ullamco est sit aliqua dolor
										do amet sint. Velit officia consequat duis enim velit
										mollit.
									</p>
								</div>

								<div>
									<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow">
										<span className="text-xl font-semibold text-gray-700">
											{" "}
											3{" "}
										</span>
									</div>
									<h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
										Release & Launch
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
