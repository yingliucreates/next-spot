import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StoreProvider } from 'easy-peasy';
import PlayerLayout from '../components/playerLayout';
import 'reset-css';
import { store } from '../lib/store';

/** 
workaround for react18 compatible issue with Easy Peasy
**/
type Props = StoreProvider['props'] & { children: React.ReactNode };
const StoreProviderCasted =
	StoreProvider as unknown as React.ComponentType<Props>;

const theme = extendTheme({
	colors: {
		gray: {
			100: '#F5f5f5',
			200: '#EEEEEE',
			300: '#E0E0E0',
			400: '#BDBDBD',
			500: '#9E9E9E',
			600: '#757575',
			700: '#616161',
			800: '#424242',
			900: '#212121'
		}
	},
	components: {
		Button: {
			vairiants: {
				link: {
					':focus': {
						outline: 'none',
						boxShadow: 'none'
					}
				}
			}
		}
	}
});

const MyApp = ({ Component, pageProps }) => {
	return (
		<ChakraProvider theme={theme}>
			<StoreProviderCasted store={store}>
				{Component.authPage ? (
					<Component {...pageProps} />
				) : (
					<PlayerLayout>
						<Component {...pageProps} />
					</PlayerLayout>
				)}
			</StoreProviderCasted>
		</ChakraProvider>
	);
};

export default MyApp;
