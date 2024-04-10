"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { RiWindow2Fill } from "react-icons/ri";
import { motion } from "framer-motion";

const ServiceSection2 = (): React.JSX.Element => {
	// const [scope, animate] = useAnimate();
	// const firstGridAnimation = async () => {
	// 	console.log("statet");
	// 	await animate(".mobile", { y: "100" });
	// };
	return (
		<section className="servicesSections flex h-auto  w-full justify-center  xl:mt-7 ">
			<div
				// ref={scope}
				className="grid w-full max-w-7xl grid-cols-3 grid-rows-3 gap-7"
			>
				<Card className="col-span-2 row-span-1 w-full ">
					<CardBody className="px-5 pb-0">
						<motion.section
							// onHoverStart={() => firstGridAnimation}
							className="flex w-full  "
						>
							<section className="flex h-auto w-full max-w-xs flex-col gap-5">
								<section className="w-full">
									<div className="flex h-8 w-8 items-center justify-center rounded-full border bg-black  ">
										<RiWindow2Fill className="text-lg text-white" />
									</div>
								</section>
								<section className="text-lg font-medium">
									Website Design & Development
								</section>
								<section>
									<p className="text-sm">
										We'll build you a website that's so good, it'll make all the
										other websites jealous. Trust me, not kidding.
									</p>
								</section>
							</section>
							<section className="flex h-full w-full justify-end gap-6  ">
								<motion.div
									id="mobile"
									whileHover={{
										translateY: "1rem",
										paddingBottom: "10px",
									}}
									className=" mobile border-grey-700 w-[150px] rounded-t-3xl border-4 bg-black"
								>
									<motion.div
										initial={{ width: "40px", padding: "4px" }}
										whileHover={{
											width: "80px",
											padding: "4px",
										}}
										transition={{
											type: "just",
										}}
										className="mx-auto mt-2 flex w-[40px] justify-end rounded-2xl border border-white bg-gray-300 p-[3px]"
									>
										<div className="h-2 w-2 rounded-full border bg-white"></div>
									</motion.div>

									<div className="mx-auto mt-10 w-24 text-center text-[12px] text-white">
										Websites that stand out and make a difference
									</div>
								</motion.div>
								<motion.div
									whileHover={{
										translateX: "1rem",
									}}
									className="rounded "
								>
									<div className="flex h-2 w-full items-center gap-1 rounded-t-md bg-slate-300 px-2">
										<div className="h-[3px] w-[3px] rounded-full bg-red-600"></div>
										<div className="h-[3px] w-[3px] rounded-full bg-yellow-300"></div>
										<div className="h-[3px] w-[3px] rounded-full bg-green-700"></div>
									</div>
									<section className=" h-[200px] w-[300px] border bg-gradient-to-r from-cyan-500 to-blue-500">
										<div className="mx-auto mt-10 w-40 text-center text-sm text-white">
											Websites that stand out and make a difference
										</div>
									</section>
								</motion.div>
							</section>
						</motion.section>
					</CardBody>
				</Card>
				<Card className=" col-span-1 row-span-2 w-full ">
					<CardBody>
						<section className="flex w-full  ">
							<section className="flex h-auto w-full max-w-44 flex-col gap-5 ">
								<section className="w-full">
									<RiWindow2Fill className="h-7 w-7 rounded-full border p-1 text-xl" />
								</section>
								<section className="text-lg">Deployment</section>
								<section>
									<p className="text-sm">
										We'll build you a website that's so good, it'll make all the
										other websites jealous. Trust me, not kidding.
									</p>
								</section>
							</section>
							<section className="w-full ">dwadwa</section>
						</section>
					</CardBody>
				</Card>
				<Card className=" col-span-1 row-span-2 w-full ">
					<CardBody>
						<section className="flex w-full  ">
							<section className="flex h-auto w-full max-w-44 flex-col gap-5 ">
								<section className="w-full">
									<RiWindow2Fill className="h-7 w-7 rounded-full border p-1 text-xl" />
								</section>
								<section className="text-lg">SEO</section>
								<section>
									<p className="text-sm">
										We'll build you a website that's so good, it'll make all the
										other websites jealous. Trust me, not kidding.
									</p>
								</section>
							</section>
							<section className="w-full ">dwadwa</section>
						</section>
					</CardBody>
				</Card>
				<Card className=" col-span-1 row-span-1 w-full ">
					<CardBody>
						<section className="flex w-full  ">
							<section className="flex h-auto w-full max-w-44 flex-col gap-5 ">
								<section className="w-full">
									<RiWindow2Fill className="h-7 w-7 rounded-full border p-1 text-xl" />
								</section>
								<section className="text-lg">Every thing else</section>
								<section>
									<p className="text-sm">
										We'll build you a website that's so good, it'll make all the
										other websites jealous. Trust me, not kidding.
									</p>
								</section>
							</section>
							<section className="w-full ">dwadwa</section>
						</section>
					</CardBody>
				</Card>
				<Card className=" col-span-2 row-span-1 w-full ">
					<CardBody>
						<section className="flex w-full  ">
							<section className="flex h-auto w-full max-w-44 flex-col gap-5 ">
								<section className="w-full">
									<RiWindow2Fill className="h-7 w-7 rounded-full border p-1 text-xl" />
								</section>
								<section className="text-lg">Every thing else</section>
								<section>
									<p className="text-sm">
										We'll build you a website that's so good, it'll make all the
										other websites jealous. Trust me, not kidding.
									</p>
								</section>
							</section>
							<section className="w-full ">dwadwa</section>
						</section>
					</CardBody>
				</Card>
			</div>
		</section>
	);
};

export default ServiceSection2;
