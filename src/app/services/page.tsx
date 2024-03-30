import HeroServices from '@/app/services/HeroServices';
import Footer from '@/components/Footer';
import MainTitle from '@/components/MainTitle';
import SocialCarousel from '@/components/Ui/SocialPostsCarousel/SocialCarousel';
import React from 'react';

const Services = (): JSX.Element => {
	return (
		<>
			<MainTitle heading={'Services'} />
			<HeroServices />
			<SocialCarousel />
			<Footer />
		</>
	);
};

export default Services;
