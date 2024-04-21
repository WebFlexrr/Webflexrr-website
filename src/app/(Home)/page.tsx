import HeroSection from "./components/HeroSection";
import BannerSection from "./components/BannerSection";
import ServicesSection from "./components/ServicesSection";
// import GallerySection from "@/components/Pages/Home/GallerySection";
import WorksFlowSection from "./components/WorksFlowSection";
import PlanSection from "./components/PlanSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
// import ProjectsSection from "@/components/Pages/Home/ProjectsSection";

// import ProjectsSection from "@/components/Pages/Home/ProjectsSection";
// import Footer from "@/components/Footer";

const Home = async (): Promise<React.JSX.Element> => {
	return (
		<>
			<HeroSection />
			<BannerSection />
			<ServicesSection />
			{/* <ProjectsSection/> */}
			{/* <GallerySection /> */}
			{/* <Process2 /> */}
			<WorksFlowSection />
			<PlanSection />
			<TeamSection />
			<ContactSection />
			{/* <FeedBack /> */}
			{/* <SocialCarousel /> */}
			{/* <Footer /> */}
		</>
	);
};

export default Home;
