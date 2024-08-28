import Image from 'next/image';

interface FeaturedProjectProps {
	title: string;
	liveURL: string;
	languages: string;
	whatSolve: string;
	description: string;
	screenshot: string;
	screenshotAlt: string;
}

export default function FeaturedProject({
	title,
	liveURL,
	languages,
	whatSolve,
	description,
	screenshot,
	screenshotAlt,
}: FeaturedProjectProps) {
	return (
		<div className="featuredProject">
			<div className="textContent">
				<div className="titleContainer">
					<h3>{title}</h3>
					{liveURL && (
						<a
							href="https://psilvestri.github.io/my-portfolio/"
							target="_blank"
							className="liveButton">
							Live
						</a>
					)}
				</div>

				<h4>What does it use?</h4>
				<p>{languages}</p>
				<h4>What does it solve?</h4>
				<p>{whatSolve}</p>
				<h4>Why is it cool?</h4>
				<p>{description}</p>
			</div>

			<div className="imageContent">
				<Image
					className="FeaturedWorkScreenshot"
					src={`/assets/featuredProjectImages/${screenshot}`}
					alt={screenshotAlt}
					fill
					style={{ objectFit: 'cover' }}></Image>
			</div>
		</div>
	);
}
