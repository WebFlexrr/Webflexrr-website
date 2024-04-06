"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { type FC, useRef } from "react";

interface PulseCircleProps {
	flowDirection?: string;
	scale?: string;
}

const PulseCircle: FC<PulseCircleProps> = ({ flowDirection }) => {
	const pulseCircleLine = useRef<HTMLDivElement>(null);
	gsap.registerPlugin(useGSAP);
	// const pulseCircleRed = useRef<HTMLDivElement>(null);
	// const pulseLine = useRef<HTMLDivElement>();
	useGSAP(() => {
		gsap.to(".pulseCircleRed", {
			scale: 0.8,
			repeat: -1,
			duration: 1,
			yoyo: true,
			ease: "power2.inOut",
		});
		gsap.to(".pulseLine", {
			scaleY: 0.8,
			repeat: -1,
			duration: 1,
			yoyo: true,
			ease: "power2.inOut",
		});
	});

	return (
		<div
			ref={pulseCircleLine}
			className={`pulseCircleLine ${
				flowDirection === "right"
					? "flex-row-reverse"
					: flowDirection === "bottom"
						? "flex-col-reverse "
						: ""
			} flex w-fit  items-center justify-center gap-4`}
		>
			{flowDirection === "bottom" ? (
				<div className=" pulseLine h-[3rem] w-[2px] bg-subHeading" />
			) : (
				<div className="h-[2px] w-[2rem] bg-subHeading lg:w-[3rem]" />
			)}
			<div
				// ref={pulseCircleRed}
				className="pulseCircleRed relative h-3 w-3 rounded-full bg-primary lg:h-4 lg:w-4"
			/>
		</div>
	);
};

export default PulseCircle;
