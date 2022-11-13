import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import GradientLayout from '../components/gradientLayout';

const Home = () => {
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

export default Home;
