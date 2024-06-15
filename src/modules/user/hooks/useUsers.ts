import * as PreactHooks from 'preact/hooks';
import { getUsers } from '../api';
import { User } from '../shared';

export function useUsers() {
	const [users, setUsers] = PreactHooks.useState<User[] | null | undefined>(null);

	PreactHooks.useEffect(() => {
		let ignore = false as boolean;

		void (async () => {
			const resultUsers = await getUsers().catch(() => undefined);

			if (!ignore) setUsers(resultUsers);
		})();

		return function cleanup() {
			ignore = true;
		};
	}, []);

	return {
		users,
	};
}
