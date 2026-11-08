import { ArrowRight, Building2, Check, House, X } from "lucide-react";
import { useState, type RefObject } from "react";
import { useLanguage } from "@/app/lib/langs/language-provider";
import { eyebrow, heading, type DialogMode } from "./styles";

type WelcomeDialogProps = {
	dialogRef: RefObject<HTMLDialogElement | null>;
	mode: DialogMode;
};

export function WelcomeDialog({ dialogRef, mode }: WelcomeDialogProps) {
	const { t } = useLanguage();
	const [selectedPath, setSelectedPath] = useState(0);

	function closeAndExplore() {
		dialogRef.current?.close();
		document.getElementById("how-it-works")?.scrollIntoView();
	}

	return (
		<dialog
			ref={dialogRef}
			className="fixed inset-4 m-auto max-h-11/12 w-auto max-w-lg overflow-auto rounded-2xl border border-[#e3e7df] bg-[#f7f8f4] p-6 text-[#1f2925] shadow-2xl backdrop:bg-[#183d35]/50 backdrop:backdrop-blur-sm sm:p-10"
			aria-labelledby="welcome-title"
			aria-describedby="welcome-description"
			onClick={(event) => {
				const bounds = event.currentTarget.getBoundingClientRect();
				const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
				if (event.target === event.currentTarget && outside) dialogRef.current?.close();
			}}
			onClose={() => setSelectedPath(0)}
		>
			<button
				type="button"
				className="absolute inset-e-4 top-4 grid size-8 cursor-pointer place-items-center rounded-full bg-[#edf2e9] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65]"
				aria-label={t.close}
				onClick={() => dialogRef.current?.close()}
			>
				<X
					className="size-5"
					aria-hidden="true"
				/>
			</button>
			<span className="grid size-14 place-items-center rounded-2xl bg-[#dce5dd] text-[#183d35]">
				<Building2
					className="size-7"
					strokeWidth={1.5}
					aria-hidden="true"
				/>
			</span>
			<span className={`${eyebrow} mt-5`}>{t.modalTag}</span>
			<h2
				className={`${heading} mt-3 mb-4`}
				id="welcome-title"
			>
				{mode === "start" ? t.modalTitle : t.modalSignInTitle}
			</h2>
			<p
				className="text-sm leading-loose text-[#5b6961]"
				id="welcome-description"
			>
				{mode === "start" ? t.modalText : t.modalSignInText}
			</p>
			{mode === "start" && (
				<>
					<div className="mt-6 grid gap-3">
						{t.modalRoles.map((role, index) => (
							<button
								type="button"
								className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-start text-xs focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65] ${selectedPath === index ? "border-[#245f51] bg-[#edf2e9]" : "border-[#e3e7df] bg-white"}`}
								aria-pressed={selectedPath === index}
								key={role}
								onClick={() => setSelectedPath(index)}
							>
								{index === 0 ? (
									<Building2
										className="size-5 shrink-0"
										aria-hidden="true"
									/>
								) : (
									<House
										className="size-5 shrink-0"
										aria-hidden="true"
									/>
								)}
								<span>{role}</span>
								<span
									className={`ms-auto grid size-4 shrink-0 place-items-center rounded-full border border-[#245f51] ${selectedPath === index ? "bg-[#245f51] text-white" : ""}`}
									aria-hidden="true"
								>
									{selectedPath === index && <Check className="size-3" />}
								</span>
							</button>
						))}
					</div>
					<p
						className="mt-3 min-h-12 text-xs leading-loose text-[#5b6961]"
						aria-live="polite"
					>
						{t.modalRoleText[selectedPath]}
					</p>
				</>
			)}
			<button
				type="button"
				className="mt-2 flex min-h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-transparent bg-[#183d35] px-5 py-3 text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#0f302a] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65] motion-reduce:transition-none"
				onClick={closeAndExplore}
			>
				{t.modalNext}
				<ArrowRight
					className="size-4 rtl:-scale-x-100"
					aria-hidden="true"
				/>
			</button>
		</dialog>
	);
}
