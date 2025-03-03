import ContactSection from "./components/ContactSection";
import Footer from "@/components/Footer";
import ProjectsSection from "./components/ProjectsSection";
import FaqSection from "./components/FaqSection";
import Services from "./components/Services";
import About from "./components/About";
import FeatureSection from "./components/FeatureSection";
import NavBar3 from "@/components/NavBar3";

const Home = () => {
	return (
		<main className="p-0">
			{/* <AnnouncementBar/> */}
			<NavBar3 />
			{/* <Hero /> */}
			<About />
			<FeatureSection />
			{/* <WhyChooseUs /> */}
			<Services />
			<ProjectsSection />
			{/* <PlanSection /> */}
			<FaqSection />
			{/*
			<WorksFlowSection />
			<TeamSection />
			<CallOutSection />
			*/}
			<ContactSection />
			{/* <FeedBack /> */}
			<Footer />
		</main>
	);
};

export default Home;
