"use client";
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiWhatsappFill } from "react-icons/ri";

const NavBar = () => {
	const pathname = usePathname();
	return (
		<nav className="relative  top-0 z-50 flex w-full justify-center border border-white px-5 md:fixed">
			<section className=" fixed mt-10    flex h-16 w-fit  items-center justify-between rounded-full border-2 border-white  bg-background   px-8  antialiased     drop-shadow-xl  ease-in-out-expo dark:border-foreground-100 md:mx-auto md:justify-evenly  lg:w-fit">
				<section className="mr-20 w-fit lg:mr-0">
					<div className="">
						<Link href={"/"} aria-label="Home Button" className="">
							<Image
								src={"/logos/logo.png"}
								width={"250"}
								height={"0"}
								alt={""}
								priority={true}
								className="w-40 lg:w-40"
							/>
						</Link>
					</div>
				</section>
				<section className="hidden gap-3 lg:mx-16 lg:flex xl:mx-24">
					<Link
						className={`${
							pathname === "/" && "bg-primary text-white dark:text-white"
						} rounded-full px-2 py-1 text-lg font-medium  text-black antialiased dark:font-normal dark:text-white  `}
						href={"/"}
					>
						Home
					</Link>

					<Link
						className={` ${
							pathname === "/works" && "bg-primary text-white  dark:text-white"
						} rounded-full px-2 py-1  text-lg font-medium text-black antialiased dark:text-white  `}
						href={"/works"}
					>
						Works
					</Link>

					<Link
						className={`${
							pathname === "/careers" && "bg-primary text-white dark:text-white"
						}
							rounded-full px-2 py-1  text-lg font-medium text-black antialiased dark:text-white `}
						color="foreground"
						href={"/careers"}
					>
						Careers
					</Link>

					<Link
						className={` ${
							pathname === "/blogs" && "bg-primary text-white dark:text-white"
						} rounded-full px-2 py-1  text-lg font-medium text-black antialiased dark:text-white`}
						color="foreground"
						href={"/blogs"}
					>
						Blogs
					</Link>
				</section>
				<section className="hidden lg:flex">
					<section>
						<Link href="/contact">
							<Button
								variant={"shadow"}
								color={"secondary"}
								radius="full"
								className="flex items-center justify-center text-lg font-medium text-black dark:text-white"
							>
								<RiWhatsappFill className="mr-2 h-[25px] w-[25px]   text-lg text-[#25D366]" />
								Contact Us
							</Button>
						</Link>
					</section>
				</section>
				<section className="ml-20 lg:hidden">
					<Dropdown>
						<DropdownTrigger className="text-foreground">
							<Menu />
						</DropdownTrigger>
						<DropdownMenu
							aria-label="Static Actions"
							className="text-foreground"
						>
							<DropdownItem key="new">New file</DropdownItem>
							<DropdownItem key="copy">Copy link</DropdownItem>
							<DropdownItem key="edit">Edit file</DropdownItem>
							<DropdownItem key="delete" className="text-danger" color="danger">
								Delete file
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</section>
			</section>
		</nav>
	);
};

export default NavBar;
