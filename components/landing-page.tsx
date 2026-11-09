"use client";

import { useRef, useState } from "react";
import { Community } from "./landing/community";
import { Faq } from "./landing/faq";
import { Features } from "./landing/features";
import { ClosingCta, Footer } from "./landing/footer";
import { Header } from "./landing/header";
import { Hero } from "./landing/hero";
import { HowItWorks } from "./landing/how-it-works";
import { WelcomeDialog } from "./landing/welcome-dialog";
import type { DialogMode } from "./landing/styles";

export function LandingPage() {
	const [dialogMode, setDialogMode] = useState<DialogMode>("start");
	const dialogRef = useRef<HTMLDialogElement>(null);

	function openDialog(mode: DialogMode) {
		setDialogMode(mode);
		dialogRef.current?.showModal();
	}

	return (
		<div id="home">
			<Header openDialog={openDialog} />
			<main>
				<Hero openDialog={openDialog} />
				<Features />
				<HowItWorks />
				<Community openDialog={openDialog} />
				<Faq />
				<ClosingCta openDialog={openDialog} />
			</main>
			<Footer />
			<WelcomeDialog
				dialogRef={dialogRef}
				mode={dialogMode}
			/>
		</div>
	);
}
