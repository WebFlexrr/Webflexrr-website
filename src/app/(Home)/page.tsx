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
import NavBar from "@/components/NavBar";

const Home = async (): Promise<React.JSX.Element> => {
	return (
		<main className="p-0">
			<NavBar />
			<Hero />
			<WhyChooseUs />
			<Services />
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
