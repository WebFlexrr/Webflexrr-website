"use client";
import React from "react";
// import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NavBar3 = () => {
	// const pathname = usePathname();

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
			content: "Pricing",
			link: "/pricing",
		},
		{
			content: "about",
			link: "/about",
		},
		{
			content: "Careers",
			link: "/careers",
		},
		{
			content: "Blogs",
			link: "/blogs",
		},
	];
	return (
		<>
			<nav className="w-full border">
				<section className="mx-auto flex w-full max-w-7xl border border-black">
					<section className="flex w-full items-center justify-start border border-blue-500">
						<div className="flex w-fit items-center gap-3">
							<Image
								src={"/logos/white-logo.png"}
								width={30}
								height={30}
								alt={"Webflexrr Labs."}
							/>
							<div className="font-space-grotesk text-lg font-bold">
								Webflexrr Labs.
							</div>
						</div>
					</section>
					<section className="flex w-full items-center justify-center border border-green-500">
						<section className="flex w-fit gap-4 rounded-full bg-black px-3 py-2">
							{menuItems.map((navLink) => (
								<div key={navLink.content}>
									<Link href={navLink.link}>{navLink.content}</Link>
								</div>
							))}
						</section>
					</section>
					<section className="w-full border border-red-400"></section>
				</section>
			</nav>
		</>
	);
};

export default NavBar3;
