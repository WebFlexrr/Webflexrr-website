import ContactSection from "./components/ContactSection";
import Footer from "@/components/Footer";
import ProjectsSection from "./components/ProjectsSection";
import FaqSection from "./components/FaqSection";
// import PlanSection from "./components/PlanSection";
import Hero from "./components/Hero";
import Services from "./components/Services";
// import NavBar from "@/components/NavBar";
// import FeatureSection from "./components/FeatureSection";
import About from "./components/About";
// import AnnouncementBar from "./components/AnnouncementBar";
import NavBar2 from "@/components/NavBar2";

const Home = () => {
	return (
		<main className="p-0">
			{/* <AnnouncementBar/> */}
			{/* <NavBar /> */}
			<NavBar2 />
			<Hero />
			<About />
			{/* <FeatureSection /> */}
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
