"use client";
import Heading from "@/components/Heading";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Switch,
} from "@nextui-org/react";
import React, { type FC, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

interface HeroProps {
	plans: getAllPlans[];
}
const Plans: FC<HeroProps> = ({ plans }): React.JSX.Element => {
	const [plan] = useState<getAllPlans>(plans[0]);

	return (
		<>
			<section id="plans" className="h-auto w-full ">
				<section className="h-auto w-full px-5 py-20 xl:py-28">
					<section className=" mx-auto flex h-auto w-full max-w-7xl flex-col  ">
						{/* Heading */}
						<Heading
							heading={"The right price for you, with maximum value"}
							subHeading={
								"Simple pricing that makes sense for your business. No hidden fees."
							}
						/>

						<section className=" mb-16 mt-10 flex h-auto w-full  gap-6  ">
							{/* Selection Pannel */}
							<div className="mx-auto flex items-center justify-evenly gap-5 text-xl font-semibold">
								Monthly
								<Switch defaultSelected size="sm" />
								Yearly
							</div>
						</section>

						{/* Plan Cards */}
						<section className=" h-auto w-full sm:px-10 md:px-0">
							<section className=" grid w-full grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:gap-20">
								{plan.plans.map((item) => (
									<Card key={item._key} className="px-3 py-5">
										{/* heading */}
										<CardHeader className=" flex h-auto w-full flex-col items-center justify-center gap-6 pb-[3rem] ">
											<section className="w-full">
												<span>Pages</span>
											</section>
											<section className="w-full">
												<span>Pause or cancel anytime</span>
												<h4>$3499/mo</h4>
											</section>
											<section className="">
												<p className="text-sm">
													Best for early-stage startups and businesses that need
													a marketing side and ongoing developmental work.
												</p>
											</section>
										</CardHeader>
										{/* mid Section */}
										<CardBody>
											<ul className=" flex h-auto w-full flex-col items-center gap-4  text-start text-base leading-[28.8px]">
												{item.service.map((service, index) => (
													<li
														className="flex w-full gap-6 text-sm "
														key={index}
													>
														<FaCircleCheck className="text-2xl text-primary " />
														{service}
													</li>
												))}
											</ul>
										</CardBody>
										{/* button */}
										<CardFooter>
											<Button
												type="submit"
												color="primary"
												variant="bordered"
												fullWidth
												className="mt-6 rounded-lg"
											>
												Buy Now
											</Button>
										</CardFooter>
									</Card>
								))}
							</section>
						</section>
					</section>
				</section>
			</section>
		</>
	);
};

export default Plans;
