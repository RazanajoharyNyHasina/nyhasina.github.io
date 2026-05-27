import type { SectionsProps } from "../App";
import SectionHeader from "../components/section_header";
import IconWebDev from "../assets/icons/WebDev.svg?react";
import IconPhotoEditing from "../assets/icons/PhotoEditing.svg?react";
import IconLowLevelDev from "../assets/icons/LowLevelDev.svg?react";
import IconGameDev from "../assets/icons/GameDev.svg?react";
import Icon3D from "../assets/icons/3D.svg?react";
import IconArt from "../assets/icons/Art.svg?react";
import type { ComponentType, SVGProps } from "react";
import Reveal from "../components/reveal";

interface SkillsCardProps {
	title: string;
	subtitle: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
	important?: boolean;
	tech?: string[];
}

function SkillsCard({
	title = "Title",
	subtitle = "Subtitle",
	icon: Icon,
	important = false,
	tech = []
}: SkillsCardProps) {

	return (
		<article
			className="w-full h-full
			grid grid-cols-1 grid-rows-[auto_auto_1fr]
			gap-4
			rounded-xl
			bg-surface-primary
			overflow-hidden
			p-4
			relative"
			style={{
				boxShadow: "inset 0px 0px 6px color-mix(in srgb,var(--color-text) 10%,transparent)"
			}}
		>
			{
				important &&
				<div
					className="absolute top-0 left-0
					animate-shiny
					bg-white
					opacity-25
					blur-lg
					-translate-y-25
					w-10 h-[200%]"
				>
				</div>
			}
			<div
				className="flex flex-col items-start justify-center
				w-full
				h-12
				relative"
			>
				<Icon
					className="w-8 h-8
					text-accent
					drop-shadow-lg
					z-0"
				/>
			</div>
			<header
				className="flex flex-col items-start justify-center
				z-0 text-shadow-lg"
			>
				<p
					className="font-bold text-lg
					bg-linear-to-br from-text to-[color-mix(in_srgb,var(--color-text)_80%,var(--color-bg))]
					bg-clip-text
					text-transparent
					"
				>
					{title}
				</p>
				<p
					className="text-sm"
				>
					{subtitle}
				</p>
			</header>
			<div
				className="flex items-end justify-start w-full h-full"
			>
				<div
					className="flex flex-wrap-reverse items-start justify-start
					gap-2
					w-full"
				>
					{
						tech &&
						tech.map((value: string, id: number) => {
							return (
								<div
									key={id}
									className="bg-surface-secondary
								py-2 px-2 rounded-xl
								text-sm
								flex-none"
								>
									{"#" + value}
								</div>
							)
						})
					}
				</div>
			</div>
		</article >
	)
}

function Skills({
	t
}: SectionsProps) {
	const skillsData: SkillsCardProps[] = [
		{
			title: t("skills.bento.lowLevelDev.title"),
			subtitle: t("skills.bento.lowLevelDev.subtitle"),
			icon: IconLowLevelDev,
			important: true,
			tech: ["C", "C++"]
		},
		{
			title: t("skills.bento.webDev.title"),
			subtitle: t("skills.bento.webDev.subtitle"),
			icon: IconWebDev,
			tech: ["React", "HTML", "CSS", "TailwindCSS", "Javascript", "Typescript"]
		},
		{
			title: t("skills.bento.photoEditing.title"),
			subtitle: t("skills.bento.photoEditing.subtitle"),
			icon: IconPhotoEditing,
			tech: ["Adobe", "Gimp", "Krita", "RapidRaw"]
		},
		{
			title: t("skills.bento.gameDev.title"),
			subtitle: t("skills.bento.gameDev.subtitle"),
			icon: IconGameDev,
			tech: ["Godot", "GDExtension", "C-Sharp", "C", "C++"]
		},
		{
			title: t("skills.bento.3D.title"),
			subtitle: t("skills.bento.3D.subtitle"),
			icon: Icon3D,
			tech: ["Blender"]
		},
		{
			title: t("skills.bento.art.title"),
			subtitle: t("skills.bento.art.subtitle"),
			icon: IconArt,
			tech: ["Krita", "Inkscape", "Gimp", "LibreSprite"]
		},
	];

	return (
		<section
			className="flex flex-col items-center justify-center
			relative
			w-full"
		>

			<div
				className="w-full h-20 flex-none"
				id="skills"
			>
			</div>
			<SectionHeader
				header={t("skills.header.title")}
				content={t("skills.header.subtitle")}
			/>
			<div
				className="w-full h-10 flex-none"
			>
			</div>

			<article
				className="flex flex-col items-center justify-center
				md:grid md:grid-cols-2 md:grid-rows-1
				lg:grid lg:grid-cols-3 lg:grid-rows-2
				w-full
				gap-4
				px-4 md:px-8 lg:px-32"
			>
				{
					skillsData.map((value: SkillsCardProps, id: number) => {
						return (
							<Reveal
								className="w-full h-full"
								key={id}
							>
								<SkillsCard
									title={value.title}
									subtitle={value.subtitle}
									icon={value.icon}
									important={value.important ?? false}
									tech={value.tech ?? []}
								/>
							</Reveal>
						)
					})
				}
			</article>
		</section>
	)
}

export default Skills;