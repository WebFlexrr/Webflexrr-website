'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Banner = (): React.JSX.Element => {
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(useGSAP);

	const banner = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		gsap.from('.banner1', {
			y: 40,
			opacity: 0,
			stagger: 0.6,
			ease: 'power1.out',
			scrollTrigger: {
				trigger: banner.current,
				scroller: '.main',
				start: '20% 75%',
			},
		});
	});

	return (
		<section ref={banner} className=" mt-10 h-auto w-full">
			<section className=" mx-auto h-auto w-full max-w-[90rem]">
				<section className=" flex w-full flex-wrap justify-evenly xl:justify-between">
					<div className="w-full sm:w-fit">
						<div className="banner1  group mx-auto flex h-auto max-w-[28rem] flex-col gap-5 p-[25px] text-secondary sm:flex-row sm:gap-6">
							<svg
								className=" mx-auto h-fit w-[110px] fill-primary group-hover:animate-wiggle sm:w-[130px]"
								viewBox="0 0 100 120"
								x="0px"
								y="0px"
							>
								<path d="M22.2,89.3c-0.3,0.1-0.9,0.4-1.4,0.5l-0.1,0c-3.6,1.3-10.3,3.8-10.3,10l0,1.8l3.6,0l0-1.8 c0-3.7,5-5.5,7.9-6.6c1-0.3,1.9-0.7,2.7-1.3c1-0.9,1.4-2.9,1.6-5c0.7,0.2,1.4,0.4,2.2,0.4c0.7,0,1.5-0.1,2.2-0.3 c0.2,2,0.6,4.1,1.6,4.9c0.8,0.6,1.7,1,2.7,1.3c1.7,0.6,3.3,1.3,4.8,2.2c-3.7,1.5-8.6,4-8.6,9.4l0,1.8l3.6,0l0-1.8c0-3.7,5-5.5,8-6.6 c1-0.3,1.8-0.7,2.7-1.3c1-0.9,1.4-2.9,1.6-4.9c0.7,0.2,1.4,0.3,2.2,0.3c0.7,0,1.5-0.1,2.2-0.4c0.1,2.1,0.6,4.1,1.6,5 c0.8,0.6,1.7,1,2.7,1.3c3,1.1,8,2.9,7.9,6.6l0,1.8l3.6,0l0-1.8c0-5.3-4.9-7.9-8.6-9.4c1.5-0.9,3.1-1.6,4.8-2.2 c1-0.3,1.9-0.7,2.7-1.3c1-0.9,1.4-2.9,1.6-4.9c0.7,0.2,1.4,0.3,2.2,0.3c0.7,0,1.5-0.1,2.2-0.4c0.1,2.1,0.6,4.1,1.6,5 c0.8,0.6,1.7,1,2.7,1.3c3,1.1,8,2.9,7.9,6.6l0,1.8l3.6,0l0-1.8c0-6.2-6.7-8.7-10.3-10l-0.1,0c-0.5-0.2-1.1-0.4-1.4-0.5 c-0.4-1.5-0.5-3-0.5-4.5v-0.3c0.7-0.7,1.3-1.4,1.7-2.3c1.3-2.1,2.1-4.5,2.1-7c0-7.4-3.6-12-9.5-12c-0.8,0-1.7,0.1-2.5,0.3 c0.2-0.3,0.3-0.6,0.3-0.9l0.6-6l0.7-0.4c6.2-3.5,9.8-9.2,9.8-15.5c0-5.7-3-10.9-8.2-14.5l-1.5-1l-1.3,2C65,17.7,54.9,10.5,42.7,10.5 c-13.9,0-25.1,9.4-25.1,21c0,6.9,3.9,13.1,10.4,17.1l1,10.6c0.1,0.7,0.5,1.3,1.1,1.5c0.2,0.1,0.4,0.1,0.7,0.1c0.4,0,0.8-0.2,1.2-0.4 l9-7.8c0.6,0,1.2,0.1,1.8,0.1c0.2,0,0.3,0,0.5,0L41.8,55l1.5,0.9c3.9,2.3,8.4,3.6,13,3.5c0.5,0,1.1,0,1.6,0l1.3-0.1l5.2,4.6 c0.2,0.2,0.5,0.3,0.7,0.4c-2.7,1.3-5.2,4.4-5.2,11.1c0.1,2.7,0.9,5.3,2.5,7.4c0.4,0.7,0.9,1.4,1.6,1.9v0.2c0,1.5-0.2,3-0.6,4.5 c-0.3,0.1-0.9,0.4-1.4,0.5l-0.1,0c-2.5,0.8-4.9,2-7,3.5c-0.2-1.2-0.4-2.5-0.4-3.7v-0.3c0.7-0.7,1.3-1.4,1.8-2.3 c1.4-2.1,2.1-4.5,2.1-7c0-7.4-3.6-12-9.5-12c-3.5,0-9.5,1.6-9.5,12c0,2.7,0.9,5.2,2.5,7.4c0.4,0.7,0.9,1.4,1.5,1.9v0.2 c0,1.2-0.1,2.5-0.4,3.7c-2.1-1.5-4.5-2.7-6.9-3.5l-0.1,0c-0.5-0.2-1.2-0.4-1.5-0.5c-0.4-1.4-0.6-2.9-0.6-4.5v-0.2 c0.6-0.5,1.2-1.2,1.6-1.9c1.6-2.2,2.4-4.7,2.5-7.4c0-10.5-5.9-12-9.5-12c-5.9,0-9.5,4.6-9.5,12c0,2.5,0.7,4.9,2.1,7 c0.4,0.9,1,1.6,1.7,2.3v0.3C22.7,86.3,22.6,87.8,22.2,89.3 M68.2,29.3c4.2,2.9,6.7,7.1,6.7,11.5c0,4.9-3,9.5-8,12.3 c-0.1-0.1-0.3-0.1-0.4-0.1c-1-0.1-1.8,0.6-1.9,1.6c0,0,0,0,0,0l-0.4,4.2l-3.3-2.9c-0.6-0.5-1.4-0.6-2-0.2l-1.1,0.1 c-0.4,0-0.9,0-1.4,0c-3.9,0-7.8-1-11.1-3l-0.5-0.3c13-0.8,23.2-9.9,23.2-21c0-0.9-0.1-1.7-0.2-2.6L68.2,29.3z M39.1,48.8l0,0.6 c-0.1,0.1-0.2,0.1-0.3,0.2l-6.6,5.8l-0.5-4.9l1.5,0.6l1.4-3.3L33,47.1c-7.3-3-11.8-9-11.8-15.6c0-9.6,9.7-17.5,21.6-17.5 s21.5,7.8,21.5,17.5S54.6,49,42.7,49c-0.6,0-1.2,0-1.8-0.1L39.1,48.8z M28.4,66.8c1.6,0,5.9,0,5.9,8.4c0,1.9-0.6,3.7-1.8,5.2 c-0.8,1.1-1.4,2.2-2,2.2h0v0.4c-0.6,0.4-1.4,0.6-2.2,0.6c-1.5,0-3-1.1-4.5-3.4c-1-1.5-1.5-3.2-1.5-5C22.5,72.7,23.1,66.8,28.4,66.8  M46.7,88.2c-0.6-0.8-1.2-1.4-2-2.6c-1.1-1.6-1.7-3.5-1.8-5.4c0-8.4,4.3-8.5,5.9-8.5c5.4,0,5.9,5.9,5.9,8.4c0,1.8-0.5,3.5-1.5,5 c-1.5,2.3-3.1,3.4-4.6,3.4c-0.8,0-1.6-0.2-2.2-0.6v0.3L46.7,88.2z M67.2,82.7c-0.6,0-1.2-1.1-2-2.2c-1.1-1.5-1.7-3.4-1.8-5.3 c0-8.4,4.3-8.4,5.9-8.4c5.4,0,5.9,5.9,5.9,8.5c0,1.8-0.5,3.5-1.5,5c-1.5,2.3-3,3.4-4.5,3.4c-0.8,0-1.5-0.2-2.2-0.6L67.2,82.7 L67.2,82.7z"></path>
							</svg>

							<div className=" flex h-auto w-fit flex-col gap-3 text-center sm:text-left">
								<div className=" text-[26px] font-semibold leading-[34.8px]  text-secondary sm:text-[30px]">
									Marketing Master
								</div>
								<div className="">
									<p>
										Over 2 years creating visually stunning, user-centric
										websites.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className=" w-full sm:w-fit">
						<div className=" banner1 group  mx-auto flex h-auto max-w-[28rem] flex-col gap-5 p-[25px] text-white sm:flex-row  sm:gap-6">
							<svg
								className=" mx-auto h-fit  w-[110px]  fill-primary group-hover:animate-wiggle sm:w-[130px]"
								viewBox="9 0 110 126"
								x="0px"
								y="0px"
							>
								<path d="M12.5,75.8c1.4,2.7,5,5.6,8.7,7c-1,4-0.1,7.3,2.6,9.5c2.1,1.8,4.7,2.9,7.5,3.1c0.1,0,0.2,0,0.3,0 c0.2,0.6,0.4,1.1,0.6,1.7c0,0,0,0.1,0,0.1c0.4,1.4,1.1,2.7,1.9,3.9c2.2,2.9,5.5,4.9,9.1,5.3c0.9,0.1,1.8,0.2,2.7,0.2 c2.6,0,5.1-0.5,7.5-1.4c3.5-1.3,6.3-4.1,7.5-7.6c0.7-1.4,1.1-2.9,1.1-4.4V23.4c0-0.9,0-2-0.1-3c-0.2-5.5-4.7-9.9-10.2-9.9h-1 c-4.2,0.1-7.9,2.6-9.4,6.5c-0.4,0-0.8,0-1.2,0c-1.5,0-2.9,0.2-4.3,0.6c-0.1,0-0.2,0.1-0.3,0.1c-3.5,1.2-6.1,4.1-6.8,7.8 c-0.3,0.1-0.6,0.1-0.8,0.2c-0.2,0.1-0.5,0.2-0.7,0.3c-0.3-0.1-0.6-0.2-0.9-0.2c-0.2,0-0.4,0-0.7,0.1c-1.8,0.5-3.4,1.4-4.9,2.6 c-2.5,2.2-3.8,5.9-3.4,10c-3.7,1.8-6.1,5.5-6.2,9.6c-0.1,3.4,0.8,6.8,2.4,9.8C9.9,63.1,9.5,70,12.5,75.8 M24.7,59.9l-0.4-0.2 c-1.8-0.7-3.5-1.6-5-2.7c-0.1-0.5-0.4-0.9-0.8-1.3c-0.2-0.2-0.4-0.3-0.7-0.4c-0.1-0.2-0.2-0.4-0.3-0.6c-0.1-0.1-0.2-0.3-0.3-0.4 c-0.8-2-1.2-4.1-1.2-6.2c0-2,1.9-5.1,4.4-5.4c0.2,0,0.5-0.1,0.7-0.2c0.2,0,0.4-0.1,0.7-0.1c0.8,0,1.6,0.3,2.3,0.7 c1.3,0.9,2.1,2.3,2.3,3.8c0.1,1.3,1.2,2.2,2.4,2.3c0.1,0,0.1,0,0.2,0c1.3-0.1,2.3-1.3,2.2-2.6c-0.3-3-1.9-5.8-4.4-7.5 c-1.4-0.9-3-1.5-4.6-1.6c-0.1-2,0.4-4.2,1.7-5.3c0.9-0.7,1.9-1.3,3-1.6c0.2-0.1,0.5-0.2,0.7-0.3c0.5,0.2,1.1,0.3,1.6,0.1 c0.5-0.2,1-0.2,1.6-0.2c1.4,0,2.7,0.6,3.8,1.5c2.5,2.1,3.8,5.2,3.6,8.4c-0.1,1.1-0.3,2.1-0.6,3.1c-0.6,2.6-1.3,5.5-0.2,8.4 c1.5,3.7,5.1,6.2,9.1,6.4c0.6,0,1.3-0.1,1.9-0.2c0.1,0,0.2,0,0.3-0.1c1-0.1,2-0.7,2.5-1.6c0.8-1.1,0.5-2.6-0.6-3.4 c-0.4-0.3-0.9-0.5-1.4-0.5c-0.6,0-1.3,0.3-1.7,0.7c-0.1,0-0.2,0-0.2,0.1c-0.2,0.1-0.5,0.1-0.7,0.1c-2-0.2-3.8-1.4-4.6-3.2 c-0.6-1.6-0.1-3.5,0.4-5.5c0.3-1.3,0.6-2.6,0.7-3.9c0.3-4.8-1.7-9.5-5.4-12.6c-1.2-1-2.5-1.7-4-2.1c0.6-1.6,1.8-2.8,3.4-3.3 c1-0.2,2-0.4,3-0.4c0.1,0,0.1,0,0.2,0c0.1,1.6,0.5,3.1,1.1,4.5c0.6,1.2,2.1,1.7,3.3,1.1c1.2-0.6,1.7-2.1,1.1-3.3c0,0,0-0.1-0.1-0.1 c-0.4-1-0.6-2-0.6-3.1c0.1-0.2,0.2-0.5,0.2-0.7c0,0,0-0.1,0-0.1c0.2-0.4,0.3-0.8,0.3-1.3c0.8-2,2.7-3.4,4.9-3.4h1 c2.2,0,4.1,1.4,4.9,3.5c0,0.1,0,0.3,0.1,0.4c0.1,0.4,0.2,0.9,0.3,1.4c0,0,0,0.1,0,0.1v2.4c-0.1,1.8-1,3.4-2.4,4.5 c-1.5,1.4-3.5,2.3-5.6,2.4c-0.4,0-0.9-0.1-1.3-0.2c-1.3-0.4-2.7,0.3-3.1,1.5c-0.4,1.3,0.3,2.7,1.5,3.1c0,0,0.1,0,0.1,0 c0.9,0.3,1.9,0.4,2.8,0.4c2.9,0,5.7-1,8-2.9v60.9c0,0.3,0,0.6-0.1,0.9c-0.1,0.1-0.2,0.3-0.2,0.4c-0.2,0.4-0.5,0.8-0.9,0.9 c-0.8,0.3-1.8,0.2-2.6-0.1c-1.5-0.8-1.9-1.6-1.9-4.6c0-1.3-1.1-2.4-2.5-2.4c-1.3,0-2.4,1.1-2.4,2.4c0,3.4,0.4,6.8,4.6,8.9 c0.5,0.2,1,0.4,1.5,0.6c-2.1,1-4.3,1.5-6.6,1.5c-0.7,0-1.4,0-2-0.1c-2.3-0.3-4.4-1.6-5.8-3.4c-0.8-1.3-1.4-2.8-1.7-4.3 c-0.1-0.4-0.2-0.8-0.3-1.3c-0.1-1.7,0.3-3.4,1.2-4.9c1.4-2.4,2.9-2.7,6.6-3.4l0.1,0c1.2-0.2,2.1-1.3,2-2.5c0.6,0,1.2-0.3,1.6-0.7 c2.6-2.5,3.7-6.9,2.9-10.8c-0.6-3.1-2.8-5.7-5.9-6.8c-1.3-0.4-2.7,0.3-3.1,1.5c-0.4,1.3,0.3,2.7,1.5,3.1c1.4,0.5,2.4,1.8,2.7,3.2 c0.5,2.2,0,4.5-1.5,6.2c-0.5,0.4-0.7,1.1-0.7,1.7c0,0.1,0,0.1,0,0.2c-0.1,0-0.2,0-0.3,0l-0.1,0c-3.8,0.7-7.5,1.3-10,5.8 c-0.9,1.6-1.5,3.4-1.8,5.2c-1.6-0.2-3-0.9-4.2-1.9c-1.9-1.6-1.2-4.5-0.4-6.6c0.5-1.2-0.1-2.7-1.3-3.2c-0.2-0.1-0.4-0.1-0.7-0.2 c-2.7-0.3-6.8-3.2-7.8-5.1c-2-3.8-1.9-8.3,0.3-12c1.7,1.1,3.4,2,5.3,2.7l0.4,0.2c0.3,0.1,0.6,0.2,1,0.2c1.3,0,2.4-1.1,2.4-2.4 C26.1,61.1,25.6,60.2,24.7,59.9"></path>
								<path d="M104.9,28.5c-1.6-1.4-3.6-2.4-5.7-2.8c-0.6-0.1-1.1-0.2-1.7-0.2c-1.4-4.5-5.3-9.2-10.2-9.2 c-1,0-2.1,0.1-3.1,0.3c-0.5-1.2-1.3-2.3-2.3-3.2c-1.9-1.8-4.3-2.8-6.9-2.9h-1c-5.5,0-9.9,4.9-9.9,10.4v72.2c0,1.5,0.3,3,0.9,4.4 c2,6.6,8.9,9,14.7,9c0.9,0,1.8-0.1,2.7-0.2c3.6-0.5,6.9-2.4,9.1-5.3c1.3-1.7,2.2-3.7,2.8-5.7c2.8-0.1,5.5-1.2,7.6-3 c2.6-2.2,3.5-5.8,2.6-10c0.3-0.1,0.6-0.3,0.8-0.5c2.8-1.1,5.2-3.1,6.7-5.8c3.1-6,3.2-12.6,0.2-17.8c2.2-2.6,3.4-6,3.3-9.5 c0-1.2-0.2-2.3-0.5-3.4c-0.3-0.9-1.1-1.6-2-1.7c0.3-0.9,0.1-1.9-0.5-2.6c-1.1-1.1-2.5-2-4-2.6C109,34.8,107.7,31,104.9,28.5  M109,44.5c0.4,0.4,0.9,0.6,1.4,0.7c-0.2,0.5-0.2,1.1-0.1,1.6c0.2,0.6,0.3,1.3,0.3,2c0.1,2.1-0.5,4.2-1.8,5.9 c-1.5-1.6-3.3-2.9-5.3-3.9l-0.1,0c-0.1-0.1-0.3-0.1-0.4-0.2c-3.2-1.7-6.8-2.6-10.4-2.5c-1.2,0-2.2,0.9-2.4,2.1 c-0.5-1.1-1.8-1.6-2.9-1.3c-1.5,0.5-2.8,1.1-4.1,1.9c0-0.2-0.1-0.3-0.2-0.5c-0.3-0.6-0.8-1-1.4-1.2c-3.1-1-4.1-3.1-3.1-6.2 c0.4-1.3-0.2-2.7-1.5-3.1c-1.3-0.4-2.7,0.2-3.1,1.5c0,0,0,0,0,0.1c-1.8,5.6,0.5,10.3,6,12.3c-2.6,2.7-3.7,6.5-2.9,10.2 c0.5,2,1.6,3.8,3.1,5.2c1,0.9,2.5,0.9,3.5-0.1c0.9-1,0.9-2.5-0.1-3.4c-0.8-0.7-1.4-1.6-1.7-2.7c-0.6-2.7,0.7-5.4,3.4-7.4 c1.1-0.8,2.4-1.5,3.7-1.9c0.9-0.3,1.6-1.1,1.7-2.1c0.4,0.8,1.3,1.4,2.2,1.3h0.1c2.8,0,5.5,0.7,7.9,2c0.2,0.1,0.3,0.2,0.5,0.3 c1.5,0.8,4.3,2.2,7.2,7.1c0.1,0.2,0.3,0.4,0.5,0.6c1,3.7,0.6,7.6-1.3,11c-1.4,2.3-3.9,3.8-6.6,4.1c-0.3,0-0.6,0.1-0.9,0.3 c-0.6-0.1-1.2-0.2-1.8-0.5c-1.6-0.6-2.9-2-3.2-3.8c-0.2-1.3-1.4-2.3-2.7-2.2c-0.6,0.1-1.2,0.4-1.6,0.9c-0.4,0.5-0.6,1.2-0.5,1.8 c0.5,3.5,2.9,6.4,6.1,7.7c1,0.5,2.1,0.8,3.2,0.9c0.5,2.1,0.4,4.4-0.9,5.5c-1.1,0.9-2.3,1.6-3.7,1.9c-0.3-3-1.5-5.8-3.4-8.2 c-2.6-3.1-6-4.2-9.2-5.3l-0.1,0l-0.9-0.3c-1.3-0.5-2.7,0.2-3.1,1.4c-0.5,1.3,0.2,2.7,1.4,3.1c0,0,0.1,0,0.1,0 c0.4,0.1,0.7,0.2,1.1,0.4l0.1,0c2.8,0.9,5.3,1.8,7,3.8c1.4,1.7,2.6,5,2.2,6.2l0,0c0,0,0,0,0,0c0,0.1,0,0.2-0.1,0.3c0,0,0,0,0,0.1 c0,0.1,0,0.2,0,0.3c-0.3,2.1-1.1,4.1-2.4,5.9c-1.4,1.9-3.5,3.1-5.8,3.4c-0.3,0-0.7,0.1-1.1,0.1c-0.2-0.1-0.5-0.1-0.7-0.1 c-0.1,0-0.3,0-0.4,0c-0.3,0-0.6,0.1-0.8,0.1c-1.4,0-2.7-0.7-3.4-1.8c-1.4-1.9-1.6-4.4-0.7-6.5c0.8-1.5,2.4-2.4,4.1-2.2 c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4l0,0c-3.9,0-6.9,1.7-8.5,4.9c-0.6,1.3-0.9,2.8-0.9,4.2c-0.2-0.7-0.3-1.4-0.3-2.2V20.9 c0-2.9,2-5.4,4.9-5.4h1c1.3,0,2.6,0.6,3.6,1.5c0.4,0.4,0.8,0.8,1.1,1.3c0,0.2,0.1,0.4,0.1,0.7c0,0.1,0,0.2,0,0.2 c-1.4,1.4-2.2,3.2-2.2,5.1c-0.2,3.6,2.2,6.8,5.7,7.7c0.2,0.1,0.5,0.1,0.7,0.1c1.3,0,2.4-1.1,2.4-2.4c0-1.1-0.7-2-1.8-2.3 c-1.3-0.3-2.2-1.5-2.1-2.8c-0.1-1,0.5-1.9,1.5-2.2c0.6-0.1,1.2-0.5,1.6-1.1c0.6-0.1,1.2-0.2,1.8-0.2c2.6,0,5,3.5,5.6,6 c-0.1,0.2-0.1,0.5-0.2,0.7c0,0.4,0.1,0.8,0.3,1.2c-0.2,1.9-0.8,4.9-2.8,6.6c-0.8,0.7-1.9,1.1-3,1.1c-0.2,0-0.4,0-0.7-0.1 c-0.8-0.2-1.5-0.7-1.9-1.4c-0.6-1.2-2.1-1.7-3.3-1.1c-1.2,0.6-1.7,2.1-1.1,3.3c0,0,0,0.1,0,0.1c1.1,2,3,3.5,5.2,3.9 c0.5,0.1,1.1,0.2,1.6,0.2c2.2,0,4.4-0.8,6.1-2.3c3-2.5,4.1-6.4,4.5-9.1c0.1,0,0.3,0,0.4,0.1c1.3,0.3,2.5,0.9,3.5,1.7 c1.7,1.5,2.8,4.6,1.6,6.9c-0.6,1.2-0.1,2.7,1.1,3.3c0.3,0.1,0.5,0.2,0.8,0.3C106.6,42.8,108,43.5,109,44.5"></path>
								<path d="M27.5,65.7c1.9,0.8,3.4,2.3,4.1,4.3c0.7,2.1,0.3,4.6-1.1,7.2c-0.6,1.2-0.2,2.7,1,3.3c0,0,0,0,0,0 c0.4,0.2,0.7,0.3,1.1,0.3c0.9,0,1.7-0.5,2.2-1.3c2-3.8,2.5-7.7,1.4-11.1c-1.1-3.2-3.5-5.8-6.7-7.1c-1.2-0.6-2.7,0-3.2,1.2 C25.8,63.7,26.4,65.1,27.5,65.7"></path>
							</svg>

							<div className=" flex h-auto w-fit flex-col gap-3 text-center sm:text-left ">
								<div className="text-[26px]  font-semibold leading-[34.8px]  text-secondary sm:text-[30px]  ">
									Expert Developer
								</div>
								<div className="">
									<p>
										Skilled in diverse coding languages, we transform concepts
										into responsive websites.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className=" w-full sm:w-fit">
						<div className=" banner1 group mx-auto flex h-full max-w-[28rem] flex-col gap-5 p-[25px] text-white sm:flex-row sm:gap-6 ">
							<svg
								className=" mx-auto h-fit w-[110px]  fill-primary group-hover:animate-wiggle sm:w-[130px]"
								viewBox="0 0 110 126"
								x="0px"
								y="0px"
							>
								<path d="M42.8,89.4c-0.6,0.9-0.4,2.2,0.5,2.8c0.3,0.2,0.7,0.3,1.1,0.3c0.1,0,0.3,0,0.4,0l16.9-3.3 c1.1-0.2,1.8-1.3,1.6-2.4c0,0,0,0,0,0c-0.2-1.1-1.3-1.8-2.4-1.6l-16.9,3.3C43.6,88.7,43.1,89,42.8,89.4"></path>
								<path d="M63.6,95.7c0.6-0.9,0.4-2.2-0.5-2.8c-0.4-0.3-1-0.4-1.5-0.3l-16.9,3.3c-1.1,0.2-1.8,1.2-1.7,2.3 c0.2,1.1,1.2,1.8,2.3,1.7c0,0,0.1,0,0.1,0l0.4-0.1c0.6,4.3,4.6,7.3,8.9,6.6c3.9-0.6,6.7-3.9,6.7-7.8c0-0.6-0.1-1.1-0.2-1.7 c0-0.1,0-0.2-0.1-0.2l1.1-0.2C62.8,96.5,63.3,96.1,63.6,95.7 M53.6,102.5c-2,0-3.6-1.5-3.8-3.5l7.4-1.5c0,0.1,0,0.2,0,0.3 c0.4,2.1-0.9,4.1-2.9,4.5C54.1,102.4,53.8,102.5,53.6,102.5"></path>
								<path d="M26.6,36L18,31.1c-1-0.5-2.2-0.2-2.8,0.8c-0.6,1-0.2,2.2,0.7,2.8c0,0,0,0,0,0l8.6,4.9 c1,0.5,2.2,0.1,2.7-0.9C27.8,37.7,27.5,36.5,26.6,36"></path>
								<path d="M10.5,52.5c0,1,0.8,1.8,1.8,1.8c0.1,0,0.1,0,0.2,0l9.9,0.1h0c1,0.1,1.9-0.6,2-1.6c0,0,0-0.1,0-0.1 c0-1.1-0.8-1.9-1.9-2c0,0-0.1,0-0.1,0l-9.9-0.2C11.4,50.5,10.5,51.4,10.5,52.5"></path>
								<path d="M25.4,64.6l-8.9,4.2c-1,0.5-1.4,1.7-1,2.7c0.3,0.7,1,1.2,1.8,1.2c0.3,0,0.6-0.1,0.9-0.2l8.9-4.2 c1-0.5,1.4-1.7,1-2.7C27.6,64.6,26.4,64.1,25.4,64.6"></path>
								<path d="M88.2,27.5c-0.6-0.9-1.8-1.3-2.8-0.7l-8.6,4.9c-1,0.5-1.4,1.7-0.8,2.7c0.5,1,1.7,1.4,2.7,0.8 c0,0,0.1,0,0.1-0.1l8.6-4.9C88.4,29.7,88.8,28.4,88.2,27.5"></path>
								<path d="M93.1,45.2l-9.9,0c-1.1,0-2,0.9-2,2c0,0,0,0,0,0c0,1.1,0.9,2,2,2h0.3v-0.1l9.7,0c0.5,0,1-0.2,1.3-0.6 c0.4-0.4,0.6-0.9,0.5-1.4C95.1,46.1,94.2,45.2,93.1,45.2"></path>
								<path d="M89.7,65.5l-8.9-4.2c-1-0.5-2.2,0-2.7,1c-0.5,1,0,2.2,1,2.7c0,0,0,0,0,0l8.9,4.2c0.3,0.1,0.6,0.2,0.9,0.2 c0.8,0,1.5-0.5,1.8-1.2C91.1,67.2,90.7,66,89.7,65.5"></path>
								<path d="M37.9,28.9c1.1,0,2-0.9,2-2c0-0.4-0.1-0.7-0.3-1l-5.1-8.5c-0.6-0.9-1.8-1.2-2.8-0.7c-1,0.6-1.3,1.8-0.7,2.8 c0,0,0,0,0,0l5.1,8.5C36.5,28.5,37.2,28.9,37.9,28.9"></path>
								<path d="M51.3,24.4L51.3,24.4c1.2-0.1,2.1-1,2-2.1l-0.5-9.9c-0.1-1.1-0.9-1.9-2-1.9h-0.1c-1.1,0.1-2,1-1.9,2.1 c0,0,0,0,0,0l0.5,9.9C49.3,23.6,50.2,24.4,51.3,24.4"></path>
								<path d="M65.1,26.3c1,0.5,2.2,0,2.7-1l4.1-9c0.5-1,0-2.2-1-2.7c0,0,0,0,0,0c-1-0.4-2.2,0-2.7,1l-4.1,9 C63.7,24.6,64.1,25.8,65.1,26.3"></path>
								<path d="M59.9,64.6c-0.8,0.5-1,1.5-0.5,2.3c0.5,0.8,1.5,1,2.3,0.6c5-2.9,8.3-9.7,7.6-15.3c0-0.3-0.1-0.7-0.2-1 c-0.2-0.9-1-1.5-2-1.4c-0.9,0.2-1.5,1-1.4,1.9c0.1,0.3,0.1,0.6,0.1,0.8C66.4,57,63.7,62.3,59.9,64.6"></path>
								<path d="M64.9,46.9c0.9,0,1.7-0.8,1.7-1.7c0-0.3-0.1-0.7-0.3-0.9c-0.7-1-1.6-1.6-2.8-0.6c0,0,0,0,0,0 c-0.9,0.8-0.5,1.6,0.1,2.5C63.9,46.7,64.4,46.9,64.9,46.9"></path>
								<path d="M39.7,75.3c0,0,0,0.1,0,0.1c0.5,1.4,1.7,7.6,2.1,9.6c0.2,1,1,1.6,2,1.6c0.1,0,0.3,0,0.4,0 c1.1-0.2,1.8-1.3,1.6-2.4c0,0,0,0,0,0c-0.2-0.8-1.9-8.2-2.5-10.1c-0.1-0.4-0.2-0.8-1-1l0,0c0-0.5-0.2-1-0.6-1.2 c-6.3-3.8-10.1-10.6-10-17.9c0-11.6,9.3-20.9,20.9-20.9s20.9,9.3,20.9,20.9c0,7-3.5,13.6-9.4,17.5c-0.4,0.3-0.7,0.7-0.8,1.2 c-0.3,0.3-0.5,0.6-0.7,1c-0.5,1.9-1.6,6.1-1.7,6.1c-0.3,1.1,0.4,2.2,1.5,2.5c0.2,0,0.3,0.1,0.5,0.1c0.9,0,1.7-0.6,2-1.5 c0,0,1.1-4.2,1.6-6c0,0,0-0.1,0-0.1c11.4-7.6,14.5-23.1,6.9-34.5s-23.1-14.5-34.5-6.9s-14.5,23.1-6.9,34.5 C33.9,70.8,36.6,73.4,39.7,75.3"></path>
							</svg>

							<div className=" flex h-auto w-fit flex-col gap-3 text-center sm:text-left ">
								<div className="mx-auto text-[26px] font-semibold leading-[34.8px]  text-secondary sm:text-[30px] ">
									Innovative Design
								</div>
								<div className="">
									<p>
										Comprehensive strategies boosting online visibility,
										engagement, and measurable results.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
		</section>
	);
};

export default Banner;
