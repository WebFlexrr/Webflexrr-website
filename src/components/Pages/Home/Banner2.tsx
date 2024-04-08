import { Image } from "@nextui-org/react";
import React from "react";

const Banner2 = (): React.JSX.Element => {
	return (
		<section className=" mt-10 h-auto w-full">
			<section className=" mx-auto h-auto w-full max-w-7xl">
				<section className=" flex w-full items-center gap-10 ">
					<Image
						width={130}
						alt="NextUI Fruit Image with Zoom"
						src="/com-logos/next-js.png"
						className="rounded-none "
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
				</section>
			</section>
		</section>
	);
};

export default Banner2;
