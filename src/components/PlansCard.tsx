import React, { type FC } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import Link from "next/link";

interface PlansCardProps {
	item: getAllPlans;
}
const PlansCard: FC<PlansCardProps> = ({ item }): React.JSX.Element => {
	return (
		<Card
			key={item.id}
			className={`border ${
				item.highlighted && "bg-primary text-white"
			} border-primary px-3 py-5`}
		>
			{/* heading */}
			<CardHeader className=" flex w-full flex-col items-center justify-center gap-5 pb-[3rem] ">
				<section className="w-full">
					<span
						className={`text-3xl font-bold text-primary ${
							item.highlighted && "text-white"
						}`}
					>
						{item.name}
					</span>
				</section>
				{/* <section className="w-full">
									<span>Pause or cancel anytime</span>
									<h4>${item.price}/month</h4>
								</section> */}
				<section>
					<p className={`${item.highlighted && "text-white"}`}>
						{item.description}
					</p>
				</section>
			</CardHeader>
			{/* mid Section */}
			<CardBody>
				<ul className=" flex h-auto w-full flex-col items-start justify-center gap-4  text-start text-base leading-[28.8px]">
					{item.service?.map((service, index) => (
						<li
							className={`flex w-full items-center gap-6 text-sm `}
							key={index}
						>
							<div className="flex h-4 w-4 items-center justify-center text-lg ">
								{service.isSelected ? (
									<FaCircleCheck
										className={item.highlighted ? "text-white" : "text-primary"}
									/>
								) : (
									<FaCircleXmark className={"text-danger"} />
								)}
							</div>
							<p className={`${item.highlighted && "text-white"}`}>
								{service.serviceName}
							</p>
						</li>
					))}
				</ul>
			</CardBody>
			<CardFooter>
				<Link
					href={item.bookingLink}
					target="_blank"
					className={`mt-6 ${
						item.highlighted
							? "border-white transition-all duration-100 ease-in-out hover:bg-background hover:text-primary"
							: "border-primary transition-all duration-100 ease-in-out hover:bg-primary hover:text-white "
					} flex w-full items-center justify-center rounded-lg border-2  p-2.5 text-lg font-semibold `}
				>
					Book a Discovery Call
				</Link>
			</CardFooter>
		</Card>
	);
};

export default PlansCard;
