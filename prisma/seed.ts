import { PrismaClient } from '@prisma/client';
import bcryt from 'bcryptjs';
import { setConfig } from 'next/config';
import { disconnect } from 'process';
import { artistsData } from './songsData';

const prisma = new PrismaClient();

const run = async () => {
	await Promise.all(
		artistsData.map(artist => {
			return prisma.artist.upsert({
				where: { name: artist.name },
				update: {},
				create: {
					name: artist.name,
					songs: {
						create: artist.songs.map(song => ({
							name: song.name,
							duration: song.duration,
							url: song.url
						}))
					}
				}
			});
		})
	);

	const salt = bcryt.genSaltSync();
	const user = await prisma.user.upsert({
		where: { email: 'user@test.com' },
		update: {},
		create: {
			email: 'user@test.com',
			password: bcryt.hashSync('password', salt),
			firstName: 'Ying',
			lastName: 'Liu'
		}
	});

	const songs = await prisma.song.findMany({});
	await Promise.all(
		Array(10)
			.fill(1)
			.map(async (el, i) => {
				return prisma.playlist.create({
					data: {
						name: `Playlist #${i + 1}`,
						user: {
							connect: { id: user.id }
						},
						songs: {
							connect: songs.map(song => ({
								id: song.id
							}))
						}
					}
				});
			})
	);
};
run()
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
