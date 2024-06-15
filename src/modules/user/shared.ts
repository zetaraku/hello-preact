export const allUsers = [
	{ username: 'alice', name: 'Alice' },
	{ username: 'bob', name: 'Bob' },
	{ username: 'cindy', name: 'Cindy' },
	{ username: 'raku', name: 'Raku' },
];

export type User = typeof allUsers[number];
