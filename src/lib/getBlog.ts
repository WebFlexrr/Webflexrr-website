import { client } from "@/config/SanityClient";

export const getAllBlogs = async (): Promise<getBlog[]> =>
	await client.fetch(
		`*[_type=="blogs"]{
      _id,
      title,
      "slug":slug.current,
      description,
      "thumbnail":thumbnail.asset->url,
      category,
      content,
      _createdAt,
      _updatedAt
    }`,
		{},
		{ next: { tags: ["blogs"], revalidate: 3600 } }
	);

export const getSingleBlog = async (slug: string): Promise<getBlog> =>
	await client.fetch(
		`*[_type=="blogs" && slug.current == "${slug}"][0]{
      _id,
      title,
      "slug": slug.current,
      description,
      "thumbnail": thumbnail.asset->url,
      category,
      content,
      _createdAt,
      _updatedAt
    }`,
		{},
		{ next: { tags: ["blogs"], revalidate: 3600 } }
	);
