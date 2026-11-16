"use client";

import { X } from "lucide-react";
import { useId, useRef, type ReactNode, type Ref } from "react";

type DialogProps = {
	dialogRef: Ref<HTMLDialogElement>;
	title: string;
	closeLabel: string;
	children: ReactNode;
};

export function ExploreDialog({ dialogRef, title, closeLabel, children }: DialogProps) {
	const titleId = useId();

	return (
		<dialog ref={dialogRef} aria-labelledby={titleId} className="m-auto max-h-[85dvh] w-11/12 max-w-md overflow-auto rounded-2xl border border-[#dce5dd] bg-white p-6 text-start text-[#1f2925] shadow-xl backdrop:bg-[#183d35]/45 sm:p-7">
			<div className="flex items-start justify-between gap-4">
				<h2 id={titleId} className="self-center text-xl font-extrabold text-[#183d35]">{title}</h2>
				<form method="dialog">
					<button type="submit" aria-label={closeLabel} className="grid size-11 cursor-pointer place-items-center rounded-lg text-[#245f51] hover:bg-[#dce5dd] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#245f51]">
						<X aria-hidden="true" className="size-5" />
					</button>
				</form>
			</div>

			{children}
		</dialog>
	);
}

type PreviewButtonProps = {
	label: string;
	description: string;
	closeLabel: string;
	className: string;
	children?: ReactNode;
};

export function ExplorePreviewButton({ label, description, closeLabel, className, children }: PreviewButtonProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);

	return (
		<>
			<button type="button" aria-label={label} aria-haspopup="dialog" className={className} onClick={() => dialogRef.current?.showModal()}>
				{children ?? label}
			</button>

			<ExploreDialog dialogRef={dialogRef} title={label} closeLabel={closeLabel}>
				<p className="mt-3 leading-relaxed text-[#5b6961]">{description}</p>
			</ExploreDialog>
		</>
	);
}
