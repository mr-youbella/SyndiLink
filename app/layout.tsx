import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { LanguageProvider } from "./lib/langs/language-provider";
import "./globals.css";

const manrope = localFont({
	src: "../public/fonts/manrope-variable.ttf",
	weight: "200 800",
	display: "swap",
	adjustFontFallback: false,
	variable: "--font-manrope",
});

const arabic = localFont({
	src: "../public/fonts/noto-sans-arabic-variable.ttf",
	weight: "100 900",
	display: "swap",
	adjustFontFallback: false,
	variable: "--font-arabic",
});

export const metadata: Metadata = {
	title: "SyndiLink — Your Building. Better Connected.",
	description: "One welcoming space for building managers, owners, and residents to communicate, track contributions, and care for their community.",
	applicationName: "SyndiLink",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en"
			dir="ltr"
			className="scroll-pt-26 scroll-smooth motion-reduce:scroll-auto"
		>
			<body className={`${manrope.variable} ${arabic.variable} bg-[#f7f8f4] font-[family-name:var(--font-manrope),var(--font-arabic),sans-serif] text-[#1f2925] antialiased selection:bg-[#dce5dd] selection:text-[#183d35]`}>
				<LanguageProvider>{children}</LanguageProvider>
			</body>
		</html>
	);
}
