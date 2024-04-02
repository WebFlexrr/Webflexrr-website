'use client';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PulseCircle from '@/components/Ui/PulseCircle';

const schema = yup.object({
	firstName: yup.string().required('First Name is Required'),
	lastName: yup.string().required('Last Name is Required'),
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
		<section id={'contact'} className=" h-auto w-full lg:py-36">
			<section className=" h-auto w-full lg:h-[55rem]">
				<section className="flex h-full w-full flex-col lg:flex-row">
					<section className=" relative h-[40rem] w-full lg:h-full lg:w-[45%] xl:w-[35%]  ">
						<Image
							src={'/assets/contact-form.png'}
							width={'1000'}
							height={'0'}
							className="h-full w-full object-cover"
							alt={''}
						/>
						{/* <div className="absolute bottom-0 w-full h-[120px] flex justify-center bg-gradient-to-t from-sky-500 to-indigo-500  ">
              <section className=" h-full border flex gap-12 justify-center text-primary">
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 121.3 94"
                  className=" border w-[1em] h-[1em] fill-primary"
                >
                  <g>
                    <path d="M15,4.5h63.9c5.1,0,9.2,4.1,9.3,9.2v35.1c0,2.5-1,4.8-2.8,6.5C83.6,57,81.3,58,78.8,58H60.7  c-12.4,0-19.5,4.4-30.5,11.2c-1.8,1.1-3.7,2.3-5,3.1c-2.3,1.4-4,1.4-5.4-0.1c-1-1.1-1.4-3-1.4-5.8v-7.7c0-0.2-0.1-0.4-0.2-0.5  C18,58.1,17.9,58,17.7,58H15c-5.1,0-9.2-4.1-9.3-9.2V13.7C5.8,8.6,9.9,4.5,15,4.5 M78.9,8.2H15c-3.1,0-5.5,2.5-5.5,5.5v35.1  c0,3.1,2.5,5.5,5.5,5.5h2.6c2.5,0,4.5,2,4.5,4.5v7.7c0,3.6-0.1,3.4,1.7,2.3c1.9-1.2,3.2-2,4.4-2.7c11.6-7.1,19-11.8,32.5-11.8h18.1  c1.5,0,2.9-0.6,4-1.6c1-1,1.6-2.4,1.6-3.9V13.7C84.4,10.7,82,8.2,78.9,8.2"></path>{" "}
                    <path d="M47,28.2c2.2,0,4,1.8,4,4s-1.8,4-4,4c-2.2,0-4-1.8-4-4S44.7,28.2,47,28.2L47,28.2 M64.8,28.2  c2.2,0,4,1.8,4,4s-1.8,4-4,4c-2.2,0-4-1.8-4-4S62.6,28.2,64.8,28.2L64.8,28.2 M29.1,28.2c2.2,0,4,1.8,4,4s-1.8,4-4,4s-4-1.8-4-4  C25.1,30,26.9,28.2,29.1,28.2"></path>{" "}
                    <path d="M110,35.6H91v13.2c0,3.2-1.3,6.3-3.6,8.6c-2.3,2.3-5.4,3.5-8.6,3.6H60.7c-1.4,0-2.8,0.1-4.2,0.2v11.6  c0,3.1,2.5,5.5,5.5,5.5h12.4c12.8,0,16.6,3.7,28.6,10.9c2.1,1.3,2.9-0.8,2.9-3.2v-5.8c0-1.1,0.9-2,2-2h2c3.1,0,5.5-2.5,5.5-5.5  V41.1C115.5,38.1,113,35.6,110,35.6"></path>
                  </g>
                </svg>
                <section className="w-fit h-fit flex flex-col text-secondary">
                  <span className="text-[26px] leading-[42.64px] tracking-[1.3px] ">
                    24/7 Contact Support
                  </span>
                  <span>info@email.com</span>
                </section>
              </section>
            </div> */}
					</section>
					<section className=" h-full w-full py-16 lg:w-[55%] lg:py-0 xl:w-[65%]">
						<section className="flex h-full w-full flex-col gap-6 p-5 pb-[100px] lg:p-[50px] xl:p-[100px]">
							<div className="hero1 flex h-fit w-full items-center gap-6    ">
								<PulseCircle />
								<span className="text-[20px] leading-[42.64px] text-primary sm:text-[26px]">
									Get in Touch
								</span>
							</div>

							<section className="flex h-full w-full flex-col gap-16">
								<section className="w-full text-left xl:pr-28 ">
									<h3 className="text-left">
										Do you have any querries please reach us
									</h3>
								</section>
								<form
									// eslint-disable-next-line @typescript-eslint/no-misused-promises
									onSubmit={handleSubmit(onSubmit)}
									className="flex h-fit w-full flex-wrap gap-0 "
								>
									<span className="h-fit w-full pb-10  text-[16px] text-paragraph lg:w-1/2 lg:pr-11">
										<input
											type="text"
											id="firstName"
											className="w-full border-b border-paragraph bg-transparent py-[15px] focus:outline-none"
											placeholder="First Name"
											{...register('firstName')}
										/>
										<p>{errors.firstName?.message}</p>
									</span>
									<span className="h-fit w-full pb-10 text-[16px] text-paragraph lg:w-1/2 lg:pl-11">
										<input
											type="text"
											id="lastName"
											className="h-fit w-full border-b border-paragraph bg-transparent py-[15px] focus:outline-none"
											placeholder="Last Name"
											{...register('lastName')}
										/>
										<p>{errors.lastName?.message}</p>
									</span>
									<span className="h-fit w-full pb-10 text-[16px] text-paragraph lg:w-1/2 lg:pr-11">
										<input
											type="email"
											id="email"
											className="w-full border-b border-paragraph bg-transparent py-[15px] focus:outline-none"
											placeholder="Your Email"
											{...register('email')}
										/>
										<p>{errors.email?.message}</p>
									</span>
									<span className="h-fit w-full pb-10 text-[16px] text-paragraph lg:w-1/2 lg:pl-11">
										<input
											type="text"
											id="companyName"
											className="w-full border-b border-paragraph bg-transparent py-[15px] focus:outline-none"
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
										className="h-32 w-full resize-y border-b border-paragraph bg-transparent py-[15px] text-[16px] text-paragraph focus:outline-none"
										{...register('additionalMessage')}
									/>
									<p>{errors.additionalMessage?.message}</p>
									<button
										type="submit"
										className="group mt-20 flex h-fit w-fit items-center gap-3 border border-secondary px-10 py-3 text-secondary transition duration-500 ease-in-out hover:border-primary hover:text-primary"
									>
										<div className="h-2 w-2 rounded-full bg-primary  transition duration-500 ease-in-out group-hover:bg-secondary"></div>
										Submit
									</button>
								</form>
							</section>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default ContactUs;
