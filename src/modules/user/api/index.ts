import { User } from '../shared';

type RandomAPIUser = {
	login: {
		username: string,
	},
	name: {
		first: string,
	},
};

type RandomAPIData = {
	results: RandomAPIUser[],
};

export async function getUsers(): Promise<User[]> {
	const data = await fetch('https://randomuser.me/api/?seed=hello-preact&results=5')
		.then(async (response) => await response.json() as RandomAPIData);

	const users = data.results.map((result) => ({
		username: result.login.username,
		name: result.name.first,
	}));

	return users;
}

export async function getUser(username: string): Promise<User> {
	const data = await fetch('https://randomuser.me/api/?seed=hello-preact&results=5')
		.then(async (response) => await response.json() as RandomAPIData);

	const users = data.results.map((result) => ({
		username: result.login.username,
		name: result.name.first,
	}));

	const user = users.find((user) => user.username === username);

	if (user === undefined) {
		throw new Error(`The user with username "${username}" doesn't exist.`);
	}

	return user;
}
