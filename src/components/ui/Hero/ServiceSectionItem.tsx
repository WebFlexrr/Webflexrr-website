import Link from "next/link";
import React, { type FC } from "react";
import Image from "next/image";
import { Card, CardFooter } from "@nextui-org/react";

interface ServiceSectionProps {
	name: string;
	slug: string;
	description: string;
	image: string;
}
const ServiceSectionItem: FC<ServiceSectionProps> = ({
	name,
	slug,
	description,
	image,
}) => {
	return (
		<Link href={`/services/${slug}`}>
			<Card
				isFooterBlurred
				radius="lg"
				className="w-full max-w-[22rem] border border-purple-600 "
			>
				{/* <CardBody className="overflow-visible py-2"> */}
				<Image
					className="rounded-xl object-cover"
					src={image}
					width={1080}
					height={1080}
					alt={name}
				/>
				{/* </CardBody> */}
				<CardFooter className="flex-col items-start px-4 pb-0 pt-2">
					<div className=" mx-auto flex h-fit w-full flex-col gap-5 text-center hover:text-primary md:gap-6 xl:px-11">
						<Link
							href={`/services/${slug}`}
							className=" text-center text-[30px]  font-bold leading-[41.76px] text-secondary transition duration-500  ease-in-out group-hover:text-primary md:text-[30px]"
						>
							{name}
						</Link>
						<span className="">
							<p>
								{description.split(" ").splice(0, 20).join(" ").concat("....")}
							</p>
						</span>
					</div>
				</CardFooter>
			</Card>
		</Link>
	);
};

export default ServiceSectionItem;
