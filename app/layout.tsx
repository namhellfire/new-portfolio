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
  title: "Nguyen Hoang Nam | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 7+ years of experience specializing in React, Next.js, and TypeScript. Expert in building scalable, high-performance web applications.",
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Ho Chi Minh City",
    "Vietnam",
    "Nguyen Hoang Nam",
  ],
  authors: [{ name: "Nguyen Hoang Nam" }],
  creator: "Nguyen Hoang Nam",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Nguyen Hoang Nam | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 7+ years of experience specializing in React, Next.js, and TypeScript.",
    siteName: "Nguyen Hoang Nam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Hoang Nam | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 7+ years of experience specializing in React, Next.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/me/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
