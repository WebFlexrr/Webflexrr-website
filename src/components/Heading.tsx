import React, { type FC } from "react";
interface HeadingProps {
	heading: string | null;
	subHeading: string;
}

const Heading: FC<HeadingProps> = ({ heading, subHeading }) => {
	return (
		<section className="mx-auto flex h-auto  w-full max-w-4xl flex-col items-center gap-3 text-center">
			{heading != null ? (
				<>
					<h2 className="text-black">{heading}</h2>
					<p>{subHeading}</p>
				</>
			) : (
				<h2 className="">{heading}</h2>
			)}
		</section>
	);
};

export default Heading;
