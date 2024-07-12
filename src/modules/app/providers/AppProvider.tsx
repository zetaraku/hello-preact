import * as Preact from 'preact';
import * as PreactIso from 'preact-iso';
import * as PreactHooks from 'preact/hooks';
import * as ReactQuery from '@tanstack/react-query';
import { ThemeProvider } from '@/modules/theme';
import { MultiProvider } from '@/modules/util';

const queryClientConfig: ReactQuery.QueryClientConfig = {
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
};

export const AppProvider: Preact.FunctionComponent = (props) => {
	const [queryClient] = PreactHooks.useState(
		() => new ReactQuery.QueryClient(queryClientConfig),
	);

	return (
		<MultiProvider providers={[
			<ReactQuery.QueryClientProvider client={queryClient} key={null} />,
			<PreactIso.LocationProvider key={null} />,
			<ThemeProvider key={null} />,
		]}>
			{props.children}
		</MultiProvider>
	);
};
