import { Image } from "@nextui-org/react";
import React from "react";

const BannerSection = (): React.JSX.Element => {
	return (
		<section className=" h-auto w-full py-20 ">
			<section className=" mx-auto flex h-auto w-full max-w-7xl flex-col gap-10 ">
				<section className="mx-auto flex w-full max-w-4xl flex-col gap-10 text-center  text-white">
					<h4 className=" mx-5 text-center ">
						We Always Took advantage of new technologies in your environments
						for solve your business problem
					</h4>
					<p className="">
						Leverage built-in integrations or use extensible APIs and webhooks
						to easily integrate with the upstream and downstream applications in
						your tech stack.
					</p>
				</section>
				<section className=" flex w-full flex-wrap items-center justify-evenly gap-10 ">
					<Image
						width={130}
						alt="NextUI Fruit Image with Zoom"
						src="/com-logos/nextjs.png"
						className="rounded-none dark:bg-white"
					/>
					<Image
						width={130}
						alt="NextUI Fruit Image with Zoom"
						src="/com-logos/reactjs.png"
						className="rounded-none "
					/>
					<Image
						width={100}
						alt="NextUI Fruit Image with Zoom"
						src="/com-logos/node-js.png"
					/>
					<Image
						width={200}
						alt="NextUI Fruit Image with Zoom"
						src="/com-logos/tailwindcss.png"
						className=" rounded-none "
					/>
					<Image
						width={70}
						alt="NextUI Fruit Image with Zoom"
						src="/com-logos/framer-motion.png"
						className="rounded-none "
					/>
					<Image
						width={120}
						alt="NextUI Fruit Image with Zoom"
						src="/com-logos/stripe.png"
						className=" "
					/>
					<Image
						width={120}
						alt="NextUI Fruit Image with Zoom"
						src="/com-logos/sanity.png"
						className=" "
					/>
					<Image
						width={80}
						alt="NextUI Fruit Image with Zoom"
						src="/com-logos/aws.png"
						className=" "
					/>
				</section>
			</section>
		</section>
	);
};

export default BannerSection;
