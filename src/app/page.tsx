// import Hero from '@/components/Pages/Home/Hero';
// import TagLine from '@/components/Pages/Home/TagLine';
import OurTeams from "@/components/Pages/Home/OurTeams";
import ContactUs from "@/components/Pages/Home/ContactUs";
import Gallery2 from "@/components/Pages/Home/Gallery2";
import SocialCarousel from "@/components/ui/SocialPostsCarousel/SocialCarousel";
import Process2 from "@/components/Pages/Home/Process2";
import getAllPlans from "@/lib/getPlans";

// import Services from "@/components/Pages/Home/Services";
import Home2 from "@/components/Pages/Home/Home2";
import Banner2 from "@/components/Pages/Home/Banner2";

import Services2 from "@/components/Pages/Home/Services2";
import Plans from "@/components/Pages/Home/Plans";
// import Gallery from '@/components/Pages/Home/Gallery';

const Home = async (): Promise<React.JSX.Element> => {
	const getPlans = await getAllPlans();
	const allPlans = getPlans.sort((a, b) => a.id - b.id);
	return (
		<main className=" overflow-x-hidden ">
			{/* <Hero /> */}
			<Home2 />
			{/* <Banner /> */}
			<Banner2 />
			<Services2 />
			{/* <Services /> */}
			{/* <Gallery /> */}
			<Gallery2 />
			<Process2 />

			<Plans plans={allPlans} />
			{/* <TagLine /> */}
			<OurTeams />
			<ContactUs />
			{/* <FeedBack /> */}
			<SocialCarousel />
		</main>
	);
};

export default Home;
