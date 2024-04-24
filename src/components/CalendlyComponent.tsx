import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyComponent = (): React.JSX.Element => {
	return (
		<div className="">
			<InlineWidget url="https://calendly.com/webflexrr/consultation-meeting" />
		</div>
	);
};

export default CalendlyComponent;
