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
	'Blog',
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
			// shouldHideOnScroll
			isBordered
			isBlurred={false}
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			maxWidth={'full'}
			className=" fixed mt-6 flex w-full max-w-7xl animate-visible-from-down rounded-full ease-in-out-expo lg:mx-auto  "
		>
			{/* <div className=" flex  justify-between"> */}
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
				<NavbarItem>
					<Link className="text-lg " color="foreground" href={'/portfolio'}>
						Portfolio
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link className="text-lg " color="foreground" href={'/teams'}>
						Teams
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link className="text-lg " color="foreground" href={'/plans'}>
						Plans
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link className="text-lg " color="foreground" href={'/plans'}>
						Blogs
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link className="text-lg " color="foreground" href={'/contact'}>
						Contact Us
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify={'end'}>
				<NavbarItem className="hidden lg:flex">
					<Button
						variant={'shadow'}
						color={'primary'}
						radius="full"
						className="flex items-center justify-center"
					>
						<RiWhatsappFill className="mr-2 h-[25px] w-[25px]  text-lg text-[#25D366]" />
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
			{/* </div> */}
			<NavbarMenu className="mt-10 rounded-t-3xl p-5">
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
							href={`/${item.toLowerCase()}`}
							size="lg"
							onClick={() => {
								setIsMenuOpen(false);
							}}
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
};

export default NavbarSection;
