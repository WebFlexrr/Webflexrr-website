"use client";
import SmoothScrolling from "@/components/SmoothScrolling";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<SmoothScrolling>
			<NextUIProvider>
				<NextThemesProvider attribute="class" defaultTheme="dark">
					{children}
				</NextThemesProvider>
			</NextUIProvider>
		</SmoothScrolling>
	);
}
