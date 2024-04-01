'use client';
import React, { useState } from 'react';
// import SideBar from './Sidebar';
import Image from 'next/image';
import { RiArrowDropDownLine, RiWhatsappFill } from 'react-icons/ri';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Dropdown,
	DropdownTrigger,
	Button,
	Link,
	DropdownMenu,
	DropdownItem,
} from '@nextui-org/react';
import { CiCamera } from 'react-icons/ci';

const menuItems = [
	'Services',
	'Portfolio',
	'Teams',
	'Plans',
	'Contact Us',
	// 'Deployments',
	// 'My Settings',
	// 'Team Settings',
	// 'Help & Feedback',
	// 'Log Out',
];

const NavbarSection = (): React.JSX.Element => {
	// const [sideBarHidden, setSideBarHidden] = useState<boolean>(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<Navbar
			shouldHideOnScroll
			isBordered
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			maxWidth={'full'}
			className="  flex  animate-visible-from-down ease-in-out-expo "
		>
			<div className="mx-auto flex w-full max-w-7xl justify-between">
				<NavbarContent>
					<NavbarBrand>
						<a href={'/'}>
							<Image
								src={'/logos/logo.png'}
								width={'250'}
								height={'0'}
								alt={''}
								className="w-36 lg:w-48"
							/>
						</a>
					</NavbarBrand>
				</NavbarContent>

				<NavbarContent className="hidden gap-5  sm:flex" justify="center">
					<Dropdown>
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
							aria-label="ACME features"
							className="w-[340px]"
							itemClasses={{
								base: 'gap-4',
							}}
						>
							<DropdownItem
								key="autoscaling"
								description="ACME scales apps to meet user demand, automagically, based on load."
								startContent={<CiCamera />}
							>
								Autoscaling
							</DropdownItem>
							<DropdownItem
								key="usage_metrics"
								description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
								startContent={<CiCamera />}
							>
								Usage Metrics
							</DropdownItem>
							<DropdownItem
								key="production_ready"
								description="ACME runs on ACME, join us and others serving requests at web scale."
								startContent={<CiCamera />}
							>
								Production Ready
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
					</Dropdown>
					{/* <NavbarItem isActive>
						<Link href={'/services'} aria-current="page">
							SERVICES
						</Link>
					</NavbarItem> */}
					<NavbarItem className="text-lg ">
						<Link color="foreground" href={'/portfolio'}>
							Portfolio
						</Link>
					</NavbarItem>
					<NavbarItem className="text-lg ">
						<Link color="foreground" href={'/teams'}>
							Teams
						</Link>
					</NavbarItem>
					<NavbarItem className="text-lg ">
						<Link color="foreground" href={'/plans'}>
							Plans
						</Link>
					</NavbarItem>
					<NavbarItem className="text-lg ">
						<Link color="foreground" href={'/contact'}>
							Contact Us
						</Link>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify={'end'}>
					<NavbarItem className="hidden lg:flex">
						<Button
							variant={'shadow'}
							color={'primary'}
							className="flex items-center justify-center"
						>
							<RiWhatsappFill className="mr-2 h-[25px] w-[25px] text-[#25D366]" />
							Lets Contact Us
						</Button>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent className=" sm:hidden" justify="end">
					<NavbarMenuToggle
						aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
						className="sm:hidden"
					/>
				</NavbarContent>
			</div>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={
								index === 2
									? 'primary'
									: index === menuItems.length - 1
										? 'danger'
										: 'foreground'
							}
							className="w-full"
							href="#"
							size="lg"
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>

		// <>
		// 	<header className="fixed left-0 right-0 top-0 z-20 flex  h-16 items-center justify-center lg:h-24 ">
		// 		<div className="absolute  z-0 h-full  w-full  bg-opacity-100 bg-clip-padding shadow-2xl backdrop-blur-xl backdrop-filter " />
		// 		<section className=" z-10 flex  w-full max-w-[110rem] animate-visible-from-down  items-center justify-between px-5 ease-in-out-expo ">
		// 			<a href={'/'}>
		// 				<Image
		// 					src={'/logos/logo.png'}
		// 					width={'250'}
		// 					height={'0'}
		// 					alt={''}
		// 					className="w-36 lg:w-48"
		// 				/>
		// 			</a>
		// 			<nav className="hidden xl:block">
		// 				<ul className="flex gap-10 text-sm font-medium uppercase leading-[25px] tracking-[2.8px] ">
		// 					<li>
		// 						<a
		// 							href={'/'}
		// 							className="text-secondary transition duration-500 ease-in-out hover:text-primary"
		// 						>
		// 							HOME
		// 						</a>
		// 					</li>
		// 					<li>
		// 						<a
		// 							href={'/services'}
		// 							className="text-secondary transition duration-500 ease-in-out hover:text-primary"
		// 						>
		// 							SERVICES
		// 						</a>
		// 					</li>
		// 					<li>
		// 						<a
		// 							href={'/portfolio'}
		// 							className="text-secondary transition duration-500 ease-in-out hover:text-primary"
		// 						>
		// 							PORTFOLIO
		// 						</a>
		// 					</li>
		// 					<li>
		// 						<a
		// 							href={'/teams'}
		// 							className="text-secondary transition duration-500 ease-in-out hover:text-primary"
		// 						>
		// 							TEAMS
		// 						</a>
		// 					</li>
		// 					<li>
		// 						<Link
		// 							href={'/plans'}
		// 							className="text-secondary transition duration-500 ease-in-out hover:text-primary"
		// 						>
		// 							PLANS
		// 						</Link>
		// 					</li>
		// 					<li>
		// 						<a
		// 							href={'/contact'}
		// 							className="text-secondary transition duration-500 ease-in-out hover:text-primary"
		// 						>
		// 							CONTACT US
		// 						</a>
		// 					</li>
		// 				</ul>
		// 			</nav>

		// 			<section className="flex items-center gap-10">
		// 				<button
		// 					onClick={() => {
		// 						setSideBarHidden(true);
		// 					}}
		// 					className="flex items-center text-secondary xl:hidden"
		// 					aria-label="Open Menus"
		// 				>
		// 					<span className="space-y-1 rounded  p-2 text-secondary ">
		// 						<span className="block h-0.5 w-4 bg-black"></span>
		// 						<span className="block h-0.5 w-4 bg-black"></span>
		// 						<span className="block h-0.5 w-4 bg-black"></span>
		// 					</span>
		// 					<span className="hidden md:block">Menu</span>
		// 				</button>

		// 				<Link
		// 					href={'https://wa.me/917044785308'}
		// 					target="_blank"
		// 					className="hidden h-fit w-fit items-center border border-secondary  px-7 py-4 text-secondary transition duration-500 ease-in-out hover:border-primary hover:text-primary lg:flex"
		// 				>
		// 					<RiWhatsappFill className="mr-2 h-[25px] w-[25px] text-[#25D366]" />{' '}
		// 					Lets Contact Us
		// 				</Link>
		// 			</section>
		// 		</section>
		// 	</header>
		// 	<Link
		// 		href={'https://wa.me/917044785308'}
		// 		target="_blank"
		// 		className="fixed bottom-5 right-4 z-50 flex h-fit w-fit items-center rounded-full border border-secondary bg-white  px-3 py-2 text-secondary drop-shadow-lg lg:hidden"
		// 	>
		// 		<RiWhatsappFill className="mr-1 h-[30px] w-[30px] text-[#25D366]" />{' '}
		// 		Contact
		// 	</Link>
		// 	<SideBar
		// 		hidden={sideBarHidden}
		// 		toggle={() => {
		// 			setSideBarHidden(false);
		// 		}}
		// 	/>
		// </>
	);
};

export default NavbarSection;
