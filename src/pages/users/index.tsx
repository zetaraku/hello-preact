import * as Preact from 'preact';
import { useUsers } from '@/modules/user';

export const UsersPage: Preact.FunctionComponent = () => {
	const { users } = useUsers();

	return (
		<div>
			<h1>All Users</h1>
			{users === undefined ? (
				<p>Error when loading users.</p>
			) : users === null ? (
				<i>Loading users...</i>
			) : (
				<ul>
					{users.map((user, i) => (
						<li key={i}>
							<a href={`/users/${user.username}`}>{user.name} (@{user.username})</a>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
