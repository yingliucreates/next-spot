import prisma from '../../lib/prisma';
import { validateRoute } from '../../lib/auth';
import { userAgent } from 'next/server';

export default validateRoute(async (req, res, user) => {
	const playlists = await prisma.playlist.findMany({
		where: {
			userId: user.id
		},
		orderBy: {
			name: 'asc'
		}
	});

	res.json(playlists);
});
