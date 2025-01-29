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
			isBlurred={true}
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			// maxWidth={"full"}
			className="animate-visible-from-down fixed mx-auto mt-5  flex h-16 items-center justify-evenly  rounded-full   border-2   border-black text-white    antialiased  drop-shadow-xl  ease-in-out-expo dark:border-foreground-100 lg:w-fit  "
		>
			<NavbarContent className="w-fit">
				<NavbarBrand className="">
					<Link href={"/"} aria-label="Home Button" className="">
						<Image
							src={"/logos/logo.png"}
							width={"250"}
							height={"0"}
							alt={""}
							priority={true}
							className="w-36 lg:w-40"
						/>
					</Link>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className="mx-20 hidden gap-3 xl:flex" justify="center">
				<NavbarItem className={`  `}>
					<Link
						className={`${
							pathname === "/" && "bg-primary text-white dark:text-white"
						} rounded-full px-2 py-1 text-lg font-medium  text-black antialiased dark:font-normal dark:text-white  `}
						href={"/"}
					>
						Home
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						className={` ${
							pathname === "/works" && "bg-primary text-white  dark:text-white"
						} rounded-full px-2 py-1  text-lg font-medium text-black antialiased dark:text-white  `}
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
							rounded-full px-2 py-1  text-lg font-medium text-black antialiased dark:text-white `}
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
						} rounded-full px-2 py-1  text-lg font-medium text-black antialiased dark:text-white`}
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
							<DrawerTitle>Menu</DrawerTitle>
							{/* <DrawerDescription>
								This action cannot be undone.
								</DrawerDescription> */}
						</DrawerHeader>
						<DrawerFooter className="border">
							<Link href={"/Home"} className="w-full">
								<Button className="w-full ">Home</Button>
							</Link>
							<Link href={"/works"} className="w-full ">
								<Button className="w-full ">Work</Button>
							</Link>
							<Link href={"/careers"} className="w-full ">
								<Button className="w-full ">Careers</Button>
							</Link>
							<Link href={"/contact"} className="w-full ">
								<Button className="w-full ">Contact</Button>
							</Link>
							<DrawerClose className="w-full ">
								<Button variant="ghost" className="w-full ">
									Cancel
								</Button>
							</DrawerClose>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</NavbarContent>
		</Navbar>
	);
};

export default NavbarSection;
