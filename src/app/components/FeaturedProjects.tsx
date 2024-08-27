'use client';

import '../styles/FeaturedProjects.css';
import Image from 'next/image';
import AccordionDropdown from './AccordionDropown';

export default function FeaturedProjects() {
	return (
		<AccordionDropdown
			dropDownID="featuredProjectsSection"
			title="Featured Projects">
			<div className="featuredProject">
				<div className="textContent">
					<h3>My Portfolio</h3>
					<h4>What does it use?</h4>
					<p>HTML, CSS, JavaScript, React, NextJS, TypeScript</p>
					<h4>What does solve?</h4>
					<p>Me not having somewhere awesome to show off my projects!</p>
					<h4>Why is it cool?</h4>
					<p>
						It&apos;s the only website where I have unlimited time and
						flexibility to enhance and polish every aspect to my liking.
					</p>
				</div>

				<div className="imageContent">
					<Image
						className="featuredProjectScreenshot"
						src="/assets/featuredProjectImages/ScreenshotMyPortfolio.png"
						alt="Sample image from my portfolio website"
						fill
						style={{ objectFit: 'cover' }}></Image>
				</div>
			</div>
			<div className="featuredProject">
				<div className="textContent">
					<h3>Another App</h3>
					<h4>What does it use?</h4>
					<p>HTML, CSS, JavaScript, React, NextJS, TypeScript</p>
					<h4>What does solve?</h4>
					<p>Me not adding more content yet</p>
					<h4>Why is it cool?</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Perspiciatis vitae obcaecati quod atque deleniti, veritatis odit,
						eos non, tempore repellendus reiciendis asperiores dicta maxime
						facilis soluta adipisci. Cum, laboriosam amet!
					</p>
				</div>

				<div className="imageContent">
					<Image
						className="featuredProjectScreenshot"
						src="/assets/featuredProjectImages/ScreenshotMyPortfolio.png"
						alt="Sample image from my portfolio website"
						fill
						style={{ objectFit: 'cover' }}></Image>
				</div>
			</div>
		</AccordionDropdown>
	);
}
