import useSWR from 'swr';
import fetcher from './fetcher';

export const useMe = () => {
	const { data, error } = useSWR('/me', fetcher); //(route as cacheKey, fetcher )
	return {
		user: data,
		isLoading: !data && !error,
		isError: error
	};
};

export const usePlaylist = () => {
	const { data, error } = useSWR('/playlist', fetcher);
	return {
		playlists: (data as any) || [],
		isLoading: !data && !error,
		isError: error
	};
};

/*
"The way functional components work in react is that, the function itself is actually the render function. So you can think of it as as its own call, whatever reacts says this component has to re render that function gets executed again. So if you didn't have a hook and all your state were just like variables, your variables will get reset every time that component re renders.

So to opt out of that rendering cycle it's basically tell react like hey, react I want you to watch these. I want you to watch these these values for me and the way you do that is with a hook. So hook is just you telling react to hey, please do not reset this I need you to watch this across re renders.


Whereas in a classical component, you get that by default because there's a render method so everything is just regular JavaScript until you get to the render method. But the functional component the whole function is the render method so you got to opt out whereas in the classical point you opt in.


So it's like backwards, so hooks was their solution to opting out."
*/
