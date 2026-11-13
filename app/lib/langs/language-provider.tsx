"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { messages, type Lang, type Messages } from "./messages";

type LanguageContextValue = {
	lang: Lang;
	setLang: (lang: Lang) => void;
	t: Messages;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [lang, setLang] = useState<Lang>("en");

	useEffect(() => {
		document.documentElement.lang = lang;
		document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
	}, [lang]);

	return <LanguageContext.Provider value={{ lang, setLang, t: messages[lang] }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
	const context = useContext(LanguageContext);

	if (!context)
		throw new Error("useLanguage must be used inside LanguageProvider.");

	return context;
}
