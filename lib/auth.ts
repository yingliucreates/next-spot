import jwt from 'jsonwebtoken';
import prisma from './prisma';

//higher-order function to wrap the handler
export const validateRoute = handler => {
	return async (req, res) => {
		// rename TRAX_ACCESS_TOKEN to token
		// const {TRAX_ACCESS_TOKEN:token} = req.cookies
		const token = req.cookies.TRAX_ACCESS_TOKEN;

		if (token) {
			let user;
			try {
				const { id } = jwt.verify(token, 'hello');
				user = await prisma.user.findUnique({
					where: { id }
				});
				if (!user) {
					throw new Error('Not a real user');
				}
			} catch (e) {
				res.status(401);
				res.json({ e: 'Not Authorized' });
				return;
			}
			return handler(req, res, user);
		}

		res.status(401);
		res.json({ e: 'Not Authorized' });
	};
};

export const validateToken = token => {
	const user = jwt.verify(token, 'hello');
	return user;
};
