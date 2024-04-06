"use client";
import React, { type FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import {
	BsFacebook,
	BsInstagram,
	BsLinkedin,
	BsPinterest,
	BsTwitterX,
	BsYoutube,
} from "react-icons/bs";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface SocialCarouselSwiperProps {
	posts: getAllPosts[];
}

const SocialCarouselSwiper: FC<SocialCarouselSwiperProps> = ({
	posts,
}): React.JSX.Element => {
	const socialCarousel = useRef<HTMLDivElement>(null);
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		gsap.from(socialCarousel.current, {
			x: 100,
			duration: 1,
			opacity: 0,
			ease: "power2.out",
			scrollTrigger: {
				trigger: socialCarousel.current,
				scroller: ".main",
				start: "top 80%",
			},
		});
	});

	return (
		<section ref={socialCarousel} className=" h-auto w-full ">
			<section className="h-auto w-full">
				<Swiper
					slidesPerView={1}
					spaceBetween={20}
					modules={[Pagination, Autoplay]}
					autoplay={true}
					breakpoints={{
						648: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1280: {
							slidesPerView: 4,
							spaceBetween: 20,
						},
						1536: {
							slidesPerView: 5,
							spaceBetween: 20,
						},
					}}
					className=" mySwiper h-auto w-full cursor-grab px-1"
				>
					{posts.map((post) => (
						<SwiperSlide
							key={post._id}
							className="group relative aspect-[1/1] h-full w-full"
						>
							<Image
								src={post.image}
								width={"1000"}
								height={"0"}
								alt={""}
								className="relative h-full w-full"
							/>
							<div className="absolute top-0 h-full w-full scale-90 bg-black  opacity-0 transition duration-700 ease-in-out group-hover:visible group-hover:scale-100 group-hover:opacity-90 ">
								<div className="flex h-full w-full flex-col items-center justify-center border border-primary">
									<div className="flex h-fit  w-fit flex-col items-center gap-3 ">
										<div className="h-24 w-24 rounded-full border-4 border-white p-6">
											{post.socialMedia === "facebook" ? (
												<BsFacebook className=" h-full w-full text-white" />
											) : post.socialMedia === "instagram" ? (
												<BsInstagram className=" h-full w-full text-white" />
											) : post.socialMedia === "linkedIn" ? (
												<BsLinkedin className=" h-full w-full text-white" />
											) : post.socialMedia === "x" ? (
												<BsTwitterX className=" h-full w-full text-white" />
											) : post.socialMedia === "youtube" ? (
												<BsYoutube className=" h-full w-full text-white" />
											) : post.socialMedia === "pinterest" ? (
												<BsPinterest className=" h-full w-full text-white" />
											) : (
												<></>
											)}
										</div>
										<p className="mt-3">Follow Us on {post.socialMedia}</p>
										<Link
											rel="stylesheet"
											href=""
											className="text-[26px] leading-[30px] tracking-wide text-white"
										>
											{post.socialId}
										</Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</section>
	);
};

export default SocialCarouselSwiper;
