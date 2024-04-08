import Heading from "@/components/Heading";
import ServiceSection2 from "@/components/ui/Hero/ServiceSection2";
import React from "react";

const Services2 = (): React.JSX.Element => {
	return (
		<section className=" services h-auto w-full " id={"services"}>
			<section className=" h-auto w-full py-20 lg:pt-28">
				<Heading
					heading={"Services"}
					subHeading={"We handle just about everything!"}
				/>
				<ServiceSection2 />
			</section>
		</section>
	);
};

export default Services2;
