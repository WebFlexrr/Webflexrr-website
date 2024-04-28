import { client } from "@/config/SanityClient";

const getAllProcess = async (): Promise<getAllProcess[]> =>
	await client.fetch(
		`*[_type=="process"]{
    step,
    name,
    description,
    picture,
    _updatedAt
    }`,
		{},
		{ next: { tags: ["process"], revalidate: 3600 } }
	);

export default getAllProcess;
