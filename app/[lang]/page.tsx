import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, messages } from "@/app/lib/langs/messages";
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
	};

	if (siteUrl) {
		metadata.metadataBase = new URL(siteUrl);
		metadata.alternates = {
			canonical: `/${lang}`,
			languages: {
				en: "/en",
				fr: "/fr",
				ar: "/ar",
				"x-default": "/en",
			},
		};
	}

	return metadata;
}

export default function Home() {
	return <LandingPage />;
}
