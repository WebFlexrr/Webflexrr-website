"use client";
import React, { useState } from "react";
// import SideBar from './Sidebar';
import Image from "next/image";
// import { RiArrowDropDownLine, RiWhatsappFill } from 'react-icons/ri';
import { RiWhatsappFill } from "react-icons/ri";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Button,
	Link,
} from "@nextui-org/react";

// import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useRouter } from "next/navigation";

const menuItems = [
	"Services",
	"Portfolio",
	"Teams",
	"Plans",
	"Blog",
	"Contact",
];

const NavbarSection = (): React.JSX.Element => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const router = useRouter();
	return (
		<section>
			<Navbar
				// shouldHideOnScroll
				// isBordered
				isBlurred={false}
				isMenuOpen={isMenuOpen}
				onMenuOpenChange={setIsMenuOpen}
				// maxWidth={"full"}
				className="fixed  w-full bg-transparent"
			>
				<div className=" mx-auto mt-10 flex w-full animate-visible-from-down items-center justify-between gap-4 rounded-full  border-2 border-black  bg-white px-4  py-2 text-white  antialiased drop-shadow-xl ease-in-out-expo sm:max-w-xl lg:max-w-3xl xl:max-w-6xl    ">
					<NavbarContent>
						<NavbarBrand>
							<Link href={"/#home"}>
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
								Services
							</Link>
						</NavbarItem>
						<NavbarItem>
							<Link
								className="text-lg font-medium text-black antialiased dark:text-white "
								color="foreground"
								href={"/#portfolio"}
							>
								Portfolio
							</Link>
						</NavbarItem>
						<NavbarItem>
							<Link
								className="text-lg font-medium text-black antialiased dark:text-white "
								color="foreground"
								href={"/#teams"}
							>
								Teams
							</Link>
						</NavbarItem>
						<NavbarItem>
							<Link
								className="text-lg font-medium text-black antialiased dark:text-white "
								color="foreground"
								href={"/#plans"}
							>
								Pricing
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
						<NavbarItem>
							<Link
								className="text-lg font-medium text-black antialiased dark:text-white "
								color="foreground"
								href={"/#contact"}
							>
								Contact Us
							</Link>
						</NavbarItem>
					</NavbarContent>
					<NavbarContent justify={"end"} className="hidden xl:flex">
						{/* <span>
							<ThemeSwitcher />
						</span> */}
						<NavbarItem>
							<Button
								variant={"shadow"}
								// color={"primary"}
								radius="full"
								className="flex items-center justify-center text-lg font-medium text-black"
							>
								<RiWhatsappFill className="mr-2 h-[25px] w-[25px]  text-lg text-[#25D366]" />
								Contact Us
							</Button>
						</NavbarItem>
					</NavbarContent>
					<NavbarContent className=" xl:hidden" justify="end">
						<NavbarMenuToggle
							// aria-label={isMenuOpen ? "Close menu" : "Open menu"}
							className="text-black dark:text-white"
							isSelected={isMenuOpen}
						/>
					</NavbarContent>
				</div>
				<NavbarMenu className="mt-10 rounded-t-3xl p-5">
					{menuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Button
								color={
									index === 2
										? "primary"
										: index === menuItems.length - 1
											? "danger"
											: "secondary"
								}
								className="w-full"
								// href={`/#${item.toLowerCase()}`}
								size="lg"
								onClick={() => {
									setIsMenuOpen(false);
									router.push(`/#${item.toLowerCase()}`);
								}}
							>
								{item.toLowerCase()}
							</Button>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</Navbar>
		</section>
	);
};

export default NavbarSection;
