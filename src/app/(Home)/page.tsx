import HeroSection from "./components/HeroSection";
import BannerSection from "./components/BannerSection";
import ServicesSection from "./components/ServicesSection";
import WorksFlowSection from "./components/WorksFlowSection";
import PlanSection from "./components/PlanSection";
import TeamSection from "./components/TeamSection";
// import ContactSection from "./components/ContactSection";
import ContactSection from "./components/ContactSection";
import Footer from "@/components/Footer";

const Home = async (): Promise<React.JSX.Element> => {
	return (
		<>
			<HeroSection />
			<BannerSection />
			<ServicesSection />
			{/* <ProjectsSection/> */}
			{/* <GallerySection /> */}
			<WorksFlowSection />
			<PlanSection />
			<TeamSection />
			{/* <ContactSection /> */}
			<ContactSection />
			{/* <FeedBack /> */}
			{/* <SocialCarousel /> */}
			<Footer />
		</>
	);
};

export default Home;
