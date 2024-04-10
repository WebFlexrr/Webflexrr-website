"use client";
import React, { type FC, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface HeadingProps {
	heading: string | null;
	subHeading: string;
}

const Heading: FC<HeadingProps> = ({ heading, subHeading }) => {
	const Heading = useRef<HTMLDivElement>(null);
	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		gsap.from(Heading.current, {
			x: -100,
			duration: 1,
			opacity: 0,
			stagger: 0.3,
			ease: "power2.out",
			scrollTrigger: {
				trigger: Heading.current,
				scroller: ".main",
				start: "top 80%",
			},
		});
	});

	return (
		<section
			ref={Heading}
			className="flex h-auto w-full flex-col items-center gap-3"
		>
			{heading != null ? (
				<>
					<h2 className=" galleryHeading ">{heading}</h2>
					<p>{subHeading}</p>
				</>
			) : (
				<h2 className=" galleryHeading">{heading}</h2>
			)}
		</section>
	);
};

export default Heading;
