import './styles/Page.css';

import ParallaxMountains from './components/ParallaxMountains';
import AboutMe from './components/AboutMe';
import RecentWork from './components/RecentWork';

export default function Home() {
	return (
		<div className="homePage">
			<ParallaxMountains />
			<div className="homeContent">
				<AboutMe />
				<RecentWork />
			</div>
		</div>
	);
}
