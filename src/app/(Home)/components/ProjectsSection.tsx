import Heading from "@/components/Heading";
import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import React from "react";

export const products = [
	{
		title: "Moonbeam",
		link: "https://gomoonbeam.com",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
	},
	{
		title: "Cursor",
		link: "https://cursor.so",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/cursor.png",
	},
	{
		title: "Rogue",
		link: "https://userogue.com",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/rogue.png",
	},

	{
		title: "Editorially",
		link: "https://editorially.org",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/editorially.png",
	},
	{
		title: "Editrix AI",
		link: "https://editrix.ai",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/editrix.png",
	},
	{
		title: "Pixel Perfect",
		link: "https://app.pixelperfect.quest",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
	},

	{
		title: "Algochurn",
		link: "https://algochurn.com",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/algochurn.png",
	},
	{
		title: "Aceternity UI",
		link: "https://ui.aceternity.com",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
	},
	{
		title: "Tailwind Master Kit",
		link: "https://tailwindmasterkit.com",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
	},
	{
		title: "SmartBridge",
		link: "https://smartbridgetech.com",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
	},
	{
		title: "Renderwork Studio",
		link: "https://renderwork.studio",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/renderwork.png",
	},

	{
		title: "Creme Digital",
		link: "https://cremedigital.com",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
	},
	{
		title: "Golden Bells Academy",
		link: "https://goldenbellsacademy.com",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
	},
	{
		title: "Invoker Labs",
		link: "https://invoker.lol",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/invoker.png",
	},
	{
		title: "E Free Invoice",
		link: "https://efreeinvoice.com",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
	},
];

const ProjectsSection = (): React.JSX.Element => {
	return (
		<section className=" h-auto w-full py-20 " id="projects">
			<section className="  mx-auto flex h-auto w-full max-w-6xl flex-col gap-10 px-5 sm:px-10   ">
				<Heading
					heading={"A glimpse into the projects that we have built."}
					subHeading={
						"Say goodbye to the lengthy onboarding processes associated with agencies. Simply subscribe, add your project details, then watch us set up and deliver your first task within 72 hours."
					}
				/>
				<section className="grid h-auto w-full md:grid-cols-2 md:gap-20 lg:gap-20 ">
					{products.map((item, index) => (
						<Card key={index} className=" bg-transparent p-0 hover:bg-primary">
							<CardHeader>
								<Image src={item.thumbnail} width={500} alt={item.title} />
							</CardHeader>

							<CardFooter>
								<h5>{item.title}</h5>
							</CardFooter>
						</Card>
					))}
				</section>
			</section>
		</section>
	);
};

export default ProjectsSection;
