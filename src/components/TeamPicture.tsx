"use client";
import { useGSAP } from "@gsap/react";
import { Card, CardFooter, Image } from "@nextui-org/react";
import gsap from "gsap";
import Link from "next/link";
import React, { type FC, useRef } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

interface TeamPictureProps {
	personDetails: getAllManagementData;
}

const TeamPicture: FC<TeamPictureProps> = ({ personDetails }) => {
	const teamProject = useRef<HTMLDivElement>(null);
	gsap.registerPlugin(useGSAP);

	useGSAP(
		() => {
			gsap.from(".teamPicture", {
				y: 30,
				opacity: 0,
				duration: 1,
			});
			gsap.from(".teamPicture", {
				y: 30,
				opacity: 0,
				duration: 1,
			});
		},
		{ scope: teamProject }
	);

	return (
		<div
			ref={teamProject}
			className="teamPicture  group flex h-auto w-full flex-col gap-9"
		>
			<Card isFooterBlurred radius="lg" className="border-none p-3 ">
				<Image
					src={personDetails.profileImage}
					width={"790"}
					height={"920"}
					alt=""
					radius="lg"
					className="relative z-0 aspect-[4/5.2]  h-full w-full transition duration-700 ease-in-out group-hover:grayscale-0"
				/>
				<CardFooter className="absolute bottom-1 z-10 mb-2 w-[calc(96%_-_8px)] flex-col justify-center gap-2 overflow-hidden rounded-large border-1 border-white/20 py-2  shadow-small before:rounded-xl before:bg-white/10">
					<span className="text-xl text-white">Tejodeep Mitra Roy</span>
					<span className="flex items-center text-lg">
						{personDetails.linkedIn != null && (
							<>
								<span className="text-primary"> - </span>
								<Link
									href={personDetails.linkedIn}
									target="_blank"
									className="mx-2 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full  border-2 border-white bg-primary text-secondary transition duration-500 ease-in-out hover:text-[#0077b5]"
								>
									<FaLinkedinIn className="h-[14px] w-[14px] " />
								</Link>
								<span className="text-primary"> - </span>
							</>
						)}

						{personDetails.twitter != null && (
							<>
								<Link
									href={personDetails.twitter}
									target="_blank"
									className="mx-2 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full  border-2 border-white bg-primary text-secondary transition duration-500 ease-in-out hover:text-black"
								>
									<BsTwitterX className="h-[14px] w-[14px]  " />
								</Link>
								<span className="text-primary"> - </span>
							</>
						)}

						{personDetails.youtube != null && (
							<>
								<Link
									href={personDetails.youtube}
									target="_blank"
									className="mx-2 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full  border-2 border-white bg-primary text-secondary transition duration-500 ease-in-out hover:text-[#CD201F]"
								>
									<FaYoutube className="h-[14px] w-[14px] " />
								</Link>
								<span className="text-primary"> - </span>
							</>
						)}

						{personDetails.instagram != null && (
							<>
								<Link
									href={personDetails.instagram}
									target="_blank"
									className="mx-2 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full  border-2 border-white bg-primary text-secondary transition duration-500 ease-in-out hover:text-[#d62976]"
								>
									<FaInstagram className="h-[16px] w-[16px]" />
								</Link>
								<span className="text-primary"> - </span>
							</>
						)}
					</span>
					{/* <p className="text-tiny text-white/80">Available soon.</p> */}
					{/* <Button
						className="bg-black/20 text-tiny text-white"
						variant="flat"
						color="default"
						radius="lg"
						size="sm"
					>
						Notify me
					</Button> */}
				</CardFooter>
			</Card>
			{/* <div className=" relative z-10 h-auto w-full border-4 border-transparent transition duration-700 ease-in-out group-hover:border-primary">
				<Image
					src={personDetails.profileImage}
					width={'790'}
					height={'920'}
					alt=""
					className="relative z-0 aspect-[4/5.2] h-full w-full grayscale transition duration-700 ease-in-out group-hover:grayscale-0"
				/>
				<div className="absolute bottom-0 flex h-16 w-full translate-y-0 cursor-pointer items-center justify-center bg-transparent text-secondary opacity-0 transition duration-700 ease-in-out group-hover:-translate-y-4 group-hover:opacity-100">
					<span className="flex items-center text-lg">
						{personDetails.linkedIn != null && (
							<>
								<span className="text-primary"> - </span>
								<Link
									href={personDetails.linkedIn}
									target="_blank"
									className="mx-2 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full  border-2 border-white bg-primary text-secondary transition duration-500 ease-in-out hover:text-[#0077b5]"
								>
									<FaLinkedinIn className="h-[14px] w-[14px] " />
								</Link>
								<span className="text-primary"> - </span>
							</>
						)}

						{personDetails.twitter != null && (
							<>
								<Link
									href={personDetails.twitter}
									target="_blank"
									className="mx-2 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full  border-2 border-white bg-primary text-secondary transition duration-500 ease-in-out hover:text-black"
								>
									<BsTwitterX className="h-[14px] w-[14px]  " />
								</Link>
								<span className="text-primary"> - </span>
							</>
						)}

						{personDetails.youtube != null && (
							<>
								<Link
									href={personDetails.youtube}
									target="_blank"
									className="mx-2 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full  border-2 border-white bg-primary text-secondary transition duration-500 ease-in-out hover:text-[#CD201F]"
								>
									<FaYoutube className="h-[14px] w-[14px] " />
								</Link>
								<span className="text-primary"> - </span>
							</>
						)}

						{personDetails.instagram != null && (
							<>
								<Link
									href={personDetails.instagram}
									target="_blank"
									className="mx-2 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full  border-2 border-white bg-primary text-secondary transition duration-500 ease-in-out hover:text-[#d62976]"
								>
									<FaInstagram className="h-[16px] w-[16px]" />
								</Link>
								<span className="text-primary"> - </span>
							</>
						)}
					</span>
				</div>
			</div>
			<section className="flex h-auto w-full flex-col gap-2 text-start">
				<span className="text-[26px] font-normal leading-[30px] text-secondary ">
					{personDetails.name}
				</span>
				<p className="font-normal leading-[30px] text-primary ">
					{personDetails.position}
				</p>
			</section> */}
		</div>
	);
};

export default TeamPicture;
