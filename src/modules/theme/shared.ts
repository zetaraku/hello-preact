export const availableThemes = [
	'light',
	'dark',
	'magic',
] as const;

export type Theme = typeof availableThemes[number];
