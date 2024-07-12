import * as Preact from 'preact';
import { useUser } from '@/modules/user';
import { useParam } from '@/modules/util';

export const UserPage: Preact.FunctionComponent = () => {
	const username = useParam('username');
	const { user } = useUser(username);

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
