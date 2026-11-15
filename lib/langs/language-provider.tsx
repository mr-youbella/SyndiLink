"use client";

import { createContext, useContext, type ReactNode } from "react";
import { messages, type Lang, type Messages } from "./messages";

type LanguageContextValue = {
	lang: Lang;
	setLang: (lang: Lang) => void;
	t: Messages;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
	function setLang(nextLang: Lang) {
		if (nextLang === lang)
			return;

		const url = new URL(window.location.href);
		url.pathname = `/${nextLang}`;
		window.location.replace(url);
	}

	return <LanguageContext.Provider value={{ lang, setLang, t: messages[lang] }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
	const context = useContext(LanguageContext);

	if (!context)
		throw new Error("useLanguage must be used inside LanguageProvider.");

	return context;
}
