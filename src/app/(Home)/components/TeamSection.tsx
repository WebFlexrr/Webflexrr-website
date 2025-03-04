import Heading from "@/components/SectionHeading";
import React from "react";

const TeamSection = async (): Promise<React.JSX.Element> => {
	return (
		<section id={"teams"} className="relative h-auto w-full">
			<section className="w-full py-20 lg:py-28">
				<section className="mx-auto flex w-full max-w-3xl flex-col gap-14 px-5 md:px-10">
					<Heading
						heading={"Our Team"}
						subHeading={
							"Meet the founders behind Webflexrr Solutions revolutionary development agency"
						}
					/>
					<div className="grid h-auto w-full grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 2xl:grid-cols-2">
						{/*
						{allTeamsDetails.map((personDetails) => (
							<TeamPicture
								personDetails={personDetails}
								key={personDetails._id}
							/>
						))}
							*/}
					</div>
				</section>
			</section>
		</section>
	);
};

export default TeamSection;
