import Heading from "@/components/Heading";
// import ProjectItem from "@/app/portfolio/ProjectItem";
// import getAllProjects from "@/lib/getProjects";
// import Link from "next/link";
import React from "react";

const ProjectSection = async (): Promise<React.JSX.Element> => {
	// const projects = await getAllProjects();
	// const sortedProjectList = projects.sort((a, b) => a.id - b.id);

	// const LayoutSort = () => {
	//   let temp: getAllProjectsProps[] = [];

	//   for (let i: number = 0; i < sortedProjectList.length; i++) {
	//     if (sortedProjectList[i].previewSpacing == 3) {
	//       return temp.concat(sortedProjectList[i]);
	//     } else if (sortedProjectList[i].previewSpacing == 2) {
	//       if (sortedProjectList[i - 2].previewSpacing != 2) {
	//         return temp.concat(sortedProjectList[i]);
	//       }
	//     } else {
	//       if (
	//         sortedProjectList[i - 1].previewSpacing == 1 &&
	//         sortedProjectList[i - 2].previewSpacing == 1
	//       ) {
	//         return temp.concat(sortedProjectList[i]);
	//       }
	//     }
	//   }

	//   return temp;
	// };

	return (
		<section className="h-auto w-full ">
			<section className=" h-auto w-full  px-5 xl:py-36 xl:pb-20">
				<section className=" mx-auto flex h-auto w-full max-w-[100rem] flex-col gap-20 ">
					{/* Heading */}

					<Heading
						heading={"Gallery"}
						subHeading={"Our Project Portfolio"}
						para={"projects"}
					/>
					{/* Main Section */}
					<section className="flex h-auto w-full flex-col gap-3 md:gap-4 lg:gap-6 ">
						{/* <section className=" grid h-auto w-full grid-cols-1 flex-wrap justify-between gap-4 md:grid-cols-2 md:flex-row lg:grid-cols-3 lg:gap-6">
							{projects.map((item) =>
								item.previewSpacing === 1 ? (
									<div
										key={item.id}
										className="col-span-1  aspect-[4/3.3]  w-full "
									>
										<Link href={item.projectLink ?? " "} target="_blank">
											<ProjectItem ProjectItemData={item} />
										</Link>
									</div>
								) : item.previewSpacing === 2 ? (
									<div
										key={item.id}
										className="col-span-1 aspect-[4/3.3] w-full md:col-span-2 md:aspect-[16/6.4] "
									>
										<Link href={item.projectLink ?? ""} target="_blank">
											<ProjectItem ProjectItemData={item} />
										</Link>
									</div>
								) : item.previewSpacing === 3 ? (
									<section
										key={item.id}
										className="aspect-[4/3.3] w-full grid-cols-1 md:col-span-2  md:aspect-[16/6.4] lg:col-span-3  lg:aspect-[16/4]"
									>
										<div className="h-full w-full ">
											<Link href={item.projectLink ?? ""} target="_blank">
												<ProjectItem ProjectItemData={item} />
											</Link>
										</div>
									</section>
								) : (
									<></>
								)
							)}
						</section> */}
					</section>
					<section className="h-auto w-full  ">
						{/* <button
              type="submit"
              className="w-fit h-fit py-4 px-7 mx-auto flex items-center gap-3 border border-secondary text-secondary group hover:text-primary hover:border-primary transition ease-in-out duration-500"
            >
              <div className="w-2 h-2 rounded-full bg-primary  group-hover:bg-secondary transition ease-in-out duration-500"></div>
              Load More
            </button> */}
					</section>
				</section>
			</section>
		</section>
	);
};

export default ProjectSection;
