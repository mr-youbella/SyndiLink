"use client";

import { MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { cities, type City } from "@/lib/explore/mock-buildings";
import type { Lang } from "@/lib/langs/messages";

const cityOptions = Object.keys(cities) as City[];

type Props = {
	city: string;
	setCity: (city: string) => void;
	lang: Lang;
	label: string;
	allCities: string;
};

export function BuildingCitySelect({ city, setCity, lang, label, allCities }: Props) {
	return (
		<div>
			<label htmlFor="building-city" className="mb-2 block text-sm font-extrabold text-[#183d35]">
				{label}
			</label>

			<Select
				modal={false}
				value={city || "all"}
				onValueChange={(value) => setCity(value === "all" || value === null ? "" : value)}
			>
				<SelectTrigger
					id="building-city"
					className="h-12! w-full cursor-pointer rounded-xl border border-[#7b8c81] bg-[#f7f8f4] px-3 text-sm text-[#183d35]"
				>
					<MapPin aria-hidden="true" className="size-5 shrink-0 text-[#5b6961]" />
					<SelectValue placeholder="all" />
				</SelectTrigger>

				<SelectContent
					positionMethod="fixed"
					align="end"
					side="bottom"
					sideOffset={8}
					alignItemWithTrigger={false}
				>
					<SelectItem value="all">{allCities}</SelectItem>
					{cityOptions.map((value) => (
						<SelectItem key={value} value={value}>
							{cities[value][lang]}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
