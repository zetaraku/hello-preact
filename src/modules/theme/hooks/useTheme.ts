import * as PreactHooks from 'preact/hooks';
import { ThemeContext } from '../contexts/ThemeContext';
import { defaultTheme } from '../shared';

export function useTheme() {
	const { theme, setTheme } = PreactHooks.useContext(ThemeContext);

	function resetTheme() {
		setTheme(defaultTheme);
	}

	return {
		theme,
		setTheme,
		resetTheme,
	};
}
