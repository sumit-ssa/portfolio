import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// import Container from "@/components/ui/Container";
import "devicon/devicon.min.css";

import "aos/dist/aos.css";
import { AOSInit } from "@/components/ui/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sumit Portfolio",
  description: "Journey of Sumit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInit /> {children}
        <Footer />
      </body>
    </html>
  );
}
