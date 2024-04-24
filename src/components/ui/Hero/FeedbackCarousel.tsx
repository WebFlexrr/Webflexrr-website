"use client";
import Image from "next/image";
import React, { type FC } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

interface FeedbackCarouselProps {
	feedbacks: getAllFeedback[];
}

const FeedbackCarousel: FC<FeedbackCarouselProps> = ({ feedbacks }) => {
	return (
		<section className="w-full px-10 text-white xl:px-5">
			<Swiper
				slidesPerView={"auto"}
				style={{ paddingBottom: "1rem" }}
				modules={[Pagination, Autoplay]}
				autoplay={true}
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 40,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 45,
					},
					1100: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
				className="mySwiper "
			>
				{feedbacks.map((feedback) => (
					<SwiperSlide
						key={feedback._id}
						className="h-auto w-full lg:w-[500px]"
					>
						<section className=" flex w-full justify-end px-8 pb-6">
							<span className="flex w-fit">
								{[1, 2, 3, 4, 5].map((rate) => (
									<AiOutlineStar
										key={rate}
										className={`${
											feedback.rating <= rate ? "text-black" : "text-white"
										}`}
									/>
								))}
							</span>
						</section>
						<section
							id="description"
							className="from-background3 to-background3 z-0 h-auto w-full bg-gradient-to-br bg-[length:100%_80%] bg-no-repeat"
						>
							<section className="h-auto w-full px-[20px] py-[40px] lg:px-12 lg:py-[66px] xl:px-20">
								<p>{feedback.message}</p>
							</section>
							<section className=" flex h-auto w-full items-center gap-12 px-[20px] lg:px-[50px]">
								<Image
									src={feedback.image}
									width={"1080"}
									height={"1920"}
									alt=""
									className=" h-[86px] w-[86px] rounded-full bg-primary "
								/>
								<span className=" text-base font-normal text-secondary">
									<span className="text-primary">{feedback.clientName}</span> -{" "}
									{feedback.clientPosition}
								</span>
							</section>
						</section>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default FeedbackCarousel;
