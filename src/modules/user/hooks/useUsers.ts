import * as ReactQuery from '@tanstack/react-query';
import { getUsers } from '../api';

export function useUsers() {
	const usersQuery = ReactQuery.useQuery({
		queryKey: ['users'],
		queryFn: async () => await getUsers(),
	});

	const users = (
		usersQuery.isPending ? null
		: usersQuery.isError ? undefined
		: usersQuery.data
	);

	return {
		users,
	};
}
