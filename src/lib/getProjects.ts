import { client } from "@/config/SanityClient";

const getAllProjects = async (): Promise<getAllProjects[]> =>
	await client.fetch(
		`*[_type=="project"]{
      title,
      link,
      "thumbnail":thumbnail.asset->url,
      _updatedAt
    }`,
		{},
		{ next: { tags: ["project"], revalidate: 3600 } }
	);

export default getAllProjects;
