import HeroSection from "./components/HeroSection";
import BannerSection from "./components/BannerSection";
import ServicesSection from "./components/ServicesSection";
import WorksFlowSection from "./components/WorksFlowSection";
import PlanSection from "./components/PlanSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Footer from "@/components/Footer";
import ProjectsSection from "./components/ProjectsSection";
import FaqSection from "./components/FaqSection";

const Home = async (): Promise<React.JSX.Element> => {
	return (
		<>
			<HeroSection />
			<BannerSection />
			<ServicesSection />
			<ProjectsSection />
			<WorksFlowSection />
			<PlanSection />
			<FaqSection />
			<TeamSection />
			<ContactSection />
			{/* <FeedBack /> */}
			{/* <CallOutSection/> */}
			<Footer />
		</>
	);
};

export default Home;
