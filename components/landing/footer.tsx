import { ArrowRight, Building2, Leaf, Sparkles } from "lucide-react";
import { useLanguage } from "@/app/lib/langs/language-provider";
import { Brand } from "@/components/ui/brand";
import { container, eyebrow, heading, sections } from "./styles";

export function ClosingCta() {
	const { t } = useLanguage();

	return (
		<section
			className={`${container} mb-10 md:mb-16`}
			id="contact"
			aria-labelledby="closing-heading"
		>
			<div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl border border-[#e3e7df] bg-[#edf2e9] p-6 md:flex-row md:items-center md:gap-10 md:p-10 xl:p-12">
				<div className="z-10">
					<span className={eyebrow}>
						<Sparkles
							className="size-4"
							aria-hidden="true"
						/>
						{t.ctaTag}
					</span>
					<h2
						className={`${heading} my-3 max-w-xl`}
						id="closing-heading"
					>
						{t.ctaTitle}
					</h2>
					<p className="max-w-lg text-sm leading-loose text-[#5b6961]">{t.ctaText}</p>
				</div>
				<button
					type="button"
					className="z-10 flex min-h-12 shrink-0 cursor-pointer items-center justify-center gap-3 rounded-xl border border-transparent bg-[#183d35] px-5 py-3 text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#0f302a] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65] motion-reduce:transition-none"
				>
					{t.start}
					<ArrowRight
						className="size-5 rtl:-scale-x-100"
						aria-hidden="true"
					/>
				</button>
				<Building2
					className="pointer-events-none absolute -inset-e-5 -bottom-12 size-48 -rotate-9 text-[#dce5dd] md:inset-e-36 xl:inset-e-52"
					strokeWidth={0.6}
					aria-hidden="true"
				/>
			</div>
		</section>
	);
}

export function Footer() {
	const { t } = useLanguage();

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
				<div className="flex flex-col justify-between gap-3 border-t border-[#e3e7df] py-5 text-xs text-[#5b6961] md:flex-row md:gap-5">
					<span>© 2026 SyndiLink. {t.footerRights}</span>
					<span className="flex items-center gap-2">
						<Leaf
							className="size-3"
							aria-hidden="true"
						/>
						{t.footerNote}
					</span>
				</div>
			</div>
		</footer>
	);
}
