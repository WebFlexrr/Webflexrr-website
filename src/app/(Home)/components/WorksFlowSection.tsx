import Heading from "@/components/Heading";
import React from "react";
import getAllProcess from "@/lib/getProcess";
import WorkFlowSectionItem from "./WorkFlowSectionItem";
import { imageUrlFor } from "@/config/SanityImageUrl";

const WorksFlowSection = async (): Promise<React.JSX.Element> => {
	const getProcesses = await getAllProcess();
	const processes = getProcesses.sort((a, b) => a.step - b.step);

	return (
		<section className="  h-auto w-full  " id={"howItWorks"}>
			<section className=" mx-auto h-auto w-full max-w-[60rem] px-6 py-20 xl:py-36">
				<Heading
					heading={"How it Works"}
					subHeading={
						"Say goodbye to the lengthy onboarding processes associated with agencies. Simply subscribe, add your project details, then watch us set up and deliver your first task within 72 hours."
					}
				/>
				<section className="mx-auto mt-20  grid h-auto w-full grid-cols-1 gap-4 ">
					{processes.map((process) => (
						<WorkFlowSectionItem
							key={process.step}
							step={process.step}
							name={process.name}
							description={process.description}
							picture={imageUrlFor(process.picture).url()}
						/>
					))}
				</section>
			</section>
		</section>
	);
};

export default WorksFlowSection;
