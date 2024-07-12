import * as Preact from 'preact';
import * as PreactHooks from 'preact/hooks';
import * as ReactQuery from '@tanstack/react-query';
import { getUsers } from '@/modules/user/api';

const queryClientConfig: ReactQuery.QueryClientConfig = {
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false,
		},
	},
};

export const ReactQueryProvider: Preact.FunctionComponent = (props) => {
	const [queryClient] = PreactHooks.useState(
		() => new ReactQuery.QueryClient(queryClientConfig),
	);

	PreactHooks.useEffect(() => {
		void queryClient.prefetchQuery({
			queryKey: ['users'],
			queryFn: async () => await getUsers(),
		});
	}, []);

	return (
		<ReactQuery.QueryClientProvider client={queryClient}>
			{props.children}
		</ReactQuery.QueryClientProvider>
	);
};
