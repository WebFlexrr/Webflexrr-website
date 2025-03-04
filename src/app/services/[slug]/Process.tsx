"use client";
import Image from "next/image";
import React, { type FC } from "react";
import Heading from "../../../components/SectionHeading";
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
		<section className="h-auto w-full">
			<section className="h-auto w-full px-5 pt-28 pb-20 md:px-5">
				<section className="mx-auto h-auto w-full max-w-[100rem]">
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
										<section className="bg-primary absolute top-1/2 left-0 h-[1px] w-full">
											<span className="bg-primary relative h-full w-full"></span>
										</section>
										<section>
											<div className="h-[340px] w-full pb-11">
												<Image
													src={steps.image}
													width={"1000"}
													height={"0"}
													alt={""}
													className="h-full w-full"
												/>
											</div>
											<div className="before:bg-primary relative h-[1px] w-full before:absolute before:top-[50px] before:right-0 before:bottom-0 before:left-[-30%] before:m-auto before:h-[100px] before:w-[1px] before:translate-x-1/2 before:content-['']"></div>
											<div className="h-[340px] w-full pt-11">
												<div className="flex h-full w-full flex-col justify-between">
													<div className="h-fit w-full text-left">
														<span className="stroke-text border-secondary hover:text-primary text-[60px] leading-[69px] font-semibold text-transparent transition duration-500 ease-in-out">
															{steps.step}
														</span>
													</div>
													<div className="text-secondary h-fit w-full text-[26px] leading-[30.16px] font-semibold">
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
										className="process-padding-left-0 relative flex w-full flex-col pr-20"
									>
										<section className="bg-primary absolute top-1/2 left-0 h-[1px] w-full">
											<span className="bg-primary relative h-full w-full"></span>
										</section>
										<section className="flex flex-col-reverse">
											<div className="h-[340px] w-full pt-11">
												<Image
													src={steps.image}
													width={"1000"}
													height={"0"}
													alt={""}
													className="h-full w-full"
												/>
											</div>
											<div className="before:bg-primary relative h-[1px] w-full before:absolute before:top-[-100px] before:right-0 before:bottom-0 before:left-[-30%] before:m-auto before:h-[100px] before:w-[1px] before:translate-x-1/2 before:content-['']"></div>
											<div className="h-[340px] w-full pb-11">
												<div className="flex h-full w-full flex-col justify-between">
													<div className="text-secondary h-fit w-full text-[26px] leading-[30.16px] font-semibold">
														<span>{steps.title}</span>
													</div>
													<div className="h-fit w-full">
														<p>{steps.description}</p>
													</div>
													<div className="h-fit w-full text-left">
														<span className="stroke-text border-secondary hover:text-primary text-[60px] leading-[69px] font-semibold text-transparent transition duration-500 ease-in-out">
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
