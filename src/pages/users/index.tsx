import * as Preact from 'preact';
import { useUsers } from '@/modules/user';

export const UsersPage: Preact.FunctionComponent = () => {
	const { data: users, isPending, isError } = useUsers();

	return (
		<div>
			<h1>All Users</h1>
			{isError ? (
				<p>Error when loading users.</p>
			) : isPending ? (
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
