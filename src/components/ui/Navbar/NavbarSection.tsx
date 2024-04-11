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
	// Dropdown,
	// DropdownTrigger,
	Button,
	Link,
	// DropdownMenu,
	// DropdownItem,
} from "@nextui-org/react";
// import { CiCamera, CiMobile3 } from 'react-icons/ci';
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
// import { SiCreatereactapp } from 'react-icons/si';
// import { useRouter } from 'next/navigation';

const menuItems = [
	"Services",
	"Portfolio",
	"Teams",
	"Plans",
	"Blog",
	"Contact Us",
];

const NavbarSection = (): React.JSX.Element => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	// const router = useRouter();
	return (
		<section>
			<Navbar
				// shouldHideOnScroll
				isBordered
				isBlurred={false}
				isMenuOpen={isMenuOpen}
				onMenuOpenChange={setIsMenuOpen}
				maxWidth={"full"}
				className=" fixed mt-6  flex w-full max-w-80 animate-visible-from-down rounded-full border-2 border-black bg-white text-white antialiased drop-shadow-xl ease-in-out-expo lg:mx-auto lg:max-w-6xl   "
			>
				{/* <div className=" flex  justify-between"> */}
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

				<NavbarContent className="hidden gap-5  sm:flex" justify="center">
					{/* <Dropdown>
					<NavbarItem>
					<DropdownTrigger>
					<Button
					disableRipple
								className="bg-transparent p-0 text-lg data-[hover=true]:bg-transparent "
								endContent={<RiArrowDropDownLine className="text-3xl" />}
								radius="sm"
								variant="light"
								>
								Services
								</Button>
								</DropdownTrigger>
								</NavbarItem>
								<DropdownMenu
								aria-label="Services"
								className="w-[340px]"
								itemClasses={{
									base: "gap-4",
						}}
						>
						<DropdownItem
						key="autoscaling"
						description="ACME scales apps to meet user demand, automagically, based on load."
						startContent={
							<SiCreatereactapp className="text-3xl font-bold text-blue-500" />
						}
						onClick={() => {
							router.push("/#services");
						}}
						>
							Web App Development
						</DropdownItem>
						<DropdownItem
							key="usage_metrics"
							description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
							startContent={
								<CiMobile3 className="text-3xl font-bold text-blue-500" />
							}
							>
							Mobile App Development
							</DropdownItem>
							<DropdownItem
							key="seo"
							description="ACME runs on ACME, join us and others serving requests at web scale."
							startContent={<CiCamera />}
							>
							SEO
							</DropdownItem>
							<DropdownItem
							key="99_uptime"
							description="Applications stay on the grid with high availability and high uptime guarantees."
							startContent={<CiCamera />}
							>
							+99% Uptime
							</DropdownItem>
							<DropdownItem
							key="supreme_support"
							description="Overcome any challenge with a supporting team ready to respond."
							startContent={<CiCamera />}
							>
							+Supreme Support
							</DropdownItem>
							</DropdownMenu>
						</Dropdown> */}

					<NavbarItem>
						<Link
							className="text-lg dark:text-black "
							color="foreground"
							href={"/#services"}
						>
							Services
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							className="text-lg dark:text-black"
							color="foreground"
							href={"/#portfolio"}
						>
							Portfolio
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							className="text-lg dark:text-black"
							color="foreground"
							href={"/#teams"}
						>
							Teams
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							className="text-lg dark:text-black"
							color="foreground"
							href={"/#plans"}
						>
							Pricing
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							className="text-lg dark:text-black"
							color="foreground"
							href={"/blogs"}
						>
							Blogs
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							className="text-lg dark:text-black "
							color="foreground"
							href={"/#contact"}
						>
							Contact Us
						</Link>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify={"end"}>
					<ThemeSwitcher />
					<NavbarItem className="hidden lg:flex">
						<Button
							variant={"shadow"}
							color={"primary"}
							radius="full"
							className="flex items-center justify-center text-lg font-medium text-black"
						>
							<RiWhatsappFill className="mr-2 h-[25px] w-[25px]  text-lg text-[#25D366]" />
							Contact Us
						</Button>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent className=" md:hidden" justify="end">
					<NavbarMenuToggle
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						className="md:hidden "
					/>
				</NavbarContent>
				{/* </div> */}
				<NavbarMenu className="mt-10 rounded-t-3xl p-5">
					{menuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === menuItems.length - 1
											? "danger"
											: "foreground"
								}
								className="w-full"
								href={`/#${item.toLowerCase()}`}
								size="lg"
							>
								{item.toLowerCase()}
							</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</Navbar>
		</section>
	);
};

export default NavbarSection;
