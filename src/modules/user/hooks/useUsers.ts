import { useAsyncData } from '@/modules/util';
import { getUsers } from '../api';
import { User } from '../shared';

export function useUsers() {
	const { data: users } = useAsyncData<User[]>(
		async () => await getUsers(),
		[],
	);

	return {
		users,
	};
}
