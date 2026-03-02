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
				title="US Biodiversity Analytics Dashboard"
				liveURL=""
				languages="BigQuery SQL, DBT, Data Studio, Python"
				whatSolve="Gives users an easy way to identify trends in their local biodiversity, and how it’s changing over time."
				description="The focus of this project was to create a dashboard that would be useful for a wide range of users, 
				from casual nature enthusiasts to professional ecologists. I designed the dashboard to be visually appealing and easy to navigate, 
				with clear visualizations and intuitive filters."
				screenshot="ScreenshotMyPortfolio.png"
				screenshotAlt="Sample image from my US Biodiversity Analytics Dashboard project"
			/>

			<FeaturedProject
				title="My Portfolio"
				liveURL="https://psilvestri.github.io/my-portfolio/"
				languages="HTML, CSS, JavaScript, React, NextJS, TypeScript"
				whatSolve="Me not having somewhere awesome to show off my projects!"
				description="It's the only website where I have unlimited time and flexibility
				to enhance and polish every aspect to my liking. Check out the recent activity section to see how I utilized the GitHub API to display a feed of my recent public contributions!!"
				screenshot="ScreenshotMyPortfolio.png"
				screenshotAlt="Sample image from my portfolio website"
			/>
		</AccordionDropdown>
	);
}
