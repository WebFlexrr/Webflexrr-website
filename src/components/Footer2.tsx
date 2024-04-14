import { Divider, Image } from "@nextui-org/react";
import React from "react";

const Footer2 = (): React.JSX.Element => {
	return (
		<footer className="mx-auto h-auto w-full max-w-6xl border border-black  text-tertiary ">
			<Divider className="mt-4" />
			<section className="flex h-auto w-full py-20">
				{/* left */}
				<section className="h-auto w-full border border-black px-5 md:w-full lg:w-[40%]">
					<div className="flex h-auto w-full max-w-[580px] flex-col gap-10 px-5">
						<Image
							src={"/logos/logo.png"}
							width={"120"}
							height={"0"}
							alt={""}
							className=""
						/>
						<div>
							<p>
								At our agency, each project is a labor of passion and
								commitment. With relentless dedication and meticulous effort, we
								craft digital solutions that stand as a testament to the hard
								work and time invested in building a robust online presence for
								our clients.
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

				<section className="border ">
					<table className="border-spacing-y w-fit table-auto border-separate border-spacing-x-7 text-left text-black ">
						<thead>
							<tr>
								<th>Company</th>
								<th>Service</th>
								<th>Legal</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Services</td>
								<td>Witchy Woman</td>
							</tr>
							<tr>
								<td>Projects</td>
								<td>The Eagles</td>
								<td>1972</td>
							</tr>
							<tr>
								<td>Team</td>
								<td></td>
								<td>Earth, Wind, and Fire</td>
							</tr>
							<tr>
								<td>Pricing</td>
								<td>Shining Star</td>
							</tr>
							<tr>
								<td>Blog</td>
							</tr>
							<tr>
								<td>Contact</td>
							</tr>
						</tbody>
					</table>
				</section>
				{/* <section>
					<ul>
						<li>Company</li>
					</ul>
				</section> */}
			</section>
		</footer>
	);
};

export default Footer2;
