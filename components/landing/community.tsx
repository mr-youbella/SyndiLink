import { ArrowRight, Building2, Check, HeartHandshake, House, MessageCircle, ShieldCheck, Users } from "lucide-react";
import { useState, type KeyboardEvent } from "react";
import { useLanguage } from "@/app/lib/langs/language-provider";
import { container, eyebrow, heading, type OpenDialog } from "./styles";

const roleIcons = [Building2, House, Users];

export function Community({ openDialog }: { openDialog: OpenDialog }) {
	const { t, lang } = useLanguage();
	const [activeRole, setActiveRole] = useState(0);

	function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
		const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
		if (!keys.includes(event.key)) return;

		event.preventDefault();
		const lastIndex = t.roles.length - 1;
		let nextIndex = activeRole;

		if (event.key === "Home") nextIndex = 0;
		else if (event.key === "End") nextIndex = lastIndex;
		else {
			const moveForward = event.key === (lang === "ar" ? "ArrowLeft" : "ArrowRight");
			nextIndex = (activeRole + (moveForward ? 1 : lastIndex)) % t.roles.length;
		}

		setActiveRole(nextIndex);
		document.getElementById(`role-tab-${nextIndex}`)?.focus();
	}

	return (
		<>
			<section
				className={`${container} grid items-center gap-8 pt-12 pb-10 md:grid-cols-2 md:gap-10 md:pt-20 md:pb-16 xl:gap-28`}
				id="community"
				aria-labelledby="community-heading"
			>
				<div>
					<span className={eyebrow}>
						<span
							className="h-px w-5 bg-current"
							aria-hidden="true"
						/>
						{t.rolesTag}
					</span>
					<h2
						className={`${heading} my-4 max-w-md`}
						id="community-heading"
					>
						{t.rolesTitle}
					</h2>
					<p className="max-w-sm text-sm leading-loose text-[#5b6961]">{t.rolesIntro}</p>
					<div
						className="relative mx-auto mt-6 hidden h-44 w-64 place-items-center md:grid"
						aria-hidden="true"
					>
						<div className="grid size-32 place-items-center rounded-full border border-[#dce5dd] bg-[#edf2e9] text-[#245f51] outline-1 outline-offset-24 outline-[#dce5dd] outline-dashed">
							<Building2
								className="size-16"
								strokeWidth={1}
							/>
						</div>
						<span className="absolute inset-s-8 top-5 grid size-11 place-items-center rounded-full border border-[#e3e7df] bg-white text-[#245f51] shadow-sm">
							<Users className="size-5" />
						</span>
						<span className="absolute inset-e-7 top-10 grid size-11 place-items-center rounded-full border border-[#e3e7df] bg-white text-[#245f51]">
							<MessageCircle className="size-5" />
						</span>
						<span className="absolute inset-s-18 bottom-1 grid size-11 place-items-center rounded-full border border-[#e3e7df] bg-white text-[#245f51]">
							<HeartHandshake className="size-5" />
						</span>
						<span className="absolute inset-s-8 top-26 size-1 rounded-full bg-[#c47e65]" />
						<span className="absolute inset-e-18 bottom-2 size-1 rounded-full bg-[#245f51]" />
					</div>
					<strong className="mt-5 hidden text-center text-sm font-bold md:block">{t.together}</strong>
					<p className="mx-auto mt-2 hidden max-w-80 text-center text-xs leading-loose text-[#5b6961] md:block">{t.togetherText}</p>
				</div>
				<div>
					<div
						className="flex justify-between gap-2 border-b border-[#e3e7df] xl:justify-start xl:gap-6"
						role="tablist"
						aria-label={t.rolesTag}
					>
						{t.roleNames.map((role, index) => (
							<button
								type="button"
								className="-mb-px cursor-pointer border-b-2 border-transparent py-4 text-xs font-bold text-[#5b6961] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65] aria-selected:border-[#183d35] aria-selected:text-[#183d35]"
								role="tab"
								aria-selected={activeRole === index}
								id={`role-tab-${index}`}
								aria-controls={`role-panel-${index}`}
								key={role}
								onClick={() => setActiveRole(index)}
								onKeyDown={handleTabKeyDown}
								tabIndex={activeRole === index ? 0 : -1}
							>
								{role}
							</button>
						))}
					</div>
					{t.roles.map((role, index) => {
						const Icon = roleIcons[index];

						return (
							<div
								role="tabpanel"
								id={`role-panel-${index}`}
								aria-labelledby={`role-tab-${index}`}
								hidden={activeRole !== index}
								key={role.title}
								className="pt-6 md:pt-8"
							>
								<span className="mb-5 grid size-13 place-items-center rounded-2xl bg-[#edf2e9] text-[#245f51]">
									<Icon
										className="size-7"
										strokeWidth={1.6}
										aria-hidden="true"
									/>
								</span>
								<h3 className="mb-4 max-w-md text-2xl leading-snug font-extrabold tracking-tight xl:text-3xl rtl:tracking-normal">{role.title}</h3>
								<p className="max-w-md text-sm leading-loose text-[#5b6961]">{role.text}</p>
								<ul className="my-6 grid gap-3">
									{role.items.map((item) => (
										<li
											className="flex items-start gap-3 text-xs leading-loose"
											key={item}
										>
											<span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#edf2e9] text-[#245f51]">
												<Check
													className="size-4"
													aria-hidden="true"
												/>
											</span>
											{item}
										</li>
									))}
								</ul>
								<button
									type="button"
									className="inline-flex cursor-pointer items-center gap-3 py-1 text-sm font-extrabold text-[#245f51] hover:underline hover:underline-offset-4 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65]"
									onClick={() => openDialog("start")}
								>
									{t.start}
									<ArrowRight
										className="size-5 rtl:-scale-x-100"
										aria-hidden="true"
									/>
								</button>
							</div>
						);
					})}
				</div>
			</section>
			<div className={container}>
				<div className="flex items-start justify-center gap-3 border-y border-[#e3e7df] px-2 py-5 text-[#245f51] md:items-center md:px-8">
					<ShieldCheck
						className="size-6 shrink-0"
						strokeWidth={1.6}
						aria-hidden="true"
					/>
					<p className="text-xs leading-loose text-[#5b6961]">{t.trackingNote}</p>
				</div>
			</div>
		</>
	);
}
