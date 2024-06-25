import { useAsyncData } from '@/modules/util';
import { getUser } from '../api';
import { User } from '../shared';

export function useUser(username: string) {
	const { data: user } = useAsyncData<User>(
		async () => await getUser(username),
		[username],
	);

	return {
		user,
	};
}
