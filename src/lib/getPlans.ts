import { client } from "@/config/SanityClient";

const getAllPlans = async (): Promise<getAllPlans[]> =>
	await client.fetch(
		`*[_type=="plans"]{
  id,
  name,
  highlighted,
  description,
  price,
  service{
    serviceName,
      isSelected
  }[],
  bookingLink
}`,
		{},
		{ next: { tags: ["plans"], revalidate: 3600 } }
	);

export default getAllPlans;
