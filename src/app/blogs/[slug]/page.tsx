import React from "react";

import { TracingBeam } from "@/components/ui/tracing-beam";

import Footer from "@/components/Footer";
import { getSingleBlog } from "@/lib/getBlog";
import { PortableText } from "@portabletext/react";
import { Image } from "@nextui-org/react";
import { PortableTextComponents } from "@/components/PortableText";

const Blog = async ({
	params,
}: {
	params: { slug: string };
}): Promise<React.JSX.Element> => {
	const blogData = await getSingleBlog(params.slug);
	return (
		<>
			<main className=" mx-auto h-auto w-full max-w-7xl  overflow-x-hidden py-16 lg:py-28 ">
				<TracingBeam className="px-6">
					<section className="flex w-full justify-start">
						<h1>{blogData.title}</h1>
					</section>
					<div className="relative mx-auto mt-10 max-w-2xl antialiased">
						<Image
							src={blogData.thumbnail}
							className="w-full "
							alt={blogData.title}
						/>

						<PortableText
							value={blogData.content}
							components={PortableTextComponents}
						/>
					</div>
				</TracingBeam>
			</main>
			<Footer />
		</>
	);
};

export default Blog;
