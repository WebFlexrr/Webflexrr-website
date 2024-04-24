import { Code, Image, Link } from "@nextui-org/react";
import type { PortableTextReactComponents } from "@portabletext/react";
import type { ReactNode } from "react";

const ImageComponent = ({
	value,
	isInline,
}: {
	value: string;
	isInline: boolean;
}): JSX.Element => {
	// const { width, height } = getImageDimensions(value);
	return (
		<Image
			src={value}
			width={isInline ? 100 : 800}
			height={0}
			// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
			alt={value || " "}
			loading="lazy"
			className=" object-contain"
			style={{
				// Display alongside text if image appears inside a block text span
				display: isInline ? "inline-block" : "block",
			}}
		/>
	);
};

export const PortableTextComponents: PortableTextReactComponents = {
	types: {
		image: ImageComponent,
	},
	marks: {
		strong: ({ children }: { children: ReactNode }) => (
			<strong className=" font-bold  text-[#130f49]">{children}</strong>
		),
		em: ({ children }: { children: ReactNode }) => (
			<em className="font-semibold text-[#130f49]">{children}</em>
		),
		code: ({ children }: { children: ReactNode }) => <Code>$ {children}</Code>,
		link: ({ value, children }) => {
			// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
			const target = (value?.href || "").startsWith("http")
				? "_blank"
				: undefined;
			return (
				<Link
					href={value?.href}
					target={target}
					rel={target === "_blank" ? "noindex nofollow" : undefined}
				>
					{children}
				</Link>
			);
		},
	},

	block: {
		// Ex. 1: customizing common block types
		h1: ({ children }) => (
			<h1 className="my-4 text-left text-3xl font-bold text-[#130f49]">
				{children}
			</h1>
		),
		h2: ({ children }) => (
			<h2 className="my-4 text-left text-2xl  font-bold text-[#130f49]">
				{children}
			</h2>
		),
		h3: ({ children }) => (
			<h3 className="my-3 text-left text-xl  font-bold text-[#130f49]">
				{children}
			</h3>
		),
		h4: ({ children }) => (
			<h4 className="my-2 text-left text-lg  font-bold text-[#130f49]">
				{children}
			</h4>
		),
		h5: ({ children }) => (
			<h5 className="my-1 text-left text-base  font-bold text-[#130f49]">
				{children}
			</h5>
		),
		h6: ({ children }) => (
			<h6 className="my-4 text-left text-sm  font-bold text-[#130f49]">
				{children}
			</h6>
		),
		blockquote: ({ children }) => (
			<blockquote className="border-l-4 border-slate-500 pl-3  text-left text-[#130f49]">
				{children}
			</blockquote>
		),
		normal: ({ children }) => (
			<p className=" text-base  text-[#130f49]">{children}</p>
		),
	},
	list: {
		// Ex. 1: customizing common list types
		bullet: ({ children }) => (
			<ul className=" my-6 space-y-6 px-5 text-[#130f49]">{children}</ul>
		),
		number: ({ children }) => (
			<ol className="mt-lg text-[#130f49]">{children}</ol>
		),

		// Ex. 2: rendering custom lists
		checkmarks: ({ children }) => (
			<ol className="m-auto text-lg text-[#130f49] ">{children}</ol>
		),
	},
	listItem: {
		// Ex. 1: customizing common list types
		bullet: ({ children }) => (
			<li className="list-disc text-[#130f49]">
				<p className=" text-base  text-[#130f49]">{children}</p>
			</li>
		),
		number: ({ children }) => (
			<li className="list-decimal text-[#130f49]">
				<p className=" text-base  text-[#130f49]">{children}</p>
			</li>
		),

		// Ex. 2: rendering custom list items
		checkmarks: ({ children }) => (
			<li className="text-[#130f49]">✅ {children}</li>
		),
	},
	hardBreak: () => <br />,
	unknownMark: () => <></>,
	unknownList: () => <></>,
	unknownType: () => <></>,
	unknownBlockStyle: () => <></>,
	unknownListItem: () => <></>,
};
