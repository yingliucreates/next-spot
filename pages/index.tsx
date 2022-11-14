import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import GradientLayout from '../components/gradientLayout';
import prisma from '../lib/prisma';

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
			<div>home page</div>
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
