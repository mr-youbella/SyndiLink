import type { ReactNode } from "react";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { LanguageProvider } from "@/lib/langs/language-provider";
import { isLang, languages } from "@/lib/langs/messages";
import "../globals.css";

const manrope = localFont({
	src: "../../public/fonts/manrope-variable.ttf",
	weight: "200 800",
	display: "swap",
	adjustFontFallback: false,
	variable: "--font-manrope",
});

const arabic = localFont({
	src: "../../public/fonts/noto-sans-arabic-variable.ttf",
	weight: "100 900",
	display: "swap",
	adjustFontFallback: false,
	variable: "--font-arabic",
});

export function generateStaticParams() {
	return languages.map((lang) => ({ lang }));
}

export default async function RootLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
	const { lang } = await params;

	if (!isLang(lang)) notFound();

	return (
		<html
			lang={lang}
			dir={lang === "ar" ? "rtl" : "ltr"}
			className="scroll-pt-26 scroll-smooth motion-reduce:scroll-auto"
		>
			<body className={`${manrope.variable} ${arabic.variable} bg-[#f7f8f4] font-[family-name:var(--font-manrope),var(--font-arabic),sans-serif] text-[#1f2925] selection:bg-[#dce5dd] selection:text-[#183d35]`}>
				<LanguageProvider lang={lang}>{children}</LanguageProvider>
			</body>
		</html>
	);
}
