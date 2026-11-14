import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, languages, messages } from "@/app/lib/langs/messages";
import { LandingPage } from "@/components/landing-page";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
	const { lang } = await params;

	if (!isLang(lang))
		notFound();

	const copy = messages[lang];
	const siteUrl = process.env.SITE_URL;
	const metadata: Metadata = {
		title: `SyndiLink — ${copy.title.join(" ")}`,
		description: copy.intro,
		applicationName: "SyndiLink",
	};

	if (siteUrl) {
		metadata.metadataBase = new URL(siteUrl);
		metadata.alternates = {
			canonical: `/${lang}`,
			languages: {
				...Object.fromEntries(languages.map((language) => [language, `/${language}`])),
				"x-default": "/en",
			},
		};
	}

	return metadata;
}

export default function Home() {
	return <LandingPage />;
}
