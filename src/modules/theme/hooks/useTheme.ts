import * as PreactHooks from 'preact/hooks';
import { ThemeContext } from '../contexts/ThemeContext';

export function useTheme() {
	const { theme, setTheme } = PreactHooks.useContext(ThemeContext);

	function resetTheme() {
		setTheme('light');
	}

	return {
		theme,
		setTheme,
		resetTheme,
	};
}
