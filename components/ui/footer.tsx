import { Leaf } from "lucide-react";
import { container, sections } from "../landing/styles";
import { Brand } from "./brand";
import { useLanguage } from "@/lib/langs/language-provider";

export function Footer() {
	const { t, lang } = useLanguage();

	return (
		<footer className="border-t border-[#e3e7df]">
			<div className={`${container} flex flex-col items-start justify-between gap-6 py-8 md:flex-row md:items-center md:gap-8`}>
				<div>
					<Brand compact />
					<p className="mt-3 text-xs text-[#5b6961]">{t.footerText}</p>
				</div>
				<nav
					className="flex flex-wrap gap-4 text-xs font-semibold md:gap-7"
					aria-label={t.menu}
				>
					{sections.map((id, index) => (
						<a
							className="hover:text-[#245f51] hover:underline hover:underline-offset-4 rounded-md focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65]"
							href={`#${id}`}
							key={id}
						>
							{t.nav[index]}
						</a>
					))}
				</nav>
			</div>

			<div className={container}>
				<div className="flex flex-col justify-between gap-4 border-t border-[#e3e7df] py-5 text-xs text-[#5b6961] md:flex-row md:items-center md:gap-5">
					<span>© 2026 SyndiLink. {t.footerRights}</span>

					<nav
						className="flex flex-wrap items-center gap-x-4 gap-y-2"
						aria-label={t.footerLegalNavigation}
					>
						<a
							href={`/${lang}/privacy`}
							className="rounded-sm font-medium transition-colors hover:text-[#245f51] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65]"
						>
							{t.privacyPolicy}
						</a>

						<span aria-hidden="true">·</span>

						<a
							href={`/${lang}/terms`}
							className="rounded-sm font-medium transition-colors hover:text-[#245f51] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65]"
						>
							{t.termsOfService}
						</a>
					</nav>

					<span className="flex items-center gap-2 mx-auto md:mx-0">
						<Leaf className="size-3" aria-hidden="true" />
						{t.footerNote}
					</span>
				</div>
			</div>

		</footer>
	);
}
