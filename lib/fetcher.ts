/*
	http://localhost:3000/api/signin
	http://localhost:3000/api/signup
 */
export default function fetcher(url: string, data = undefined) {
	return fetch(`${window.location.origin}/api${url}`, {
		method: data ? 'POST' : 'GET',
		credentials: 'include',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	}).then(res => {
		if (res.status > 299 && res.status < 200) {
			throw new Error();
		}
		return res.json();
	});
}
