import type { Metadata } from "next";
import "../globals.css";
import React, { type ReactNode } from "react";
import Navbar from "@/components/Ui/Navbar/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Services",
    template: "%s | WebFlexrr Digital Services",
  },
  description: "This is services Page of Webflexrr Digital Services",
};

const ServiceLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <main className="relative w-full h-screen overflow-y-auto overflow-x-hidden z-30 bg-background2 scroll-smooth">
      <Navbar />
      {children}
    </main>
  );
};
export default ServiceLayout;
