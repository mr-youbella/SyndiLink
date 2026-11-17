import type { Lang } from "@/lib/langs/messages";

type LocalizedName = Record<Lang, string>;

export const cities = {
	khouribga: { en: "Khouribga", fr: "Khouribga", ar: "خريبكة" },
	casablanca: { en: "Casablanca", fr: "Casablanca", ar: "الدار البيضاء" },
	marrakech: { en: "Marrakech", fr: "Marrakech", ar: "مراكش" },
} satisfies Record<string, LocalizedName>;

export type City = keyof typeof cities;

export type MockBuilding = {
	id: string;
	name: LocalizedName;
	city: City;
	district: LocalizedName;
	image?: string;
};

export const mockBuildings: MockBuilding[] = [
	{
		id: "SL-KHO-001",
		name: { en: "Les Oliviers Residence", fr: "Résidence Les Oliviers", ar: "إقامة الزيتون" },
		city: "khouribga",
		district: { en: "Hay Al Qods", fr: "Hay Al Qods", ar: "حي القدس" },
		image: "/images/residential-hero.webp",
	},
	{
		id: "SL-CAS-002",
		name: { en: "Jardins d'Anfa Residence", fr: "Résidence Les Jardins d'Anfa", ar: "إقامة حدائق أنفا" },
		city: "casablanca",
		district: { en: "Bourgogne", fr: "Bourgogne", ar: "بوركون" },
	},
	{
		id: "SL-MAR-003",
		name: { en: "Les Palmiers Residence", fr: "Résidence Les Palmiers", ar: "إقامة النخيل" },
		city: "marrakech",
		district: { en: "Guéliz", fr: "Guéliz", ar: "كيليز" },
	},
];

export const mockViewer = { canCreateBuilding: true };
