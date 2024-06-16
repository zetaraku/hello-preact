import * as Preact from 'preact';
import { AppRouter } from '@/router';
import { AppProvider } from '../providers/AppProvider';
import { AppHeader } from '../components/AppHeader';
import { AppMain } from '../components/AppMain';
import { AppFooter } from '../components/AppFooter';
import { AppErrorBoundary } from '../components/AppErrorBoundary';

export const App: Preact.FunctionComponent = () => {
	return (
		<AppProvider>
			<AppHeader title="Hello Preact!" />

			<AppMain>
				<AppErrorBoundary>
					<AppRouter />
				</AppErrorBoundary>
			</AppMain>

			<AppFooter />
		</AppProvider>
	);
};
