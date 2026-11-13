"use client";

import { Community } from "./landing/community";
import { Faq } from "./landing/faq";
import { Features } from "./landing/features";
import { ClosingCta, Footer } from "./landing/footer";
import { Header } from "./landing/header";
import { Hero } from "./landing/hero";
import { HowItWorks } from "./landing/how-it-works";

export function LandingPage() {
	return (
		<div id="home">
			<Header />
			<main>
				<Hero />
				<Features />
				<HowItWorks />
				<Community />
				<Faq />
				<ClosingCta />
			</main>
			<Footer />
		</div>
	);
}
