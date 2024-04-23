"use client";
import Heading from "@/components/Heading";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const WorksFlowSection = (): React.JSX.Element => {
	const worksFlowSectionRef = useRef(null);
	// const { scrollYProgress } = useScroll({
	// 	target: worksFlowSectionRef,
	// 	offset: ["0 1", "1.22 1"],
	// });

	return (
		<section className="  h-auto w-full  " id={"howItWorks"}>
			<section className=" mx-auto h-auto w-full max-w-5xl px-5 py-20 lg:py-28">
				<Heading
					heading={"How it Works"}
					subHeading={
						"Say goodbye to the lengthy onboarding processes associated with agencies. Simply subscribe, add your project details, then watch us set up and deliver your first task within 72 hours."
					}
				/>
				<section ref={worksFlowSectionRef} className="mt-20 flex w-full ">
					{/* <section className="w-[25%] ">
						<motion.svg
							width="4"
							height="100%"
							viewBox="0 0 6 100%"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="mx-auto h-full"
						>
							<motion.path
								style={{
									pathLength: scrollYProgress,
								}}
								pathLength="1"
								d="M2 0C2 384 2 487.333 2 491"
								stroke="black"
								stroke-width="4"
								className="h-full"
							/>
						</motion.svg>
						{/* <svg
							width="4"
							height="1143"
							viewBox="0 0 4 1143"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="mx-auto h-full"
						>
							<motion.path
								style={{
									pathLength: scrollYProgress,
								}}
								pathLength="1"
								d="M1.99995 1143C1.99999 241.925 2 5.55191 2 0"
								stroke="black"
								stroke-width="4"
							/>
						</svg> 
					</section> */}
					<motion.section className="mx-auto grid h-auto w-full grid-cols-1 flex-col gap-8 lg:w-[75%]">
						{/* First step */}
						<motion.section
							initial={{
								opacity: 0,
								// scale:0
							}}
							whileInView={{
								opacity: 1,
								// scale:1.3
							}}
							viewport={{
								margin: "-500px",
							}}
							className=" flex w-full flex-col rounded-xl border-2 border-black p-6 lg:flex-row"
						>
							<div className="flex aspect-square w-full flex-col gap-3 rounded-2xl border bg-black p-10 lg:w-[30%]">
								<div className="h-4 w-full rounded-full border-3 border-white"></div>
								<div className="flex w-full">
									<div className="aspect-square w-1/2 rounded-2xl border-3 border-white"></div>
									<div className="flex aspect-square w-1/2 flex-col gap-2 rounded-2xl p-3">
										<div className="w-5 rounded-2xl border-2 border-white"></div>
										<div className="w-full rounded-2xl border-2 border-white"></div>
										<div className="w-7 rounded-2xl border-2 border-white"></div>
										<div className="w-full rounded-2xl border-2 border-white"></div>
									</div>
								</div>
								<div className="flex gap-2 ">
									<div className="flex w-1/2 items-center justify-between gap-2">
										<div className="h-4 w-4 rounded-full border-3 border-white"></div>
										<div className="h-4 w-4 rounded-full border-3 border-white"></div>
										<div className="h-4 w-4 rounded-full border-3 border-white"></div>
									</div>
									<div className="aspect-video w-1/2 rounded-lg border-3 border-white"></div>
								</div>
							</div>
							<section className="w-full py-5 lg:w-[70%] lg:p-5">
								<h4>Book a Discovery Call</h4>
								<div className="text-lg">Lets chat about your business...</div>
								<div>
									<p className="text-sm">
										Schedule a Discovery Call with us to understand your
										business, project idea, and clarify your vision. We'll
										examine your current systems and create actionable next
										steps while answering any questions you might have about our
										service.
									</p>
								</div>
							</section>
						</motion.section>

						<motion.section
							initial={{ opacity: 0 }}
							whileInView={{
								opacity: 1,
							}}
							viewport={{
								margin: "-500px",
							}}
							className=" flex w-full flex-col rounded-xl border-2 border-black p-6 lg:flex-row"
						>
							<div className="flex aspect-square w-full flex-col gap-3 rounded-2xl border bg-black p-10 lg:w-[30%]">
								<div className="h-4 w-full rounded-full border-3 border-white"></div>
								<div className="flex w-full">
									<div className="aspect-square w-1/2 rounded-2xl border-3 border-white"></div>
									<div className="flex aspect-square w-1/2 flex-col gap-2 rounded-2xl p-3">
										<div className="w-5 rounded-2xl border-2 border-white"></div>
										<div className="w-full rounded-2xl border-2 border-white"></div>
										<div className="w-7 rounded-2xl border-2 border-white"></div>
										<div className="w-full rounded-2xl border-2 border-white"></div>
									</div>
								</div>
								<div className="flex gap-2 ">
									<div className="flex w-1/2 items-center justify-between gap-2">
										<div className="h-4 w-4 rounded-full border-3 border-white"></div>
										<div className="h-4 w-4 rounded-full border-3 border-white"></div>
										<div className="h-4 w-4 rounded-full border-3 border-white"></div>
									</div>
									<div className="aspect-video w-1/2 rounded-lg border-3 border-white"></div>
								</div>
							</div>
							<section className="w-full py-5 lg:w-[70%] lg:p-5">
								<h4>Book a Discovery Call</h4>
								<div className="text-lg">Lets chat about your business...</div>
								<div>
									<p className="text-sm">
										Schedule a Discovery Call with us to understand your
										business, project idea, and clarify your vision. We'll
										examine your current systems and create actionable next
										steps while answering any questions you might have about our
										service.
									</p>
								</div>
							</section>
						</motion.section>

						<motion.section
							initial={{ opacity: 0 }}
							whileInView={{
								opacity: 1,
							}}
							viewport={{
								margin: "-500px",
							}}
							className=" flex w-full flex-col rounded-xl border-2 border-black p-6 lg:flex-row"
						>
							<div className="flex aspect-square w-full flex-col gap-3 rounded-2xl border bg-black p-10 lg:w-[30%]">
								<div className="h-4 w-full rounded-full border-3 border-white"></div>
								<div className="flex w-full">
									<div className="aspect-square w-1/2 rounded-2xl border-3 border-white"></div>
									<div className="flex aspect-square w-1/2 flex-col gap-2 rounded-2xl p-3">
										<div className="w-5 rounded-2xl border-2 border-white"></div>
										<div className="w-full rounded-2xl border-2 border-white"></div>
										<div className="w-7 rounded-2xl border-2 border-white"></div>
										<div className="w-full rounded-2xl border-2 border-white"></div>
									</div>
								</div>
								<div className="flex gap-2 ">
									<div className="flex w-1/2 items-center justify-between gap-2">
										<div className="h-4 w-4 rounded-full border-3 border-white"></div>
										<div className="h-4 w-4 rounded-full border-3 border-white"></div>
										<div className="h-4 w-4 rounded-full border-3 border-white"></div>
									</div>
									<div className="aspect-video w-1/2 rounded-lg border-3 border-white"></div>
								</div>
							</div>
							<section className="w-full py-5 lg:w-[70%] lg:p-5">
								<h4>Book a Discovery Call</h4>
								<div className="text-lg">Lets chat about your business...</div>
								<div>
									<p className="text-sm">
										Schedule a Discovery Call with us to understand your
										business, project idea, and clarify your vision. We'll
										examine your current systems and create actionable next
										steps while answering any questions you might have about our
										service.
									</p>
								</div>
							</section>
						</motion.section>

						<motion.section
							initial={{ opacity: 0 }}
							whileInView={{
								opacity: 1,
							}}
							viewport={{
								margin: "-500px",
							}}
							className=" flex w-full flex-col rounded-xl border-2 border-black p-6 lg:flex-row"
						>
							<div className="flex aspect-square w-full flex-col gap-3 rounded-2xl border bg-black p-10 lg:w-[30%]">
								<div className="h-4 w-full rounded-full border-3 border-white"></div>
								<div className="flex w-full">
									<div className="aspect-square w-1/2 rounded-2xl border-3 border-white"></div>
									<div className="flex aspect-square w-1/2 flex-col gap-2 rounded-2xl p-3">
										<div className="w-5 rounded-2xl border-2 border-white"></div>
										<div className="w-full rounded-2xl border-2 border-white"></div>
										<div className="w-7 rounded-2xl border-2 border-white"></div>
										<div className="w-full rounded-2xl border-2 border-white"></div>
									</div>
								</div>
								<div className="flex gap-2 ">
									<div className="flex w-1/2 items-center justify-between gap-2">
										<div className="h-4 w-4 rounded-full border-3 border-white"></div>
										<div className="h-4 w-4 rounded-full border-3 border-white"></div>
										<div className="h-4 w-4 rounded-full border-3 border-white"></div>
									</div>
									<div className="aspect-video w-1/2 rounded-lg border-3 border-white"></div>
								</div>
							</div>
							<section className="w-full py-5 lg:w-[70%] lg:p-5">
								<h4>Book a Discovery Call</h4>
								<div className="text-lg">Lets chat about your business...</div>
								<div>
									<p className="text-sm">
										Schedule a Discovery Call with us to understand your
										business, project idea, and clarify your vision. We'll
										examine your current systems and create actionable next
										steps while answering any questions you might have about our
										service.
									</p>
								</div>
							</section>
						</motion.section>
					</motion.section>
				</section>
			</section>
		</section>
	);
};

export default WorksFlowSection;
