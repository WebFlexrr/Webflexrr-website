"use client";
import { Image, Divider } from "@nextui-org/react";

import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import {
	FaLinkedinIn,
	FaFacebookF,
	FaInstagram,
	FaYoutube,
} from "react-icons/fa";

const Footer = (): React.JSX.Element => {
	return (
		<footer className="mx-auto  h-auto w-full max-w-6xl text-tertiary ">
			<Divider className="mt-4" />
			<section className="h-auto w-full py-[70px]">
				<section className="mx-auto flex w-full max-w-[100rem] flex-row flex-wrap gap-10 lg:flex-row lg:gap-0">
					{/* left */}
					<section className="h-auto w-full px-5 md:w-full lg:w-1/2">
						<div className="flex h-auto w-full max-w-[580px] flex-col gap-10 px-5">
							<Image
								src={"/logos/logo2.png"}
								width={"120"}
								height={"0"}
								alt={""}
								className=""
							/>
							<div>
								<p>
									At our agency, each project is a labor of passion and
									commitment. With relentless dedication and meticulous effort,
									we craft digital solutions that stand as a testament to the
									hard work and time invested in building a robust online
									presence for our clients.
								</p>
							</div>
							<div className=" flex w-full flex-wrap gap-5 sm:flex-nowrap xl:gap-2">
								<input
									type="text"
									title="Message"
									className="w-full border-b bg-transparent text-secondary focus:border-secondary focus:outline-none  xl:w-[60%]"
								/>
								<button
									type="button"
									title="button"
									className=" font-base h-fit w-fit rounded-full border border-secondary bg-primary px-3 py-3 text-center text-[24px] leading-[24px] text-secondary transition duration-500 ease-in-out after:w-full md:border-transparent  md:bg-transparent md:hover:border-secondary md:hover:bg-primary lg:h-11 lg:w-[30%]"
								>
									Subscribe
								</button>
							</div>
						</div>
					</section>

					{/* mid */}
					<section className="h-auto w-full pl-10 md:w-[40%] lg:w-1/4">
						<section className=" text-[26px] font-normal leading-[42px] text-secondary ">
							Contact
						</section>
						<address className="mt-3 w-full max-w-[280px] md:mt-5 lg:mt-8">
							<ul className="flex flex-col flex-wrap gap-3 text-secondary md:gap-4">
								<li>
									<p className="text-[15px] transition duration-500 ease-in-out md:text-base lg:hover:text-primary">
										Kolkata, West Bengal, India
									</p>
								</li>
								<li className="flex w-full gap-2 text-secondary">
									<span className="text-[15px] transition duration-500 ease-in-out md:text-base lg:hover:text-primary">
										<p>Phone :</p>
									</span>
									<ul>
										<li>
											<Link href={"tel:+917044785308"}>
												<p className="text-[15px] transition duration-500 ease-in-out md:text-base lg:hover:text-primary">
													+91 - 7044785308
												</p>
											</Link>
										</li>
										<li>
											<Link href={"tel:+919674128921"}>
												<p className="text-[15px] transition duration-500 ease-in-out md:text-base lg:hover:text-primary">
													+91 - 9674128921
												</p>
											</Link>
										</li>
									</ul>
								</li>
								<li className="flex w-full gap-2 text-secondary">
									<span className="text-[15px] transition duration-500 ease-in-out md:text-base lg:hover:text-primary">
										<p>Mail :</p>
									</span>
									<Link href={"mailto:contact@webflexrr.com"} target="_blank">
										<p className="text-[15px] transition duration-500 ease-in-out md:text-base lg:hover:text-primary">
											contact@webflexrr.com
										</p>
									</Link>
								</li>
								<li className="flex w-full gap-2 text-secondary">
									<span className="text-[15px] transition duration-500 ease-in-out md:text-base lg:hover:text-primary">
										<p>WhatsApp :</p>
									</span>
									<ul>
										<li>
											<Link href={"https://wa.me/917044785308"} target="_blank">
												<p className="text-[15px] transition duration-500 ease-in-out md:text-base lg:hover:text-primary">
													+91 - 7044785308
												</p>
											</Link>
										</li>
										<li>
											<Link href={"https://wa.me/919038007312"} target="_blank">
												<p className="text-[15px] transition duration-500 ease-in-out md:text-base lg:hover:text-primary">
													+91 - 9038007312
												</p>
											</Link>
										</li>
									</ul>
								</li>
								{/* <li>
		          <p>Working Hours : 8hrs</p>
		        </li> */}
							</ul>
						</address>
					</section>

					{/* right */}
					<section className="h-auto w-full pl-10 md:w-[40%] lg:w-1/4">
						<section className=" text-[26px] font-normal leading-[42px] text-secondary ">
							Services
						</section>
						<section className="mt-3 w-full max-w-[280px] md:mt-5 lg:mt-8">
							<ul className="flex cursor-default flex-col flex-wrap gap-3 md:gap-4">
								<li>
									<p className="text-[15px] transition duration-500 ease-in-out md:text-base lg:hover:text-primary">
										Branding & Identity
									</p>
								</li>
								<li>
									<p className="text-[15px] transition duration-500 ease-in-out md:text-base lg:hover:text-primary">
										Logo & Graphic designing
									</p>
								</li>
								<li>
									<p className="text-[15px] transition duration-500 ease-in-out md:text-base lg:hover:text-primary">
										Content Creation & Video Editing
									</p>
								</li>

								<li>
									<p className="text-[15px] transition duration-500 ease-in-out md:text-base lg:hover:text-primary">
										Web Design & Development
									</p>
								</li>
								<li>
									<p className="text-[15px] transition duration-500 ease-in-out md:text-base lg:hover:text-primary">
										Mobile App Development
									</p>
								</li>
								<li>
									<p className="text-[15px] transition duration-500 ease-in-out md:text-base lg:hover:text-primary">
										Digital Marketing
									</p>
								</li>
							</ul>
						</section>
					</section>
				</section>
			</section>
			<section className="h-auto w-full border-t border-secondary">
				<section className="item-center mx-auto flex h-auto w-full max-w-[100rem] flex-col justify-between gap-4 py-4 lg:flex-row lg:gap-2 ">
					{/* left */}
					<address className="hidden h-auto w-fit px-5 lg:flex ">
						<ul className="py-auto  flex w-fit flex-wrap items-center gap-2">
							<li>
								<Link
									href={"/home"}
									className="rounded-full  border border-transparent px-2 py-1 text-secondary transition duration-500 ease-in-out hover:border-black hover:bg-primary"
									aria-label="Home"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href={"/services"}
									className="rounded-full  border border-transparent px-2 py-1 text-secondary transition duration-500 ease-in-out hover:border-black hover:bg-primary"
									aria-label="Services"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href={"/portfolio"}
									className="rounded-full  border border-transparent px-2 py-1 text-secondary transition duration-500 ease-in-out hover:border-black hover:bg-primary"
									aria-label="Portfolio"
								>
									Portfolio
								</Link>
							</li>
							<li>
								<Link
									href={"/teams"}
									className="rounded-full  border border-transparent px-2 py-1 text-secondary transition duration-500 ease-in-out hover:border-black hover:bg-primary"
									aria-label="Our teams"
								>
									Our Teams
								</Link>
							</li>
							<li>
								<Link
									href={"/plans"}
									className="rounded-full  border border-transparent px-2 py-1 text-secondary transition duration-500 ease-in-out hover:border-black hover:bg-primary"
									aria-label="Out Plans"
								>
									Plans
								</Link>
							</li>
							<li>
								<Link
									href={"/contact"}
									className="rounded-full  border border-transparent px-2 py-1 text-secondary transition duration-500 ease-in-out hover:border-black hover:bg-primary"
									aria-label="Contact Us"
								>
									Contact Us
								</Link>
							</li>
						</ul>
					</address>
					{/* mid */}
					<address className="w-full lg:w-fit ">
						<ul className="mx-auto flex w-fit gap-6">
							<li>
								<Link
									href={"https://twitter.com/WebFlexRR"}
									target="_blank"
									className="border-grey1 flex  h-[35px] w-[35px] items-center justify-center rounded-full border border-secondary bg-primary text-secondary transition duration-300 ease-in-out"
									aria-label="Twitter"
								>
									<BsTwitterX className="h-[14px] w-[14px] " />
								</Link>
							</li>
							<li>
								<Link
									href={"https://www.youtube.com/@webflexrr"}
									target="_blank"
									className="border-grey1 flex h-[35px] w-[35px] items-center justify-center rounded-full border border-secondary bg-primary text-secondary transition duration-300 ease-in-out"
									aria-label="Youtube"
								>
									<FaYoutube className="h-[16px] w-[16px] " />
								</Link>
							</li>
							<li>
								<Link
									href={"https://www.linkedin.com/company/webflexrr"}
									target="_blank"
									className="border-grey1 flex h-[35px] w-[35px] items-center justify-center rounded-full border border-secondary bg-primary text-secondary transition duration-300 ease-in-out"
									aria-label="Linkedin"
								>
									<FaLinkedinIn className="h-[16px] w-[16px] " />
								</Link>
							</li>
							<li>
								<Link
									href={
										"https://www.facebook.com/profile.php?id=61553639945217"
									}
									target="_blank"
									className="border-grey1 flex h-[35px] w-[35px] items-center justify-center rounded-full border border-secondary bg-primary text-secondary transition duration-300 ease-in-out"
									aria-label="Facebook"
								>
									<FaFacebookF className="h-[16px] w-[16px]" />
								</Link>
							</li>
							<li>
								<Link
									href={"https://www.instagram.com/webflexrr"}
									target="_blank"
									className="border-grey1 flex h-[35px] w-[35px] items-center justify-center rounded-full border border-secondary bg-primary text-secondary transition duration-300 ease-in-out"
									aria-label="Instagram"
								>
									<FaInstagram className="h-[17px] w-[17px]" />
								</Link>
							</li>
						</ul>
					</address>
					{/* right */}
					<section className="px-5 text-center">
						<p>
							Copyright &#169;2023, WebFlexrr Digital Services, All Rights
							Reserved.
						</p>
					</section>
				</section>
			</section>
		</footer>
	);
};

export default Footer;
