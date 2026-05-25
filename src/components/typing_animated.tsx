import { useEffect, useState } from "react";

interface TypingAnimatedProps {
	text: string[];
	speed?: number;
	pause?: number;
}

function TypingAnimated({
	text,
	speed = 100,
	pause = 1500
}: TypingAnimatedProps) {
	const [arrayIndex, setArrayIndex] = useState(0);
	const [cursorIndex, setCursorIndex] = useState(0);

	const currentText = text[arrayIndex] || "";
	const displayedText = currentText.slice(0, cursorIndex);

	useEffect(() => {
		// Nothing to display
		if (text.length === 0)
			return;

		// Finished typing current string
		if (cursorIndex > currentText.length) {
			const timeout = setTimeout(() => {
				setArrayIndex((prev) =>
					(prev === text.length - 1) ? 0 : prev + 1
				);

				setCursorIndex(0);
			}, pause);

			return () => clearTimeout(timeout);
		}

		// Continue typing
		const timeout = setTimeout(() => {
			setCursorIndex((prev) => prev + 1);
		}, currentText[cursorIndex] === " " ? speed * 6 : speed);

		return () => clearTimeout(timeout);
	}, [
		cursorIndex,
		arrayIndex,
		currentText,
		text,
		speed,
		pause
	]);

	return (
		<div
			className="text-2xl text-left
			font-semibold
			mb-2"
		>
			{displayedText + " |"}
		</div>
	);
}

export default TypingAnimated;