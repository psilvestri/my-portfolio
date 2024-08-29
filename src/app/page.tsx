import './styles/Page.css';

import ParallaxMountains from './components/ParallaxMountains';
import AboutMe from './components/AboutMe';
import FeaturedWork from './components/FeaturedWork';
import RecentWork from './components/RecentWork';
import Footer from './components/Footer';

export default function Home() {
	return (
		<div className="homePage">
			<ParallaxMountains />
			<div className="homeContent">
				<AboutMe />
				<FeaturedWork />
				<RecentWork />
				<Footer />
			</div>
		</div>
	);
}
