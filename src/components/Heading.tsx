// "use client";
import React, { type FC } from "react";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { motion, useScroll } from "framer-motion";

interface HeadingProps {
	heading: string | null;
	subHeading: string;
}

const Heading: FC<HeadingProps> = ({ heading, subHeading }) => {
	// const headingRef = useRef<HTMLDivElement>(null);

	// const { scrollYProgress } = useScroll({
	// 	target: headingRef,
	// 	offset: ["0 1", "1.33 1"],
	// });

	// gsap.registerPlugin(useGSAP);
	// gsap.registerPlugin(ScrollTrigger);

	// useGSAP(() => {
	// 	gsap.from(Heading.current, {
	// 		x: -100,
	// 		duration: 1,
	// 		opacity: 0,
	// 		stagger: 0.3,
	// 		ease: "power2.out",
	// 		scrollTrigger: {
	// 			trigger: Heading.current,
	// 			scroller: ".main",
	// 			start: "top 80%",
	// 		},
	// 	});
	// });

	return (
		<section
			// ref={headingRef}
			// style={{
			// 	opacity: scrollYProgress,
			// }}

			className="mx-auto flex h-auto  w-full max-w-4xl flex-col items-center gap-3 text-center"
		>
			{heading != null ? (
				<>
					<h2 className=" galleryHeading font-schibsted-grotesk">{heading}</h2>
					<p>{subHeading}</p>
				</>
			) : (
				<h2 className=" galleryHeading">{heading}</h2>
			)}
		</section>
	);
};

export default Heading;
