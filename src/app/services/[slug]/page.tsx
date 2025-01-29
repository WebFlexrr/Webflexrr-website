import ServiceDetails from "@/app/services/[slug]/ServiceDetails";
import Footer from "@/components/Footer";
import MainTitle from "@/components/MainTitle";
// import SocialCarousel from "@/components/ui/SocialPostsCarousel/SocialCarousel";

// import { findServiceByName } from "@/lib/getServices";
// import { type Metadata } from "next";
import React from "react";

// export const generateMetadata = async ({
// 	params,
// }: PageProps): Promise<Metadata> => {
// 	const serviceDetails = await findServiceByName(params.slug);

// 	if (!serviceDetails) {
// 		return {
// 			title: "Not Found",
// 			description: "This page is not Found",
// 		};
// 	}

// 	return {
// 		title: serviceDetails.name,
// 		description: serviceDetails.description,
// 		alternates: {
// 			canonical: `/services/${params.slug}`,
// 			languages: {
// 				"en-US": `/en-US/services/${params.slug}`,
// 				"de-DE": `/de-DE/services/${params.slug}`,
// 			},
// 		},
// 	};
// };

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
	// const serviceDetails = await findServiceByName(params.slug);

	return (
		<>
			<MainTitle heading={(await params).slug} />
			<ServiceDetails />
			{/* <CaseStudy/> */}
			{/* <SocialCarousel /> */}
			<Footer />
		</>
	);
};

export default page;
