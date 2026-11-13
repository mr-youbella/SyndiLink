import Image from "next/image";
import { ArrowRight, Building2, CheckCircle2, House, Leaf, Play } from "lucide-react";
import { useLanguage } from "@/app/lib/langs/language-provider";
import { container } from "./styles";

export function Hero() {
	const { t } = useLanguage();

	return (
		<section
			className={`${container} grid items-center gap-8 py-10 md:min-h-132 md:grid-cols-2 md:gap-6 xl:min-h-144 xl:gap-8 xl:py-12`}
			aria-labelledby="hero-heading"
		>
			<div className="relative z-10 md:py-4">
				<span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e3e7df] bg-[#edf2e9] px-3 py-2 text-xs font-extrabold text-[#245f51]">
					<span
						className="size-1 rounded-full bg-[#245f51]"
						aria-hidden="true"
					/>
					<Building2
						className="size-3"
						aria-hidden="true"
					/>
					{t.eyebrow}
				</span>
				<h1
					className="text-4xl leading-tight font-extrabold tracking-tighter sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl rtl:leading-relaxed rtl:tracking-normal"
					id="hero-heading"
				>
					<span className="block">{t.title[0]}</span>
					<span className="relative block pb-4 text-[#245f51]">
						{t.title[1]}
						<span
							className="absolute inset-s-0 bottom-1 h-1 w-1/2 -rotate-2 rounded-full bg-[#c47e65] rtl:rotate-2"
							aria-hidden="true"
						/>
					</span>
				</h1>
				<p className="mt-5 mb-6 max-w-lg text-sm leading-loose text-[#5b6961] xl:text-base">{t.intro}</p>
				<div className="flex flex-wrap gap-3">
					<button
						type="button"
						className="flex min-h-12 cursor-pointer items-center justify-center gap-3 rounded-xl border border-transparent bg-[#183d35] px-5 py-3 text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#0f302a] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65] motion-reduce:transition-none"
					>
						{t.start}
						<ArrowRight
							className="size-5 rtl:-scale-x-100"
							aria-hidden="true"
						/>
					</button>
					<a
						className="flex min-h-12 items-center justify-center gap-3 rounded-xl border border-[#e3e7df] bg-white px-5 py-3 text-xs font-bold shadow-sm transition-colors hover:bg-[#edf2e9] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65]"
						href="#how-it-works"
					>
						<span className="grid size-6 place-items-center rounded-full border-2 border-current">
							<Play
								className="size-3"
								fill="currentColor"
								aria-hidden="true"
							/>
						</span>
						{t.watch}
					</a>
				</div>
				<ul className="mt-6 flex flex-wrap gap-3 xl:gap-4">
					{t.benefits.map((benefit) => (
						<li
							className="flex items-center gap-1 text-xs font-bold"
							key={benefit}
						>
							<CheckCircle2
								className="size-4 shrink-0 text-[#245f51]"
								aria-hidden="true"
							/>
							{benefit}
						</li>
					))}
				</ul>
			</div>
			<div className="relative ms-3 min-w-0 md:ms-0 md:ps-4">
				<div className="relative h-92 overflow-hidden rounded-2xl rounded-ss-[7rem] bg-[#dce5dd] md:h-104 xl:h-118 xl:rounded-ss-[12rem]">
					<Image
						src="/images/residential-hero.jpg"
						alt={t.photoAlt}
						fill
						sizes="(max-width: 767px) 100vw, 50vw"
						preload
						className="object-cover"
					/>
					<div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-b from-transparent to-[#183d35]/90" />
					<div className="absolute inset-x-5 bottom-5 flex items-center gap-3 text-white xl:inset-x-7 xl:bottom-7">
						<span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/45">
							<Leaf
								className="size-5"
								aria-hidden="true"
							/>
						</span>
						<div>
							<strong className="mb-1 block text-sm font-bold">{t.photoLabel}</strong>
							<span className="text-xs text-white/85">{t.photoCaption}</span>
						</div>
					</div>
				</div>
				<div
					className="absolute -inset-s-3 top-2 z-10 flex size-22 flex-col items-center justify-center gap-2 rounded-full bg-[#edf2e9] text-[#183d35] ring-8 ring-[#f7f8f4] xl:-inset-s-6 xl:top-4 xl:size-28"
					aria-hidden="true"
				>
					<House
						className="size-7"
						strokeWidth={1.5}
					/>
					<span className="max-w-20 text-center text-xs font-bold">{t.sealLabel}</span>
				</div>
				<span
					className="absolute -inset-e-4 -bottom-3 -z-10 size-26 rounded-full border border-[#dce5dd] xl:-inset-e-10 xl:-bottom-6 xl:size-34"
					aria-hidden="true"
				/>
			</div>
		</section>
	);
}
