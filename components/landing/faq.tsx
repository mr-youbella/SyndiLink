import { CircleHelp, Plus } from "lucide-react";
import { useLanguage } from "@/app/lib/langs/language-provider";
import { container, eyebrow, heading } from "./styles";

export function Faq() {
	const { t } = useLanguage();

	return (
		<section
			className={`${container} grid gap-6 py-12 md:grid-cols-2 md:gap-12 md:py-20 xl:gap-24`}
			id="faq"
			aria-labelledby="faq-heading"
		>
			<div>
				<span className={eyebrow}>
					<span
						className="h-px w-5 bg-current"
						aria-hidden="true"
					/>
					{t.faqTag}
				</span>
				<h2
					className={`${heading} mt-4 mb-7 max-w-sm`}
					id="faq-heading"
				>
					{t.faqTitle}
				</h2>
				<CircleHelp
					className="hidden size-15 text-[#245f51]/50 md:block"
					strokeWidth={1}
					aria-hidden="true"
				/>
			</div>
			<div>
				{t.faqs.map((faq) => (
					<details
						className="group border-b border-[#e3e7df] first:border-t"
						key={faq.question}
						name="syndilink-faq"
					>
						<summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-sm leading-relaxed font-bold focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65]">
							{faq.question}
							<span
								className="grid size-6 shrink-0 place-items-center rounded-full border border-[#e3e7df]"
								aria-hidden="true"
							>
								<Plus className="size-3 transition-transform group-open:rotate-45 motion-reduce:transition-none" />
							</span>
						</summary>
						<p className="pe-7 pb-6 text-sm leading-loose text-[#5b6961]">{faq.answer}</p>
					</details>
				))}
			</div>
		</section>
	);
}
