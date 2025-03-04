import Image from "next/image";
import React, { type FC } from "react";
import Link from "next/link";
// import PulseCircle from "@/components/ui/PulseCircle";

interface ServiceItemsProps {
	image: string;
	title: string;
	slug: string;
}

const ServiceItems: FC<ServiceItemsProps> = ({ title, image, slug }) => {
	return (
		<div className="flex h-full w-full flex-col">
			<div className="bg-background3 group relative z-10 aspect-[4/2.8] h-full w-full overflow-hidden border border-slate-300">
				<Link href={`/services/${slug}`} target="_blank">
					<Image
						src={image}
						alt=""
						width={"1000"}
						height={"0"}
						className="relative h-full w-full bg-cover transition-transform duration-300 ease-in group-hover:scale-105"
					/>
					<div className="bg-opacity-100 invisible absolute bottom-0 z-0 flex h-[100px] w-full translate-y-[0.2rem] items-center justify-center bg-clip-padding shadow-2xl backdrop-blur-xl backdrop-filter transition duration-100 ease-in group-hover:visible group-hover:translate-y-0">
						<span className="text-secondary flex gap-3">
							{/* <PulseCircle /> */}
							Read More
						</span>
					</div>
				</Link>
			</div>
			<div className="mt-10 flex w-full items-center">
				<Link
					href={`/service/${slug}`}
					target="_blank"
					className="text-secondary hover:text-primary mx-auto text-center text-[30px] leading-[34.8px] font-semibold transition duration-700 ease-in-out"
				>
					{title}
				</Link>
			</div>
		</div>
	);
};

export default ServiceItems;
