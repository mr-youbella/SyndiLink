import { Bell, Compass, LayoutGrid, UserRound } from "lucide-react";
import Link from "next/link";
import { Brand } from "@/components/ui/brand";
import LanguageSwitcher from "@/components/ui/language-switcher";
import { messages, type Lang } from "@/lib/langs/messages";

const iconButton = "grid size-9 cursor-pointer place-items-center rounded-xl border border-[#dce5dd] text-[#183d35] hover:bg-[#eaf0e8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#245f51] sm:size-10";

export function ExploreHeader({ lang }: { lang: Lang }) {
	const { explore: copy, menu } = messages[lang];

	return (
		<header className="sticky top-0 z-30 border-b border-[#dce5dd] bg-white">
			<div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-2 gap-y-3 px-4 py-3 sm:px-8 lg:flex-nowrap lg:gap-6">
				<Brand compact href={`/${lang}`} />

				<nav aria-label={menu} className="order-last w-full lg:order-0 lg:w-auto">
					<ul className="grid grid-cols-2 gap-1 sm:flex sm:flex-wrap sm:items-center">
						<li>
							<button type="button" aria-label={copy.workspace} aria-haspopup="dialog" className="flex min-h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-2 py-2 text-sm font-bold text-[#5b6961] hover:bg-[#f7f8f4] hover:text-[#183d35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#245f51] sm:px-3">
								<LayoutGrid aria-hidden="true" className="hidden size-4 shrink-0 sm:block" />
								{copy.workspace}
							</button>
						</li>
						<li>
							<Link href={`/${lang}/explore-buildings`} aria-current="page" scroll={false} className="flex min-h-10 items-center justify-center gap-2 rounded-lg bg-[#e8efe7] px-2 py-2 text-center text-sm font-extrabold text-[#183d35] hover:bg-[#dce5dd] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#245f51] sm:px-3">
								<Compass aria-hidden="true" className="hidden size-4 shrink-0 sm:block" />
								{copy.navigation}
							</Link>
						</li>
					</ul>
				</nav>

				<div className="flex items-center gap-1 sm:gap-2">
					<LanguageSwitcher />
					<button type="button" aria-label={copy.notifications} className={iconButton}>
						<Bell aria-hidden="true" className="size-5" />
					</button>
					<button type="button" aria-label={copy.account} className={iconButton}>
						<UserRound aria-hidden="true" className="size-5" />
					</button>
				</div>
			</div>
		</header>
	);
}
