import React, { type FC } from 'react';
interface ProjectTitleProps {
	heading: string;
}
const ProjectTitle: FC<ProjectTitleProps> = ({ heading }) => {
	return (
		<section className="relative h-auto w-full">
			<div
				className="h-auto w-full bg-fixed  object-cover "
				// style={{ backgroundImage: `url(${picture})` }}
			>
				<section className="flex h-auto w-full flex-col items-center py-14 xl:pt-28">
					<section className="flex h-auto w-fit flex-col items-center gap-4">
						<h1>{heading}</h1>
					</section>
				</section>
			</div>
		</section>
	);
};

export default ProjectTitle;
