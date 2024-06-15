import * as Preact from 'preact';
import * as PreactHooks from 'preact/hooks';
import { Theme } from '../shared';

export const ThemeContext = Preact.createContext<{
	theme: Theme,
	setTheme: PreactHooks.Dispatch<PreactHooks.StateUpdater<Theme>>,
}>({
	theme: 'light',
	setTheme: () => undefined,
});
