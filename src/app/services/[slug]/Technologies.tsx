'use client';
import Heading from '@/components/Heading';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { type FC, useRef } from 'react';

interface TechnologiesProps {
	weAreUsing: ServiceWeAreUsing[];
}
const Technologies: FC<TechnologiesProps> = ({ weAreUsing }) => {
	const technologies = useRef<HTMLDivElement>(null);
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(useGSAP);
	useGSAP(() => {
		gsap.from('.technologiesSection', {
			y: 100,
			opacity: 0,
			stagger: 0.2,
			duration: 1,
			ease: 'power4.out',
			scrollTrigger: {
				trigger: technologies.current,
				scroller: 'main',
				start: '30% 80%',
			},
		});
	});

	return (
		<section ref={technologies} className="h-auto w-full bg-background ">
			<section className="h-auto w-full px-5 py-20 xl:py-28 ">
				<Heading heading={'Technology'} subHeading={'We are Using '} />
				<section className="mx-auto h-fit w-full max-w-[70rem] border-2 border-primary bg-background3 p-3 ">
					<section className="grid h-full w-full grid-cols-2 gap-5 md:grid-cols-3  xl:grid-cols-6 ">
						{weAreUsing?.map((item) => (
							<div
								key={item._key}
								className="technologiesSection flex h-[9rem] w-full items-center justify-center border-2 border-primary"
							>
								<span className="flex flex-col items-center justify-center gap-3 p-3.5 text-center font-semibold leading-[26px] text-secondary">
									<Image
										src={item.iconImage}
										width={50}
										height={50}
										alt={item.iconName}
										className="text-[50px] text-blue-400"
									/>
									{item.iconName}
								</span>
							</div>
						))}
					</section>
				</section>
			</section>
		</section>
	);
};

export default Technologies;
