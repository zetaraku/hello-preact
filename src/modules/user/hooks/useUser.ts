import * as ReactQuery from '@tanstack/react-query';
import { getUser } from '../api';

export function useUser(username: string) {
	const userQuery = ReactQuery.useQuery({
		queryKey: ['user', username],
		queryFn: async () => await getUser(username),
	});

	const user = (
		userQuery.isPending ? null
		: userQuery.isError ? undefined
		: userQuery.data
	);

	return {
		user,
	};
}
