import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import GradientLayout from '../components/gradientLayout';

const Home = () => {
	return (
		<GradientLayout color="red" roundImage>
			<div>home page</div>
		</GradientLayout>
	);
};

export default Home;
