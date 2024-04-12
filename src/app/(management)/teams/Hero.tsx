import Heading from "@/components/Heading";
import TeamPicture from "@/components/TeamPicture";
import getAllManagementData from "@/lib/getManagement";
import React from "react";

const Hero = async (): Promise<React.JSX.Element> => {
	const allTeamsDetails = await getAllManagementData();
	return (
		<section className="h-auto w-full">
			<section className="h-auto w-full px-5 py-20 xl:py-36">
				<section className="mx-auto flex h-auto w-full max-w-[100rem] flex-col gap-10">
					<Heading heading={"Top Authorities"} subHeading={"Our Management"} />
					<div className="grid h-auto w-full grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 2xl:grid-cols-4 ">
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

export default Hero;
