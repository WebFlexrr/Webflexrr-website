import React from "react";
import Heading from "../../../components/Heading";
// import FeedbackCarousel from "@/components/ui/Hero/FeedbackCarousel";
// import getAllFeedback from "@/lib/getFeedback";

const FeedBack = async (): Promise<React.JSX.Element> => {
	// const feedbacks = await getAllFeedback();

	return (
		<section className=" h-auto w-full">
			<section className="mx-auto flex h-auto w-full max-w-[100rem]  flex-col gap-14 py-10 lg:py-36">
				<Heading
					heading={"Client Feedback"}
					subHeading={"Happy Words From Happy Customer"}
				/>
			</section>
		</section>
	);
};

export default FeedBack;
