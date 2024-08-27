import '../styles/GithubProject.css';

import { RecentProjectData } from './RecentWork';
interface GithubProjectProps {
	project: RecentProjectData;
}

export default function GithubProject({ project }: GithubProjectProps) {
	const { name, html_url, language, topics, description } = project;

	return (
		<div className="recentProjectInner">
			<h3 className="recentProjectName">
				<a
					href={html_url}
					target="_blank">
					{name}
				</a>
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
