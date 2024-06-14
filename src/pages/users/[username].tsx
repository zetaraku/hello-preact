import * as Preact from 'preact';
import * as PreactIso from 'preact-iso';
import { ErrorPage } from '../_error';
import { allUsers } from '.';

export const UserPage: Preact.FunctionComponent = () => {
	const route = PreactIso.useRoute();

	const username = route.params['username'];
	const user = allUsers.find(user => user.username === username);

	if (user === undefined) {
		return (
			<ErrorPage>
				<p>The user with username <code>{username}</code> doesn't exist.</p>
			</ErrorPage>
		);
	}

	return (
		<div>
			<h1>User: {user.name}</h1>
			<p>Hi {user.name} (@{user.username})! Glad to see you!</p>
		</div>
	);
};
