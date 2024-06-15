import { allUsers, User } from '../shared';

export async function getUsers(): Promise<User[]> {
	await new Promise((resolve) => setTimeout(resolve, 500));

	return allUsers.slice();
}

export async function getUser(username: string): Promise<User> {
	await new Promise((resolve) => setTimeout(resolve, 500));

	const user = allUsers.find((user) => user.username === username);

	if (user === undefined) {
		throw new Error(`The user with username "${username}" doesn't exist.`);
	}

	return user;
}
