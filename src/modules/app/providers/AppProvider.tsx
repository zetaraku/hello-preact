import * as Preact from 'preact';
import * as PreactIso from 'preact-iso';
import { ThemeProvider } from '@/modules/theme';
import { MultiProvider } from '@/modules/util';

export const AppProvider: Preact.FunctionComponent = (props) => {
	return (
		<MultiProvider providers={[
			<PreactIso.LocationProvider key={null} />,
			<ThemeProvider key={null} />,
		]}>
			{props.children}
		</MultiProvider>
	);
};
