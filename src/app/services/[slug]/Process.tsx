"use client";
import Image from "next/image";
import React, { type FC } from "react";
import Heading from "../../../components/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import SwiperButtonComponent from "../../../components/SwiperButtonComponent";

interface ProcessProps {
	process: ServiceProcedure[];
}
const Process: FC<ProcessProps> = ({ process }) => {
	return (
		<section className="h-auto w-full ">
			<section className="h-auto w-full px-5 pb-20 pt-28 md:px-5">
				<section className="mx-auto h-auto w-full max-w-[100rem] ">
					<section className="flex h-fit w-full flex-col">
						<Heading
							heading={"Procedure"}
							subHeading={"Our on Going process steps "}
						/>
						<Swiper
							slidesPerView={1}
							modules={[Pagination, Navigation]}
							navigation={true}
							breakpoints={{
								480: {
									slidesPerView: 2,
								},
								768: {
									slidesPerView: 3,
								},
								1024: {
									slidesPerView: 4,
								},
								1536: {
									slidesPerView: 5,
								},
							}}
							className="relative grid h-fit w-full grid-cols-5 xl:mt-10"
						>
							{process?.map((steps) =>
								steps.step % 2 === 1 ? (
									<SwiperSlide
										key={steps._key}
										className="process-padding-left-0 relative flex w-full flex-col pl-0"
									>
										<section className="absolute left-0 top-1/2  h-[1px] w-full bg-primary">
											<span className="relative h-full w-full bg-primary"></span>
										</section>
										<section>
											<div className="h-[340px] w-full  pb-11">
												<Image
													src={steps.image}
													width={"1000"}
													height={"0"}
													alt={""}
													className="h-full w-full"
												/>
											</div>
											<div className="relative h-[1px] w-full before:absolute before:bottom-0 before:left-[-30%] before:right-0 before:top-[50px] before:m-auto before:h-[100px]  before:w-[1px] before:translate-x-1/2 before:bg-primary before:content-['']  "></div>
											<div className="h-[340px] w-full  pt-11  ">
												<div className="flex h-full w-full flex-col justify-between ">
													<div className="h-fit w-full text-left">
														<span className=" stroke-text border-secondary text-[60px] font-semibold leading-[69px] text-transparent transition duration-500 ease-in-out hover:text-primary ">
															{steps.step}
														</span>
													</div>
													<div className="h-fit w-full text-[26px] font-semibold leading-[30.16px] text-secondary">
														<span>{steps.title}</span>
													</div>
													<div className="h-fit w-full">
														<p>{steps.description}</p>
													</div>
												</div>
											</div>
										</section>
									</SwiperSlide>
								) : (
									<SwiperSlide
										key={steps._key}
										className="process-padding-left-0 relative flex w-full flex-col pr-20 "
									>
										<section className="absolute left-0 top-1/2  h-[1px] w-full bg-primary">
											<span className="relative h-full w-full bg-primary"></span>
										</section>
										<section className="flex flex-col-reverse ">
											<div className="h-[340px] w-full  pt-11">
												<Image
													src={steps.image}
													width={"1000"}
													height={"0"}
													alt={""}
													className="h-full w-full"
												/>
											</div>
											<div className="relative h-[1px] w-full  before:absolute before:bottom-0 before:left-[-30%] before:right-0 before:top-[-100px] before:m-auto before:h-[100px]  before:w-[1px] before:translate-x-1/2 before:bg-primary before:content-['']  "></div>
											<div className="h-[340px] w-full  pb-11  ">
												<div className="flex h-full w-full flex-col justify-between ">
													<div className="h-fit w-full text-[26px] font-semibold leading-[30.16px] text-secondary">
														<span>{steps.title}</span>
													</div>
													<div className="h-fit w-full">
														<p>{steps.description}</p>
													</div>
													<div className="h-fit w-full text-left">
														<span className=" stroke-text border-secondary text-[60px] font-semibold leading-[69px] text-transparent transition duration-500 ease-in-out hover:text-primary ">
															{steps.step}
														</span>
													</div>
												</div>
											</div>
										</section>
									</SwiperSlide>
								)
							)}

							<SwiperButtonComponent />
						</Swiper>
					</section>
				</section>
			</section>
		</section>
	);
};

export default Process;
