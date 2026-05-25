import { useTranslation } from 'react-i18next';
import './index.css';
import Layout from './layout/layout';
import Hero from './pages/main/hero_section';
import type { TFunction } from 'i18next';
import Skills from './pages/skills_section';
import Portfolio from './pages/main/portfolio_section';
import Footer from './components/footer';

export interface SectionsProps {
	t: TFunction<"translation">;
}

function App() {
	const { t } = useTranslation("translation");

	return (
		<Layout t={t}>
			<Hero t={t} />
			<Skills t={t} />
			<Portfolio t={t} />
			<Footer t={t} />
		</Layout>
	)
}

export default App