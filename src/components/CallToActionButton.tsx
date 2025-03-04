import { Button } from "@heroui/button";
import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";

const CallToActionButton = () => {
	return (
		<Button className="font-space-grotesk text-base">
			Book A Friendly call{" "}
			<div>
				<CiLocationArrow1 />
			</div>
		</Button>
	);
};

export default CallToActionButton;
