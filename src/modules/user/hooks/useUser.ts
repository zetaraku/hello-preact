import * as ReactQuery from '@tanstack/react-query';
import { getUser } from '../api';

export function useUser(username: string) {
	return ReactQuery.useQuery({
		queryKey: ['user', username],
		queryFn: async () => await getUser(username),
	});
}
