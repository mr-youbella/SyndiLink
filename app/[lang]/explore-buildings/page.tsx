import type { Metadata } from "next";
import { MapPinned } from "lucide-react";
import { notFound } from "next/navigation";
import { BuildingDirectory } from "@/components/explore/building-directory";
import { ExploreHeader } from "@/components/explore/explore-header";
import { isLang, messages } from "@/lib/langs/messages";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { lang } = await params;

	if (!isLang(lang))
		notFound();

	const copy = messages[lang].explore;

	return { title: `${copy.navigation} | SyndiLink`, description: copy.intro, robots: { index: false } };
}

export default async function ExploreBuildingsPage({ params }: PageProps) {
	const { lang } = await params;

	if (!isLang(lang))
		notFound();

	const copy = messages[lang].explore;

	return (
		<>
			<ExploreHeader lang={lang} />

			<main className="mx-auto max-w-7xl px-4 pb-16 pt-7 sm:px-8 sm:pt-10">
				<section className="relative overflow-hidden rounded-3xl border border-[#dce5dd] bg-linear-to-br from-[#e8efe7] to-[#f1f4ea] px-6 py-8 sm:px-10 sm:py-11" aria-labelledby="explore-title">
					<div aria-hidden="true" className="pointer-events-none absolute -inset-e-5 top-1/2 hidden size-72 -translate-y-1/2 place-items-center rounded-full border border-[#d0ddd0] text-[#729484] md:grid">
						<div className="grid size-52 place-items-center rounded-full border border-[#d0ddd0] bg-[#e6eee3]">
							<MapPinned className="size-24" strokeWidth={1} />
						</div>
					</div>

					<div className="max-w-xl md:me-48">
						<h1 id="explore-title" className="text-3xl font-extrabold text-[#183d35] sm:text-5xl">{copy.title}</h1>
						<p className="mt-3 max-w-lg text-base leading-relaxed text-[#5b6961] sm:text-lg">{copy.intro}</p>
					</div>
				</section>

				<BuildingDirectory />
			</main>
		</>
	);
}
