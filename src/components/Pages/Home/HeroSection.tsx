import { DotBackgroundDemo } from "@/components/ui/dot-background";

import React from "react";

const HeroSection = (): React.JSX.Element => {
	return (
		<section id={"home"} className="relative  w-full pt-16 lg:pt-28 ">
			<DotBackgroundDemo />
			{/* <GridBackgroundDemo/> */}
		</section>
	);
};

export default HeroSection;
