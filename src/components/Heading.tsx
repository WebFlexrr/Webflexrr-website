import { Star } from "lucide-react";
import React, { type FC } from "react";
interface HeadingProps {
	heading: string | null;
	subHeading: string;
	para?: string;
}

const Heading: FC<HeadingProps> = ({ heading, subHeading, para }) => {
	return (
		<section className="mx-auto mt-10 flex h-auto w-full max-w-4xl flex-col items-center gap-3 text-center text-white">
			{heading != null ? (
				<>
					<span className="text-primary flex gap-3 text-xl font-semibold">
						<span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-400">
							<Star size={22} className="fill-background text-green-400" />
						</span>
						{heading}
					</span>
					<span className="text-5xl font-bold text-black dark:text-white">
						{subHeading}
					</span>

					<p className="max-w-lg">{para}</p>
				</>
			) : (
				<h2 className="">{heading}</h2>
			)}
		</section>
	);
};

export default Heading;
