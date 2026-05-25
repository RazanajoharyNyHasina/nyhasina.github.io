import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import i18n from "../i18n/i18n";
import NavBar from "../components/navbar";
import type { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

interface LayoutProps {
	children: React.ReactNode;
	t: TFunction<"translation">;
}

function Layout({ children }: LayoutProps) {
	const { lng } = useParams();
	const { t } = useTranslation("translation");
	const divRef = useRef<HTMLDivElement>(null);
	const [atTop, setAtTop] = useState<boolean>(true);

	useEffect(() => {
		if (lng)
			i18n.changeLanguage(navigator.language);
	}, []);

	const handleScroll = () => {
		if (!divRef.current) return;
		setAtTop(divRef.current.scrollTop <= 400);
	}
	return (
		<main
			className="w-full h-screen
			overflow-y-scroll"
			style={{
				scrollBehavior: "smooth"
			}}
			ref={divRef}
			onScroll={handleScroll}
		>
			{children}
			<NavBar t={t} atTop={atTop} />
		</main>
	)
}

export default Layout;