import Heading from "@/components/Heading";
import { PortableTextComponents } from "@/components/PortableText";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import getAllFaq from "@/lib/getFaq";
import { PortableText } from "@portabletext/react";

import React from "react";

const FaqSection = async (): Promise<React.JSX.Element> => {
	const allFaq = await getAllFaq();

	return (
		<section id={"faq"} className=" relative h-auto w-full ">
			<section className="mx-auto flex  w-full max-w-5xl flex-col gap-14 px-5 py-20 md:px-10 lg:py-28 ">
				<Heading heading={"FAQ"} subHeading={"Frequently Asked Questions ?"} />
				<section className="  relative h-auto w-full text-black ">
					<Accordion type="multiple">
						{allFaq.map((item, index) => (
							<AccordionItem key={item.id} value={`item-${index}`}>
								<AccordionTrigger className=" text-center text-xl font-semibold text-foreground">
									{item.question}
								</AccordionTrigger>
								<AccordionContent className="px-3">
									<PortableText
										value={item.content}
										components={PortableTextComponents}
									/>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</section>
			</section>
		</section>
	);
};

export default FaqSection;
