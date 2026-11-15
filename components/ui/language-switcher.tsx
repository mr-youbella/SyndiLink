"use client";

import { Globe2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { Lang } from "@/lib/langs/messages";
import { useLanguage } from "@/lib/langs/language-provider";

const languages = ["en", "fr", "ar"] as const;

function isLang(value: string): value is Lang {
	return languages.some((lang) => lang === value);
}

export default function LanguageSwitcher() {
	const { lang, setLang, t } = useLanguage();

	return (
		<Select
			value={lang}
			onValueChange={(value) => {
				if (value !== null && isLang(value))
					setLang(value);
			}}
		>
			<SelectTrigger
				aria-label={t.language}
				className=" h-10 w-25 cursor-pointer rounded-xl border border-[#DCE5DD] bg-white px-3 font-semibold text-[#183D35] shadow-sm transition-colors hover:border-[#8BBB92] hover:bg-[#F7F8F4] focus-visible:ring-2 focus-visible:ring-[#C47E65]"
			>
				<Globe2
					className="size-4 shrink-0"
					aria-hidden="true"
				/>

				<SelectValue placeholder="EN" />
			</SelectTrigger>

			<SelectContent
				align="end"
				side="bottom"
				sideOffset={8}
				alignItemWithTrigger={false}
			>
				<SelectItem value="en">🇬🇧 English</SelectItem>
				<SelectItem value="fr">🇫🇷 Français</SelectItem>
				<SelectItem value="ar">🇲🇦 العربية</SelectItem>
			</SelectContent>
		</Select>
	);
}
