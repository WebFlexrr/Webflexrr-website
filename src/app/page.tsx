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
import Process from './services/[slug]/Process';
// import Gallery from '@/components/Pages/Home/Gallery';

const Home = (): JSX.Element => {
	return (
		<>
			<main className=" bg-background dark:bg-black">
				<NavbarSection />
				<Hero />
				<Banner />
				<Services />
				{/* <Gallery /> */}
				<Gallery2 />
				<Process
					process={[
						{
							description:
								"Elevate your brand's visibility with WebFlexrr's data-driven SEO strategies that go beyond algorithms.",
							_key: '32347b9c2fdb',
							title: 'Strategic SEO Solutions',
							image:
								'https://cdn.sanity.io/images/ewohzuts/production/a53a164f1ac9e0a6370bb183e1750da769fa0d60-1920x1440.png',
							step: 0,
						},
					]}
				/>
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
