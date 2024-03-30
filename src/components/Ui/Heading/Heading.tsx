'use client';
import React, { type FC, useRef } from 'react';
import PulseCircle from '../PulseCircle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
interface HeadingProps {
	heading: string | null;
	subHeading: string;
}

const Heading: FC<HeadingProps> = ({ heading, subHeading }) => {
	const Heading = useRef<HTMLDivElement>(null);
	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		gsap.from(Heading.current, {
			x: -100,
			duration: 1,
			opacity: 0,
			stagger: 0.3,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: Heading.current,
				scroller: 'main',
				start: 'top 80%',
			},
		});
	});

	return (
		<section
			ref={Heading}
			className="flex h-auto w-full flex-col items-center gap-3"
		>
			{heading != null ? (
				<>
					<span className="galleryHeading flex gap-4 text-xl leading-7 text-subHeading lg:text-2xl">
						<PulseCircle />
						{heading}
						<PulseCircle flowDirection="right" />
					</span>
					<h2 className=" galleryHeading mb-10">{subHeading}</h2>
				</>
			) : (
				<h2 className=" galleryHeading">{subHeading}</h2>
			)}
		</section>
	);
};

export default Heading;
