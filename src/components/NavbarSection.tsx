"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RiWhatsappFill } from "react-icons/ri";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Button,
} from "@nextui-org/react";

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "./ui/drawer";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarSection = (): React.JSX.Element => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const pathname = usePathname();

	return (
		<Navbar
			// shouldHideOnScroll={true}
			// isBordered
			// isBlurred={true}
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			// maxWidth={"full"}
			className="animate-visible-from-down fixed mx-auto mt-10 flex h-fit items-center  justify-evenly   rounded-full   border-2 border-black bg-foreground-100   text-white  antialiased  drop-shadow-xl ease-in-out-expo lg:w-fit  "
		>
			<NavbarContent className="w-fit">
				<NavbarBrand className="">
					<Link href={"/"} aria-label="Home Button">
						<Image
							src={"/logos/logo.png"}
							width={"250"}
							height={"0"}
							alt={""}
							priority={true}
							className="w-36 lg:w-48"
						/>
					</Link>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className="mx-10 hidden gap-3 xl:flex" justify="center">
				<NavbarItem className={`  `}>
					<Link
						className={`${
							pathname === "/" && "bg-primary text-white dark:text-white"
						} rounded-full p-2 text-lg  font-medium text-black antialiased dark:text-white  `}
						href={"/"}
					>
						Home
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						className={` ${
							pathname === "/works" && "bg-primary text-white  dark:text-white"
						} rounded-full p-2 text-lg font-medium text-black antialiased dark:text-white  `}
						href={"/works"}
					>
						Works
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						className={`${
							pathname === "/careers" && "bg-primary text-white dark:text-white"
						}
							 rounded-full p-2 text-lg font-medium text-black antialiased dark:text-white `}
						color="foreground"
						href={"/careers"}
					>
						Careers
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						className={` ${
							pathname === "/blogs" && "bg-primary text-white dark:text-white"
						} rounded-full p-2 text-lg font-medium text-black antialiased dark:text-white`}
						color="foreground"
						href={"/blogs"}
					>
						Blogs
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify={"end"} className="hidden xl:flex">
				<NavbarItem>
					{/* <Link href={process.env.NEXT_PUBLIC_CONTACT_US_LINK ?? ""}> */}
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
				</NavbarItem>
			</NavbarContent>
			<NavbarContent className=" xl:hidden" justify="end">
				<Drawer>
					<DrawerTrigger className="text-black" title="Menu">
						<Menu />
					</DrawerTrigger>
					<DrawerContent>
						<DrawerHeader>
							<DrawerTitle>Are you absolutely sure?</DrawerTitle>
							<DrawerDescription>
								This action cannot be undone.
							</DrawerDescription>
						</DrawerHeader>
						<DrawerFooter>
							<Button>Submit</Button>
							<DrawerClose>
								<Button variant="ghost">Cancel</Button>
							</DrawerClose>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</NavbarContent>
		</Navbar>
	);
};

export default NavbarSection;
