import { Button, Divider, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";

const Footer = (): React.JSX.Element => {
	return (
		<footer className="mx-auto h-auto w-full max-w-7xl   text-tertiary ">
			<Divider />
			<section className=" flex flex-col gap-10 py-20 ">
				<section className="w-full">
					<Image
						src={"/logos/logo.png"}
						width={"200"}
						height={"0"}
						alt={""}
						className=""
					/>
				</section>
				<section className="flex h-auto w-full  ">
					<section className="h-auto w-full px-5 py-2 md:w-full lg:w-1/3">
						<div className="flex h-auto w-full max-w-[580px] flex-col gap-10 px-5 text-black">
							<div className=" flex w-full flex-wrap gap-5 sm:flex-nowrap xl:gap-2">
								<input
									type="text"
									title="Message"
									placeholder="Email for news letters"
									className="w-full border-b bg-transparent text-secondary focus:border-secondary focus:outline-none  xl:w-[60%]"
								/>
								<Button radius="full" color="primary" variant="ghost">
									Subscribe
								</Button>
							</div>
							<div className="space-y-2">
								<section>
									<p className="text-sm">
										&#169; 2024 Webflexrr Solutions Private Limited. All rights
										reserved.
									</p>
								</section>
								{/* <span>Kolkata, West Bengal, India</span> */}
								<section>
									<Link
										className="text-sm"
										href={"mailto:contact@webflexrr.com"}
										target="_blank"
									>
										contact@webflexrr.com
									</Link>
								</section>
								<section className="text-sm">
									<span>WhatsApp :</span>
									<ul>
										<li>
											<Link href={"https://wa.me/917044785308"} target="_blank">
												+91 - 7044785308
											</Link>
										</li>
										<li>
											<Link href={"https://wa.me/919038007312"} target="_blank">
												+91 - 9038007312
											</Link>
										</li>
									</ul>
								</section>
							</div>
						</div>
					</section>
					<section className="flex gap-8 py-2 text-sm">
						<section className=" flex flex-col gap-4    text-black">
							<span className="font-bold text-black">Pages</span>
							<ul className=" space-y-4 ">
								<li>
									<Link href={"/#services"}>Services</Link>
								</li>
								<li>
									<Link href={"/#Projects"}>Projects</Link>
								</li>
								<li>
									<Link href={"/#teams"}>Team</Link>
								</li>
								<li>
									<Link href={"/#teams"}>Pricing</Link>
								</li>
								<li>
									<Link href={"/blogs"}>Blog</Link>
								</li>
								<li>
									<Link href={"/#contact"}>Contact</Link>
								</li>
							</ul>
						</section>
						<section className="flex flex-col gap-4   text-black">
							<span className="font-bold text-black">Service</span>
							<ul className=" space-y-4 ">
								<li>
									<Link href={"/#services"} className="p-0">
										Landing Page Development
									</Link>
								</li>
								<li>
									<Link href={"/#Projects"}>Custom Web App Development</Link>
								</li>
								<li>
									<Link href={"/#teams"}>AI App Development</Link>
								</li>
								<li>
									<Link href={"/#teams"}>SEO Optimization</Link>
								</li>
							</ul>
						</section>
						<section className=" flex w-fit flex-col gap-4    text-black">
							<span className="  font-bold text-black">Legal</span>
							<ul className=" space-y-4    ">
								<li>
									<Link href={"/"}>Privacy Policy</Link>
								</li>
								<li>
									<Link href={"/"} className="w-fit">
										Terms and Conditions
									</Link>
								</li>
								<li>
									<Link href={"/"}>Refund Policy</Link>
								</li>
							</ul>
						</section>
						<section className="flex flex-col gap-4    text-black">
							<span className="font-bold text-black">Tools</span>
							<ul className=" space-y-4 ">
								<li>
									<Link href={"https://ui.shadcn.com/"}>Shad Cn</Link>
								</li>
								<li>
									<Link href={"https://nextui.org/"}>Next UI</Link>
								</li>
								<li>
									<Link href={"https://www.sanity.io/"}>Sanity IO</Link>
								</li>
								<li>
									<Link href={"https://manuarora.in/boxshadows"}>
										manuarora.in
									</Link>
								</li>
							</ul>
						</section>
						<Divider orientation="vertical" className="mx-5" />
						<section className=" flex flex-col gap-4   text-black">
							<span className="font-bold text-black">Stay Connected</span>
							<ul className=" space-y-4 ">
								<li>
									<Link
										href={"https://twitter.com/WebFlexRR"}
										target="_blank"
										aria-label="Twitter"
										className="flex items-center gap-2"
									>
										<FaXTwitter className="text-xl font-light" />
										X.com
									</Link>
								</li>
								<li>
									<Link
										href={"/"}
										target="_blank"
										aria-label="Youtube"
										className="flex items-center gap-2"
									>
										<FaYoutube className="text-xl font-light" />
										Youtube
									</Link>
								</li>
								<li>
									<Link
										href={"/"}
										target="_blank"
										aria-label="Linkedin"
										className="flex items-center gap-2"
									>
										<FaLinkedin className="text-xl font-light" />
										LinkedIn
									</Link>
								</li>
								<li>
									<Link
										href={"/"}
										target="_blank"
										aria-label="Facebook"
										className="flex items-center gap-2"
									>
										<FaFacebookF className="text-xl font-light" />
										Facebook
									</Link>
								</li>
								<li className="flex items-center gap-2">
									<Link
										href={"/"}
										target="_blank"
										aria-label="Instagram"
										className="flex items-center gap-2"
									>
										<LuInstagram className="text-xl font-light" />
										Instagram
									</Link>
								</li>
							</ul>
						</section>
					</section>
				</section>
			</section>
		</footer>
	);
};

export default Footer;
