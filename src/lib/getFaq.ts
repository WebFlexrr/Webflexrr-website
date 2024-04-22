import { client } from "@/config/SanityClient";

const getAllFaq = async (): Promise<getAllFaq[]> =>
	await client.fetch(
		`*[_type=="faq"]{
        id,
        question,
        ans,
        content,
        _updatedAt
        }`,
		{},
		{ next: { tags: ["faq"], revalidate: 3600 } }
	);

export default getAllFaq;
