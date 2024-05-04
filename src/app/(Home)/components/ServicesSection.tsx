"use client";
import Heading from "@/components/Heading";
import React from "react";
import { RiWindow2Fill } from "react-icons/ri";
import { IoIosSearch, IoLogoGoogle, IoMdCloudOutline } from "react-icons/io";
import { FaCheckCircle, FaCode } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { FaRocketchat } from "react-icons/fa6";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { IoPieChartSharp } from "react-icons/io5";
import { BsBarChartSteps } from "react-icons/bs";

const Row1 = [
	{
		name: "AWS",
		icon: "/com-logos/Aws.png",
	},
	{
		name: "ReactJs",
		icon: "/com-logos/React.png",
	},
	{
		name: "Tailwind",
		icon: "/com-logos/Tailwind.png",
	},
	{
		name: "Sanity",
		icon: "/com-logos/Sanityicon.png",
	},
	{
		name: "Framer",
		icon: "/com-logos/Framer.png",
	},
	{
		name: "Appwrite",
		icon: "/com-logos/Appwrite.png",
	},
	{
		name: "Redis",
		icon: "/com-logos/Redis.png",
	},
	{
		name: "GraphQL",
		icon: "/com-logos/GraphQL.png",
	},

	{
		name: "Postman",
		icon: "/com-logos/Postman.png",
	},
	{
		name: "Vercel",
		icon: "/com-logos/Vercel.png",
	},
	{
		name: "GraphQL",
		icon: "/com-logos/GraphQL.png",
	},
];
const Row2 = [
	{
		name: "Github",
		icon: "/com-logos/Github.png",
	},

	{
		name: "Framer",
		icon: "/com-logos/Framer.png",
	},
	{
		name: "ReactJs",
		icon: "/com-logos/React.png",
	},
	{
		name: "Tailwind",
		icon: "/com-logos/Tailwind.png",
	},
	{
		name: "Sanity",
		icon: "/com-logos/Sanityicon.png",
	},

	{
		name: "Appwrite",
		icon: "/com-logos/Appwrite.png",
	},

	{
		name: "Postman",
		icon: "/com-logos/Postman.png",
	},
	{
		name: "Vercel",
		icon: "/com-logos/Vercel.png",
	},
	{
		name: "Redis",
		icon: "/com-logos/Redis.png",
	},
	{
		name: "GraphQL",
		icon: "/com-logos/GraphQL.png",
	},
];

