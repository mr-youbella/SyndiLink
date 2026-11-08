import { CalendarDays, ChartNoAxesCombined, Megaphone, MessageCircle, Wallet, Wrench } from "lucide-react";
import { useLanguage } from "@/app/lib/langs/language-provider";
import { container, eyebrow, heading } from "./styles";

const featureIcons = [MessageCircle, Wallet, Wrench, CalendarDays, ChartNoAxesCombined, Megaphone];

export function Features() {
	const { t } = useLanguage();

	return (
		<section
			className={`${container} pt-5 pb-12 xl:pb-16`}
			id="features"
			aria-labelledby="features-heading"
		>
			<div className="mb-8 text-center">
				<span className={eyebrow}>
					<span
						className="h-px w-5 bg-current"
						aria-hidden="true"
					/>
					{t.featuresTag}
				</span>
				<h2
					className={`${heading} my-3`}
					id="features-heading"
				>
					{t.featuresTitle}
				</h2>
				<p className="mx-auto max-w-lg text-sm leading-loose text-[#5b6961] md:max-w-none">{t.featuresIntro}</p>
			</div>
			<div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-6">
				{t.features.map((feature, index) => {
					const Icon = featureIcons[index];

					return (
						<article
							className="relative min-h-52 rounded-xl border border-[#e3e7df] bg-white p-4 transition-colors hover:border-[#245f51] md:p-6 xl:min-h-56 xl:p-4"
							key={feature.title}
						>
							<span className="mb-5 grid size-11 place-items-center rounded-xl bg-[#edf2e9] text-[#245f51]">
								<Icon
									className="size-6"
									strokeWidth={1.65}
									aria-hidden="true"
								/>
							</span>
							<span
								className="absolute inset-e-4 top-5 text-xs text-[#5b6961]"
								aria-hidden="true"
							>
								0{index + 1}
							</span>
							<h3 className="mb-2 text-sm leading-normal font-extrabold tracking-tight">{feature.title}</h3>
							<p className="text-xs leading-loose text-[#5b6961]">{feature.text}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
}
