"use client";
import React, { type FC } from "react";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";

interface WorkFlowSectionItemProps {
	step: number;
	name: string;
	description: string;
	picture: string;
}

const WorkFlowSectionItem: FC<WorkFlowSectionItemProps> = ({
	step,
	name,
	description,
	picture,
}): React.JSX.Element => {
	return (
		<motion.section
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			viewport={{
				once: true,
				margin: "-300px",
			}}
			className="relative  flex w-full flex-col rounded-xl border-3 border-black p-6 lg:flex-row"
		>
			<div className="flex aspect-square w-full flex-col gap-3 rounded-2xl  lg:w-[30%]">
				<Image
					src={picture}
					alt={name}
					className="aspect-square h-full w-full"
				/>
			</div>
			<section className="w-full py-5 lg:w-[70%] lg:p-5">
				<h3>{name}</h3>
				<div className="text-lg">Lets chat about your business...</div>
				<div>
					<p className="text-sm">{description}</p>
				</div>
			</section>
			<div className="absolute -left-40  bottom-1/2 flex h-20 w-20 items-center  justify-center rounded-full border-3 border-black bg-white text-lg font-semibold text-black">
				Step {step}
			</div>
		</motion.section>
	);
};

export default WorkFlowSectionItem;
