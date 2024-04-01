import Footer from '@/components/Footer';
import Gallery from '@/components/Pages/Home/Gallery';
import Hero from '@/components/Pages/Home/Hero';
import Banner from '@/components/Pages/Home/Banner';
import Services from '@/components/Pages/Home/Services';
import TagLine from '@/components/Pages/Home/TagLine';

import OurTeams from '@/components/Pages/Home/OurTeams';
import ContactUs from '@/components/Pages/Home/ContactUs';
import SocialCarousel from '@/components/Ui/SocialPostsCarousel/SocialCarousel';
import NavbarSection from '@/components/Ui/Navbar/NavbarSection';

const Home = (): JSX.Element => {
	return (
		<>
			{/* <main className="main relative z-30 h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth "> */}
			<main className="main relative z-30 h-screen w-full  ">
				<NavbarSection />
				<Hero />
				<Banner />
				<Services />
				<Gallery />
				<TagLine />
				<OurTeams />
				<ContactUs />
				{/* <FeedBack /> */}
				<SocialCarousel />
				<Footer />
			</main>
		</>
	);
};

export default Home;
