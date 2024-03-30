import type { Metadata } from 'next';
import '../globals.css';
import { type ReactNode } from 'react';
import NavbarSection from '@/components/Ui/Navbar/NavbarSection';

export const metadata: Metadata = {
	title: {
		default: 'Projects',
		template: '%s | WebFlexrr Digital Services',
	},
	description: 'This is projects Page of Webflexrr Digital Services',
};

const PortfolioLayout = ({
	children,
}: {
	children: ReactNode;
}): JSX.Element => {
	return (
		<main className="relative z-30 h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth bg-background2">
			<NavbarSection />
			{children}
		</main>
	);
};
export default PortfolioLayout;
