import { client } from "@/config/SanityClient";

const getPrivacyPolicy = async (): Promise<getPolicy> =>
	await client.fetch(
		`*[_type=="policies" && slug.current == "privacyPolicy" ][0]{
  			title,
    		"slug": slug.current ,
    		content,
    		_updatedAt
		}`,
		{},
		{ next: { tags: ["privacyPolicy"], revalidate: 3600 } }
	);

export default getPrivacyPolicy;
