import '../styles/Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

// @ts-ignore
const myIcon: IconProp = ['kit', 'my-icon'];

export default function Footer() {
	return (
		<div id="footerSection">
			<div className="footerLeft footerPart">
				<h4 className="siteMapHeader">Site Map</h4>
				<ul className="siteMapNav">
					<li>
						<a href="/">Home</a>
					</li>
				</ul>
			</div>
			<div className="footerMid footerPart">
				<p>Copyright &copy; 1994 Peter Silvestri</p>
				<p>All Rights Reserved</p>
			</div>
			<div className="footerRight footerPart">
				<a
					href="https://www.linkedin.com/in/peter-silvestri-b1a55a175"
					target="_blank">
					<FontAwesomeIcon
						icon={faLinkedin}
						className="singleSocialIcon"
					/>
				</a>
				<a
					href="https://github.com/psilvestri"
					target="_blank">
					<FontAwesomeIcon
						icon={faSquareGithub}
						className="singleSocialIcon"
					/>
				</a>
			</div>
		</div>
	);
}
