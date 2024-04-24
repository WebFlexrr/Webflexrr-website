import Heading from "@/components/Heading";
import getAllPlans from "@/lib/getPlans";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Link,
} from "@nextui-org/react";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const PlanSection = async (): Promise<React.JSX.Element> => {
	const getPlans = await getAllPlans();
	const allPlans = getPlans.sort((a, b) => a.id - b.id);

	return (
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

					<section className=" mb-16 mt-10 flex h-auto w-full flex-col  gap-6  ">
						{/* Selection Pannel */}
						<section className=" mx-auto grid h-auto w-full max-w-lg grid-cols-1 gap-9 sm:px-10 xl:max-w-none xl:grid-cols-3 xl:px-0 ">
							{allPlans.map((item) => (
								<Card
									key={item.id}
									className="border border-pink-400 px-3 py-5"
								>
									{/* heading */}
									<CardHeader className=" flex w-full flex-col items-center justify-center gap-5 pb-[3rem] ">
										<section className="w-full">
											<span className="text-lg font-bold text-primary">
												{item.name}
											</span>
										</section>
										<section className="w-full">
											<span>Pause or cancel anytime</span>
											<h4>${item.price}/month</h4>
										</section>
										<section className="">
											<p className="text-sm">{item.description}</p>
										</section>
									</CardHeader>
									{/* mid Section */}
									<CardBody>
										<ul className=" flex h-auto w-full flex-col items-center gap-4  text-start text-base leading-[28.8px]">
											{item.service?.map((service, index) => (
												<li className="flex w-full gap-6 text-sm " key={index}>
													<div className="flex h-4 w-4 items-center justify-center text-lg text-primary">
														<FaCircleCheck />
													</div>
													{service}
												</li>
											))}
										</ul>
									</CardBody>
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
					<section className=" mb-16 mt-10 flex h-auto w-full flex-col  gap-6  ">
						<h4>If your Want free consultation ,then Book a Call </h4>
						<Link></Link>
					</section>
					<section className="flex h-auto w-full flex-col items-center  justify-center gap-5">
						<div className=" text-sm text-black ">
							Prices are per month per project.
						</div>
						<Link className=" cursor-pointer rounded-full border px-4 py-2 text-sm font-bold text-black">
							✨ See all feature and compare plans
						</Link>
					</section>
				</section>
			</section>
		</section>
	);
};

export default PlanSection;
