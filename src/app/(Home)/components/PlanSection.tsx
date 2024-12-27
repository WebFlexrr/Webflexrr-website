import Heading from "@/components/Heading";
import PlansCard from "@/components/PlansCard";
import getAllPlans from "@/lib/getPlans";
// import getAllPlans from "@/lib/getPlans";

import Link from "next/link";
import React from "react";

const PlanSection = async (): Promise<React.JSX.Element> => {
	const getPlans = await getAllPlans();
	const allPlans = getPlans.sort((a, b) => a.id - b.id);

	return (
		<section id="plans" className="h-auto w-full ">
			<section className=" mx-auto flex h-auto w-full max-w-7xl flex-col px-5 py-20 xl:py-36  ">
				{/* Heading */}
				<Heading
					heading={"Our Prices"}
					subHeading={"Simple pricing for Startups"}
					para="We offer a range of flexible pricing plans tailored to suit businesses of all sizes."
				/>

				<section className=" mx-auto mb-16 mt-10  grid h-auto  w-full max-w-lg grid-cols-1 flex-col gap-9 sm:px-10 xl:max-w-none xl:grid-cols-3 xl:px-0 ">
					{allPlans.map((item) => (
						<PlansCard key={item.id} item={item} />
					))}
				</section>
				<section className="flex h-auto w-full flex-col items-center  justify-center gap-5">
					<div className=" text-sm text-black ">
						Prices are per month per project.
					</div>
					<Link
						href={"/plans"}
						className=" cursor-pointer rounded-full border px-4 py-2 text-sm font-bold text-foreground"
					>
						✨ See all feature and compare plans
					</Link>
				</section>
			</section>
		</section>
	);
};

export default PlanSection;
