import Link from 'next/link';
import React, { type FC } from 'react';
import Image from 'next/image';

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
		<section className=" servicesSections  group mx-auto  mb-20 flex  w-full max-w-[20rem]  items-center gap-10 rounded-lg border border-black p-10 shadow-xl lg:gap-7 xl:px-0 ">
			<section className="aspect-[4/3]  w-[15rem]">
				<Link href={`/services/${slug}`}>
					<Image
						src={image}
						width={'1080'}
						height={'1080'}
						alt={name}
						// className="xl:absolute w-full xl:scale-75 xl:opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 bg-white transition ease-in-out duration-300 "
						className=" relative mx-auto  "
					/>
				</Link>
			</section>

			<div className=" mx-auto flex h-fit w-full flex-col gap-5 text-center hover:text-primary md:gap-6 xl:px-11">
				<Link
					href={`/services/${slug}`}
					className=" text-center text-[30px]  font-bold leading-[41.76px] text-secondary transition duration-500  ease-in-out group-hover:text-primary md:text-[30px]"
				>
					{name}
				</Link>
				<span className="">
					<p>{description.split(' ').splice(0, 20).join(' ').concat('....')}</p>
				</span>
			</div>
		</section>
	);
};

export default ServiceSectionItem;
