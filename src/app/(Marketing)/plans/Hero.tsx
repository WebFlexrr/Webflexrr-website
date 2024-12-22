import Heading from "@/components/Heading";
import PlansCard from "@/components/PlansCard";
import getAllPlans from "@/lib/getPlans";
import { Link } from "@nextui-org/react";
import React from "react";

const PlanSection = async (): Promise<React.JSX.Element> => {
	const getPlans = await getAllPlans();
	const allPlans = getPlans.sort((a, b) => a.id - b.id);

	return (
		<section className="h-auto w-full ">
			<section className=" mx-auto flex h-auto w-full max-w-7xl flex-col px-5 py-20 xl:py-36  ">
				{/* Heading */}
				<Heading
					heading={"The right price for you, with maximum value"}
					subHeading={
						"Simple pricing that makes sense for your business. No hidden fees."
					}
					para={"Plans"}
				/>

				<section className=" mx-auto  my-7 flex h-auto w-full flex-col  items-center justify-center gap-6  lg:flex-row  ">
					<h5>If your have queries about our services </h5>
					<Link
						href={process.env.NEXT_PUBLIC_MEETING_LINK ?? ""}
						target="_blank"
						className=" cursor-pointer rounded-full border-2  border-black bg-primary px-10 py-2.5 text-lg font-semibold text-white  transition-colors"
					>
						Book a Call
					</Link>
				</section>

				{/* Selection Pannel */}
				<section className=" mx-auto mb-16 mt-10  grid h-auto  w-full max-w-lg grid-cols-1 flex-col gap-9 sm:px-10 xl:max-w-none xl:grid-cols-3 xl:px-0 ">
					{allPlans.map((item) => (
						<PlansCard key={item.id} item={item} />
					))}
				</section>
				<section className="flex h-auto w-full flex-col items-center  justify-center gap-5">
					{/* <div className=" text-sm text-black ">
						Prices are per month per project.
					</div> */}
				</section>
			</section>
		</section>
	);
};

export default PlanSection;
