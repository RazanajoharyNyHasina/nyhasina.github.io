import { Trans } from "react-i18next";
import type { SectionsProps } from "../App";
import CTAPrimary from "./cta_primary";
import IconArrowPointingRight from "../assets/icons/ArrowPointingTopRight.svg?react";
import IconLogo from "../assets/Logo.svg?react";
import SvgArc from "../assets/Arc.svg?react";

interface FooterNavProps {
	title: string;
	path: string;
}

function FooterNav({
	title = "Title",
	path = "Title"
}: FooterNavProps) {
	return (
		<a
			className="hover:underline hover:text-accent text-sm"
			href={path}
		>
			{title}
		</a>
	)
}

interface FooterNavSectionProps {
	title: string;
	data: FooterNavProps[];
}
function FooterNavSection({
	title = "Title",
	data = []
}: FooterNavSectionProps) {
	return (
		<header
			className="grid grid-cols-1 grid-rows-[auto_1fr] place-items-start w-full gap-4"
		>
			<h2
				className="bg-linear-to-br from-text to-[color-mix(in_srgb,var(--color-text)_50%,var(--color-bg))]
				font-bold text-xl
				bg-clip-text text-transparent"
			>
				{title}
			</h2>
			<nav
				className="flex flex-col items-start justify-center w-full gap-2 text-md"
			>
				{
					data.map((value: FooterNavProps, id: number) => {
						return (
							<FooterNav
								key={id}
								title={value.title}
								path={value.path}
							/>
						)
					})
				}
			</nav>
		</header>
	)
}

function Footer({ t }: SectionsProps) {
	const dataSocial: FooterNavProps[] = [
		{ title: "Linkedin", path: "https://www.linkedin.com/in/razanny/" },
		{ title: "Github", path: "https://github.com/RazanajoharyNyHasina" },
		{ title: "Facebook", path: "https://web.facebook.com/profile.php?id=61584513183665" }
	]

	const dataSoftware: FooterNavProps[] = [
		{ title: "Blender", path: "https://www.blender.org" },
		{ title: "Godot", path: "https://www.godotengine.org" },
		{ title: "Inkscape", path: "https://www.inkscape.org" },
		{ title: "Krita", path: "https://www.krita.org" },
		{ title: "GIMP", path: "https://www.gimp.org" },
		{ title: "Natron", path: "https://natrongithub.github.io/" }
	]

	const dataTech: FooterNavProps[] = [
		{ title: "C / C++", path: "https://fr.wikipedia.org/wiki/C_(langage)" },
		{ title: "Javascript / Typescript", path: "https://fr.wikipedia.org/wiki/TypeScript" },
		{ title: "React", path: "https://fr.wikipedia.org/wiki/React" },
		{ title: "HTML", path: "https://fr.wikipedia.org/wiki/Hypertext_Markup_Language" },
		{ title: "CSS", path: "https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade" },
		{ title: "TailwindCSS", path: "https://tailwindcss.com" },
		{ title: "GDScript", path: "https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html" }
	]

	return (
		<footer
			id="contact"
			className="flex flex-col items-center justify-center
			gap-8
			p-4 lg:px-32
			mt-2 md:mt-4 lg:mt-12
			w-full relative"
		>
			<SvgArc
				className="w-full h-full object-cover
				mt-10"
				id="contact"
			/>

			<IconLogo
				className="w-12 h-12 mb-16"
			/>

			<div
				className="grid grid-cols-2 grid-rows-1
				min-[640px]:grid-cols-4
				gap-4
				w-full"
			>
				<FooterNavSection
					title={t("footer.tech")}
					data={dataTech}
				/>
				<FooterNavSection
					title={t("footer.software")}
					data={dataSoftware}
				/>
				<FooterNavSection
					title={t("footer.social")}
					data={dataSocial}
				/>

				<header
					className="grid grid-cols-1 grid-rows-[auto_1fr] items-start justify-center w-full gap-4"
				>
					<h2
						className="bg-linear-to-br from-text to-[color-mix(in_srgb,var(--color-text)_50%,var(--color-bg))]
						font-bold text-xl
						bg-clip-text text-transparent"
					>
						{t("footer.contact.section")}
					</h2>
					<div
						className="flex flex-col items-start justify-center w-full gap-1
						text-sm"
					>

						<Trans
							className="flex"
							i18nKey="footer.contact.availability"
							components={{
								emphase: <span className="font-saonara font-bold text-lg"></span>
							}}
						/>

						<div>Antananarivo, Madagascar</div>

						<div className="h-px w-full bg-text my-4 opacity-50"></div>

						<CTAPrimary
							title={t("footer.contact.CTA")}
							onClick={() => window.location.href = "mailto:djazejhasi@gmail.com"}
							icon={IconArrowPointingRight}
						/>

					</div>
				</header>


			</div>

			<div
				className="h-px flex-none w-full
				opacity-50
				bg-linear-to-r from-transparent via-text to-transparent
				mt-8"
			>
			</div>

			<div
				className="text-sm"
			>
				<p
					className="flex items-center justify-center
					text-center
					w-full"
				>
					&copy; {` ${new Date().getFullYear()} RAKOTOARIVONY Razanajohary Ny Hasina.`}
				</p>
				<p
					className="flex items-center justify-center
					text-center
					mb-4
					w-full"
				>
					{t("footer.copyright")}
				</p>
			</div>
		</footer>
	)
}

export default Footer