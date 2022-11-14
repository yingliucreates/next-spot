import Head from 'next/head';
import styles from '../styles/Home.module.css';
import GradientLayout from '../components/gradientLayout';
import prisma from '../lib/prisma';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';

const Home = ({ artists }) => {
	return (
		<GradientLayout
			color="red"
			subtitle="profile"
			title="Ying Liu"
			description="16 public playlists"
			image="https://frontendmasters.github.io/fullstack-app-next-website/images/profile.png"
			roundImage
		>
			<Box color="white" paddingX="40px">
				<Box marginBottom="40px">
					<Text fontSize="2xl" fontWeight="bold">
						Top artist this month
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

export const getServerSideProps = async () => {
	const artists = await prisma.artist.findMany({});
	// console.log(artists);
	return {
		props: { artists }
	};
};

export default Home;
