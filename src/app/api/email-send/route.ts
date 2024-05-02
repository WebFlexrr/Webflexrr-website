import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import ContactUsEmail from "@/../emails/ContactUsEmail";
import ForOwnEmail from "@/../emails/ForOwnEmail";

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
		const forClient = await transporter.sendMail({
			from: `business@webflexrr.com <business@webflexrr.com>`, // sender address
			to: body.email, // list of receivers
			subject: "Thanks for Contacted Us", // Subject line
			// text: "Hello world?", // plain text body
			html: render(
				ContactUsEmail({
					firstName: body.firstName,
				}),
				{ pretty: true }
			),
		});

		const forOwn = await transporter.sendMail({
			from: `business@webflexrr.com <business@webflexrr.com>`, // sender address
			to: `business@webflexrr.com`, // list of receivers
			subject: "A new prospect send a message", // Subject line
			html: render(
				ForOwnEmail({
					firstName: body.firstName,
					lastName: body.lastName,
					email: body.email,
					companyName: body.companyName,
					additionalMessage: body.additionalMessage,
				}),
				{ pretty: true }
			),
		});

		console.log(forClient);
		console.log(forOwn);

		return NextResponse.json(forClient, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(error, { status: 500 });
	}
};
