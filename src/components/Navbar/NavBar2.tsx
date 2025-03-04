"use client";
import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from "@heroui/navbar";

import Image from "next/image";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { RiWhatsappFill } from "react-icons/ri";
import { usePathname } from "next/navigation";

const NavBar2 = () => {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const menuItems = [
		{
			content: "Home",
			link: "/",
		},
		{
			content: "works",
			link: "/works",
		},
		{
			content: "Careers",
			link: "/Careers",
		},
		{
			content: "Contact Us",
			link: "https://wa.me/9038007312",
		},
	];
	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			isBordered
			maxWidth={"xl"}
			className={"w-full"}
		>
			<NavbarContent>
				<NavbarBrand>
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
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden gap-4 sm:flex" justify="center">
				<NavbarItem isActive={pathname === "/" ? true : false}>
					<Link
						color="foreground"
						href="/"
						className={`${
							pathname === "/" && "bg-primary text-white dark:text-white"
						} rounded-full px-2 py-1 text-lg font-medium text-black antialiased dark:font-normal dark:text-white`}
					>
						Home
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						aria-current="page"
						color="foreground"
						className={` ${
							pathname === "/works" && "bg-primary text-white dark:text-white"
						} rounded-full px-2 py-1 text-lg font-medium text-black antialiased dark:text-white`}
						href="/works"
					>
						Works
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						color="foreground"
						className={`${
							pathname === "/careers" && "bg-primary text-white dark:text-white"
						} rounded-full px-2 py-1 text-lg font-medium text-black antialiased dark:text-white`}
						href="/careers"
					>
						Careers
					</Link>
				</NavbarItem>
				{/* <NavbarItem>
					<Link color="foreground" href="#">
						Blogs
					</Link>
				</NavbarItem> */}
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<Link target="_blank" href="https://wa.me/9038007312">
						<Button
							color={"secondary"}
							radius="full"
							className="hidden items-center justify-center text-lg font-medium text-black sm:flex dark:text-white"
						>
							<RiWhatsappFill className="mr-2 h-[25px] w-[25px] text-lg text-[#25D366]" />
							Contact Us
						</Button>
					</Link>
				</NavbarItem>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="text-white sm:hidden"
				/>
				{/* <NavbarItem>
					<Button as={Link} color="primary" href="#" variant={"flat"}>
						Sign Up
					</Button>
				</NavbarItem> */}
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							className="w-full"
							color={
								index === 2
									? "primary"
									: index === menuItems.length - 1
										? "foreground"
										: "foreground"
							}
							href={item.link}
							size="lg"
						>
							{item.content}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
};

export default NavBar2;
