import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import ContactUsEmail from "@/../emails/ContactUsEmail";

export const POST = async (
	request: NextRequest
): Promise<NextResponse<unknown>> => {
	const body = await request.json();
	console.log(body);

	try {
		const transporter = nodemailer.createTransport({
			host: "smtp.hostinger.com",
			port:
				process.env.NODEMAILER_PORT === undefined
					? process.env.NODEMAILER_PORT
					: 465,
			secure: true, // Use `true` for port 465, `false` for all other ports
			auth: {
				user: process.env.NODEMAILER_USERNAME,
				pass: process.env.NODEMAILER_PASSWORD,
			},
		});

		// send mail with defined transport object
		const info = await transporter.sendMail({
			from: `business@webflexrr.com <business@webflexrr.com>`, // sender address
			to: body.email, // list of receivers
			subject: "Thanks for Contact Us", // Subject line
			// text: "Hello world?", // plain text body
			html: render(
				ContactUsEmail({
					firstName: body.firstName,
					lastName: body.lastName,
					email: body.email,
					companyName: body.companyName,
				}),
				{ pretty: true }
			), // html body
		});

		console.log(info);

		return NextResponse.json(info, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(error, { status: 500 });
	}
};
