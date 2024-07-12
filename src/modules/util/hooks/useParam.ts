import * as PreactIso from 'preact-iso';

export function useParam(name: string): string {
	const route = PreactIso.useRoute();
	const param = route.params[name];

	if (param === undefined) {
		throw new Error(`Route param "${name}" is missing.`);
	}

	return param;
}
