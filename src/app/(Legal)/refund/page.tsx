import Footer from "@/components/Footer";
import { PortableTextComponents } from "@/components/PortableText";
import getRefundPolicy from "@/lib/getRefundPolicy";
import { Divider } from "@nextui-org/react";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Our team",
	description: "Generated by create next app",
};

const RefundPolicy = async (): Promise<JSX.Element> => {
	const policy = await getRefundPolicy();
	return (
		<main>
			<section className="mx-auto h-auto w-full max-w-2xl  px-5 py-28">
				<section className="flex w-full flex-col justify-start space-y-5">
					<h4>{policy.title}</h4>
					<span className="dark:text-white">
						Last updated:{" "}
						{new Date(policy._updatedAt).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</span>
				</section>
				<Divider className="my-4" />
				<PortableText
					value={policy.content}
					components={PortableTextComponents}
				/>
			</section>
			<Footer />
		</main>
	);
};

export default RefundPolicy;
