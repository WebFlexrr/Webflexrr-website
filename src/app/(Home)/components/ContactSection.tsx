"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Heading from "@/components/Heading";
import { Button, Input, Textarea } from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";
import { sendEmailActions } from "@/lib/server/sendEmail";

const schema = yup.object({
	firstName: yup.string().required("First Name is Required"),
	lastName: yup.string().required("Last Name is Required"),
	email: yup
		.string()
		.email("Email format is not valid")
		.required("Email is Required"),
	companyName: yup.string(),
	additionalMessage: yup.string(),
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

	const onSubmit = async (formData: FormInput): Promise<void> => {
		try {
			// const response = await fetch(
			// 	`${process.env.NEXT_PUBLIC_URL}/api/email-send`,
			// 	{
			// 		method: "POST",
			// 		headers: {
			// 			"Content-Type": "application/json",
			// 		},
			// 		body: JSON.stringify(formData),
			// 	}
			// );

			const data = await sendEmailActions(formData);

			toast.success("Mail Sucessfully send!");
			console.log(data);
		} catch (error) {
			toast.error("Error Happen! Email was not send, Pls Retry");
			console.log(error);
		}
	};

	return (
		<section id={"contact"} className=" relative h-auto w-full ">
			<Toaster position="bottom-center" reverseOrder={true} />
			<section className="mx-auto w-full  max-w-5xl space-y-10 px-5 py-20 md:px-10 lg:py-24 ">
				<Heading
					heading={"Contact Us"}
					subHeading={
						"You can feel free to contact us If you have any query or anything you want."
					}
					para={"Contact Section"}
				/>
				<section className=" flex h-auto  w-full flex-col gap-16 p-5 ">
					<form onSubmit={handleSubmit(onSubmit)}>
						<section className=" grid grid-cols-1 gap-4 md:grid-cols-2">
							<div className=" w-full space-y-2 text-[16px] ">
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
							</div>

							<div className=" w-full space-y-2 text-[16px] ">
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
							</div>
							<div className=" w-full space-y-2 text-[16px] ">
								<Input
									type="email"
									id="email"
									label="Email"
									// placeholder="Enter your Email"
									{...register("email")}
								/>
								<p className="text-sm text-red-700">{errors.email?.message}</p>
							</div>
							<div className="w-full space-y-2 text-[16px]">
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
							</div>
							<div className=" h-40 w-full space-y-2 text-[16px] md:col-span-2 ">
								<Textarea
									id="additionalMessage"
									cols={4}
									rows={4}
									label="additional Message (Option)"
									className="  w-full resize-y text-[16px] "
									{...register("additionalMessage")}
								/>
								<p className="text-sm text-red-700">
									{errors.additionalMessage?.message}
								</p>
							</div>
						</section>
						<section className="col-span-2  flex  w-full justify-center">
							<Button
								type="submit"
								radius="full"
								size="lg"
								color="primary"
								className="px-10 font-dm-sans text-[16px] font-semibold text-foreground"
							>
								Submit
							</Button>
						</section>
					</form>
				</section>
			</section>
		</section>
	);
};

export default ContactSection;
