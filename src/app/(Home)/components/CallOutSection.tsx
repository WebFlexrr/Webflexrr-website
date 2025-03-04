import { Button } from "@heroui/button";
import React from "react";

// const people = [
// 	{
// 		id: 1,
// 		name: "John Doe",
// 		designation: "Software Engineer",
// 		image:
// 			"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
// 	},
// 	{
// 		id: 2,
// 		name: "Robert Johnson",
// 		designation: "Product Manager",
// 		image:
// 			"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
// 	},
// 	{
// 		id: 3,
// 		name: "Jane Smith",
// 		designation: "Data Scientist",
// 		image:
// 			"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
// 	},
// 	{
// 		id: 4,
// 		name: "Emily Davis",
// 		designation: "UX Designer",
// 		image:
// 			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
// 	},
// 	{
// 		id: 5,
// 		name: "Tyler Durden",
// 		designation: "Soap Developer",
// 		image:
// 			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
// 	},
// 	{
// 		id: 6,
// 		name: "Dora",
// 		designation: "The Explorer",
// 		image:
// 			"https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
// 	},
// ];

const CallOutSection = (): React.JSX.Element => {
	return (
		<section className="h-auto w-full">
			<section className="overflow-y-none z-20 mx-auto my-40 flex h-[36rem] w-full max-w-7xl rounded-2xl border-5 border-slate-400 bg-black bg-linear-to-r from-purple-500 to-pink-500">
				<section className="flex h-full w-1/2 flex-col gap-5 p-28">
					<section className="h-auto w-full">
						<h4 className="text-white">
							Want a website that converts? Get in touch!
						</h4>
					</section>
					<section>
						<p className="text-white">
							Experience the magic of a stunning website designed and developed
							just for you! ✨
						</p>
					</section>
					<section>
						<Button
							radius="full"
							size="lg"
							color="primary"
							className="text-lg font-medium"
						>
							Book a Call
						</Button>
					</section>
					<div className="flex flex-row">
						{/* <AnimatedTooltip items={people} /> */}
					</div>
				</section>
				<section className="relative h-full w-1/2">
					<section className="absolute grid w-full grid-cols-2">
						<section className="z-0 space-y-5 overflow-auto">
							{/* <Image
								src={"/assets/pixelperfect.png"}
								width={300}
								height={600}
								className="rounded-none p-0"
							/>
							<Image
								src={"/assets/pixelperfect.png"}
								width={300}
								height={600}
								className="rounded-none p-0"
							/>
							<Image
								src={"/assets/pixelperfect.png"}
								width={300}
								height={600}
								className="rounded-none p-0"
							/> */}
						</section>
						<section className="-z-10 space-y-5">
							{/* <Image
								src={"/assets/pixelperfect.png"}
								width={300}
								height={600}
								className="rounded-none p-0"
							/>
							<Image
								src={"/assets/pixelperfect.png"}
								width={300}
								height={600}
								className="rounded-none p-0"
							/>
							<Image
								src={"/assets/pixelperfect.png"}
								width={300}
								height={600}
								className="rounded-none p-0"
							/> */}
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default CallOutSection;
