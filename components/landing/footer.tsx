import { ArrowRight, Building2, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/langs/language-provider";
import { container, eyebrow, heading } from "./styles";

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
