import React from 'react';
import ServiceSection from '@/components/ui/Hero/ServiceSection';
import { getAllServices } from '@/lib/getServices';
import Heading from '@/components/Heading';

const Services = async (): Promise<React.JSX.Element> => {
	const services = await getAllServices();

	return (
		<section className=" services h-auto w-full " id={'services'}>
			<section className=" h-auto w-full py-20 lg:pt-28">
				<Heading
					heading={'Services'}
					subHeading={'We handle just about everything!'}
				/>
				<ServiceSection data={services} />
			</section>
		</section>
	);
};

export default Services;
