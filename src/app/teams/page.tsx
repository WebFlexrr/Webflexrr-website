import Hero from '@/app/teams/Hero';
import Footer from '@/components/Footer';
import MainTitle from '@/components/MainTitle';

const Teams = (): JSX.Element => {
	return (
		<>
			<MainTitle heading={'Our Team'} />
			<Hero />
			<Footer />
		</>
	);
};

export default Teams;
