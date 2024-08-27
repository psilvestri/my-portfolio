'use client';
import '../styles/RecentWork.css';
import '../styles/CollapsibleSection.css';

import axios from 'axios';
import { useState, useEffect } from 'react';

import GithubProject from './GithubProject';
import AccordionDropdown from './AccordionDropown';

export interface RecentProjectData {
	id: number;
	name: string;
	html_url: string;
	language: string;
	topics: string[];
	description: string;
}

export default function RecentWork() {
	const [recentProjects, setRecentProjects] = useState<RecentProjectData[]>([]);

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

	return (
		<AccordionDropdown
			dropDownID="recentWorkSection"
			title="Recent Activity">
			{recentProjects.map((project: RecentProjectData) => {
				return (
					<div
						key={project.id}
						className="recentProject">
						<GithubProject project={project} />
					</div>
				);
			})}
		</AccordionDropdown>
	);
}
