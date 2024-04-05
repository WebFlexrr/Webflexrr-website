// import Hero from '@/components/Pages/Home/Hero';
import Banner from "@/components/Pages/Home/Banner";
// import TagLine from '@/components/Pages/Home/TagLine';
import OurTeams from "@/components/Pages/Home/OurTeams";
import ContactUs from "@/components/Pages/Home/ContactUs";
import Gallery2 from "@/components/Pages/Home/Gallery2";
import SocialCarousel from "@/components/ui/SocialPostsCarousel/SocialCarousel";
import NavbarSection from "@/components/ui/Navbar/NavbarSection";
import Footer from "@/components/Footer";
import Process2 from "@/components/Pages/Home/Process2";
import getAllPlans from "@/lib/getPlans";
import Plans from "@/components/Pages/Home/Plans";
import Services from "@/components/Pages/Home/Services";
import Home2 from "@/components/Pages/Home/Home2";
// import Gallery from '@/components/Pages/Home/Gallery';

const Home = async (): Promise<React.JSX.Element> => {
	const getPlans = await getAllPlans();
	const allPlans = getPlans.sort((a, b) => a.id - b.id);
	return (
		<main className=" dark:bg-black">
			<NavbarSection />
			{/* <Hero /> */}
			<Home2 />
			<Banner />
			<Services />
			{/* <Gallery /> */}
			<Gallery2 />
			<Process2 />
			{/* <Process
					process={[
						{
							description:
								"Elevate your brand's visibility with WebFlexrr's data-driven SEO strategies that go beyond algorithms.",
							_key: '32347b9c2fdb',
							title: 'Strategic SEO Solutions',
							image:
								'https://cdn.sanity.io/images/ewohzuts/production/a53a164f1ac9e0a6370bb183e1750da769fa0d60-1920x1440.png',
							step: 0,
						},
					]}
				/> */}
			<Plans plans={allPlans} />
			{/* <TagLine /> */}
			<OurTeams />
			<ContactUs />
			{/* <FeedBack /> */}
			<SocialCarousel />
			<Footer />
		</main>
	);
};

export default Home;
