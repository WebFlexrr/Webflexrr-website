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
			className=" flex h-auto w-full lg:-translate-x-16"
		>
			<section className="relative hidden w-[20%] items-center justify-center lg:flex ">
				<div className="z-10  mx-auto flex h-12 w-12 items-center  justify-center rounded-full border-3 border-black bg-white text-lg font-semibold text-black">
					{step}
				</div>
				<div className=" absolute right-0 h-1.5 w-20 border bg-black"></div>
			</section>
			<section className="relative my-4  flex h-auto flex-col rounded-xl border-3 border-black p-6 md:flex-row lg:w-[80%]">
				<div className="aspect-[16/9] w-full gap-3  rounded-2xl md:aspect-square   md:w-[35%]">
					<Image
						src={picture}
						alt={name}
						className="aspect-square h-full w-full md:aspect-square"
					/>
				</div>
				<section className="w-full space-y-3  pt-7 md:w-[65%] md:px-4 md:py-3 ">
					<h3>{name}</h3>
					{/* <div className="text-lg">Lets chat about your business...</div> */}
					<div>
						<p className=" text-xl leading-relaxed tracking-wide text-black">
							{description}
						</p>
					</div>
				</section>
				<div className="absolute -top-6 left-5 z-10 mx-auto flex h-10 w-10 items-center justify-center  rounded-full border-3 border-black bg-white text-lg font-semibold text-black lg:hidden">
					{step}
				</div>
			</section>
		</motion.section>
	);
};

export default WorkFlowSectionItem;
