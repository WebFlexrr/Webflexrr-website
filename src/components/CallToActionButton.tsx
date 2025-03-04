import { Button } from "@heroui/button";
import { Phone } from "lucide-react";
import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";

export const CallToActionButton = () => {
	return (
		<Button
			radius="full"
			className="font-space-grotesk border-secondary from-primary to-secondary gap-5 rounded-2xl border bg-gradient-to-r px-5 py-6 text-lg"
		>
			Book A Friendly call{" "}
			<div className="flex items-center justify-center rounded-md border border-white p-2">
				<CiLocationArrow1 className="fill-white text-lg" />
			</div>
		</Button>
	);
};

export const ContactUsButton = () => {
	return (
		<Button
			radius="md"
			className="font-space-grotesk border-secondary from-primary to-secondary gap-5 rounded-2xl border bg-linear-to-r text-base"
		>
			<Phone size={24} />
			Contact US
		</Button>
	);
};
