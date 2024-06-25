import * as PreactHooks from 'preact/hooks';

export function useAsyncData<T>(handler: () => Promise<T>, inputs: PreactHooks.Inputs) {
	const [data, setData] = PreactHooks.useState<T | null | undefined>(null);

	PreactHooks.useEffect(() => {
		let ignore = false as boolean;

		void (async () => {
			const result = await handler().catch(() => undefined);

			if (!ignore) setData(result);
		})();

		return function cleanup() {
			ignore = true;
		};
	}, inputs);

	return {
		data,
	};
}
