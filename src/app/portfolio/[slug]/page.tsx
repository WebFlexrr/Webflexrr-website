import Footer from "@/components/Footer";
import ProjectTitle from "@/app/services/[slug]/ProjectTitle";
import React from "react";
import ProjectDetail from "./ProjectDetail";

const ProjectDetails = (): React.JSX.Element => {
	return (
		<>
			<ProjectTitle heading={"Business App"} />
			<ProjectDetail />
			<Footer />
		</>
	);
};

export default ProjectDetails;
