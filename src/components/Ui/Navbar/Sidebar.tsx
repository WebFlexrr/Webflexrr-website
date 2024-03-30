'use client';
import React, { type FC } from 'react';
import { RxCross2 } from 'react-icons/rx';

interface SideBarProps {
	hidden: boolean;
	toggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const SideBar: FC<SideBarProps> = ({ hidden, toggle }) => {
	return (
		<aside
			className={`fixed ${
				!hidden ? ' invisible translate-x-[15rem]' : ' visible translate-x-0'
			} z-50 flex h-full w-full justify-end bg-transparent transition-all duration-700 ease-in-out`}
		>
			<section className="h-full w-[15rem] bg-background2">
				<nav className="h-fit w-full">
					<ul className="flex h-auto w-full flex-col text-left text-base leading-[42px] tracking-[2.8px] ">
						<li className="flex w-full justify-end border-b border-subHeading px-5 py-3 ">
							<RxCross2
								onClick={() => {
									toggle(false);
								}}
								className="h-6 w-6 text-secondary"
							/>
						</li>
						<li className="h-11 w-full border-b border-subHeading p-0 hover:bg-primary ">
							<a
								href={'/#home'}
								onClick={() => {
									toggle(false);
								}}
								className="flex h-full w-full justify-start px-5  text-secondary transition duration-500 ease-in-out"
							>
								Home
							</a>
						</li>
						<li className="h-11 w-full border-b border-subHeading p-0 hover:bg-primary ">
							<a
								href={'/services'}
								onClick={() => {
									toggle(false);
								}}
								className="flex h-full w-full justify-start px-5  text-secondary transition duration-500 ease-in-out"
							>
								Services
							</a>
						</li>
						<li className="h-11 w-full border-b border-subHeading p-0 hover:bg-primary ">
							<a
								href={'/portfolio'}
								onClick={() => {
									toggle(false);
								}}
								className="flex h-full w-full justify-start px-5  text-secondary transition duration-500 ease-in-out"
							>
								Portfolio
							</a>
						</li>
						<li className="h-11 w-full border-b border-subHeading p-0 hover:bg-primary ">
							<a
								href={'/teams'}
								onClick={() => {
									toggle(false);
								}}
								className="flex h-full w-full justify-start px-5  text-secondary transition duration-500 ease-in-out"
							>
								Teams
							</a>
						</li>
						{/* <li className="w-full h-11 p-0 border-b border-subHeading hover:bg-primary ">
              <Link
                href={"/#blog"}
                onClick={() => toggle(false)}
                className="w-full h-full px-5 flex justify-start  text-secondary transition ease-in-out duration-500"
              >
                Blogs
              </Link>
            </li> */}
						<li className="h-11 w-full border-b border-subHeading p-0 hover:bg-primary ">
							<a
								href={'/plans'}
								onClick={() => {
									toggle(false);
								}}
								className="flex h-full w-full justify-start px-5  text-secondary transition duration-500 ease-in-out"
							>
								Plans
							</a>
						</li>
						<li className="h-11 w-full border-b border-subHeading p-0 hover:bg-primary ">
							<a
								href={'/contact'}
								onClick={() => {
									toggle(false);
								}}
								className="flex h-full w-full justify-start px-5  text-secondary transition duration-500 ease-in-out"
							>
								Contact Us
							</a>
						</li>
					</ul>
				</nav>
			</section>
		</aside>
	);
};

export default SideBar;
