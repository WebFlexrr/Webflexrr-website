import Heading from "@/components/Heading";
import React from "react";

const ProjectsSection = (): React.JSX.Element => {
	return (
		<section className=" h-auto w-full py-20 " id="projects">
			<section className="  mx-auto flex h-auto w-full max-w-6xl flex-col gap-10 ">
				<Heading
					heading={"A glimpse into the projects that we have built."}
					subHeading={
						"Say goodbye to the lengthy onboarding processes associated with agencies. Simply subscribe, add your project details, then watch us set up and deliver your first task within 72 hours."
					}
				/>
			</section>
		</section>
	);
};

export default ProjectsSection;