const ServicesSection = (): React.JSX.Element => {
	return (
		<section className=" services h-auto w-full " id={"services"}>
			<section className="relative mx-auto flex h-auto w-full max-w-7xl flex-col justify-center gap-24 px-7 py-36 lg:px-0 ">
				<Heading
					heading={"We handle just about everything!"}
					subHeading={
						"We handle everything from design to deployment to get your website shipped and ready to go!"
					}
				/>

				<section
					// ref={scope}
					className="relative mx-auto grid w-full max-w-md grid-cols-1 gap-7 xl:max-w-none xl:grid-cols-3 xl:grid-rows-3"
				>
					{/* First Section */}
					<motion.section
						initial={{
							opacity: 0,
							y: -100,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						viewport={{
							once: true,
							margin: "0px 0px -400px 0px",
						}}
						transition={{ type: "tween", stiffness: 100, duration: 0.5 }}
						// id={"sec1"}

						className="group col-span-2 flex w-full flex-col gap-7 rounded-2xl border shadow-xl lg:gap-20   xl:col-span-2 xl:row-span-1 xl:flex-row xl:gap-0 "
					>
						<section className="flex  h-auto w-full max-w-xs flex-col gap-5 p-5 ">
							<section className="w-full">
								<div className="flex h-8 w-8 items-center justify-center rounded-full border bg-black  ">
									<RiWindow2Fill className="text-lg text-white" />
								</div>
							</section>
							<section className="text-lg font-medium">
								Website Design & Development
							</section>
							<section className="">
								<p className="text-sm">
									We'll build you a website that's so good, it'll make all the
									other websites jealous. Trust me, not kidding.
								</p>
							</section>
						</section>
						<section className=" flex h-full w-full items-end  justify-center gap-6 overflow-hidden pt-16 lg:justify-end">
							<div
								id="mobile"
								className=" mobile border-grey-700  h-[230px] w-[150px] rounded-t-3xl border-4 bg-black from-violet-500 to-fuchsia-500 transition-all ease-soft-spring group-hover:-translate-y-4 group-hover:scale-125 group-hover:bg-gradient-to-r group-hover:pb-[10px] lg:group-hover:translate-y-4 lg:group-hover:scale-125"
							>
								<div className="mx-auto mt-2 flex  w-[40px] justify-end rounded-2xl border border-white bg-gray-300 p-1 transition-all ease-in-out-expo group-hover:w-[80px] group-hover:p-1">
									<div className="h-2 w-2 rounded-full border bg-white"></div>
								</div>
								<div className="mx-auto mt-2 flex h-full w-full text-center text-[12px] text-white">
									<section className="flex  h-full w-9  flex-col gap-2 border-r border-t border-white px-1  py-2">
										<Menu size={"20px"} />
										<FaRocketchat className="text-lg" />
										<HiOutlineChartSquareBar className="text-lg" />
										<IoPieChartSharp className="text-lg" />
									</section>
									<section className="flex h-full w-full flex-col gap-2 border-t border-white p-2">
										<div className="flex aspect-video h-auto w-full items-center justify-start rounded-sm bg-white p-2">
											<IoPieChartSharp className="text-4xl text-red-500" />
											<IoPieChartSharp className="rotate-[50deg] text-4xl text-pink-500" />
										</div>
										<div className="flex aspect-video h-auto w-full items-center justify-start rounded-sm bg-white p-2">
											<BsBarChartSteps className="text-4xl text-red-500" />
										</div>
										<div className="flex  h-auto w-full items-center justify-start rounded-sm bg-white p-2">
											<div className="rounded-lg border-2 border-black px-2 text-xs text-black">
												Upload
											</div>
										</div>
									</section>
								</div>
							</div>
							<div
								id={"Website"}
								className=" hidden h-[230px] w-[300px] rounded pr-5 transition-all ease-soft-spring group-hover:translate-x-6 lg:block "
							>
								<div className="flex h-2 w-full items-center gap-1 rounded-t-md bg-slate-300 px-2">
									<div className="h-[3px] w-[3px] rounded-full bg-red-600"></div>
									<div className="h-[3px] w-[3px] rounded-full bg-yellow-300"></div>
									<div className="h-[3px] w-[3px] rounded-full bg-green-700"></div>
								</div>
								<section className="h-full w-full  border bg-gradient-to-r from-cyan-500 to-blue-500">
									<div className="mx-auto mt-10 w-44 text-center text-base text-white">
										Websites that stand out and make a difference 🚀
									</div>
									<div className="mx-auto mt-3 flex w-44 justify-between text-center text-sm text-white">
										<div className=" rounded-lg border-2 border-pink-400 px-4 py-1 font-semibold">
											Open
										</div>
										<div className=" rounded-lg border-2 border-purple-600 px-4 py-1 font-semibold">
											upload
										</div>
									</div>
								</section>
							</div>
						</section>
					</motion.section>

					{/* Second Section */}
					<motion.section
						initial={{
							opacity: 0,
							x: 100,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						viewport={{
							once: true,
							margin: "0px 0px -300px 0px",
						}}
						transition={{
							type: "tween",
							stiffness: 100,
							delay: 0.5,
							duration: 0.5,
						}}
						// id={"sec2"}
						className=" group relative col-span-2 row-span-1 flex w-full flex-col gap-5 overflow-hidden rounded-2xl border  shadow-xl xl:col-span-1 xl:row-span-2"
					>
						<section className=" flex h-auto w-full flex-col gap-5  px-5 pt-5 ">
							<div className="flex h-8 w-8 items-center justify-center rounded-full border bg-black  ">
								<IoMdCloudOutline className="text-lg text-white" />
							</div>

							<section className="text-lg font-medium">
								Hosting, deployment and maintenance
							</section>

							<section>
								<p className="text-sm">
									We'll Get your website out there in the world, where it
									belongs, with our lightning-fast deployment services.
								</p>
							</section>
						</section>
						<section className=" mt-12 flex w-full  flex-col justify-end space-y-6   ">
							<div className=" relative z-20 w-full overflow-hidden">
								<div
									style={{ animationDirection: "normal" }}
									className=" flex  w-max min-w-full shrink-0 animate-left-to-right flex-nowrap gap-5  [animation-play-state:paused] group-hover:[animation-play-state:running] "
								>
									<div className="relative z-40 mb-4 flex flex-shrink-0 space-x-4">
										{Row1.map((item, i) => (
											<div
												key={i}
												className=" flex h-6  items-center justify-center gap-2 rounded-md border px-6  py-4  text-sm font-medium shadow-md"
											>
												<Image
													src={item.icon}
													width={16}
													height={16}
													alt={item.name}
												/>
												{/* {items.name} */}
												{item.name}
											</div>
										))}
									</div>
									<div className="relative z-40 mb-4 flex flex-shrink-0 space-x-4">
										{Row1.map((item, i) => (
											<div
												key={i}
												className=" flex h-6  items-center justify-center gap-2 rounded-md border px-6  py-4  text-sm font-medium shadow-md"
											>
												<Image
													src={item.icon}
													width={16}
													height={16}
													alt={item.name}
												/>
												{/* {items.name} */}
												{item.name}
											</div>
										))}
									</div>
								</div>
							</div>
							<div className=" relative z-20 w-full overflow-hidden">
								<div
									style={{ animationDirection: "reverse" }}
									className=" flex w-max min-w-full shrink-0 animate-left-to-right flex-row-reverse flex-nowrap gap-5  [animation-play-state:paused] group-hover:[animation-play-state:running] "
								>
									<div className="relative z-40 mb-4 flex flex-shrink-0 space-x-4">
										{Row2.map((item, i) => (
											<div
												key={i}
												className=" flex h-6  items-center justify-center gap-2 rounded-md border px-6  py-4  text-sm font-medium shadow-md"
											>
												<Image
													src={item.icon}
													width={16}
													height={16}
													alt={item.name}
												/>
												{/* {items.name} */}
												{item.name}
											</div>
										))}
									</div>
									<div className="relative z-40 mb-4 flex flex-shrink-0 space-x-4">
										{Row2.map((item, i) => (
											<div
												key={i}
												className=" flex h-6  items-center justify-center gap-2 rounded-md border px-6  py-4  text-sm font-medium shadow-md"
											>
												<Image
													src={item.icon}
													width={16}
													height={16}
													alt={item.name}
												/>
												{/* {items.name} */}
												{item.name}
											</div>
										))}
									</div>
								</div>
							</div>
							<div className="  relative z-20 w-full overflow-hidden ">
								<div
									style={{ animationDirection: "normal" }}
									className=" flex  w-max min-w-full shrink-0 animate-left-to-right flex-nowrap gap-5  [animation-play-state:paused] group-hover:[animation-play-state:running] "
								>
									<div className="relative z-40 mb-4 flex flex-shrink-0 space-x-4">
										{Row1.map((item, i) => (
											<div
												key={i}
												className=" flex h-6  items-center justify-center gap-2 rounded-md border px-6  py-4  text-sm font-medium shadow-md"
											>
												<Image
													src={item.icon}
													width={16}
													height={16}
													alt={item.name}
												/>
												{/* {items.name} */}
												{item.name}
											</div>
										))}
									</div>
									<div className="relative z-40 mb-4 flex flex-shrink-0 space-x-4">
										{Row1.map((item, i) => (
											<div
												key={i}
												className=" flex h-6  items-center justify-center gap-2 rounded-md border px-6  py-4  text-sm font-medium shadow-md"
											>
												<Image
													src={item.icon}
													width={16}
													height={16}
													alt={item.name}
												/>
												{/* {items.name} */}
												{item.name}
											</div>
										))}
									</div>
								</div>
							</div>
						</section>
						<section className=" mt-4 h-auto w-full ">
							<div
								id={"Website"}
								className=" mx-auto  h-[130px] w-[160px] rounded-lg border-x-2 border-t-2 bg-white shadow-2xl  "
							>
								<div className="flex h-2 w-full items-center gap-1 rounded-t-md  px-2">
									<div className="h-[4px] w-[4px] rounded-full bg-red-600"></div>
									<div className="h-[4px] w-[4px] rounded-full bg-yellow-300"></div>
									<div className="h-[4px] w-[4px] rounded-full bg-green-700"></div>
								</div>
								<section className=" flex h-full w-full items-center justify-center gap-2">
									<div className="flex h-10 w-10 items-center justify-center rounded-full border bg-black  ">
										<FaCode className="text-lg text-white" />
									</div>
									{/* <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-black  ">
										<FaCodeBranch className="text-lg text-white" />
									</div> */}
								</section>
							</div>
							<div className="absolute  -bottom-16 left-28 -z-10 h-44 w-44 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-2xl"></div>
						</section>
					</motion.section>

					{/* Third Section */}
					<motion.section
						initial={{
							opacity: 0,
							x: -100,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						viewport={{
							once: true,
							margin: "0px 0px -200px 0px",
						}}
						transition={{
							type: "tween",
							stiffness: 100,
							delay: 1.5,
							duration: 0.5,
						}}
						// id={"sec3"}
						className=" group col-span-2 flex w-full  flex-col justify-between overflow-hidden rounded-2xl  border p-5 pb-14 shadow-xl xl:col-span-1 xl:row-span-2"
					>
						<section className="flex h-auto w-full flex-col gap-5  ">
							<div className="flex h-8 w-8 items-center justify-center rounded-full border bg-black  ">
								<IoLogoGoogle className="text-lg text-white" />
							</div>

							<section className="text-lg font-medium">
								Get found on Google
							</section>

							<section>
								<p className="text-sm">
									We'll make sure your website is optimized for search engines,
									so you can get the traffic you're looking for.
								</p>
							</section>
						</section>
						<section className="mt-12 w-full space-y-4">
							<div className="flex w-full items-center gap-2 rounded-full border-2 border-black px-4 py-1.5 text-sm">
								<IoIosSearch className="text-2xl" />
								<span className="flex flex-wrap items-center justify-center gap-1">
									<span className="opacity-0 transition-all delay-75 duration-100 group-hover:opacity-100">
										Your
									</span>
									<span className="opacity-0 transition-all delay-100 duration-100 group-hover:opacity-100">
										website
									</span>
									<span className="opacity-0 transition-all delay-200 duration-100 group-hover:opacity-100">
										in
									</span>
									<span className="opacity-0 transition-all delay-200 duration-100 group-hover:opacity-100">
										your
									</span>
									<span className="opacity-0 transition-all delay-300 duration-100 group-hover:opacity-100">
										location
									</span>
									<span className="opacity-0 transition-all delay-300 duration-100  group-hover:opacity-100">
										and
									</span>
									<span className="opacity-0 transition-all delay-300 duration-100 group-hover:opacity-100">
										area
									</span>
								</span>
							</div>
							<section className="flex flex-col gap-4 px-5 pr-6">
								<div className=" flex flex-col text-xs group-hover:animate-fade-down group-hover:delay-500">
									<span className="">www.hackernews.com</span>
									<div>
										<span className="text-sm">
											I launched <b>Your website</b> helps me grow.
										</span>
									</div>
									<div className="mt-1.5">
										<span className="text-xs text-stone-400 ">
											This guy does not know what heckernews comments are.
										</span>
									</div>
								</div>
								<div className="flex  flex-col text-xs delay-100 group-hover:animate-fade-down group-hover:delay-700">
									<span className="">www.hackernews.com</span>
									<div>
										<span className="text-sm">
											I launched <b>Your website</b> helps me grow.
										</span>
									</div>
									<div className="mt-1.5">
										<span className="text-xs text-stone-400 ">
											This guy does not know what heckernews comments are.
										</span>
									</div>
								</div>
								<div className="flex flex-col text-xs group-hover:animate-fade-down group-hover:delay-1000">
									<span className="">www.hackernews.com</span>
									<div>
										<span className="text-sm">
											I launched <b>Your website</b> helps me grow.
										</span>
									</div>
									<div className="mt-1.5">
										<span className="text-xs text-stone-400 ">
											This guy does not know what heckernews comments are.
										</span>
									</div>
								</div>
							</section>
						</section>
					</motion.section>

					{/* Forth Section */}
					<motion.section
						initial={{
							opacity: 0,
							y: 100,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						viewport={{
							once: true,
							margin: "0px 0px -200px 0px",
						}}
						transition={{
							type: "tween",
							stiffness: 100,
							delay: 1,
							duration: 0.5,
						}}
						// id={"sec4"}
						className="col-span-2 w-full rounded-2xl border shadow-xl xl:col-span-1 xl:row-span-1"
					>
						<section className="flex w-full flex-col justify-between overflow-hidden p-5 ">
							<section className="flex h-auto w-full flex-col gap-5  ">
								<div className="flex h-8 w-8 items-center justify-center rounded-full border bg-black  ">
									<MdMessage className="text-base text-white" />
								</div>
								<section className="text-lg font-medium">
									Regular Updates and Progress Tracking
								</section>
								<section>
									<p className="text-sm">
										Get regular updates on your website's progress and see it
										come to life.
									</p>
								</section>
							</section>
							<section className="mt-8 w-full">
								<div className="relative flex w-full justify-between border border-dashed border-black p-2 text-sm">
									<span className="font-medium text-black">Logo</span>
									<section className="flex gap-3">
										<span>Login</span>
										<span>Sign Up</span>
									</section>
									<section className="absolute left-10 top-6 gap-1 rounded-full bg-black p-1 text-xs text-white sm:left-14">
										<span className="font-bold">You:</span>
										<span>make the logo bigger</span>
									</section>
								</div>
							</section>
						</section>
					</motion.section>

					{/* Fifth Section */}
					<motion.section
						initial={{
							opacity: 0,
							y: 100,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						viewport={{
							once: true,
							margin: "0px 0px -100px 0px",
						}}
						transition={{
							type: "tween",
							stiffness: 100,
							delay: 0.2,
							duration: 0.5,
						}}
						className=" group col-span-2 row-span-1 flex w-full flex-col justify-between gap-5 overflow-hidden rounded-2xl border  shadow-xl xl:flex-row "
					>
						<section className="flex h-auto w-full flex-col gap-5 p-5  xl:w-1/2">
							<div className="flex h-8 w-8 items-center justify-center rounded-full border bg-black  ">
								<FaCheckCircle className="text-sm text-white" />
							</div>
							<section className="text-lg font-medium">
								And Integrate Everything with AI ✨
							</section>
							<section>
								<p className="text-sm">
									Advance Integrations with AI in Ecommerce, Landing pages,
									Dashboards. You name it, we've done it AND we'll do it for
									you.
								</p>
							</section>
						</section>
						<section className="flex h-auto w-full items-center justify-center overflow-hidden xl:w-1/2">
							<div
								id={"Website"}
								className=" h-[200px] w-[300px] rounded  transition-all ease-in-out-expo  group-hover:translate-x-6 group-hover:scale-150 2xl:pr-5 "
							>
								<div className="flex h-2 w-full items-center gap-1 rounded-t-md bg-slate-300 px-2">
									<div className="h-[3px] w-[3px] rounded-full bg-red-600"></div>
									<div className="h-[3px] w-[3px] rounded-full bg-yellow-300"></div>
									<div className="h-[3px] w-[3px] rounded-full bg-green-700"></div>
								</div>
								<section className=" h-full w-full  border bg-gradient-to-r from-cyan-500 to-blue-500">
									<div className="mx-auto mt-10 w-40 text-center text-sm text-white">
										Websites that stand out and make a difference
									</div>
								</section>
							</div>
						</section>
					</motion.section>
					<div className="absolute -top-5 left-5 -z-10 h-80 w-[30rem] rounded-full bg-gradient-to-r from-cyan-500 to-green-500 opacity-25 blur-xl "></div>
					<div className="absolute right-1/2 top-1/2 -z-10 h-80 w-[40rem] -rotate-12 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 opacity-25 blur-xl "></div>
					<div className="absolute -bottom-16 right-14 -z-10 h-96 w-96 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-55 blur-xl "></div>
				</section>
			</section>
		</section>
	);
};

export default ServicesSection;
