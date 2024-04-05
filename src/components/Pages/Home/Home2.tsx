import { Button } from "@nextui-org/react";
import React from "react";

const Home2 = (): React.JSX.Element => {
	return (
		<section
			id={"home"}
			className="relative h-screen w-full border pt-16 lg:pt-28 "
		>
			<section className="mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center gap-14 border border-black  text-center sm:px-5 md:px-14 xl:px-20">
				<section className="w-full max-w-4xl px-3">
					<h1>
						Crafting High-Performance Websites with Stunning Design & Speed
					</h1>
				</section>
				<section>
					<p>
						We build websites that drive results and help your business grow.
					</p>
				</section>
				<section>
					{" "}
					<Button variant="bordered" className="rounded-full">
						Book a Call
					</Button>
				</section>
			</section>
		</section>
	);
};

export default Home2;
