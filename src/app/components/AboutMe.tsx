'use client';

import '../styles/AboutMe.css';
import '../styles/CollapsibleSection.css';

import AccordionDropdown from './AccordionDropown';

export default function AboutMe() {
	return (
		<AccordionDropdown
			dropDownID="aboutMeSection"
			title="About Me">
			<p>
				I’m an Analytics Engineer focused on transforming raw event data into
				reliable, analytics-ready systems that power marketing and product
				decision-making. With over six years of experience in tracking
				architecture (GTM/GA4), BigQuery SQL, and cloud automation using Python
				and AWS, I design scalable data models that bridge engineering and
				business teams. My background in full-stack development allows me to
				instrument complex front-end and backend systems directly, ensuring
				accurate event capture, clean schema design, and resilient data
				pipelines from source to warehouse.
			</p>

			<p>
				I also care as much about how data is presented as how it’s collected.
				My passion for UI/UX drives me to design dashboards and reports that are
				clear, intuitive, and actionable, making it easy for marketing, product,
				and growth teams to understand insights at a glance. By combining this
				with robust tracking and transformation pipelines, I deliver analytics
				solutions that are both reliable and easy to use.
			</p>
		</AccordionDropdown>
	);
}
