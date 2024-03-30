'use client';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PulseCircle from '@/components/Ui/PulseCircle';
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaYoutube,
} from 'react-icons/fa';
import Link from 'next/link';
import { BsTwitterX } from 'react-icons/bs';
import Heading from '@/components/Heading';

const schema = yup.object({
	firstName: yup.string().required('First Name is Required'),
	lastName: yup.string().required('Last Name is Required'),
	number: yup.number().required('Phone Number is Required'),
	email: yup
		.string()
		.email('Email format is not valid')
		.required('Email is Required'),
	companyName: yup.string().required('Company Name is Required'),
	additionalMessage: yup.string().required('Message is Required'),
});

type FormInput = yup.InferType<typeof schema>;

const ContactUs = (): React.JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInput>({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			companyName: '',
			additionalMessage: '',
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data: FormInput): Promise<void> => {
		const formData = {
			service_id: `${process.env.NEXT_PUBLIC_YOUR_SERVICE_ID}`,
			template_id: `${process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID}`,
			user_id: `${process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY}`,
			template_params: {
				from_name: data.firstName,
				from_email: data.email,
				to_name: 'Tejodeep',
				message: data.additionalMessage,
			},
		};

		try {
			const response = await fetch(
				'https://api.emailjs.com/api/v1.0/email/send',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				}
			);

			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className="h-auto w-full ">
			<section className="h-auto w-full py-20  xl:px-0 xl:py-28">
				<section className=" mx-auto flex h-auto w-full max-w-[100rem] flex-col px-5 md:px-5">
					{/* Heading */}
					<section className=" m-auto flex h-auto w-full max-w-[90rem] flex-col items-center justify-between gap-3 text-secondary md:gap-4  lg:flex-row lg:gap-0   ">
						<section className=" flex  h-full w-full flex-col items-center justify-between gap-3 md:flex-row md:gap-0  lg:w-[59%] ">
							<section className=" flex h-full w-full items-center md:w-[15%] lg:w-[54%] ">
								<section className=" flex h-full w-full justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="100"
										height="93"
										viewBox="0 0 100 93"
										className=" relative h-[110px] w-[110px] leading-[90px]"
									>
										<g id="Group_773" transform="translate(-1935.085 -655)">
											{' '}
											<path
												id="Path_748"
												className="st0"
												style={{
													fill: 'none',
													stroke: 'currentcolor',
													strokeWidth: '2',
													strokeLinecap: 'round',
													strokeLinejoin: 'round',
												}}
												d="M1974.5,737.5h-37.4v-73.2h55.3v34.2h35.8V679h-27.7"
											></path>{' '}
											<path
												id="Path_749"
												className="st0"
												style={{
													fill: 'none',
													stroke: 'currentcolor',
													strokeWidth: '2',
													strokeLinecap: 'round',
													strokeLinejoin: 'round',
												}}
												d="M1974.5,745.7h58.6v-35.8h-58.6v27.7"
											></path>{' '}
											<path
												id="Path_750"
												className="st0"
												style={{
													fill: 'none',
													stroke: 'currentcolor',
													strokeWidth: '2',
													strokeLinecap: 'round',
													strokeLinejoin: 'round',
												}}
												d="M1974.5,718l24.9,12.5c2.7,1.4,6,1.4,8.7,0l24.9-12.5"
											></path>{' '}
											<ellipse
												id="Ellipse_56"
												className="st0"
												style={{
													fill: 'none',
													stroke: 'currentcolor',
													strokeWidth: '2',
													strokeLinecap: 'round',
													strokeLinejoin: 'round',
												}}
												cx="1950.4"
												cy="678.9"
												rx="4.7"
												ry="5.1"
											></ellipse>{' '}
											<line
												id="Line_69"
												className="st0"
												style={{
													fill: 'none',
													stroke: 'currentcolor',
													strokeWidth: '2',
													strokeLinecap: 'round',
													strokeLinejoin: 'round',
												}}
												x1="1945.6"
												y1="693.4"
												x2="1984.2"
												y2="693.4"
											></line>{' '}
											<line
												id="Line_70"
												className="st0"
												style={{
													fill: 'none',
													stroke: 'currentcolor',
													strokeWidth: '2',
													strokeLinecap: 'round',
													strokeLinejoin: 'round',
												}}
												x1="1945.6"
												y1="702"
												x2="1984.2"
												y2="702"
											></line>{' '}
											<line
												id="Line_71"
												className="st0"
												style={{
													fill: 'none',
													stroke: 'currentcolor',
													strokeWidth: '2',
													strokeLinecap: 'round',
													strokeLinejoin: 'round',
												}}
												x1="1945.6"
												y1="709.7"
												x2="1966.2"
												y2="709.7"
											></line>{' '}
											<line
												id="Line_72"
												className="st0"
												style={{
													fill: 'none',
													stroke: 'currentcolor',
													strokeWidth: '2',
													strokeLinecap: 'round',
													strokeLinejoin: 'round',
												}}
												x1="1945.6"
												y1="727.7"
												x2="1951.6"
												y2="727.7"
											></line>
										</g>
									</svg>
								</section>
							</section>
							<section className=" h-full w-full md:w-[75%] lg:w-[87%]">
								<section className=" text-center text-[44px] font-semibold leading-[52px] text-primary lg:text-start xl:text-[47px] xl:leading-[57px] 2xl:text-[60px] 2xl:leading-[72px]">
									<span>We'll respond to you in an hour. </span>
								</section>
							</section>
						</section>
						<section className="h-full w-full lg:w-[33%]">
							<section className=" text-center lg:text-start ">
								<p>
									Discover the essence of innovation through our diverse
									portfolio. Each project at WebFlexrr is a testament to
									creativity, precision, and transformative digital solutions.
									Explore the journey of success we&apos;ve crafted for our
									clients.
								</p>
							</section>
						</section>
					</section>

					{/* Body */}
					<section className=" mt-10 flex h-auto w-full flex-col gap-10 md:mt-28 md:flex-row lg:justify-between xl:mt-40">
						{/* Left side */}
						<section className=" relative h-full w-full py-16 md:w-[60%] md:py-0 lg:w-[60%] xl:w-[68%]">
							<section className=" flex h-full w-full flex-col xl:gap-6 xl:pr-32">
								<div className=" hero1 flex h-fit w-full items-center gap-6">
									<PulseCircle />
									<span className="text-[20px] leading-[42.64px] text-primary sm:text-[26px]">
										Get in Touch
									</span>
								</div>

								<section className=" flex h-full w-full flex-col gap-7">
									<section className="w-full text-left xl:pr-28 ">
										<h3 className="text-left text-[30px] md:text-[40px]">
											Reach Out to Us
										</h3>
									</section>
									<form
										// eslint-disable-next-line @typescript-eslint/no-misused-promises
										onSubmit={handleSubmit(onSubmit)}
										className="flex h-fit w-full flex-wrap gap-0 "
									>
										<span className=" h-fit w-full pb-5 text-[16px] text-paragraph md:w-1/2 md:pb-10 md:pr-6 lg:pr-9">
											<input
												type="text"
												id="firstName"
												className="w-full border-b-2 border-paragraph bg-transparent py-[15px] focus:outline-none"
												placeholder="First Name"
												{...register('firstName')}
											/>
											<p>{errors.firstName?.message}</p>
										</span>
										<span className=" h-fit w-full pb-5 text-[16px] text-paragraph md:w-1/2 md:pb-10 md:pl-6 lg:pl-9">
											<input
												type="text"
												id="lastName"
												className="h-fit w-full border-b-2 border-paragraph bg-transparent py-[15px] focus:outline-none"
												placeholder="Last Name"
												{...register('lastName')}
											/>
											<p>{errors.lastName?.message}</p>
										</span>
										<span className="h-fit w-full pb-5 text-[16px] text-paragraph md:w-1/2 md:pb-10 md:pr-6 lg:pr-9">
											<input
												type="number"
												id="number"
												className="w-full border-b-2 border-paragraph bg-transparent py-[15px] focus:outline-none"
												placeholder="Your Number"
												{...register('number')}
											/>
											<p>{errors.number?.message}</p>
										</span>
										<span className="h-fit w-full pb-5 text-[16px] text-paragraph md:w-1/2 md:pb-10 md:pl-6 lg:pl-9">
											<input
												type="email"
												id="email"
												className="w-full border-b-2 border-paragraph bg-transparent py-[15px] focus:outline-none"
												placeholder="Your Email"
												{...register('email')}
											/>
											<p>{errors.email?.message}</p>
										</span>
										<span className="h-fit  w-full pb-5 text-[16px] text-paragraph md:pb-10">
											<input
												type="text"
												id="companyName"
												className="w-full border-b-2 border-paragraph bg-transparent py-[15px] focus:outline-none"
												placeholder="Company Name"
												{...register('companyName')}
											/>
											<p>{errors.companyName?.message}</p>
										</span>
										<textarea
											id="additionalMessage"
											cols={4}
											rows={4}
											placeholder="Additional Message"
											className="h-26 w-full resize-y border-b-2 border-paragraph bg-transparent py-[15px] text-[16px] text-paragraph focus:outline-none lg:h-32"
											{...register('additionalMessage')}
										/>
										<p>{errors.additionalMessage?.message}</p>
										<button
											type="submit"
											className="group mt-16 flex h-fit w-fit items-center gap-3 border border-secondary px-10 py-3 text-secondary transition duration-500 ease-in-out hover:border-primary hover:text-primary lg:mt-20"
										>
											<div className="h-2 w-2 rounded-full bg-primary  transition duration-500 ease-in-out group-hover:bg-secondary"></div>
											Submit
										</button>
									</form>
								</section>
							</section>
						</section>
						{/* Right Side */}
						<section className=" relative h-fit w-full rounded-lg border border-primary p-9 md:h-[40rem] md:w-[40%] md:p-6 lg:h-full lg:w-[40%] xl:w-[32%] xl:p-14 ">
							<section className="flex h-auto w-full flex-col items-start gap-6">
								<h2 className="text-[44px] leading-[52.6px]">Say Hello !</h2>
								<p>
									Duis convallis convallis pretium nibh ipsumtellus id interdum
									velit laoreet.
								</p>
								<Image
									src={'/assets/career-img.jpg'}
									width={'1000'}
									height={'0'}
									className="h-full w-full object-cover"
									alt={''}
								/>
							</section>
							<section className=" mt-10 flex h-auto w-full flex-col gap-4 xl:mt-20 ">
								<h4 className="text-[30px] font-semibold leading-[34.8px]">
									Enquires
								</h4>
								<span>webflexrr@gmail.com</span>
								<address className="mt-4 w-full lg:w-fit ">
									<ul className="mx-auto flex w-fit flex-wrap gap-6">
										<li>
											<Link
												href={'https://twitter.com/WebFlexRR'}
												target="_blank"
												className="border-grey1 flex  h-[35px] w-[35px] items-center justify-center rounded-full border border-secondary bg-primary text-secondary transition duration-300 ease-in-out"
												aria-label="Twitter"
											>
												<BsTwitterX className="h-[14px] w-[14px] " />
											</Link>
										</li>
										<li>
											<Link
												href={'https://www.youtube.com/@webflexrr'}
												target="_blank"
												className="border-grey1 flex h-[35px] w-[35px] items-center justify-center rounded-full border border-secondary bg-primary text-secondary transition duration-300 ease-in-out"
												aria-label="Linkedin"
											>
												<FaYoutube className="h-[16px] w-[16px] " />
											</Link>
										</li>
										<li>
											<Link
												href={'https://www.linkedin.com/company/webflexrr'}
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
													'https://www.facebook.com/profile.php?id=61553639945217'
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
												href={'https://www.instagram.com/webflexrr'}
												target="_blank"
												className="border-grey1 flex h-[35px] w-[35px] items-center justify-center rounded-full border border-secondary bg-primary text-secondary transition duration-300 ease-in-out"
												aria-label="Instagram"
											>
												<FaInstagram className="h-[17px] w-[17px]" />
											</Link>
										</li>
									</ul>
								</address>
							</section>
						</section>
					</section>
				</section>

				{/* Address & Location */}
				<section className=" mt-20 h-auto w-full lg:mt-40 ">
					<section className=" m-auto flex h-auto w-full flex-col items-center justify-between gap-3 px-5 text-secondary">
						<Heading heading={null} subHeading={'Our Affiliate Branches'} />
						<div className=" mx-auto w-full text-center lg:max-w-[60%] ">
							Et tortor consequat id porta nibh venenatis cras sed felis.
							Pharetra diam sit amet nisl suscipit. Etiam dignissim diam quis
							enim lobortis scelerisque fermentum. Volutpat blandit aliquam
							etiam velit sceleris.
						</div>
					</section>
					<section className="relative z-0 mb-[390px] mt-10 h-auto w-full md:mb-[500px] lg:mt-16 xl:mb-[560px]">
						<section className=" relative z-10 mx-auto flex h-auto w-full max-w-[90rem] flex-col justify-center px-5 sm:px-20 md:max-w-full md:flex-row md:flex-wrap md:px-5 lg:max-w-[100rem]">
							<section className="my-2 h-auto w-full px-2 md:w-1/2 xl:w-1/4">
								<div className="flex h-auto w-full flex-col gap-6 rounded-lg border border-secondary bg-background3 px-10 py-12 transition duration-700 ease-in-out hover:border-primary lg:gap-10 lg:px-14  lg:py-20 xl:px-10 xl:py-16">
									<h5 className="text-primary">Canbeera</h5>
									<h5>45 Laggon Street, Canberra, Looloith, E1 6GL</h5>
									<section>
										<h5>+00 (0)12 34 56 789</h5>
										<h5>canbeera@example.com</h5>
									</section>
								</div>
							</section>
							<section className="my-2 h-auto w-full px-2 md:w-1/2 xl:w-1/4">
								<div className="flex h-auto w-full flex-col gap-6 rounded-lg border border-secondary bg-background3 px-10 py-12 transition duration-700 ease-in-out hover:border-primary lg:gap-10 lg:px-14  lg:py-20 xl:px-10 xl:py-16">
									<h5 className="text-primary">Canbeera</h5>
									<h5>45 Laggon Street, Canberra, Looloith, E1 6GL</h5>
									<section>
										<h5>+00 (0)12 34 56 789</h5>
										<h5>canbeera@example.com</h5>
									</section>
								</div>
							</section>
							<section className="my-2 h-auto w-full px-2 md:w-1/2 xl:w-1/4">
								<div className="flex h-auto w-full flex-col gap-6 rounded-lg border border-secondary bg-background3 px-10 py-12 transition duration-700 ease-in-out hover:border-primary lg:gap-10 lg:px-14  lg:py-20 xl:px-10 xl:py-16">
									<h5 className="text-primary">Canbeera</h5>
									<h5>45 Laggon Street, Canberra, Looloith, E1 6GL</h5>
									<section>
										<h5>+00 (0)12 34 56 789</h5>
										<h5>canbeera@example.com</h5>
									</section>
								</div>
							</section>
						</section>

						<section className="absolute -bottom-[390px] -z-10 w-full lg:-bottom-[515px] xl:-bottom-[530px] ">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d460.31440373094006!2d88.4096017!3d22.6345709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef1ff6e4e3e2ac3%3A0x2ef1ce449bfd9b0c!2sWebflexrr%20Digital%20Services!5e0!3m2!1sen!2sin!4v1705682875020!5m2!1sen!2sin"
								className="h-[400px] w-full lg:h-[550px] xl:h-[580px]"
								loading="lazy"
							/>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default ContactUs;
