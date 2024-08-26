import '../styles/GithubProject.css';

import { RecentProjectData } from './RecentWork';

export default function GithubProject({
	id,
	name,
	html_url,
	language,
	topics,
	description,
}: RecentProjectData) {
	return (
		<div className="recentProjectInner">
			<h3 className="recentProjectName">
				<a href={html_url}>{name}</a>
			</h3>
			<h4 className="recentProjectLanguage">{language}</h4>
			<p className="recentProjectDescription">{description}</p>
			<div className="recentProjectTopics">
				{topics.map((topic: string) => (
					<p
						key={topic}
						className="recentProjectTopic">
						{topic}
					</p>
				))}
			</div>
		</div>
	);
}
