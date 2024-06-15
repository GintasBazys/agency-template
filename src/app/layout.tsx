import type { Metadata } from "next";
import { Comme } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Script from "next/script";

const comme = Comme({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Agency template",
	description: "Transform your online presence with our expert web services. We offer innovative website design, development, SEO, and digital marketing solutions to help your business thrive in the digital age. Partner with us for exceptional results and a seamless digital experience.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</head>
			<body className={comme.className}>
				<Header />
				{children}
				<Footer />
				<Script strategy="beforeInteractive" src="./flowbite.min.js"></Script>
			</body>
		</html>
	);
}
