import axios from 'axios';

export default async function RecentWork() {
	// Get most recent repositories from github API
	const res = await axios.get(
		`https://api.github.com/search/repositories?q=user:${psilvestri}+sort:author-date-asc`
	);

	console.log(res);
}
