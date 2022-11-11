import { NextResponse } from 'next/server';

const signedinPages = ['/', '/playlist', '/libray'];

/*
Defining a Middleware file in a location different from <root>/middleware is not allowed.
middleware.ts currently lives in root.
https://nextjs.org/docs/messages/nested-middleware
Must pass absolute urls when using Response.redirect(url), NextResponse.redirect(url) or NextResponse.rewrite(url). Relative urls deprecated by Next.
https://nextjs.org/docs/messages/middleware-relative-urls

res.cookies is a Map() object instead of a plain object
 */

export default function middleware(req) {
	if (signedinPages.find(p => p === req.nextUrl.pathname)) {
		const token = req.cookies.get('TRAX_ACCESS_TOKEN');

		if (!token) {
			const url = req.nextUrl.clone();
			url.pathname = '/signin';
			return NextResponse.redirect(url);
		}
	}
}
