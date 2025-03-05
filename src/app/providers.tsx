"use client";
import { HeroUIProvider } from "@heroui/react";
// import SmoothScrolling from "@/components/SmoothScrolling";

export function Providers({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		// <SmoothScrolling>

		<HeroUIProvider>{children}</HeroUIProvider>

		// </SmoothScrolling>
	);
}
