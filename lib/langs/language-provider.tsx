"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { messages, type Lang, type Messages } from "./messages";

type LanguageContextValue = {
	lang: Lang;
	setLang: (lang: Lang) => void;
	t: Messages;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
	const router = useRouter();

	function setLang(nextLang: Lang) {
		if (nextLang === lang)
			return;

		const { search, hash } = window.location;
		router.replace(`/${nextLang}${search}${hash}`, { scroll: false });
	}

	return <LanguageContext.Provider value={{ lang, setLang, t: messages[lang] }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
	const context = useContext(LanguageContext);

	if (!context)
		throw new Error("useLanguage must be used inside LanguageProvider.");

	return context;
}
