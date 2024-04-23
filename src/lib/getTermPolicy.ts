import { client } from "@/config/SanityClient";

const getTermPolicy = async (): Promise<getPolicy> =>
	await client.fetch(
		`*[_type=="policies" && slug.current == "term&Conditions" ][0]{
  			title,
    		"slug": slug.current ,
    		content,
    		_updatedAt
		}`,
		{},
		{ next: { tags: ["termPolicy"], revalidate: 3600 } }
	);

export default getTermPolicy;
