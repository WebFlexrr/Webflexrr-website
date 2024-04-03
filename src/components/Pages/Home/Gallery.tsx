import React from 'react';
import GalleryContentSection from '@/components/ui/Hero/GalleryContentSection';
import getAllProjects from '@/lib/getProjects';
import Heading from '@/components/Heading';

const Gallery = async (): Promise<React.JSX.Element> => {
	const projects = await getAllProjects();
	const sortedProjectList = projects.sort((a, b) => a.id - b.id);

	return (
		<section id="gallery" className="gallery relative h-auto w-full ">
			<section className="h-full w-full py-20 lg:py-28">
				<section className="mx-auto flex w-full flex-col gap-7 px-4 text-white sm:px-2 md:px-0">
					<Heading heading={'Gallery'} subHeading={'Our Project Portfolio'} />
					<GalleryContentSection projects={sortedProjectList} />
				</section>
			</section>
		</section>
	);
};

export default Gallery;
