import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import i18n from "../i18n/i18n";
import NavBar from "../components/navbar";
import type { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import BackgroundPicture from "../assets/BackgroundPicture.png";
import IconLogo from "../assets/Logo.svg?react";

interface LayoutProps {
	children: React.ReactNode;
	t: TFunction<"translation">;
}

function Layout({ children }: LayoutProps) {
	const { lng } = useParams();
	const { t } = useTranslation("translation");
	const divRef = useRef<HTMLDivElement>(null);
	const [atTop, setAtTop] = useState<boolean>(true);
	const [loaded, setLoaded] = useState<boolean>(false);
	const [displayLoading, setDisplayLoading] = useState<boolean>(true);

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
			<img
				className="w-0"
				src={BackgroundPicture}
				onLoad={() => {
					setLoaded(true);
					setTimeout(() => setDisplayLoading(false), 1000);
				}}
				fetchPriority="high"
			/>
			{loaded && children}

			{
				displayLoading &&
				<div
					className="fixed top-0 left-0
					flex items-center justify-center
					w-full h-screen"
				>
					<IconLogo
						className="animate-bounce
						transition-opacity duration-300"
						style={{
							opacity: loaded ? "0%" : "100%"
						}}
					/>
				</div>
			}

			<NavBar t={t} atTop={atTop} loaded={loaded} />
		</main>
	)
}

export default Layout;