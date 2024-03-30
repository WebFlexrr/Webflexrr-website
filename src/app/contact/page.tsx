import Hero from '@/app/contact/Hero';
import Footer from '@/components/Footer';
import MainTitle from '@/components/MainTitle';
import React from 'react';

const Plans = (): React.JSX.Element => {
	return (
		<>
			<MainTitle heading={'Contact'} />
			<Hero />
			<Footer />
		</>
	);
};

export default Plans;
