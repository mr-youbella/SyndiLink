import { Building2 } from "lucide-react";

export function Brand({ compact = false }: { compact?: boolean }) {
	return (
		<a
			className={`flex shrink-0 items-center gap-2 rounded-md text-2xl font-extrabold tracking-tighter focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#c47e65] ${compact ? "" : "xl:text-3xl"}`}
			href="#home"
			aria-label="SyndiLink"
		>
			<span
				className="grid h-10 w-9 place-items-center rounded-lg rounded-bl-sm bg-[#183d35] text-white"
				aria-hidden="true"
			>
				<Building2
					className="size-7"
					strokeWidth={1.8}
				/>
			</span>
			<span>
				Syndi<span className="text-[#245f51]">Link</span>
			</span>
		</a>
	);
}
