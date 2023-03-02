import AuthForm from '../components/authForm';

const Signin = () => {
	return <AuthForm mode="signin" />;
};
//variable created in order to opt out and conditionally render the <PlayerLayout> wrapper in _app.tsx
Signin.authPage = true;
export default Signin;
