'use client';

import '../styles/FeaturedWork.css';
import Image from 'next/image';
import AccordionDropdown from './AccordionDropown';
import FeaturedProject from './FeaturedProject';

export default function FeaturedWork() {
	return (
		<AccordionDropdown
			dropDownID="FeaturedWorkSection"
			title="Featured Projects">
			<FeaturedProject
				title="My Portfolio"
				liveURL="https://psilvestri.github.io/my-portfolio/"
				languages="HTML, CSS, JavaScript, React, NextJS, TypeScript"
				whatSolve="Me not having somewhere awesome to show off my projects!"
				description="It's the only website where I have unlimited time and flexibility
				to enhance and polish every aspect to my liking."
				screenshot="ScreenshotMyPortfolio.png"
				screenshotAlt="Sample image from my portfolio website"
			/>

			<FeaturedProject
				title="Another App"
				liveURL=""
				languages="HTML, CSS, JavaScript, React, NextJS, TypeScript"
				whatSolve="Me not adding more content yet"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Perspiciatis vitae obcaecati quod atque deleniti, veritatis odit,
						eos non, tempore repellendus reiciendis asperiores dicta maxime
						facilis soluta adipisci. Cum, laboriosam amet!"
				screenshot="ScreenshotMyPortfolio.png"
				screenshotAlt="Sample image from my portfolio website"
			/>
		</AccordionDropdown>
	);
}
