'use client';
import React, { useRef } from 'react';
import { RiTwitterXLine } from 'react-icons/ri';
import { SlSocialInstagram, SlSocialFacebook } from 'react-icons/sl';
import { FaLinkedinIn } from 'react-icons/fa';
import { BiPlay } from 'react-icons/bi';
import Image from 'next/image';
import PulseCircle from '../../Ui/PulseCircle';
import gsap from 'gsap';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';

const Hero = (): React.JSX.Element => {
	const hero = useRef<HTMLDivElement>(null);
	gsap.registerPlugin(useGSAP);
	useGSAP(
		() => {
			gsap.from('.hero1', {
				x: 100,
				opacity: 0,
				duration: 1,
				stagger: 0.3,
				ease: 'circ.inOut',
			});
		},
		{ scope: hero }
	);

	return (
		<section
			ref={hero}
			id={'home'}
			className="relative h-screen w-full pt-16 lg:pt-28"
		>
			<section className="absolute left-0 top-0 h-full w-full bg-[url('/assets/background-home-2.jpg')] bg-cover"></section>

			<section className=" w- mx-auto h-full w-full max-w-[100rem] px-3 sm:px-5 md:px-14 xl:px-20">
				<section className="relative  flex h-fit w-full flex-col-reverse py-10 lg:flex-row xl:py-28">
					{/* left */}
					<section className=" z-10 flex h-full  w-full items-end lg:w-[50%] ">
						<section className=" mt-10 flex h-fit w-full gap-5 sm:gap-8 lg:mt-0 lg:w-[40rem] lg:gap-16 ">
							<section
								id="social"
								className=" flex h-auto w-10 flex-col items-center gap-20 "
							>
								<section className=" animate-visible-from-up ">
									<ul className="flex flex-col gap-12 text-paragraph">
										<li>
											<Link
												href={
													'https://www.facebook.com/profile.php?id=61553639945217'
												}
												target="_blank"
												aria-label="This is Facebook"
											>
												<SlSocialFacebook className="h-[25px] w-[25px] transition duration-500  ease-in-out hover:text-primary sm:h-[30px] sm:w-[30px]" />
											</Link>
										</li>
										<li>
											<Link
												href={'https://www.instagram.com/webflexrr'}
												target="_blank"
												aria-label="This is Instagram"
											>
												<SlSocialInstagram className="h-[25px] w-[25px] transition duration-500  ease-in-out hover:text-primary sm:h-[30px] sm:w-[30px]" />
											</Link>
										</li>
										<li>
											<Link
												href={'https://twitter.com/WebFlexRR'}
												target="_blank"
												aria-label="This is Twitter"
											>
												<RiTwitterXLine className="h-[25px] w-[25px] transition duration-500  ease-in-out hover:text-primary sm:h-[30px] sm:w-[30px]" />
											</Link>
										</li>
										<li>
											<Link
												href={'https://www.linkedin.com/company/webflexrr'}
												target="_blank"
												aria-label="This is Linkedin"
											>
												<FaLinkedinIn className="h-[25px] w-[25px] transition duration-500  ease-in-out hover:text-primary sm:h-[30px] sm:w-[30px]" />
											</Link>
										</li>
									</ul>
								</section>
								<section className="flex h-auto w-full animate-visible-from-down flex-col items-center gap-6 ">
									<PulseCircle flowDirection="bottom" />
									<div className="mt-10 h-fit w-full ">
										<p className=" rotate-[270deg] text-base uppercase tracking-[4px] text-secondary">
											scroll
										</p>
									</div>
								</section>
							</section>
							<section className="  flex h-auto w-full flex-col gap-2 text-white lg:gap-8">
								<div className="hero1 flex h-fit w-full flex-wrap items-center gap-6    ">
									<PulseCircle />
									<span className="text-[20px] font-medium leading-[42.64px] text-secondary sm:text-[26px]">
										WebFlexrr Digital Services
									</span>
								</div>
								<h1 className="hero1 lg:w-[35rem]">
									We Solve Your Problem With Our
									<span className="text-primary"> Best Experts Lead</span>
								</h1>
								<p className="hero1 mt-4 lg:w-[40rem] ">
									Welcome to WebFlexrr, Transforming visions into captivating
									online experiences, our team specializes in cutting-edge web
									design, seamless web development, powerful digital marketing
									strategies, SEO optimization, and compelling content creation.
									Elevate your online presence with our tailored solutions.
								</p>
								<section className=" hero1 mt-9 flex w-full">
									<div className="flex items-center gap-6 text-lg">
										<div className="relative">
											<div className="flex h-14 w-14 items-center justify-center  rounded-full  bg-primary">
												<BiPlay className="h-8 w-8 " />
											</div>
											<div className="absolute bottom-0 left-0 right-0 top-0 -z-10 flex h-14 w-14 animate-ping items-center justify-center  rounded-full  bg-primary">
												<BiPlay className="h-8 w-8 " />
											</div>
										</div>
										<span className="text-secondary">view video</span>
									</div>
								</section>
							</section>
						</section>
					</section>
					{/* right */}
					<section className=" relative flex h-full w-full flex-col items-center justify-center lg:w-[50%]">
						<Image
							src={'/assets/home.png'}
							width={'400'}
							height={'400'}
							alt=""
							priority={true}
							placeholder={'empty'}
							className=" drop-shadow-xl-black w-full  animate-visible-from-left lg:mt-32 xl:mt-20 2xl:mt-0"
						/>
					</section>
				</section>
			</section>
		</section>
	);
};

export default Hero;
