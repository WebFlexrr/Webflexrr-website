import Heading from "@/components/Heading";
import React from "react";

const WorksFlowSection = (): React.JSX.Element => {
	return (
		<section className="  h-auto w-full " id={"howItWorks"}>
			<section className=" h-auto w-full py-20 lg:pt-60">
				<Heading
					heading={"How it Works"}
					subHeading={
						"Say goodbye to the lengthy onboarding processes associated with agencies. Simply subscribe, add your project details, then watch us set up and deliver your first task within 72 hours."
					}
				/>
				<section>
					<svg></svg>
				</section>
			</section>
		</section>
	);
};

export default WorksFlowSection;
