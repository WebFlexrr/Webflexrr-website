import Heading from "@/components/Heading";
// import ServiceSection2 from "@/components/ui/Hero/ServiceSection2";
import React from "react";
import { RiWindow2Fill } from "react-icons/ri";
import { IoIosSearch, IoLogoGoogle, IoMdCloudOutline } from "react-icons/io";
import { FaCode } from "react-icons/fa";
const firstrow = [
	{
		name: "tailwind",
		icon: <IoMdCloudOutline />,
	},
	{
		name: "tailwind",
		icon: <IoMdCloudOutline />,
	},
	{
		name: "tailwind",
		icon: <IoMdCloudOutline />,
	},
	{
		name: "tailwind",
		icon: <IoMdCloudOutline />,
	},
];

const ServicesSection = (): React.JSX.Element => {
	return (
		<section className=" services h-auto w-full " id={"services"}>
			<section className=" h-auto w-full py-20 lg:py-28">
				<Heading
					heading={"We handle just about everything!"}
					subHeading={
						"We handle everything from design to deployment to get your website shipped and ready to go!"
					}
				/>

				<section className="servicesSections flex h-auto  w-full justify-center  xl:mt-20 ">
					<div className="grid w-full max-w-7xl grid-cols-1  gap-7 lg:grid-cols-3 lg:grid-rows-3">
						<section className="group col-span-2 flex w-full rounded-2xl border   pl-5 pt-5 shadow-xl lg:col-span-2 lg:row-span-1 ">
							<section className="flex h-auto w-full max-w-xs flex-col gap-5">
								<section className="w-full">
									<div className="flex h-8 w-8 items-center justify-center rounded-full border bg-black  ">
										<RiWindow2Fill className="text-lg text-white" />
									</div>
								</section>
								<section className="text-lg font-medium">
									Website Design & Development
								</section>
								<section>
									<p className="text-sm">
										We'll build you a website that's so good, it'll make all the
										other websites jealous. Trust me, not kidding.
									</p>
								</section>
							</section>
							<section className="flex h-full w-full items-end justify-end gap-6  overflow-hidden">
								<div
									id="mobile"
									className=" mobile border-grey-700 h-[200px] w-[150px] rounded-t-3xl border-4 bg-black   transition-all ease-soft-spring group-hover:translate-y-4 group-hover:pb-[10px]"
								>
									<div className="mx-auto mt-2 flex  w-[40px] justify-end rounded-2xl border border-white bg-gray-300 p-1 transition-all ease-in-out-expo group-hover:w-[80px] group-hover:p-1">
										<div className="h-2 w-2 rounded-full border bg-white"></div>
									</div>

									<div className="mx-auto mt-10 w-24 text-center text-[12px] text-white">
										Websites that stand out and make a difference
									</div>
								</div>
								<div
									id={"Website"}
									className=" h-[200px] w-[300px]  rounded pr-5 transition-all ease-soft-spring group-hover:translate-x-6 "
								>
									<div className="flex h-2 w-full items-center gap-1 rounded-t-md bg-slate-300 px-2">
										<div className="h-[3px] w-[3px] rounded-full bg-red-600"></div>
										<div className="h-[3px] w-[3px] rounded-full bg-yellow-300"></div>
										<div className="h-[3px] w-[3px] rounded-full bg-green-700"></div>
									</div>
									<section className="h-full w-full  border bg-gradient-to-r from-cyan-500 to-blue-500">
										<div className="mx-auto mt-10 w-40 text-center text-sm text-white">
											Websites that stand out and make a difference
										</div>
									</section>
								</div>
							</section>
						</section>
						<section className="col-span-2 row-span-1 w-full rounded-2xl border shadow-xl lg:col-span-1 lg:row-span-2">
							<section className="flex w-full flex-col justify-between overflow-hidden border">
								<section className="flex h-auto w-full flex-col gap-5 px-5 pt-5 ">
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
								<section className="mt-14 w-full space-y-10">
									<section className="h-auto w-full">
										<ul className="flex gap-7">
											{firstrow.map((items, i) => [
												<li key={i} className="">
													<div className="flex items-center gap-2 rounded-lg border px-5 py-1 text-sm shadow-2xl">
														{items.icon} {items.name}
													</div>
												</li>,
											])}
										</ul>
									</section>
									<section className="h-auto w-full">
										<ul className="flex gap-7">
											{firstrow.map((items, i) => [
												<li key={i} className="">
													<div className="flex items-center gap-2 rounded-lg border px-5 py-1 text-sm shadow-2xl">
														{items.icon} {items.name}
													</div>
												</li>,
											])}
										</ul>
									</section>
									<section className="h-auto w-full">
										<ul className="flex gap-7">
											{firstrow.map((items, i) => [
												<li key={i} className="">
													<div className="flex items-center gap-2 rounded-lg border px-5 py-1 text-sm shadow-2xl">
														{items.icon} {items.name}
													</div>
												</li>,
											])}
										</ul>
									</section>
								</section>
								<section className="mt-7 h-auto w-full">
									<div
										id={"Website"}
										className=" mx-auto  h-[130px] w-[160px] rounded-lg border-x-2 border-t-2 shadow-2xl  "
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
								</section>
							</section>
						</section>
						<section className="col-span-2 w-full rounded-2xl border shadow-xl lg:col-span-1 lg:row-span-2">
							<section className="flex w-full flex-col justify-between overflow-hidden p-5 pb-14 ">
								<section className="flex h-auto w-full flex-col gap-5  ">
									<div className="flex h-8 w-8 items-center justify-center rounded-full border bg-black  ">
										<IoLogoGoogle className="text-lg text-white" />
									</div>

									<section className="text-lg font-medium">
										Get found on Google
									</section>

									<section>
										<p className="text-sm">
											We'll make sure your website is optimized for search
											engines, so you can get the traffic you're looking for.
										</p>
									</section>
								</section>
								<section className="mt-14 w-full space-y-4">
									<div className="flex w-full items-center gap-2 rounded-full border-2 px-4 py-1.5 text-sm">
										<IoIosSearch className="text-2xl" />
										Your website in your location and area
									</div>
									<section className="flex flex-col gap-4 px-5 pr-6">
										<div className="flex flex-col text-xs">
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
										<div className="flex flex-col text-xs">
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
										<div className="flex flex-col text-xs">
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
							</section>
						</section>
						<section className="col-span-2 w-full rounded-2xl border shadow-xl lg:col-span-1 lg:row-span-1">
							<section className="flex w-full flex-col justify-between overflow-hidden p-5 ">
								<section className="flex h-auto w-full flex-col gap-5  ">
									<div className="flex h-8 w-8 items-center justify-center rounded-full border bg-black  ">
										<IoLogoGoogle className="text-lg text-white" />
									</div>
									<section className="text-lg font-medium">
										Get found on Google
									</section>
									<section>
										<p className="text-sm">
											We'll make sure your website is optimized for search
											engines, so you can get the traffic you're looking for.
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
										<section className="absolute left-20 top-6 rounded-full bg-black p-1 text-xs text-white">
											<span className="font-bold">You:</span>
											make the logo bigger
										</section>
									</div>
								</section>
							</section>
						</section>
						<section className=" group col-span-2 row-span-1 flex w-full justify-between gap-5 overflow-hidden rounded-2xl  border shadow-xl ">
							<section className="flex h-auto w-1/2 flex-col gap-5  p-5">
								<div className="flex h-8 w-8 items-center justify-center rounded-full border bg-black  ">
									<IoLogoGoogle className="text-lg text-white" />
								</div>
								<section className="text-lg font-medium">
									And Everything else ✨
								</section>
								<section>
									<p className="text-sm">
										React Components, Ecommerce, Landing pages, Dashboards. You
										name it, we've done it AND we'll do it for you.
									</p>
								</section>
							</section>
							<section className="flex h-auto w-1/2 items-center justify-center overflow-hidden">
								<div
									id={"Website"}
									className=" h-[200px] w-[300px] rounded pr-5 transition-all  ease-in-out-expo group-hover:translate-x-6 group-hover:scale-150 "
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
						</section>
					</div>
				</section>
			</section>
		</section>
	);
};

export default ServicesSection;
