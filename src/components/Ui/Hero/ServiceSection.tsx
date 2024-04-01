'use client';
import React, { type FC } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import ServiceSectionItem from './ServiceSectionItem';
import { useGSAP } from '@gsap/react';

interface ServiceSectionProps {
	data: getAllServices[];
}

const ServiceSection: FC<ServiceSectionProps> = ({ data }) => {
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		gsap.from('.servicesSections', {
			y: 100,
			opacity: 0,
			stagger: 0.3,
			duration: 1,
			ease: 'power3.inout',
			scrollTrigger: {
				trigger: '.services',
				scroller: 'main',
				start: '13% 80%',
			},
		});
	});

	return (
		<section className="servicesSections flex h-auto  w-full justify-center  xl:mt-10 ">
			<section className=" grid h-full w-fit grid-cols-3 flex-col justify-center gap-2  border-tertiary text-secondary  md:flex-row  md:flex-wrap lg:gap-10 ">
				{data.map((item) => (
					<ServiceSectionItem
						key={item._id}
						name={item.name}
						slug={item.slug}
						description={item.description}
						image={item.image}
					/>
				))}
			</section>
		</section>
	);
};

export default ServiceSection;
