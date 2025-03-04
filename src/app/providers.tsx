"use client";
import { HeroUIProvider } from "@heroui/system";
// import SmoothScrolling from "@/components/SmoothScrolling";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		// <SmoothScrolling>

		<HeroUIProvider>
			<NextThemesProvider attribute="class">{children}</NextThemesProvider>
		</HeroUIProvider>

		// </SmoothScrolling>
	);
}
