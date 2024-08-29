import '../styles/Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

// @ts-ignore
const myIcon: IconProp = ['kit', 'my-icon'];

export default function Footer() {
	return (
		<div id="footerSection">
			<div className="footerLeft">
				<h4 className="siteMapHeader">Sitemap</h4>
				<ul className="siteMap">
					<li>Home</li>
				</ul>
			</div>
			<div className="footerMid">
				<p>Copyright &copy; 1994 Peter Silvestri</p>
				<p>All Rights Reserved</p>
			</div>
			<div className="footerRight">
				<a href="www.linkedin.com/in/peter-silvestri-b1a55a175">
					<FontAwesomeIcon
						icon={faLinkedin}
						className="singleSocialIcon"
					/>
				</a>
				<a href="https://github.com/psilvestri">
					<FontAwesomeIcon
						icon={faSquareGithub}
						className="singleSocialIcon"
					/>
				</a>
			</div>
		</div>
	);
}
