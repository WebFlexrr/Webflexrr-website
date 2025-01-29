"use client";
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiWhatsappFill } from "react-icons/ri";

const NavBar = () => {
	const pathname = usePathname();
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
					<Button onPress={onOpen}>
						<Menu />
					</Button>
					{/* <Dropdown>
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
					</Dropdown> */}
					<Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
						<DrawerContent>
							{(onClose) => (
								<>
									<DrawerHeader className="flex flex-col gap-1">
										Drawer Title
									</DrawerHeader>
									<DrawerBody>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Nullam pulvinar risus non risus hendrerit venenatis.
											Pellentesque sit amet hendrerit risus, sed porttitor quam.
										</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Nullam pulvinar risus non risus hendrerit venenatis.
											Pellentesque sit amet hendrerit risus, sed porttitor quam.
										</p>
										<p>
											Magna exercitation reprehenderit magna aute tempor
											cupidatat consequat elit dolor adipisicing. Mollit dolor
											eiusmod sunt ex incididunt cillum quis. Velit duis sit
											officia eiusmod Lorem aliqua enim laboris do dolor
											eiusmod. Et mollit incididunt nisi consectetur esse
											laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
											deserunt nostrud ad veniam.
										</p>
									</DrawerBody>
									<DrawerFooter>
										<Button color="danger" variant="light" onPress={onClose}>
											Close
										</Button>
										<Button color="primary" onPress={onClose}>
											Action
										</Button>
									</DrawerFooter>
								</>
							)}
						</DrawerContent>
					</Drawer>
				</section>
			</section>
		</nav>
	);
};

export default NavBar;
