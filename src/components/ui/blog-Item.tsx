"use client";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
	Link,
} from "@nextui-org/react";

export const BlogGrid = ({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element => {
	return (
		<section className="mt-20 grid w-full grid-cols-3 gap-10">
			{children}
		</section>
	);
};

export const BlogItem = ({
	image,
	title,
	description,
	slug,
	date,
}: {
	image: string;
	title: string;
	description: string;
	slug: string;
	date: string;
}): JSX.Element => {
	return (
		<Link href={`/blogs/${slug}`}>
			<Card
				fullWidth
				className="  row-span-1 space-y-4 rounded-xl border  bg-white p-2  antialiased transition duration-200 hover:-translate-y-2 hover:shadow-2xl dark:border-white/[0.2] dark:bg-gray-700  dark:shadow-none"
			>
				<CardHeader>
					<Image src={image} alt={title} className="aspect-video " />
				</CardHeader>
				<CardBody>
					<span className="mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
						{title}
					</span>
					<span className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
						{description}
					</span>
				</CardBody>
				<CardFooter className="flex justify-between ">
					<span>{date}</span>
					<Button size="sm" className="bg-black text-sm text-white">
						Read More
					</Button>
				</CardFooter>
			</Card>
		</Link>
	);
};
