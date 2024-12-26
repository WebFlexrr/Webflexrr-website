import WorksFlowSection from "./components/WorksFlowSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Footer from "@/components/Footer";
import ProjectsSection from "./components/ProjectsSection";
import FaqSection from "./components/FaqSection";
import PlanSection from "./components/PlanSection";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";

const Home = async (): Promise<React.JSX.Element> => {
	return (
		<main className="p-0">
			<Hero />
			<WhyChooseUs />
			<Services />
			{/*<BannerSection />
		 
		 	<ServicesSection />
		 */}
			<ProjectsSection />
			<WorksFlowSection />
			<PlanSection />
			<FaqSection />
			<TeamSection />
			<ContactSection />
			{/* <FeedBack /> */}
			{/* <CallOutSection/> */}
			<Footer />
		</main>
	);
};

export default Home;
