import type { Metadata } from 'next';
import '../globals.css';
import React, { type ReactNode } from 'react';
import NavbarSection from '@/components/ui/Navbar/NavbarSection';

export const metadata: Metadata = {
	title: {
		default: 'Services',
		template: '%s | WebFlexrr Digital Services',
	},
	description: 'This is services Page of Webflexrr Digital Services',
};

const ServiceLayout = ({ children }: { children: ReactNode }): JSX.Element => {
	return (
		<main className="relative z-30 h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth bg-background2 dark:bg-black">
			<NavbarSection />
			{children}
		</main>
	);
};
export default ServiceLayout;
