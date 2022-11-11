export default function fetcher(url: string, data = undefined) {
	console.log('wl--->', `${window.location}`);
	return fetch(`${window.location}/api${url}`, {
		method: data ? 'POST' : 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
}
