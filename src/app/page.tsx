import Hero from '@/components/Pages/Home/Hero';
import Banner from '@/components/Pages/Home/Banner';
import Services from '@/components/Pages/Home/Services';
import TagLine from '@/components/Pages/Home/TagLine';
import OurTeams from '@/components/Pages/Home/OurTeams';
import ContactUs from '@/components/Pages/Home/ContactUs';
import Gallery2 from '@/components/Pages/Home/Gallery2';
import SocialCarousel from '@/components/ui/SocialPostsCarousel/SocialCarousel';
import NavbarSection from '@/components/ui/Navbar/NavbarSection';
import Footer from '@/components/Footer';
// import Gallery from '@/components/Pages/Home/Gallery';

const Home = (): JSX.Element => {
	return (
		<>
			{/* <main className="main relative h-screen w-full overflow-y-auto scroll-smooth dark:bg-black"> */}
			<NavbarSection />
			<Hero />
			<Banner />
			<Services />
			{/* <Gallery /> */}
			<Gallery2 />
			<TagLine />
			<OurTeams />
			<ContactUs />
			{/* <FeedBack /> */}
			<SocialCarousel />
			<Footer />
			{/* </main> */}
		</>
	);
};

export default Home;
