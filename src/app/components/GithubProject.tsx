import '../styles/GithubProject.css';

export default function GithubProject({
	name,
	url,
	language,
	topics,
	description,
}) {

	return (
		<div className='recentProjectInner'>  
			<h3 className="recentProjectName">
				<a href={url}>{name}</a>{' '}
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
