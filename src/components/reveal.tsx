import { motion, type TargetAndTransition } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
	children: ReactNode;
	delay?: number;
	className?: string;
	initial?: TargetAndTransition;
	whileInView?: TargetAndTransition;
}

function Reveal({
	children,
	delay = 0,
	className = "",
	initial = { opacity: 0, y: 40 },
	whileInView = { opacity: 1, y: 0 }
}: RevealProps) {

	return (
		<motion.div
			className={className}
			initial={initial}
			whileInView={whileInView}
			viewport={{
				once: true,
				amount: 0.2
			}}
			transition={{
				duration: 0.6,
				delay: delay,
				ease: "easeOut"
			}}
		>
			{children}
		</motion.div>
	)
}

export default Reveal;