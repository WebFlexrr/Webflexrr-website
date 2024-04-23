import { client } from "@/config/SanityClient";

const getRefundPolicy = async (): Promise<getPolicy> =>
	await client.fetch(
		`*[_type=="policies" && slug.current == "refundPolicy" ][0]{
            title,
            "slug": slug.current ,
            content,
			_updatedAt
        }`,
		{},
		{ next: { tags: ["refundPolicy"], revalidate: 3600 } }
	);

export default getRefundPolicy;
