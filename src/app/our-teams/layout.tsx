import type { Metadata } from "next";
import "../globals.css";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Our team",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
};
export default RootLayout;
