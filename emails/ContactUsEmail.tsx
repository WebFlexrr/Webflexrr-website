import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.NEXT_PUBLIC_URL ?? `http://localhost:3000`;

interface ContactUsEmailProps {
	firstName: string;
	lastName: string;
	email: string;
	companyName: string;
}

export const ContactUsEmail = ({
	firstName,
	lastName,
	email,
	companyName,
}: ContactUsEmailProps): React.JSX.Element => (
	<Html>
		<Head />
		<Preview>
			The sales intelligence platform that helps you uncover qualified leads.
		</Preview>
		<Body style={main}>
			<Container style={container}>
				<Img
					src={`${baseUrl}/logos/logo.png`}
					width="270"
					alt="webflexrr"
					style={logo}
				/>
				<Text style={paragraph}>Hi {firstName},</Text>
				<Text style={paragraph}>
					Welcome to Webflexrr Digital Services, Our team will contact you as
					Soon as possible. Therefore hold your horses.
				</Text>
				<Text style={paragraph}>{companyName}</Text>
				<Section style={btnContainer}>
					<Button style={button} href="https://webflexrr.com">
						Get started
					</Button>
				</Section>
				<Text style={paragraph}>
					Best,
					<br />
					The Webflexrr team
				</Text>
				<Hr style={hr} />
				<Text style={footer}>
					470 Noor Ave STE B #1148, South San Francisco, CA 94080
				</Text>
			</Container>
		</Body>
	</Html>
);

export default ContactUsEmail;

const main = {
	backgroundColor: "#ffffff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
};

const logo = {
	margin: "0 auto",
};

const paragraph = {
	fontSize: "16px",
	lineHeight: "26px",
};

const btnContainer = {
	textAlign: "center" as const,
};

const button = {
	backgroundColor: "#08425f",
	borderRadius: "3px",
	color: "#fff",
	fontSize: "16px",
	textDecoration: "none",
	textAlign: "center" as const,
	display: "block",
	padding: "12px",
};

const hr = {
	borderColor: "#cccccc",
	margin: "20px 0",
};

const footer = {
	color: "#8898aa",
	fontSize: "12px",
};
