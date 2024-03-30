'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import React, { type FC, useRef } from 'react';
import PulseCircle from '../PulseCircle';
import { useGSAP } from '@gsap/react';

interface GalleryContentSectionProps {
	projects: getAllProjects[];
}

const GalleryContentSection: FC<GalleryContentSectionProps> = ({
	projects,
}) => {
	const gallerySection2 = useRef<HTMLDivElement>(null);
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		gsap.from('.galleryContent', {
			y: 100,
			duration: 1,
			opacity: 0,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '.gallery',
				scroller: 'main',
				start: '7% 80%',
			},
		});
		gsap.from('.galleryContent1', {
			x: -100,
			duration: 1,
			opacity: 0,
			scrollTrigger: {
				trigger: '.gallery',
				scroller: 'main',
				start: 'top 80%',
			},
			ease: 'power2.out',
		});
		gsap.from('.galleryContent2', {
			x: 100,
			duration: 1,
			opacity: 0,
			scrollTrigger: {
				trigger: '.gallery',
				scroller: 'main',
				start: 'top 80%',
			},
			ease: 'power2.out',
		});
	});

	return (
		<section className="galleryContent h-auto w-full">
			<section className="flex h-full w-full flex-col gap-5 ">
				<section className=" flex h-fit w-full flex-col gap-5 sm:flex-row  sm:flex-wrap md:justify-evenly xl:h-[30rem]  xl:flex-nowrap">
					<div className="group relative h-[24rem]  w-full   md:w-[45%] xl:h-full xl:w-[25%] ">
						<Image
							src={'/assets/catalogue-mockup.jpg'}
							width={'2000'}
							height={'0'}
							alt=""
							className=" h-full w-full  object-cover  xl:h-full"
						/>
						<div className="absolute -bottom-1 flex h-auto w-full translate-y-[1rem] flex-col justify-start gap-5 bg-white  bg-opacity-50  bg-clip-padding p-10 text-left opacity-0 backdrop-blur-xl backdrop-filter transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
							<Link
								href={'/projects'}
								className="translate-y-[1rem] text-left text-[30px] font-bold leading-[41.76px] text-secondary transition duration-500 ease-in-out hover:text-primary group-hover:translate-y-0 md:text-[36px]"
							>
								Catalogue Design
							</Link>
							<p className="translate-y-[1rem] text-secondary transition duration-700 ease-in-out group-hover:translate-y-0">
								A Catalogue Design shows your product Inventory.
							</p>
							<section className="flex w-full justify-start">
								<Link
									href={'/projects'}
									className="flex gap-3 text-secondary transition duration-500 ease-in-out hover:text-primary"
								>
									<PulseCircle />
									Read more
								</Link>
							</section>
						</div>
					</div>
					<div className=" group relative h-[24rem] w-full md:w-[50%] xl:h-full xl:w-[50%]">
						<Image
							src={'/assets/portfolio-website.jpg'}
							width={'2000'}
							height={'0'}
							alt=""
							className="h-full w-full object-cover  xl:h-full"
						/>
						<div className="absolute -bottom-1 flex h-auto w-full translate-y-[1rem] flex-col justify-start gap-5 bg-white  bg-opacity-50  bg-clip-padding p-10 text-left opacity-0 backdrop-blur-xl backdrop-filter transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
							<Link
								href={'/projects'}
								className="translate-y-[1rem] text-left text-[30px] font-bold leading-[41.76px] text-secondary transition duration-500 ease-in-out hover:text-primary group-hover:translate-y-0 md:text-[36px]"
							>
								Portfolio Website
							</Link>
							<p className="translate-y-[1rem] text-secondary transition duration-700 ease-in-out group-hover:translate-y-0">
								Your portfolio website presents our professional works in a
								better way.
							</p>
							<section className="flex w-full justify-start">
								<Link
									href={'/projects'}
									className="flex gap-3 text-secondary transition duration-500 ease-in-out hover:text-primary"
								>
									<PulseCircle />
									Read more
								</Link>
							</section>
						</div>
					</div>
					<div className=" group relative h-[24rem] w-full md:w-1/2 xl:h-full xl:w-[25%]">
						<Image
							src={'/assets/business-card.png'}
							width={'2000'}
							height={'0'}
							alt=""
							className="h-full w-full  object-cover xl:h-full"
						/>
						<div className="absolute -bottom-1 flex h-auto w-full translate-y-[1rem] flex-col justify-start gap-5 bg-white  bg-opacity-50  bg-clip-padding p-10 text-left opacity-0 backdrop-blur-xl backdrop-filter transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
							<Link
								href={'/projects'}
								className="translate-y-[1rem] text-left text-[30px] font-bold leading-[41.76px] text-secondary transition duration-500 ease-in-out hover:text-primary group-hover:translate-y-0 md:text-[36px]"
							>
								Business Card
							</Link>
							<p className="translate-y-[1rem] text-secondary transition duration-700 ease-in-out group-hover:translate-y-0">
								It helps you to connects with clients in non Digital form.
							</p>
							<section className="flex w-full justify-start">
								<Link
									href={'/projects'}
									className="flex gap-3 text-secondary transition duration-500 ease-in-out hover:text-primary"
								>
									<PulseCircle />
									Read more
								</Link>
							</section>
						</div>
					</div>
				</section>
				<section
					ref={gallerySection2}
					className=" relative flex w-full flex-col gap-5 md:gap-5 xl:h-[30rem] xl:flex-row xl:gap-0"
				>
					<div className=" galleryContent1 relative my-8 flex h-96 w-full items-center justify-center  bg-background lg:h-full xl:my-0 xl:w-1/2">
						<div className="flex h-auto w-full flex-col  gap-10 px-6 xl:max-w-lg">
							<h2 className="-z-10 text-left  text-[50px] before:absolute before:-z-20 before:h-24 before:w-24 before:rounded-full before:bg-primary before:content-['']">
								All Projects
							</h2>
							<span>
								<p className="text-left text-secondary">
									Explore our portfolio, a testament to our mastery in web
									design, development, SEO, digital marketing, and compelling
									content creation. Each project showcases innovation and
									results-driven solutions.
								</p>
							</span>
							<Link
								href={'/projects'}
								className="flex items-center gap-2 text-secondary transition duration-500 ease-in-out hover:text-primary"
							>
								<PulseCircle /> View All
							</Link>
						</div>
					</div>
					<section className="galleryContent2 flex w-full flex-wrap gap-5 md:flex-nowrap xl:w-1/2  ">
						<div className="group relative aspect-square  w-full md:w-1/2 xl:h-full ">
							<Image
								src={'/assets/logo.png'}
								width={'2000'}
								height={'0'}
								alt=""
								className="h-full  w-full  bg-white object-cover xl:h-full"
							/>
							<div className="absolute -bottom-1 flex h-auto w-full translate-y-[1rem] flex-col justify-start gap-5 bg-white  bg-opacity-50  bg-clip-padding p-10 text-left opacity-0 backdrop-blur-xl backdrop-filter transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
								<Link
									href={'/projects'}
									className="translate-y-[1rem] text-left text-[30px] font-bold leading-[41.76px] text-secondary transition duration-500 ease-in-out hover:text-primary group-hover:translate-y-0 md:text-[36px]"
								>
									Logo Design
								</Link>
								<p className="translate-y-[1rem] text-secondary transition duration-700 ease-in-out group-hover:translate-y-0">
									A logo makes your brands know to all like &quot;TATA with
									their Iconic Logo&quot;.
								</p>
								<section className="flex w-full justify-start">
									<Link
										href={'/projects'}
										className="flex gap-3 text-secondary transition duration-500 ease-in-out hover:text-primary"
									>
										<PulseCircle />
										Read more
									</Link>
								</section>
							</div>
						</div>
						<div className="group relative aspect-square  w-full md:w-1/2 xl:h-full ">
							<Image
								src={'/assets/poster.jpg'}
								width={'2000'}
								height={'0'}
								alt=""
								className="object-container  h-full  w-full bg-white xl:h-full"
							/>
							<div className="absolute -bottom-1 flex h-auto w-full translate-y-[1rem] flex-col justify-start gap-5 bg-white  bg-opacity-50  bg-clip-padding p-10 text-left opacity-0 backdrop-blur-xl backdrop-filter transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
								<Link
									href={'/projects'}
									className="translate-y-[1rem] text-left text-[30px] font-bold leading-[41.76px] text-secondary transition duration-500 ease-in-out hover:text-primary group-hover:translate-y-0 md:text-[36px]"
								>
									Poster Design
								</Link>
								<p className="translate-y-[1rem] text-secondary transition duration-700 ease-in-out group-hover:translate-y-0">
									To put your offer to your client, I think you need a poster
									after all.
								</p>
								<section className="flex w-full justify-start">
									<Link
										href={'/projects'}
										className="flex gap-3 text-secondary transition duration-500 ease-in-out hover:text-primary"
									>
										<PulseCircle />
										Read more
									</Link>
								</section>
							</div>
						</div>
					</section>
				</section>
			</section>
		</section>
	);
};

export default GalleryContentSection;
