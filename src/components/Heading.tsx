import React, { type FC } from "react";
interface HeadingProps {
	heading: string | null;
	subHeading: string;
	para?: string;
}

const Heading: FC<HeadingProps> = ({ heading, subHeading, para }) => {
	return (
		<section className="mx-auto mt-10 flex h-auto w-full  max-w-4xl flex-col items-center gap-3 text-center text-white">
			{heading != null ? (
				<>
					<span className=" text-xl font-semibold text-primary ">
						{heading}
					</span>
					<span className="text-5xl font-bold text-black dark:text-white">
						{subHeading}
					</span>

					<p>{para}</p>
				</>
			) : (
				<h2 className="">{heading}</h2>
			)}
		</section>
	);
};

export default Heading;
