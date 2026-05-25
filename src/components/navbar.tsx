import { useEffect, useState } from "react";
import IconHamburgerMenu from "../assets/icons/HamburgerMenu.svg?react";
import IconLogo from "../assets/Logo.svg?react";
import type { MySelectEnum } from "./myselect";
import i18n from "../i18n/i18n";
import MySelect from "./myselect";
import type { TFunction } from "i18next";

interface NavButtonProps {
	text: string;
	path: string;
}

function NavButton({
	text = "Text",
	path = ""
}: NavButtonProps) {
	return (
		<a
			href={path}
			className="text-sm"
		>
			{text.toUpperCase()}
		</a>
	)
}

interface NavBarProps {
	atTop: boolean;
	t: TFunction<"translation">;
}

function NavBar({
	atTop = false,
	t
}: NavBarProps) {
	const navigationData: NavButtonProps[] = [
		{ text: t("navBar.navButton.skills"), path: "#skills" },
		{ text: t("navBar.navButton.projects"), path: "#projects" },
		{ text: t("navBar.navButton.aboutMe"), path: "#aboutMe" },
		{ text: t("navBar.navButton.contact"), path: "#contact" }
	];
	const [openNavMobile, setOpenNavMobile] = useState<boolean>(false);
	const dataLangage: MySelectEnum[] = [
		{ title: "Fr", value: "fr" },
		{ title: "En", value: "en" }
	];
	const [langage, setLangage] = useState<string>("fr");

	useEffect(() => {
		const defaultPref: string | null = localStorage.getItem("i18nextLng");

		if (defaultPref) {
			i18n.changeLanguage(defaultPref);
			setLangage(defaultPref);
		}
		else {
			i18n.changeLanguage(i18n.languages[0]);
			setLangage("en");
		}
	}, []);

	function changeLanguage(arg: string) {
		i18n.changeLanguage(arg);
		setLangage(arg);
	}

	return (
		<nav
			className="fixed top-0 left-0
			grid grid-cols-[1fr_auto] grid-rows-1
			p-4 md:p-8
			text-shadow-lg
			place-items-center
			pointer-events-none
			w-full h-15"
		>
			<div
				className="absolute top-0 left-0
				-z-1
				bg-bg
				pointer-events-none
				transition-all duration-300
				w-full"
				style={{
					opacity: atTop ? "75%" : "100%",
					height: atTop ? "0px" : "calc(var(--spacing) * 15)"
				}}
			>
			</div>
			<div
				className="absolute top-15 left-0
				-z-1
				bg-linear-to-b from-bg to-transparent
				pointer-events-none
				transition-all duration-300
				w-full"
				style={{
					opacity: atTop ? "75%" : "100%",
					top: atTop ? "0px" : "calc(var(--spacing) * 15)",
					height: atTop ? "calc(var(--spacing) * 25)" : "calc(var(--spacing) * 7)"
				}}
			>
			</div>

			<div
				className="flex items-center justify-start
				z-1
				w-full h-full"
			>
				<IconLogo className="w-6" />
			</div>
			<div
				className="hidden md:flex items-center justify-end
				gap-8
				text-md
				pointer-events-auto
				w-full h-full"
			>
				{
					navigationData.map((value: NavButtonProps, id: number) => {
						return (
							<NavButton
								key={id}
								text={value.text}
								path={value.path}
							/>
						)
					})
				}
				<MySelect
					value={langage}
					onValueChange={changeLanguage}
					data={dataLangage}
				/>
			</div>
			<div
				className="flex items-center justify-center
				gap-4
				md:hidden
				pointer-events-auto
				w-full h-full"
			>
				<MySelect
					value={langage}
					onValueChange={changeLanguage}
					data={dataLangage}
				/>
				<button
					className="z-1"
					onClick={() => setOpenNavMobile(openNavMobile ? false : true)}
				>
					<IconHamburgerMenu className="w-6 text-white" />
				</button>
			</div>
			<div
				className="fixed top-0 left-0
				flex flex-col items-start justify-center
				p-4
				pointer-events-auto
				gap-4
				backdrop-blur-3xl
				bg-[color-mix(in_srgb,var(--color-bg)_50%,transparent)]
				transition-opacity duration-200
				w-full h-full"
				style={{
					opacity: openNavMobile ? "100%" : "0%",
					pointerEvents: openNavMobile ? "auto" : "none"
				}}
				onClick={() => setOpenNavMobile(false)}
			>
				{
					navigationData.map((value: NavButtonProps, id: number) => {
						return (
							<NavButton
								key={id}
								text={value.text}
								path={value.path}
							/>
						)
					})
				}
			</div>
		</nav>
	)
}

export default NavBar;