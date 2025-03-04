"use client";
import React from "react";
import { useSwiper } from "swiper/react";

const SwiperButtonComponent = (): React.JSX.Element => {
	const swiper = useSwiper();

	return (
		<div className="text-secondary absolute top-0 z-10 flex h-full w-full justify-between">
			<button
				title="previous"
				className="h-full"
				onClick={() => {
					swiper.slidePrev();
				}}
			>
				<div className="bg-primary h-[1px] w-5" />
			</button>
			<button
				title="next"
				onClick={() => {
					swiper.slideNext();
				}}
			>
				<div className="bg-primary h-[1px] w-5" />
			</button>
		</div>
	);
};

export default SwiperButtonComponent;
