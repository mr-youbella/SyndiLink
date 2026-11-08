import { ArrowDown, ArrowRight, Building2, HeartHandshake, UserPlus } from "lucide-react";
import { useLanguage } from "@/app/lib/langs/language-provider";
import { container, eyebrow } from "./styles";

const stepIcons = [UserPlus, Building2, HeartHandshake];

export function HowItWorks() {
	const { t } = useLanguage();

	return (
		<section
			className="relative overflow-hidden bg-[#183d35] text-white"
			id="how-it-works"
			aria-labelledby="how-heading"
		>
			<span
				className="pointer-events-none absolute -inset-s-52 -top-32 size-100 rounded-full border border-[#dce5dd]/10"
				aria-hidden="true"
			/>
			<div className={`${container} grid items-center gap-8 py-10 xl:grid-cols-3 xl:gap-12 xl:py-12`}>
				<div>
					<span className={`${eyebrow} text-[#dce5dd]`}>{t.stepsTag}</span>
					<h2
						className="mt-3 mb-4 max-w-md text-3xl leading-snug font-extrabold tracking-tight rtl:tracking-normal"
						id="how-heading"
					>
						{t.stepsTitle}
					</h2>
					<span
						className="hidden h-1 w-24 -rotate-3 rounded-full bg-[#c47e65] xl:block"
						aria-hidden="true"
					/>
					<a
						href="#community"
						className="mt-4 grid size-10 place-items-center rounded-full border border-[#dce5dd]/50 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65] xl:hidden"
						aria-label={t.nav[2]}
					>
						<ArrowDown
							className="size-5"
							aria-hidden="true"
						/>
					</a>
				</div>
				<div className="grid md:grid-cols-3 md:gap-8 xl:col-span-2">
					{t.steps.map((step, index) => {
						const Icon = stepIcons[index];

						return (
							<article
								className="relative border-t border-[#dce5dd]/25 py-5 ps-15 md:border-s md:border-t-0 md:py-0 md:ps-6"
								key={step.title}
							>
								<div className="absolute inset-s-0 top-5 flex flex-col items-center gap-2 text-[#dce5dd] md:static md:mb-6 md:flex-row md:justify-between">
									<span className="text-xs tracking-wide">0{index + 1}</span>
									<Icon
										className="size-7"
										strokeWidth={1.4}
										aria-hidden="true"
									/>
								</div>
								<h3 className="mb-3 text-sm leading-relaxed font-bold">{step.title}</h3>
								<p className="text-xs leading-loose text-[#dce5dd] md:max-w-52">{step.text}</p>
								{index < t.steps.length - 1 && (
									<ArrowRight
										className="absolute -inset-e-6 top-1/2 hidden size-5 text-[#dce5dd]/70 md:block rtl:-scale-x-100"
										aria-hidden="true"
									/>
								)}
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
