import Image from "next/image";
import React, { type FC } from "react";

interface ProjectItemProps {
	ProjectItemData: getAllProjects;
}

const ProjectItem: FC<ProjectItemProps> = ({ ProjectItemData }) => {
	return (
		<div className="group relative h-full w-full">
			<div className="relative h-full w-full ">
				<div className="relative h-full w-full after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:border-b-[2.4rem] after:border-primary after:transition-all after:duration-500 after:ease-in-out lg:after:border-0 lg:group-hover:after:border-b-[2.4rem] lg:group-hover:after:border-primary xl:group-hover:after:border-[2.5rem]">
					<Image
						src={ProjectItemData.thumbnail}
						width={"1000"}
						height={"0"}
						alt={""}
						className="relative h-full w-full object-cover"
					/>
				</div>
			</div>
			<div className=" absolute bottom-0 flex h-fit  w-full flex-col items-center ">
				<span className="absolute bottom-0 mb-14 text-start text-[22px]  font-semibold leading-[24px] text-primary transition duration-700 ease-in-out hover:text-primary md:text-[25px] md:leading-[29px] lg:text-[29px] lg:leading-[34.4px] xl:text-[33px] xl:leading-[39px]">
					{ProjectItemData.title}
				</span>
				{/* <span className="visible absolute bottom-0 mb-2 text-left text-[14px] font-medium uppercase tracking-[2.8px] text-secondary transition delay-1000 duration-300 ease-in-out group-hover:visible lg:invisible">
					{ProjectItemData.category} - {ProjectItemData.projectOwnership}
				</span> */}
			</div>
		</div>
	);
};

export default ProjectItem;
