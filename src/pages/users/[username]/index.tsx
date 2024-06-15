import * as Preact from 'preact';
import * as PreactIso from 'preact-iso';
import { useUser } from '@/modules/user';

export const UserPage: Preact.FunctionComponent = () => {
	const route = PreactIso.useRoute();
	const username = route.params['username'];
	const { user } = useUser(username ?? '');

	return (
		<div>
			<h1>User</h1>
			{user === undefined ? (
				<p>Error when loading user with username <code>{username}</code>.</p>
			) : user === null ? (
				<i>Loading user...</i>
			) : (
				<div>
					<p>Hi {user.name} (@{user.username})! Glad to see you!</p>
				</div>
			)}
		</div>
	);
};
