import * as PreactHooks from 'preact/hooks';
import { getUser } from '../api';
import { User } from '../shared';

export function useUser(username: string) {
	const [user, setUser] = PreactHooks.useState<User | null | undefined>(null);

	PreactHooks.useEffect(() => {
		let ignore = false as boolean;

		void (async () => {
			const resultUser = await getUser(username).catch(() => undefined);

			if (!ignore) setUser(resultUser);
		})();

		return function cleanup() {
			ignore = true;
		};
	}, [username]);

	return {
		user,
	};
}
