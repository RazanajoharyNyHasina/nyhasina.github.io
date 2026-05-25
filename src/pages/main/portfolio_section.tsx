import type { SectionsProps } from "../../App";
import SectionHeader from "../../components/section_header";

interface PortfolioSectionProps {
	title: string;
}

function PortfolioSection({
	title = "Title"
}: PortfolioSectionProps) {
	return (
		<header
			className="w-full
			flex items-center justify-start
			px-4 md:px-8 lg:px-32 m-2"
		>
			<h3
				className="bg-linear-to-br from-text to-[color-mix(in_srgb,var(--color-text)_50%,var(--color-bg))]
				font-bold text-2xl
				bg-clip-text text-transparent"
			>
				{title}
			</h3>
		</header>
	)
}

interface PortfolioSchoolProjectProps {
	title: string;
	subtitle: string;
}

function PortfolioSchoolProject({
	title = "Title",
	subtitle = "Subtitle"
}: PortfolioSchoolProjectProps) {
	return (
		<li
			className="grid grid-cols-1 grid-rows-[auto_1fr] place-items-start
			w-full h-full"
		>
			<h4
				className="bg-linear-to-br from-text to-[color-mix(in_srgb,var(--color-text)_50%,var(--color-bg))]
				font-bold
				bg-clip-text text-transparent"
			>
				{title}
			</h4>
			<p
				className="text-sm"
			>
				{subtitle}
			</p>
		</li>
	)
}

function Portfolio({
	t
}: SectionsProps) {
	const schoolProjectsData: string[] = [
		"libft",
		"get_next_line",
		"ft_printf",
		"philosopher",
		"minishell",
		"webserv",
		"ft_transcendence"
	];

	return (
		<section
			className="flex flex-col items-center justify-center
			w-full"
		>
			<div
				className="h-20"
				id="projects"
			>
			</div>
			<SectionHeader
				header={t("portfolio.header.title")}
				content={t("portfolio.header.subtitle")}
			/>
			<div
				className="h-10"
			>
			</div>

			<PortfolioSection
				title={t("portfolio.schoolProjects.title")}
			/>

			<ul
				className="flex flex-col items-center justify-center
				md:grid md:grid-cols-2 md:grid-rows-1
				lg:grid lg:grid-cols-4 lg:grid-rows-1
				px-4 md:px-8 lg:px-32
				gap-4 lg:gap-8"
			>
				{
					schoolProjectsData.map((value: string, id: number) => {
						return (
							<PortfolioSchoolProject
								key={id}
								title={value}
								subtitle={t(`portfolio.schoolProjects.${value}`)}
							/>
						)
					})
				}

			</ul>

		</section>
	);
}

export default Portfolio;