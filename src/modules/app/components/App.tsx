import * as Preact from 'preact';
import { AppRouter } from '@/router';
import { AppProvider } from '../providers/AppProvider';
import { AppHeader } from '../components/AppHeader';
import { AppMain } from '../components/AppMain';
import { AppFooter } from '../components/AppFooter';

export const App: Preact.FunctionComponent = () => {
	return (
		<AppProvider>
			<AppHeader title="Hello Preact!" />

			<AppMain>
				<AppRouter />
			</AppMain>

			<AppFooter />
		</AppProvider>
	);
};
