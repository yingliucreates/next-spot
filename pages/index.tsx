import Head from 'next/head';
import styles from '../styles/Home.module.css';
import GradientLayout from '../components/gradientLayout';
import prisma from '../lib/prisma';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { useMe } from '../lib/hooks';

const Home = ({ artists }) => {
	const { user, isLoading } = useMe();
	return (
		<GradientLayout
			color="red"
			subtitle="profile"
			title={`${user?.firstName} ${user?.lastName}`}
			description={`${user?.playlistsCount} public playlists`}
			image="https://frontendmasters.github.io/fullstack-app-next-website/images/profile.png"
			roundImage
		>
			<Box color="white" paddingX="40px">
				<Box marginBottom="40px">
					<Text fontSize="2xl" fontWeight="bold">
						Top artists this month
					</Text>
					<Text fontSize="md">only visible to you</Text>
				</Box>
				<Flex>
					{artists.map(artist => (
						<Box paddingX="10px" width="20%">
							<Box
								bg="grey.900"
								borderRadius="4px"
								padding="15px"
								width="100%"
							></Box>
							<Image
								src="https://placekitten.com/200/200"
								borderRadius="100%"
							/>
							<Box marginTop="20px">
								<Text fontSize="large">{artist.name}</Text>
								<Text fontSize="x-smaller">Artist</Text>
							</Box>
						</Box>
					))}
				</Flex>
			</Box>
		</GradientLayout>
	);
};

/*
Any page in Pages directory has the ability to do what's called server side data fetching whereas a component (eg.side bar - we had to make a client side call to get the playlists for the sidebar) does not. But for a page, we could actually get the data server side before it renders.

Then we ask ourselves: is the data on here going to be changing while the user is looking at it?

If that's the case, we'd probably want to do a client side. But is the data on this page always going to stay the same after the initial render? If that's the case, we could probably do it server side. So there's no wrong answer here. We can go any direction we want.

If we do it server side, we don't need the hooks or the API routes, we don't need any of that.
*/

export const getServerSideProps = async () => {
	const artists = await prisma.artist.findMany({});
	// console.log(artists);
	return {
		props: { artists }
	};
};

export default Home;
