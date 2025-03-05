import ContactSection from "./components/ContactSection";
import Footer from "@/components/Footer";
import ProjectsSection from "./components/ProjectsSection";
import FaqSection from "./components/FaqSection";
import Services from "./components/Services";
import NavBar3 from "@/components/Navbar/NavBar3";
import AnnouncementBar from "@/components/AnnouncementBar";
import BlurredHero from "@/components/BlurredHero";
import Hero2 from "./components/heroSection/Hero2";
import IconsCarousal from "./components/IconsCarousal";
import About2 from "./components/About Section/About2";
import PlanSection from "./components/PlanSection";

const Home = () => {
	return (
		<main className="relative overflow-x-hidden p-0">
			<BlurredHero />
			<AnnouncementBar />
			<NavBar3 />
			<Hero2 />
			<IconsCarousal />
			<About2 />
			<Services />
			<ProjectsSection />
			<PlanSection />
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
