'use client';
import '../styles/RecentWork.css';
import '../styles/CollapsibleSection.css';

import axios from 'axios';
import { useState, useEffect } from 'react';

import CollapseArrow from './CollapseArrow';
import GithubProject from './GithubProject';

interface RecentProjectData {
	id: number;
	name: string;
	html_url: string;
	language: string;
	topics: string[];
	description: string;
}

export default function RecentWork() {
	const [recentProjects, setRecentProjects] = useState<RecentProjectData[]>([]);
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		const res = axios
			.get(
				`https://api.github.com/search/repositories?q=user:psilvestri+sort:updated-desc`,
				{
					headers: {
						'User-Agent': 'request',
					},
				}
			)
			.then((res) => {
				const projectArray = res.data.items.splice(0, 6); // Only return 6 most recent projects
				setRecentProjects(projectArray);
			})
			.catch((e) => console.error(`Error: ${e}`));
	}, [setRecentProjects]);

	useEffect(() => {
		console.log(recentProjects);
	}, [recentProjects]);

	const handleClick = () => {
		setShowContent(!showContent);
	};

	const rotate = showContent ? 'rotate(0)' : 'rotate(-90deg)';

	return (
		<div
			id="recentWorkSection"
			className="collapseSection">
			<div
				className="collapseHeader"
				onClick={handleClick}>
				<div className="collapseTitle">Recent Activity</div>
				<CollapseArrow
					style={{
						transform: rotate,
						transition: 'all 0.2s linear',
					}}
				/>
			</div>

			<div className={'collapseContent ' + (showContent ? 'contentOpen' : '')}>
				{showContent &&
					recentProjects.map((project: RecentProjectData) => {
						return (
							<div
								key={project.id}
								className="recentProject">
								<GithubProject
									name={project.name}
									url={project.html_url}
									language={project.language}
									topics={project.topics}
									description={project.description}
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
}
