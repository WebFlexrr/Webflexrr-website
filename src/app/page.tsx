import getAllPlans from "@/lib/getPlans";

import HeroSection from "@/components/Pages/Home/HeroSection";
import BannerSection from "@/components/Pages/Home/BannerSection";
import ServicesSection from "@/components/Pages/Home/ServicesSection";
import GallerySection from "@/components/Pages/Home/GallerySection";
import PlanSection from "@/components/Pages/Home/PlanSection";
import TeamSection from "@/components/Pages/Home/TeamSection";
import ContactSection from "@/components/Pages/Home/ContactSection";
import Footer2 from "@/components/Footer2";
// import Footer from "@/components/Footer";

const Home = async (): Promise<React.JSX.Element> => {
	const getPlans = await getAllPlans();
	const allPlans = getPlans.sort((a, b) => a.id - b.id);
	return (
		<>
			<main className=" overflow-x-hidden ">
				<HeroSection />
				<BannerSection />
				<ServicesSection />
				<GallerySection />
				{/* <Process2 /> */}
				<PlanSection plans={allPlans} />
				<TeamSection />
				<ContactSection />
				{/* <FeedBack /> */}
				{/* <SocialCarousel /> */}
				{/* <Footer /> */}
				<Footer2 />
			</main>
		</>
	);
};

export default Home;
