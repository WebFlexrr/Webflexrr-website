import ProjectSection from '@/app/portfolio/ProjectSection';
import Footer from '@/components/Footer';
import MainTitle from '@/components/MainTitle';
import React from 'react';

const Portfolio = (): React.JSX.Element => {
	return (
		<>
			<MainTitle heading={'Portfolio'} />
			<ProjectSection />
			<Footer />
		</>
	);
};

export default Portfolio;
