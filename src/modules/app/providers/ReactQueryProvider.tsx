import * as Preact from 'preact';
import * as PreactHooks from 'preact/hooks';
import * as ReactQuery from '@tanstack/react-query';

const queryClientConfig: ReactQuery.QueryClientConfig = {
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
};

export const ReactQueryProvider: Preact.FunctionComponent = (props) => {
	const [queryClient] = PreactHooks.useState(
		() => new ReactQuery.QueryClient(queryClientConfig),
	);

	return (
		<ReactQuery.QueryClientProvider client={queryClient}>
			{props.children}
		</ReactQuery.QueryClientProvider>
	);
};
