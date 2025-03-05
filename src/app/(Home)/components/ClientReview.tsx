import SectionHeading from "@/components/SectionHeading";
import React from "react";

const ClientReview = () => {
	return (
		<section id={"faq"} className="relative h-auto w-full">
			<section className="mx-auto flex w-full max-w-4xl flex-col gap-14 px-5 py-20 md:px-10 lg:py-28">
				<SectionHeading
					heading={"What our clients Say"}
					subHeading={"Client Experience"}
					para="Here are some commonly asked questions. If you can't find the answer you're looking for, feel free to reach out to us directly. We're here to help!"
				/>
			</section>
		</section>
	);
};

export default ClientReview;
