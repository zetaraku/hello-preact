import * as Preact from 'preact';

export const allUsers = [
	{ username: 'alice', name: 'Alice' },
	{ username: 'bob', name: 'Bob' },
	{ username: 'cindy', name: 'Cindy' },
	{ username: 'raku', name: 'Raku' },
];

export const UsersPage: Preact.FunctionComponent = () => {
	return (
		<div>
			<h1>All Users</h1>
			<ul>
				{allUsers.map((user, i) => (
					<li key={i}>
						<a href={`/users/${user.username}`}>{user.name} (@{user.username})</a>
					</li>
				))}
			</ul>
		</div>
	);
};
