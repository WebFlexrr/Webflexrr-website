import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

const SocialCarouselPost = (): React.JSX.Element => {
	return (
		// <div className="relative w-full h-full xl:w-[360px] xl:h-[360px] group">
		<div className="group relative h-full w-full">
			<Image
				src={'/assets/home-one-instagram-1.jpg'}
				width={'1000'}
				height={'0'}
				alt={''}
				className="relative"
			/>
			<div className="absolute top-0 h-full w-full scale-90 bg-black  opacity-0 transition duration-700 ease-in-out group-hover:visible group-hover:scale-100 group-hover:opacity-90 ">
				<div className="flex h-full w-full flex-col items-center justify-center border border-primary">
					<div className="flex h-fit  w-fit flex-col items-center gap-3 ">
						<div className="h-24 w-24 rounded-full border-4 border-secondary p-6">
							<BsInstagram className=" h-full w-full text-secondary" />
						</div>
						<p className="mt-3">Follow Us on Instagram</p>
						<Link
							rel="stylesheet"
							href=""
							className="text-[26px] leading-[30px] tracking-wide text-secondary"
						>
							@Gaaga
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SocialCarouselPost;
