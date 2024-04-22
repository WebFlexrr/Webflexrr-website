"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Heading from "@/components/Heading";
import { Button, Input, Textarea } from "@nextui-org/react";

const schema = yup.object({
	firstName: yup.string().required("First Name is Required"),
	lastName: yup.string().required("Last Name is Required"),
	email: yup
		.string()
		.email("Email format is not valid")
		.required("Email is Required"),
	companyName: yup.string().required("Company Name is Required"),
	additionalMessage: yup.string().required("Message is Required"),
});

type FormInput = yup.InferType<typeof schema>;

const ContactSection = (): React.JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInput>({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			companyName: "",
			additionalMessage: "",
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
				to_name: "Tejodeep",
				message: data.additionalMessage,
			},
		};

		try {
			const response = await fetch(
				"https://api.emailjs.com/api/v1.0/email/send",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
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
		<section id={"contact"} className=" relative h-auto w-full ">
			<section className="mx-auto w-full max-w-5xl space-y-10 px-5 py-20 md:px-10 lg:py-28 ">
				<Heading
					heading={"Contact Us"}
					subHeading={
						"Meet the founders behind Webflexrr Solutions revolutionary development agency"
					}
				/>
				<section className=" flex h-auto w-full flex-col gap-6 p-5  ">
					<section className="flex h-full w-full flex-col gap-16">
						<form
							// eslint-disable-next-line @typescript-eslint/no-misused-promises
							onSubmit={handleSubmit(onSubmit)}
							className=" grid grid-cols-2 gap-4"
						>
							<span className=" w-full space-y-2 text-[16px] ">
								<Input
									type="text"
									id="first Name"
									label="First Name"
									// placeholder="First Name"
									{...register("firstName")}
								/>
								<p className="text-sm text-red-700">
									{errors.firstName?.message}
								</p>
							</span>

							<span className=" w-full space-y-2 text-[16px] ">
								<Input
									type="text"
									id="Last Name"
									label="Last Name"
									// placeholder="Last Name"
									{...register("lastName")}
								/>
								<p className="text-sm text-red-700">
									{errors.lastName?.message}
								</p>
							</span>
							<span className=" w-full space-y-2 text-[16px] ">
								<Input
									type="email"
									id="email"
									label="Email"
									// placeholder="Enter your Email"
									{...register("email")}
								/>
								<p className="text-sm text-red-700">{errors.email?.message}</p>
							</span>
							<span className="w-full space-y-2 text-[16px]">
								<Input
									type="text"
									id="companyName"
									label="Company Name"
									// placeholder="Company Name"
									{...register("companyName")}
								/>
								<p className="text-sm text-red-700">
									{errors.companyName?.message}
								</p>
							</span>
							<div className=" col-span-2 h-40 w-full space-y-2 text-[16px] ">
								<Textarea
									id="additionalMessage"
									cols={4}
									rows={4}
									label="additionalMessage"
									className="  w-full resize-y text-[16px] "
									{...register("additionalMessage")}
								/>
								<p className="text-sm text-red-700">
									{errors.additionalMessage?.message}
								</p>
							</div>
							<section className="col-span-2  flex  w-full justify-center">
								<Button
									type="submit"
									radius="full"
									size="lg"
									color="primary"
									className="px-10 font-dm-sans text-[16px] font-semibold"
								>
									Submit
								</Button>
							</section>
						</form>
					</section>
				</section>
			</section>
		</section>
	);
};

export default ContactSection;
