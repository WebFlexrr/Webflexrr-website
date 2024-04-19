// import { DotBackgroundDemo } from "@/components/ui/dot-background";
// import { GridBackground } from "@/components/ui/GridBackground";

// import { GridBackground } from "@/components/ui/GridBackground";
import { WavyBackgroundDemo } from "@/components/ui/Hero/WavyBackgroundDemo";
// import { WavyBackgroundDemo } from "@/components/ui/Hero/WavyBackgroundDemo";
import React from "react";

const HeroSection = (): React.JSX.Element => {
	return (
		<section id={"home"} className="relative  w-full pt-16 lg:pt-28 ">
			{/* <DotBackgroundDemo /> */}
			{/* <GridBackground /> */}
			<WavyBackgroundDemo />
		</section>
	);
};

export default HeroSection;
