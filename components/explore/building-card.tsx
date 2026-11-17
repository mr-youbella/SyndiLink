import { ArrowRight, Building2, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import { cities, type City, type MockBuilding } from "@/lib/explore/mock-buildings";
import type { Lang, Messages } from "@/lib/langs/messages";
import { ExploreDialog } from "./explore-dialog";

const coverColors: Record<City, string> = {
	khouribga: "from-[#dce5dd] to-[#eef2e9] text-[#245f51]",
	casablanca: "from-[#dce8e6] to-[#f0f3ee] text-[#245f51]",
	marrakech: "from-[#efdfd6] to-[#f6ede6] text-[#854c3d]",
};

export function BuildingCard({ building, lang, t }: { building: MockBuilding; lang: Lang; t: Messages }) {
	const copy = t.explore;
	const name = building.name[lang];
	const location = [building.district[lang], cities[building.city][lang]].join(lang === "ar" ? "، " : ", ");

	return (
		<article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#dce5dd] bg-white shadow-sm transition-shadow hover:shadow-md motion-reduce:transition-none">
			<div aria-hidden="true" className={`relative grid h-36 place-items-center overflow-hidden bg-linear-to-br ${coverColors[building.city]}`}>
				<div className="absolute size-56 rounded-full border border-current opacity-10" />
				<div className="absolute size-40 rounded-full border border-current opacity-15" />
				<div className="grid size-23 place-items-center rounded-3xl border border-white bg-white/45 shadow-sm">
					<Building2 className="size-13" strokeWidth={1.25} />
				</div>
			</div>

			<div className="flex flex-1 flex-col p-5">
				<h3 className="text-lg font-extrabold text-[#183d35]">{name}</h3>
				<p className="mt-2 flex items-center gap-2 text-sm text-[#5b6961]">
					<MapPin aria-hidden="true" className="size-4 shrink-0" />
					{location}
				</p>
				<p className="mb-5 mt-4 flex flex-wrap items-center gap-2 text-xs text-[#5b6961]">
					{copy.buildingId}
					<span dir="ltr" className="rounded-md bg-[#f0f4ef] px-2 py-1 font-mono font-semibold text-[#245f51]">{building.id}</span>
				</p>
				<button type="button" aria-haspopup="dialog" aria-label={`${copy.view} — ${name}`} className="mt-auto flex min-h-11 cursor-pointer items-center justify-between gap-2 rounded-lg border border-[#c4d4c9] px-3 text-start text-sm font-extrabold text-[#245f51] hover:border-[#245f51] hover:bg-[#f0f4ef] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#245f51]">
					{copy.view}
					<ArrowRight aria-hidden="true" className="size-4 shrink-0 rtl:rotate-180" />
				</button>
			</div>
		</article>
	);
}
