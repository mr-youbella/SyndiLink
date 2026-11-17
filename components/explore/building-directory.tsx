"use client";

import { ChevronDown, MapPin, Search, SearchX } from "lucide-react";
import { useState } from "react";
import { cities, mockBuildings, mockViewer, type City } from "@/lib/explore/mock-buildings";
import { useLanguage } from "@/lib/langs/language-provider";
import { BuildingCard } from "./building-card";

const cityOptions = Object.keys(cities) as City[];

function searchText(text: string) {
	return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f\u064b-\u065f]/g, "").replace(/[^a-z0-9\u0621-\u064a]/g, " ");
}

export function BuildingDirectory() {
	const { lang, t } = useLanguage();
	const [query, setQuery] = useState("");
	const [city, setCity] = useState("");
	const copy = t.explore;
	const terms = searchText(query).trim().split(/\s+/).filter(Boolean);

	const buildings = mockBuildings.filter((building) => {
		if (city && building.city !== city)
			return false;

		const names = Object.values(building.name);
		const cityNames = Object.values(cities[building.city]);
		const districts = Object.values(building.district);

		const text = [building.id, ...names, ...cityNames, ...districts].join(" ");
		const searchable = searchText(text);

		return terms.every((word) => searchable.includes(word));
	});

	const count = buildings.length;
	const resultCount = count === 1 ? copy.oneResult : copy.resultCount.replace("{count}", count.toString());

	function clearFilters() {
		setQuery("");
		setCity("");
		document.getElementById("building-query")?.focus();
	}

	return (
		<>
			<div role="search" aria-label={copy.searchLabel} className="mt-6 grid gap-4 rounded-2xl border border-[#dce5dd] bg-white p-4 shadow-sm sm:grid-cols-3 sm:p-5">
				<div className="sm:col-span-2">
					<label htmlFor="building-query" className="mb-2 block text-sm font-extrabold text-[#183d35]">{copy.searchLabel}</label>
					<div className="relative">
						<Search aria-hidden="true" className="pointer-events-none absolute inset-s-3 top-1/2 size-5 -translate-y-1/2 text-[#5b6961]" />
						<input id="building-query" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.searchPlaceholder} className="h-12 w-full rounded-xl border border-[#7b8c81] bg-[#f7f8f4] pe-3 ps-10 text-base placeholder:text-[#5b6961] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#245f51] sm:text-sm" />
					</div>
				</div>

				<div>
					<label htmlFor="building-city" className="mb-2 block text-sm font-extrabold text-[#183d35]">{copy.city}</label>
					<div className="relative">
						<MapPin aria-hidden="true" className="pointer-events-none absolute inset-s-3 top-1/2 size-5 -translate-y-1/2 text-[#5b6961]" />
						<select id="building-city" value={city} onChange={(event) => setCity(event.target.value)} className="h-12 w-full cursor-pointer appearance-none rounded-xl border border-[#7b8c81] bg-[#f7f8f4] pe-9 ps-10 text-base text-[#183d35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#245f51] sm:text-sm">
							<option value="">{copy.allCities}</option>
							{cityOptions.map((value) => <option value={value} key={value}>{cities[value][lang]}</option>)}
						</select>
						<ChevronDown aria-hidden="true" className="pointer-events-none absolute inset-e-3 top-1/2 size-4 -translate-y-1/2 text-[#245f51]" />
					</div>
				</div>
			</div>

			<section className="mt-8" aria-labelledby="building-results">
				<div className="mb-4 flex flex-wrap items-end justify-between gap-2">
					<div>
						<h2 id="building-results" className="text-2xl font-extrabold text-[#183d35]">{copy.results}</h2>
						<p role="status" className="mt-1 text-sm text-[#5b6961]">{resultCount}</p>
					</div>
					<p className="rounded-full bg-[#e8efe7] px-3 py-1 text-xs font-bold text-[#183d35]">{copy.demo}</p>
				</div>

				{buildings.length > 0 ? (
					<ul role="list" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
						{buildings.map((building) => (
							<li key={building.id}>
								<BuildingCard building={building} lang={lang} t={t} />
							</li>
						))}
					</ul>
				) : (
					<div className="grid place-items-center rounded-2xl border border-[#dce5dd] bg-white px-5 py-10 text-center">
						<div className="grid size-12 place-items-center rounded-xl bg-[#e8efe7] text-[#245f51]">
							<SearchX aria-hidden="true" className="size-6" />
						</div>
						<h3 className="mt-4 text-lg font-extrabold text-[#183d35]">{copy.empty}</h3>
						<p className="mt-2 text-sm leading-relaxed text-[#5b6961]">{copy.emptyHint}</p>
						<div className="mt-5 flex flex-wrap justify-center gap-3">
							<button type="button" onClick={clearFilters} className="min-h-11 cursor-pointer rounded-lg border border-[#7b8c81] px-4 py-2 text-sm font-extrabold text-[#245f51] hover:bg-[#f0f4ef] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#245f51]">{copy.clear}</button>
							{mockViewer.canCreateBuilding && (
								<button type="button" aria-label={copy.create} aria-haspopup="dialog" className="min-h-11 cursor-pointer rounded-lg bg-[#183d35] px-4 py-2 text-sm font-extrabold text-white hover:bg-[#245f51] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#245f51]">
									{copy.create}
								</button>
							)}
						</div>
					</div>
				)}
			</section>
		</>
	);
}
