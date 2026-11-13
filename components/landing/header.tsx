import { ArrowRight, ChevronDown, Globe2, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/app/lib/langs/language-provider";
import type { Lang } from "@/app/lib/langs/messages";
import { Brand } from "@/components/ui/brand";
import { container, sections } from "./styles";

export function Header() {
	const { t, lang, setLang } = useLanguage();
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("");

	return (
		<header className="sticky top-0 z-30 border-b border-[#e3e7df]/70 bg-[#f7f8f4]/95 backdrop-blur-lg">
			<div className={`${container} flex h-20 items-center justify-between gap-2 md:gap-4 xl:h-22 xl:gap-6`}>
				<Brand />
				<nav
					className="hidden items-center gap-1 xl:flex"
					aria-label={t.menu}
				>
					{sections.map((id, index) => (
						<a
							className={`rounded-full px-3 py-2 text-xs font-bold whitespace-nowrap transition-colors hover:bg-[#edf2e9] hover:text-[#183d35] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65] ${activeSection === id ? "bg-[#dde5d5] text-[#183d35]" : ""}`}
							href={`#${id}`}
							key={id}
							aria-current={activeSection === id ? "location" : undefined}
							onClick={() => setActiveSection(id)}
						>
							{t.nav[index]}
						</a>
					))}
				</nav>
				<div className="flex items-center gap-2 md:gap-4 xl:gap-5">
					<label className="flex items-center gap-1 md:gap-2">
						<Globe2
							className="hidden size-4 sm:block"
							aria-hidden="true"
						/>
						<select
							className="w-14 cursor-pointer appearance-none bg-transparent py-2 text-xs font-bold focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65] md:w-18"
							aria-label={t.language}
							value={lang}
							onChange={(event) => setLang(event.target.value as Lang)}
						>
							<option value="en">English</option>
							<option value="fr">Français</option>
							<option value="ar">العربية</option>
						</select>
						<ChevronDown
							className="hidden size-3 sm:block"
							aria-hidden="true"
						/>
					</label>
					<button
						type="button"
						className="hidden cursor-pointer py-2 text-xs font-bold whitespace-nowrap hover:text-[#245f51] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65] md:block"
					>
						{t.signIn}
					</button>
					<button
						type="button"
						className="hidden min-h-12 cursor-pointer items-center justify-center gap-3 rounded-xl border border-transparent bg-[#183d35] px-5 py-3 text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#0f302a] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65] motion-reduce:transition-none md:flex"
					>
						{t.createAccount}
						<ArrowRight
							className="size-4 rtl:-scale-x-100"
							aria-hidden="true"
						/>
					</button>
					<button
						type="button"
						className="grid size-10 cursor-pointer place-items-center rounded-lg border border-[#e3e7df] bg-white focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65] xl:hidden"
						id="menu-toggle"
						aria-label={t.menu}
						aria-expanded={menuOpen}
						aria-controls="mobile-nav"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
					</button>
				</div>
			</div>
			{menuOpen && (
				<nav
					className={`${container} flex flex-col pb-4 xl:hidden`}
					id="mobile-nav"
					aria-label={t.menu}
				>
					{sections.map((id, index) => (
						<a
							className={`rounded-md border-t border-[#e3e7df] px-1 py-3 text-sm font-bold focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65] ${activeSection === id ? "bg-[#dde5d5] text-[#183d35]" : ""}`}
							href={`#${id}`}
							key={id}
							aria-current={activeSection === id ? "location" : undefined}
							onClick={() => {
								setActiveSection(id);
								setMenuOpen(false);
							}}
						>
							{t.nav[index]}
						</a>
					))}
					<div className="flex gap-3 pt-4 md:hidden">
						<button
							type="button"
							className="flex min-h-12 flex-1 cursor-pointer items-center justify-center rounded-xl border border-[#e3e7df] bg-white px-5 py-3 text-xs font-bold text-[#1f2925] shadow-sm transition-colors hover:bg-[#edf2e9] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65] motion-reduce:transition-none"
						>
							{t.signIn}
						</button>
						<button
							type="button"
							className="flex min-h-12 flex-1 cursor-pointer items-center justify-center rounded-xl border border-transparent bg-[#183d35] px-5 py-3 text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#0f302a] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65] motion-reduce:transition-none"
						>
							{t.createAccount}
						</button>
					</div>
				</nav>
			)}
		</header>
	);
}
