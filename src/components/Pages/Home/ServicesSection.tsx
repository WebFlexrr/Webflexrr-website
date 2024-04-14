import Heading from "@/components/Heading";
import ServiceSection2 from "@/components/ui/Hero/ServiceSection2";
import React from "react";

const ServicesSection = (): React.JSX.Element => {
	return (
		<section className=" services h-auto w-full " id={"services"}>
			<section className=" h-auto w-full py-20 lg:pt-60">
				<Heading
					heading={"Services"}
					subHeading={"Don't worry, We handle everything for you!"}
				/>
				<ServiceSection2 />
			</section>
		</section>
	);
};

export default ServicesSection;
