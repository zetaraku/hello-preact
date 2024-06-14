import * as Preact from 'preact';
import * as PreactIso from 'preact-iso';
import { ThemeProvider } from './contexts/ThemeContext';
import { MultiProvider } from './components/MultiProvider';
import { AppHeader } from './components/AppHeader';
import { AppMain } from './components/AppMain';
import { AppFooter } from './components/AppFooter';
import { AppRouter } from './AppRouter';

export const App: Preact.FunctionComponent = () => {
	return (
		<MultiProvider providers={[
			<PreactIso.LocationProvider key={null} />,
			<ThemeProvider key={null} />,
		]}>
			<AppHeader title="Hello Preact!" />

			<AppMain>
				<AppRouter />
			</AppMain>

			<AppFooter />
		</MultiProvider>
	);
};
