import * as Preact from 'preact';
import * as PreactHooks from 'preact/hooks';
import * as ReactQuery from '@tanstack/react-query';
import { AppRouter } from '@/router';
import { AppHeader } from '../components/AppHeader';
import { AppMain } from '../components/AppMain';
import { AppFooter } from '../components/AppFooter';
import { AppErrorBoundary } from '../components/AppErrorBoundary';
import { getUsers } from '@/modules/user/api';

export const App: Preact.FunctionComponent = () => {
	const queryClient = ReactQuery.useQueryClient();

	PreactHooks.useEffect(() => {
		void queryClient.prefetchQuery({
			queryKey: ['users'],
			queryFn: async () => await getUsers(),
		});
	}, []);

	return (
		<>
			<AppHeader title="Hello Preact!" />

			<AppMain>
				<AppErrorBoundary>
					<AppRouter />
				</AppErrorBoundary>
			</AppMain>

			<AppFooter />
		</>
	);
};
