import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikhil Verma - Full Stack Developer & Software Tester",
  description:
    "Full Stack Developer with 1+ year experience in MERN Stack, Next.js, and automation testing. Building scalable web applications and SaaS solutions.",
  keywords:
    "Full Stack Developer, MERN Stack, React, Node.js, Software Testing, Portfolio",
  authors: [{ name: "Nikhil Verma" }],
  openGraph: {
    title: "Nikhil Verma - Full Stack Developer",
    description:
      "Full Stack Developer & Software Tester specializing in MERN Stack and automation testing",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
