import React from "react";
import type { Metadata } from "next";
import Heading from "@/components/Heading";
import { BlogItem } from "@/app/(Marketing)/blogs/components/blog-Item";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { getAllBlogs } from "@/lib/getBlog";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: {
		default: "Blog",
		template: "%s | WebFlexrr Digital Services",
	},
	description: "This is Plan Page of Webflexrr Digital Services",
};

const Blog = async (): Promise<React.JSX.Element> => {
	const blogs = await getAllBlogs();

	return (
		<main className=" mx-auto h-auto w-full max-w-7xl overflow-x-hidden py-16 lg:py-28 ">
			<Heading
				heading={"Everything about web apps"}
				subHeading={
					"We write about everything from design to deployment to get your website shipped and ready to go!"
				}
				para="wada"
			/>
			<section className="mt-32 grid w-full grid-cols-3 gap-10">
				<Card className=" col-span-2 flex w-full ">
					<CardBody>
						<section className="flex w-full gap-5">
							<section className="w-1/2 ">
								<Image
									className="aspect-video"
									alt="acernity"
									src={
										"https://www.aceternity.com/_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Fcloudinary_bkp_2%2FTracing_Beam_oudgt2.png&w=1920&q=75"
									}
								/>
							</section>
							<section className="flex w-1/2 flex-col  gap-5">
								<h5 className="text-left text-3xl font-bold">
									This is how to make a portfolio
								</h5>
								<p className="truncate font-sans text-base font-normal text-neutral-600 dark:text-neutral-300">
									I personally have always been a fan of great portfolio
									websites. I'm always on the look for new ideas and
									inspirations. Today, I've curated a list of best porfolio
									websites from all over the internet for you to get inspired
									from.
								</p>
								<section className="w-full">
									<Button size="sm" className="bg-black text-sm text-white">
										Read More
									</Button>
								</section>
							</section>
						</section>
					</CardBody>
				</Card>
				<section className="col-span-1 flex w-full flex-col gap-3">
					<span className="text-lg font-semibold">Features</span>
					{blogs?.map((blog, index) => (
						<Card key={index} className="border border-black">
							<CardBody>
								<section className="flex w-full items-center justify-start gap-5 rounded-none">
									<Image
										className="aspect-video"
										width={"60"}
										src={blog.thumbnail}
										alt={blog.title}
									/>
									<section className="flex  flex-col">
										<h6 className="text-lg font-bold">{blog.title}</h6>
									</section>
								</section>
							</CardBody>
						</Card>
					))}
				</section>
			</section>
			<section className="mt-24 grid w-full grid-cols-3 gap-10">
				{blogs?.map((blog) => (
					<BlogItem
						key={blog._id}
						image={blog.thumbnail}
						title={blog.title}
						slug={blog.slug}
						description={blog.description}
						date={blog._createdAt}
					/>
				))}
			</section>
			<Footer />
		</main>
	);
};

export default Blog;
