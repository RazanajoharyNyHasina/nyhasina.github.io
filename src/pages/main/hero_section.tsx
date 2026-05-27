import type { SectionsProps } from "../../App";
import BackgroundPicture from "../../assets/BackgroundPicture.png";
import CTAPrimary from "../../components/cta_primary";
import CTASecondary from "../../components/cta_secondary";
import IconArrowPointingTopRight from "../../assets/icons/ArrowPointingTopRight.svg?react";
import IconStar from "../../assets/icons/Star.svg?react";
import TypingAnimated from "../../components/typing_animated";
import Reveal from "../../components/reveal";

function Hero({
	t
}: SectionsProps) {
	const titleRole: string[] = [
		t("hero.role.systemDev"),
		t("hero.role.webDev"),
		t("hero.role.UIUXDev"),
		t("hero.role.graphicsDesigner"),
		t("hero.role.3dArtist")
	];

	return (
		<section
			className="overflow-y-scroll overflow-x-hidden
			relative
			flex flex-col items-center justify-center
			w-full h-screen"
		>
			<Reveal
				className="absolute top-0 left-0
				overflow-hidden
				-z-2
				w-full h-full"
				initial={{
					opacity: 0,
					transform: "scale(105%)"
				}}
				whileInView={{
					opacity: 1,
					transform: "scale(100%)"
				}}
			>
				<img
					src={BackgroundPicture}
					alt={t("hero.backgroundPicture")}
					className="w-full h-full object-cover select-none"
					fetchPriority="high"
				/>
			</Reveal>

			<div
				className="absolute bottom-0 left-0
				bg-linear-to-t from-bg to-transparent
				-z-1
				w-full h-125"
			>
			</div>
			<header
				className="flex flex-col items-center justify-end
				lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:place-items-end
				w-full h-full
				text-shadow-lg
				pointer-events-none
				p-4 md:p-8"
			>
				<div
					className="flex flex-col items-start justify-center
					pointer-events-auto
					gap-4"
				>
					<h1
						className="flex flex-col"
					>
						<Reveal
						>
							<TypingAnimated
								text={titleRole}
							/>
						</Reveal>
						<Reveal
							delay={0.2}
						>
							<p
								className="
								text-4xl
								md:text-5xl"
							>
								RAKOTOARIVONY
							</p>
						</Reveal>

						<Reveal
							delay={0.4}
						>
							<p
								className="text-white
							text-4xl
							md:text-5xl"
							>
								Razanajohary <strong className="text-accent whitespace-nowrap font-normal">Ny Hasina</strong>.
							</p>
						</Reveal>
					</h1>
					<Reveal
						delay={0.6}
					>
						<p
							className="pointer-events-auto"
						>
							{t("hero.paragraph")}
						</p>
					</Reveal>

					<Reveal
						className="w-full flex gap-4"
						delay={0.8}
					>

						<CTAPrimary
							title={t("hero.cta.primary")}
							onClick={() => { window.location.href = "mailto:djazejhasi@gmail.com" }}
							icon={IconArrowPointingTopRight}
						/>
						<CTASecondary
							title={t("hero.cta.secondary")}
							onClick={() => { }}
							icon={IconStar}
						/>
					</Reveal>
				</div>
			</header>
		</section>
	);
}

export default Hero;