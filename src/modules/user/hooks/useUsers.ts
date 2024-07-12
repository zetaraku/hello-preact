import * as ReactQuery from '@tanstack/react-query';
import { getUsers } from '../api';

export function useUsers() {
	return ReactQuery.useQuery({
		queryKey: ['users'],
		queryFn: async () => await getUsers(),
	});
}
