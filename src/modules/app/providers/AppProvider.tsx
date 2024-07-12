import * as Preact from 'preact';
import * as PreactIso from 'preact-iso';
import { ThemeProvider } from '@/modules/theme';
import { MultiProvider } from '@/modules/util';
import { ReactQueryProvider } from '../providers/ReactQueryProvider';

export const AppProvider: Preact.FunctionComponent = (props) => {
	return (
		<MultiProvider providers={[
			<ReactQueryProvider key={null} />,
			<PreactIso.LocationProvider key={null} />,
			<ThemeProvider key={null} />,
		]}>
			{props.children}
		</MultiProvider>
	);
};
