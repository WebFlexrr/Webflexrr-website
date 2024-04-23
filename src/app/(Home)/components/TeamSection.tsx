import Heading from "@/components/Heading";
import React from "react";
import getAllManagementData from "@/lib/getManagement";
import TeamPicture from "@/components/ui/TeamPicture";

const TeamSection = async (): Promise<React.JSX.Element> => {
	const allTeamsDetails = await getAllManagementData();

	return (
		<section id={"teams"} className="relative h-auto w-full">
			<section className="w-full py-20 lg:py-28 ">
				<section className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-5 md:px-10 ">
					<Heading
						heading={"Our Team"}
						subHeading={
							"Meet the founders behind Webflexrr Solutions revolutionary development agency"
						}
					/>
					<div className="grid h-auto w-full grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-3 2xl:grid-cols-3 ">
						{allTeamsDetails.map((personDetails) => (
							<TeamPicture
								personDetails={personDetails}
								key={personDetails._id}
							/>
						))}
					</div>
				</section>
			</section>
		</section>
	);
};

export default TeamSection;
