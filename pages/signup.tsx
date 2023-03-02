import AuthForm from '../components/authForm';

const Signup = () => {
	return <AuthForm mode="signup" />;
};
//variable created in order to opt out and conditionally render the <PlayerLayout> wrapper in _app.tsx
Signup.authPage = true;
export default Signup;
