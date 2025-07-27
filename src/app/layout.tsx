import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Merriweather, Lato } from "next/font/google";

// Load Google Fonts via next/font to optimize
const merriw = Merriweather({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-serif",
});
const lato = Lato({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-sans",
});

export const metadata = {
	title: "The Bulger Firm",
	description: "Trusted legal counsel.",
	icons: {
		icon: "/images/logo-white.png", // Standard favicon
		shortcut: "/favicon.ico", // <link rel="shortcut icon">
		// apple: "/apple-touch-icon.png", // iOS icon
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${merriw.variable} ${lato.variable}`}>
			<body className="font-sans antialiased text-gray-800">
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
