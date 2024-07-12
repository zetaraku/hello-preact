import * as Preact from 'preact';
import { useUser } from '@/modules/user';
import { useParam } from '@/modules/util';

export const UserPage: Preact.FunctionComponent = () => {
	const username = useParam('username');
	const { data: user, isPending, isError } = useUser(username);

	return (
		<div>
			<h1>User</h1>
			{isError ? (
				<p>Error when loading user with username <code>{username}</code>.</p>
			) : isPending ? (
				<i>Loading user...</i>
			) : (
				<div>
					<p>Hi {user.name} (@{user.username})! Glad to see you!</p>
				</div>
			)}
		</div>
	);
};
