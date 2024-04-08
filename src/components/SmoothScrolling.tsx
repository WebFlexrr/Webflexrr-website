"use client";
import ReactLenis from "@studio-freight/react-lenis";
import React from "react";

const SmoothScrolling = ({
	children,
}: {
	children: React.ReactNode;
}): React.JSX.Element => {
	return (
		<ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
			{children}
		</ReactLenis>
	);
};

export default SmoothScrolling;
