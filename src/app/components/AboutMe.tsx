'use client';

import '../styles/AboutMe.css';

import { useState } from 'react';
import CollapseArrow from './CollapseArrow';

export default function AboutMe() {
	const [showContent, setShowContent] = useState(false);

	const handleClick = () => setShowContent(!showContent);

	return (
		<div
			id="aboutMeSection"
			className="collapseSection">
			<div
				className="collapseHeader"
				onClick={handleClick}>
				<div className="collapseTitle">About Me</div>
				<CollapseArrow />
			</div>

			<div className="collapseContent">
				{showContent && (
					<p>
						I'm a full-stack software developer with over five years of
						experience building dynamic and user-friendly applications. My
						passion for coding is matched by my love for continuous learning,
						whether it's mastering new technologies or honing my skills in
						existing ones. When I'm not coding, you can find me hiking, tending
						to my garden, or experimenting in the kitchen. I bring the same
						curiosity and attention to detail from my hobbies into my work,
						always striving to create clean, efficient, and scalable solutions.
						If you're looking for a developer who is as dedicated to their craft
						as they are to delivering exceptional results, I'd love to connect
						and discuss how I can help bring your project to life.
					</p>
				)}
			</div>
		</div>
	);
}
