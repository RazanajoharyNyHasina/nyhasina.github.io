import Reveal from "./reveal";

interface SectionHeaderProps {
	header: string;
	content: string;
}

function SectionHeader({
	header = "Header",
	content = "Content"
}: SectionHeaderProps) {
	return (
		<Reveal
			className="flex flex-col items-center justify-center
			gap-4
			text-center
			p-4
			w-full"
		>
			<h2
				className="bg-linear-to-br from-white to-[color-mix(in_srgb,white_50%,var(--color-bg))]
				bg-clip-text
				text-transparent
				text-3xl md:text-4xl
				font-bold"
			>
				{header}
			</h2>
			<p
				className=""
			>
				{content}
			</p>
		</Reveal>
	)
}

export default SectionHeader;