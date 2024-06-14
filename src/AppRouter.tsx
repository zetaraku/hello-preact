import * as Preact from 'preact';
import * as PreactIso from 'preact-iso';
import { IndexPage } from './pages';
import { UsersPage } from './pages/users';
import { UserPage } from './pages/users/[username]';

const NotFoundPage = PreactIso.lazy(() => import('./pages/_404').then((m) => m.NotFoundPage));

export const AppRouter: Preact.FunctionComponent = () => {
	return (
		<PreactIso.Router>
			<PreactIso.Route path="/" component={IndexPage} />
			<PreactIso.Route path="/users" component={UsersPage} />
			<PreactIso.Route path="/users/:username" component={UserPage} />
			<PreactIso.Route default path="/404" component={NotFoundPage} />
		</PreactIso.Router>
	);
};
