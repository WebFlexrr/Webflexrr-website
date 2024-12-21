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

// const menuItems = [
// 	"Services",
// 	"Portfolio",
// 	"Teams",
// 	"Plans",
// 	"Blog",
// 	"Contact",
// ];

const NavbarSection = (): React.JSX.Element => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const pathname = usePathname();

	console.log(pathname);

	return (
		// <Navbar
		// 	// shouldHideOnScroll
		// 	// isBordered
		// 	isBlurred={false}
		// 	isMenuOpen={isMenuOpen}
		// 	onMenuOpenChange={setIsMenuOpen}
		// 	// maxWidth={"full"}
		// 	className="fixed  w-full bg-transparent"
		// >
		// 	{/* <div className=" animate-visible-from-down mx-auto mt-10 flex w-full items-center justify-between gap-4 rounded-full  border-2 border-black  bg-white px-4  py-2 text-white  antialiased drop-shadow-xl ease-in-out-expo sm:max-w-xl lg:max-w-3xl xl:max-w-6xl    "> */}
		// 	<div className="   animate-visible-from-down  mx-auto mt-10 flex w-full items-center gap-4 rounded-full  border-2 border-black  bg-white px-4  py-2 text-white  antialiased drop-shadow-xl ease-in-out-expo    ">
		// 		<NavbarContent className="border">
		// 			<NavbarBrand>
		// 				<Link href={"/"} aria-label="Home Button">
		// 					<Image
		// 						src={"/logos/logo.png"}
		// 						width={"250"}
		// 						height={"0"}
		// 						alt={""}
		// 						priority={true}
		// 						className="w-36 lg:w-48"
		// 					/>
		// 				</Link>
		// 			</NavbarBrand>
		// 		</NavbarContent>
		// 		<NavbarContent className="hidden gap-5  xl:flex" justify="center">
		// 			<NavbarItem>
		// 				<Link
		// 					className="text-lg font-medium text-black antialiased dark:text-white "
		// 					color="foreground"
		// 					href={"/#services"}
		// 				>
		// 					Home
		// 				</Link>
		// 			</NavbarItem>
		// 			{/* <NavbarItem>
		// 					<Link
		// 						className="text-lg font-medium text-black antialiased dark:text-white "
		// 						color="foreground"
		// 						href={"/#services"}
		// 					>
		// 						Services
		// 					</Link>
		// 				</NavbarItem> */}
		// 			{/* <NavbarItem>
		// 					<Link
		// 						className="text-lg font-medium text-black antialiased dark:text-white "
		// 						color="foreground"
		// 						href={"/#howItWorks"}
		// 					>
		// 						How It Works
		// 					</Link>
		// 				</NavbarItem> */}
		// 			{/* <NavbarItem>
		// 					<Link
		// 						className="text-lg font-medium text-black antialiased dark:text-white "
		// 						color="foreground"
		// 						href={"/#plans"}
		// 					>
		// 						Pricing
		// 					</Link>
		// 				</NavbarItem> */}
		// 			<NavbarItem>
		// 				<Link
		// 					className="text-lg font-medium text-black antialiased dark:text-white "
		// 					color="foreground"
		// 					href={"/work"}
		// 				>
		// 					Works
		// 				</Link>
		// 			</NavbarItem>
		// 			{/* <NavbarItem>
		// 					<Link
		// 						className="text-lg font-medium text-black antialiased dark:text-white "
		// 						color="foreground"
		// 						href={"/#faq"}
		// 					>
		// 						FAQ
		// 					</Link>
		// 				</NavbarItem> */}
		// 			{/* <NavbarItem>
		// 					<Link
		// 						className="text-lg font-medium text-black antialiased dark:text-white "
		// 						color="foreground"
		// 						href={"/#teams"}
		// 					>
		// 						Teams
		// 					</Link>
		// 				</NavbarItem> */}
		// 			<NavbarItem>
		// 				<Link
		// 					className="text-lg font-medium text-black antialiased dark:text-white "
		// 					color="foreground"
		// 					href={"/#teams"}
		// 				>
		// 					Careers
		// 				</Link>
		// 			</NavbarItem>
		// 			<NavbarItem>
		// 				<Link
		// 					className="text-lg font-medium text-black antialiased dark:text-white "
		// 					color="foreground"
		// 					href={"/blogs"}
		// 				>
		// 					Blogs
		// 				</Link>
		// 			</NavbarItem>
		// 		</NavbarContent>
		// 		<NavbarContent justify={"end"} className="hidden border xl:flex">
		// 			<NavbarItem>
		// 				<Link href={process.env.NEXT_PUBLIC_CONTACT_US_LINK ?? ""}>
		// 					<Button
		// 						variant={"shadow"}
		// 						color={"secondary"}
		// 						radius="full"
		// 						className="flex items-center justify-center text-lg font-medium text-black"
		// 					>
		// 						<RiWhatsappFill className="mr-2 h-[25px] w-[25px]  text-lg text-[#25D366]" />
		// 						Contact Us
		// 					</Button>
		// 				</Link>
		// 			</NavbarItem>
		// 		</NavbarContent>
		// 		<NavbarContent className=" xl:hidden" justify="end">
		// 			<Drawer>
		// 				<DrawerTrigger className="text-black" title="Menu">
		// 					<Menu />
		// 				</DrawerTrigger>
		// 				<DrawerContent>
		// 					<DrawerHeader>
		// 						<DrawerTitle>Are you absolutely sure?</DrawerTitle>
		// 						<DrawerDescription>
		// 							This action cannot be undone.
		// 						</DrawerDescription>
		// 					</DrawerHeader>
		// 					<DrawerFooter>
		// 						<Button>Submit</Button>
		// 						<DrawerClose>
		// 							<Button variant="ghost">Cancel</Button>
		// 						</DrawerClose>
		// 					</DrawerFooter>
		// 				</DrawerContent>
		// 			</Drawer>
		// 		</NavbarContent>
		// 	</div>
		// </Navbar>
		<Navbar
			// shouldHideOnScroll={true}
			// isBordered
			// isBlurred={true}
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			// maxWidth={"full"}
			className="animate-visible-from-down  fixed mx-auto mt-5 flex h-fit  items-center   justify-evenly   rounded-full border-2 border-black bg-transparent bg-white  text-white  antialiased  drop-shadow-xl ease-in-out-expo lg:w-fit  "
		>
			{/* <div className=" animate-visible-from-down mx-auto mt-10 flex w-full items-center justify-between gap-4 rounded-full  border-2 border-black  bg-white px-4  py-2 text-white  antialiased drop-shadow-xl ease-in-out-expo sm:max-w-xl lg:max-w-3xl xl:max-w-6xl    "> */}

			<NavbarContent className="w-fit">
				<NavbarBrand>
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
			<NavbarContent className="hidden gap-5  xl:flex" justify="center">
				<NavbarItem>
					<Link
						className="text-lg font-medium text-black antialiased dark:text-white "
						color="foreground"
						href={"/#services"}
					>
						Home
					</Link>
				</NavbarItem>
				{/* <NavbarItem>
							<Link
								className="text-lg font-medium text-black antialiased dark:text-white "
								color="foreground"
								href={"/#services"}
							>
								Services
							</Link>
						</NavbarItem> */}
				{/* <NavbarItem>
							<Link
								className="text-lg font-medium text-black antialiased dark:text-white "
								color="foreground"
								href={"/#howItWorks"}
							>
								How It Works
							</Link>
						</NavbarItem> */}
				{/* <NavbarItem>
							<Link
								className="text-lg font-medium text-black antialiased dark:text-white "
								color="foreground"
								href={"/#plans"}
							>
								Pricing
							</Link>
						</NavbarItem> */}
				<NavbarItem>
					<Link
						className="text-lg font-medium text-black antialiased dark:text-white "
						color="foreground"
						href={"/work"}
					>
						Works
					</Link>
				</NavbarItem>
				{/* <NavbarItem>
							<Link
								className="text-lg font-medium text-black antialiased dark:text-white "
								color="foreground"
								href={"/#faq"}
							>
								FAQ
							</Link>
						</NavbarItem> */}
				{/* <NavbarItem>
							<Link
								className="text-lg font-medium text-black antialiased dark:text-white "
								color="foreground"
								href={"/#teams"}
							>
								Teams
							</Link>
						</NavbarItem> */}
				<NavbarItem>
					<Link
						className="text-lg font-medium text-black antialiased dark:text-white "
						color="foreground"
						href={"/#teams"}
					>
						Careers
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						className="text-lg font-medium text-black antialiased dark:text-white "
						color="foreground"
						href={"/blogs"}
					>
						Blogs
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify={"end"} className="hidden xl:flex">
				<NavbarItem>
					<Link href={process.env.NEXT_PUBLIC_CONTACT_US_LINK ?? ""}>
						<Button
							variant={"shadow"}
							color={"secondary"}
							radius="full"
							className="flex items-center justify-center text-lg font-medium text-black"
						>
							<RiWhatsappFill className="mr-2 h-[25px] w-[25px]  text-lg text-[#25D366]" />
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
