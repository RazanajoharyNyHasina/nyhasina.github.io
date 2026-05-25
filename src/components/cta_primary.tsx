import { useState, type ComponentType, type SVGProps } from "react";

export interface CTAProps {
	title: string;
	onClick: () => void;
	icon?: ComponentType<SVGProps<SVGSVGElement>>;
}

function CTAPrimary({
	title = "",
	onClick,
	icon: Icon
}: CTAProps) {
	const [hovered, setHovered] = useState<boolean>(false);

	return (
		<button
			className="
			bg-accent
			flex items-center justify-center
			gap-4
			cursor-pointer
			rounded-xl
			p-2
			shadow-md
			transition-transform duration-300
			"
			style={{
				transform: hovered ? "scale(105%)" : "none",
				boxShadow: "inset 0px 0px 6px color-mix(in srgb,var(--color-text) 10%,transparent)"
			}}
			onClick={onClick}
			onPointerEnter={() => setHovered(true)}
			onPointerLeave={() => setHovered(false)}
		>
			{
				Icon &&
				<div
					className="relative
					flex items-center justify-center
					w-10 h-10
					rounded-xl
					bg-bg"
				>
					<Icon
						className="w-4 h-4
						animate-pulse"
					/>
				</div>
			}
			<p
				className="mr-2 text-shadow-lg text-bg"
			>
				{title}
			</p>
		</button>
	)
}

export default CTAPrimary;