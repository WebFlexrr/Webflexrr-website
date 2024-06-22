import React, { type FC } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import Link from "next/link";

interface PlansCardProps {
	item: getAllPlans;
}
const PlansCard: FC<PlansCardProps> = ({ item }): React.JSX.Element => {
	return (
		<Card key={item.id} className="border border-primary px-3 py-5">
			{/* heading */}
			<CardHeader className=" flex w-full flex-col items-center justify-center gap-5 pb-[3rem] ">
				<section className="w-full">
					<span className="text-3xl font-bold text-primary">{item.name}</span>
				</section>
				{/* <section className="w-full">
									<span>Pause or cancel anytime</span>
									<h4>${item.price}/month</h4>
								</section> */}
				<section className="">
					<p className="text-sm">{item.description}</p>
				</section>
			</CardHeader>
			{/* mid Section */}
			<CardBody>
				<ul className=" flex h-auto w-full flex-col items-center gap-4  text-start text-base leading-[28.8px]">
					{item.service?.map((service, index) => (
						<li className="flex w-full gap-6 text-sm " key={index}>
							<div className="flex h-4 w-4 items-center justify-center text-lg ">
								{service.isSelected ? (
									<FaCircleCheck className="text-primary" />
								) : (
									<FaCircleXmark className="text-danger" />
								)}
							</div>
							{service.serviceName}
						</li>
					))}
				</ul>
			</CardBody>
			<CardFooter>
				<Link
					href={item.bookingLink}
					target="_blank"
					className="mt-6 flex w-full items-center justify-center rounded-lg border-2 border-primary p-2 "
				>
					Book this
				</Link>
			</CardFooter>
		</Card>
	);
};

export default PlansCard;
