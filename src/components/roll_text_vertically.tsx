import { useEffect, useRef, useState, type CSSProperties } from "react";

interface RollTextVerticallyProps {
	text: string[];
	min_height: number;
	pause?: number;
	spacing: number;
	debug?: boolean;
	text_style: CSSProperties;
}

function RollTextVertically({
	text = [],
	min_height = 20,
	pause = 3000,
	spacing = 40,
	debug = false,
	text_style = {}
}: RollTextVerticallyProps) {
	const [activeID, setActiveId] = useState<number>(0);
	const arraySize: number = text.length;
	const [width, setWidth] = useState<number>(0);
	const divRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		if (arraySize === 1)
			return;
		const timeout = setTimeout(() => {
			setActiveId(activeID === arraySize - 1 ? 0 : activeID + 1);
		}, pause);

		return () => clearTimeout(timeout);
	}, [
		activeID,
		arraySize,
		pause
	]);
	useEffect(() => {
		if (!divRef.current)
			return;
		const observer = new ResizeObserver((entries) => {
			const entry = entries[0];
			setWidth(entry.contentRect.width);
		})
		observer.observe(divRef.current);

		return () => observer.disconnect();
	}, []);
	return (
		<ul
			className="relative
			flex items-center justify-center
			w-full
			overflow-hidden"
			ref={divRef}
			style={{
				background: debug ? "red" : "transparent",
				minHeight: min_height
			}}
		>
			{
				text.map((value: string, id: number) => {
					return (
						<li
							key={id}
							className="absolute
							truncate
							transition-transform duration-300"
							style={{
								transform: `translateY(${(id - activeID) * spacing}px)`,
								maxWidth: width,
								...text_style
							}}
						>
							{value}
						</li>
					)
				})
			}
		</ul>
	)
}

export default RollTextVertically;