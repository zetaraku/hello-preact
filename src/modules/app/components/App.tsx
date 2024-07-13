import * as Preact from 'preact';
import { AppRouter } from '@/router';
import { AppHeader } from '../components/AppHeader';
import { AppMain } from '../components/AppMain';
import { AppFooter } from '../components/AppFooter';
import { AppErrorBoundary } from '../components/AppErrorBoundary';

export const App: Preact.FunctionComponent = () => {
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
