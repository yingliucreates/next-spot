import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import prisma from '../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { email, password } = req.body;
	const user = await prisma.user.findUnique({
		where: {
			email
		}
	});

	if (user && bcrypt.compareSync(password, user.password)) {
		const token = jwt.sign(
			{
				email: user.email,
				id: user.id,
				time: Date.now()
			},
			'hello',
			{ expiresIn: '8h' }
		);

		res.setHeader(
			'Set-Cookie',
			cookie.serialize('TRAX_ACCESS_TOKEN', token, {
				httpOnly: true,
				maxAge: 8 * 60 * 60,
				path: '/',
				sameSite: 'lax',
				secure: process.env.NODE_ENV === 'production'
			})
		);

		res.json(user);
	} else {
		res.json({ error: 'Email or Password is Wrong' });
	}
};
