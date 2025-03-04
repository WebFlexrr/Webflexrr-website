import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";

import Link from "next/link";
import React, { type FC } from "react";
import {
	FaInstagram,
	FaLinkedin,
	// FaLinkedinIn,
	FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

interface TeamPictureProps {
	personDetails: getAllManagementData;
}

const TeamPicture: FC<TeamPictureProps> = ({ personDetails }) => {
	return (
		<Card
			isFooterBlurred
			radius="lg"
			className="group border-primary h-auto w-full border p-3"
		>
			<CardHeader>
				<Image
					src={personDetails.profileImage}
					width={"790"}
					height={"920"}
					alt=""
					radius="lg"
					className="relative z-0 aspect-4/5 h-full w-full transition duration-700 ease-in-out group-hover:grayscale-0"
				/>
			</CardHeader>
			<CardBody className="flex w-full flex-col items-center">
				<section className="flex flex-col items-center">
					<div className="text-2xl font-semibold text-black">
						{personDetails.name}
					</div>
					<div className="mt-2 text-xl text-black">
						{personDetails.position}
					</div>
					<div className="mt-2 text-center text-xl text-black">
						<p className="text-sm">{personDetails.about}</p>
					</div>
				</section>
				<span className="mt-5 flex items-center text-2xl">
					{personDetails.linkedIn != null && (
						<>
							<Link
								href={personDetails.linkedIn}
								target="_blank"
								className="mx-2 text-[#0077b5]"
								aria-label="Linkedin Link"
							>
								<FaLinkedin className="" />
							</Link>
						</>
					)}

					{personDetails.twitter != null && (
						<>
							<Link
								href={personDetails.twitter}
								target="_blank"
								className="mx-2 text-black"
								aria-label="Twitter Link"
							>
								{/* <BsTwitterX className="h-[14px] w-[14px]  " /> */}
								<FaSquareXTwitter />
							</Link>
							{/* <span className="text-primary"> - </span> */}
						</>
					)}

					{personDetails.youtube != null && (
						<>
							<Link
								href={personDetails.youtube}
								target="_blank"
								// className="mx-2 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full  border-2 border-white bg-primary text-secondary transition duration-500 ease-in-out hover:text-[#CD201F]"
								className="mx-2 text-[#CD201F]"
								aria-label="Youtube Link"
							>
								{/* <FaYoutube className="h-[14px] w-[14px] " /> */}
								<FaYoutube />
							</Link>
							{/* <span className="text-primary"> - </span> */}
						</>
					)}

					{personDetails.instagram != null && (
						<>
							<Link
								href={personDetails.instagram}
								target="_blank"
								// className="mx-2 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full  border-2 border-white bg-primary text-secondary transition duration-500 ease-in-out hover:text-[#d62976]"
								className="mx-2 text-[#d62976]"
								aria-label="Instagram"
							>
								<FaInstagram />
							</Link>
							{/* <span className="text-primary"> - </span> */}
						</>
					)}
				</span>
			</CardBody>
		</Card>
	);
};

export default TeamPicture;
