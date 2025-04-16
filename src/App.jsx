import BestSection from "./components/BestSection";
import CategoriesSection from "./components/CategoriesSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TopBanner from "./components/TopBanner";

export default function App() {
	return(<>
		<TopBanner />
		<Header />
    <Hero /> 
	<CategoriesSection />
	<BestSection />
	</>);
}