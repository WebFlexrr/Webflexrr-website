"use client";
import React, { type FC } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

interface ServiceSectionProps {
	data: getAllServices[];
}

const ServiceSection: FC<ServiceSectionProps> = ({ data }) => {
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		gsap.from(".servicesSections", {
			y: 100,
			opacity: 0,
			stagger: 0.3,
			duration: 1,
			ease: "power3.inout",
			scrollTrigger: {
				trigger: ".services",
				scroller: ".main",
				start: "13% 80%",
			},
		});
		// gsap.from('.servicesItem', {
		// 	y: 20,
		// 	opacity: 0,
		// 	stagger: {
		// 		each: 0.2,
		// 		from: 'random',
		// 	},
		// 	duration: 1,

		// 	ease: 'power3.inout',
		// 	scrollTrigger: {
		// 		trigger: '.services',
		// 		scroller: 'main',
		// 		start: '40% 80%',
		// 		markers: true,
		// 	},
		// });
	});

	return (
		<section className="servicesSections flex h-auto  w-full justify-center  xl:mt-7 ">
			{/* <section className=" grid h-full w-fit grid-cols-3 flex-col justify-center gap-2  border-tertiary text-secondary  md:flex-row  md:flex-wrap lg:gap-10 ">
				{data.map((item) => (
					<ServiceSectionItem
						key={item._id}
						name={item.name}
						slug={item.slug}
						description={item.description}
						image={item.image}
					/>
				))}
			</section> */}
			<div className="grid max-w-7xl grid-cols-12 grid-rows-2 gap-7 px-8">
				<Card
					isFooterBlurred
					radius="lg"
					isPressable
					className="servicesItem col-span-12 h-[300px] hover:drop-shadow-2xl hover:transition-all hover:duration-400 hover:ease-in-out sm:col-span-4"
				>
					<Image
						removeWrapper
						alt="Woman listing to music"
						className="z-0 h-full w-full object-cover"
						src="/assets/web-design-2.jpg"
					/>
					<CardFooter className="absolute bottom-1 z-10 mb-1.5 ml-1 w-[calc(100%_-_8px)] justify-center overflow-hidden rounded-large border-2 border-white/20  p-2  shadow-small before:rounded-xl before:bg-white/10">
						<p className="text-xl font-semibold text-white">
							Web App Development
						</p>
					</CardFooter>
				</Card>
				<Card
					isFooterBlurred
					radius="lg"
					isPressable
					className="servicesItem col-span-12 h-[300px] hover:drop-shadow-2xl hover:transition-all hover:duration-400 hover:ease-in-out sm:col-span-4"
				>
					<Image
						removeWrapper
						alt="Woman listing to music"
						className="z-0 h-full w-full object-cover"
						src="/assets/phone.jpg"
					/>
					<CardFooter className="absolute bottom-1 z-10 mb-1.5 ml-1 w-[calc(100%_-_8px)] justify-center overflow-hidden rounded-large border-2 border-white/20 p-2 shadow-small before:rounded-xl before:bg-white/10">
						<p className="text-xl font-semibold text-white">
							Mobile App Development
						</p>
						{/* <Button
							className="bg-black/20 text-tiny text-white"
							variant="flat"
							color="default"
							radius="lg"
							size="sm"
						>
							Notify me
						</Button> */}
					</CardFooter>
				</Card>
				<Card
					isFooterBlurred
					radius="lg"
					isPressable
					className="servicesItem col-span-12 h-[300px] hover:drop-shadow-2xl hover:transition-all hover:duration-400 hover:ease-in-out sm:col-span-4"
				>
					<Image
						removeWrapper
						alt="Woman listing to music"
						className="z-0h-full w-full object-cover"
						src="/assets/seo.png"
					/>
					<CardFooter className="absolute bottom-1 z-10 mb-1.5 ml-1 w-[calc(100%_-_8px)] justify-center overflow-hidden rounded-large border-2 border-white/20 p-2 shadow-small before:rounded-xl before:bg-white/10">
						<p className="text-xl font-semibold text-black">
							Search Engine Optimization
						</p>
					</CardFooter>
				</Card>
				<Card
					isFooterBlurred
					radius="lg"
					isPressable
					className="servicesItem col-span-12 h-[300px] w-full hover:drop-shadow-2xl hover:transition-all hover:duration-400 hover:ease-in-out sm:col-span-5"
				>
					<CardHeader className="absolute top-1 z-10 flex-col items-start">
						<p className="text-tiny font-bold uppercase text-white/60">New</p>
						<h4 className="text-2xl font-medium text-white">Acme camera</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Card example background"
						className="z-0 h-full w-full -translate-y-6 scale-125 bg-black object-cover"
						src="/assets/web.jpg"
					/>
					<CardFooter className="absolute bottom-1 z-10 mb-1.5 ml-1 w-[calc(100%_-_8px)] justify-center overflow-hidden rounded-large border-2 border-white/20  p-3  shadow-small before:rounded-xl before:bg-white/10">
						<p className="text-xl font-semibold text-white">
							Scalable Software Development
						</p>
						{/* <Button
							className="bg-black/20 text-tiny text-white"
							variant="flat"
							color="default"
							radius="lg"
							size="sm"
						>
							Notify me
						</Button> */}
					</CardFooter>
				</Card>
				{/* <Card
					isFooterBlurred
					className="col-span-12 h-[300px] w-full sm:col-span-5"
				>
					<CardHeader className="absolute top-1 z-10 flex-col items-start">
						<p className="text-tiny font-bold uppercase text-white/60">New</p>
						<h4 className="text-2xl font-medium text-white">Acme camera</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Card example background"
						className="z-0 h-full w-full -translate-y-6 scale-125 bg-black object-cover"
						src="/assets/web-4x3.png"
					/>
					<CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
						<div>
							<p className="text-tiny text-black">Available soon.</p>
							<p className="text-tiny text-black">Get notified.</p>
						</div>
						<Button
							className="text-tiny"
							color="primary"
							radius="full"
							size="sm"
						>
							Notify Me
						</Button>
					</CardFooter>
				</Card> */}
				<Card
					isFooterBlurred
					className="servicesItem col-span-12 h-[300px] w-full sm:col-span-7"
				>
					<CardHeader className="absolute top-1 z-10 flex-col items-start">
						<p className="text-tiny font-bold uppercase text-white/60">
							Your day your way
						</p>
						<h4 className="text-xl font-medium text-white/90">
							Your checklist for better sleep
						</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Relaxing app background"
						className="z-0 h-full w-full object-cover"
						src="/images/card-example-5.jpeg"
					/>
					<CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/40 dark:border-default-100">
						<div className="flex flex-grow items-center gap-2">
							<Image
								alt="Breathing app icon"
								className="h-11 w-10 rounded-full bg-black"
								src="/images/breathing-app-icon.jpeg"
							/>
							<div className="flex flex-col">
								<p className="text-tiny text-white/60">Breathing App</p>
								<p className="text-tiny text-white/60">
									Get a good night's sleep.
								</p>
							</div>
						</div>
						<Button radius="full" size="sm">
							Get App
						</Button>
					</CardFooter>
				</Card>
			</div>
		</section>
	);
};

export default ServiceSection;
