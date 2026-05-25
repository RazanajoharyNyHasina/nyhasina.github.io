import { useState } from "react";
import type { CTAProps } from "./cta_primary";

function CTASecondary({
	title = "",
	onClick,
	icon: Icon
}: CTAProps) {
	const [hovered, setHovered] = useState<boolean>(false);

	return (
		<button
			className="outline-solid outline-1 outline-[color-mix(in_srgb,transparent_75%,var(--color-text))]
			flex items-center justify-center
			gap-4
			cursor-pointer
			rounded-xl
			p-2
			backdrop-blur-lg
			shadow-md
			transition-transform duration-300
			"
			onClick={onClick}
			style={{
				transform: hovered ? "scale(105%)" : "none",
			}}
			onPointerEnter={() => setHovered(true)}
			onPointerLeave={() => setHovered(false)}
		>
			{
				Icon &&
				<div
					className="relative
					flex items-center justify-center
					w-10 h-10
					bg-surface-secondary rounded-lg"
				>
					<Icon
						className="w-4 h-4"
					/>
				</div>
			}
			<p
				className="mr-2"
			>
				{title}
			</p>
		</button>
	)
}

export default CTASecondary;