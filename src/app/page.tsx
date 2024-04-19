import HeroSection from "@/components/Pages/Home/HeroSection";
import BannerSection from "@/components/Pages/Home/BannerSection";
import ServicesSection from "@/components/Pages/Home/ServicesSection";
// import GallerySection from "@/components/Pages/Home/GallerySection";
import PlanSection from "@/components/Pages/Home/PlanSection";
import TeamSection from "@/components/Pages/Home/TeamSection";
import ContactSection from "@/components/Pages/Home/ContactSection";
import Footer2 from "@/components/Footer2";
// import ProjectsSection from "@/components/Pages/Home/ProjectsSection";
import WorksFlowSection from "@/components/Pages/Home/WorksFlowSection";
// import Footer from "@/components/Footer";

const Home = async (): Promise<React.JSX.Element> => {
	return (
		<>
			<main className=" overflow-x-hidden ">
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
				<Footer2 />
			</main>
		</>
	);
};

export default Home;
