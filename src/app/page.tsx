import './styles/Page.css';

import ParallaxMountains from './components/ParallaxMountains';
import AboutMe from './components/AboutMe';

export default function Home() {
	return (
		<div className="HomePage">
			<ParallaxMountains />
			<div className="HomeContent">
				<AboutMe />
			</div>
		</div>
	);
}
