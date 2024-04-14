import Heading from "@/components/Heading";
import React from "react";
import TeamSwiper from "@/components/ui/Hero/TeamSwiper";
import getAllManagementData from "@/lib/getManagement";

const TeamSection = async (): Promise<React.JSX.Element> => {
	const allTeamsDetails = await getAllManagementData();

	return (
		<section id={"teams"} className=" relative h-auto w-full bg-background3 ">
			<section className="w-full py-20 lg:py-28 ">
				<section className="mx-auto flex w-full max-w-7xl flex-col gap-7 px-5 md:px-10 ">
					<Heading
						heading={"Our Team"}
						subHeading={"Speak With One of Our Experts"}
					/>
					<TeamSwiper allTeamsDetails={allTeamsDetails} />
				</section>
			</section>
		</section>
	);
};

export default TeamSection;
