import * as Preact from 'preact';
import * as PreactHooks from 'preact/hooks';

export const availableThemes = [
	'light',
	'dark',
	'magic',
] as const;

export type Theme = typeof availableThemes[number];

const ThemeContext = Preact.createContext<{
	theme: Theme,
	setTheme: PreactHooks.Dispatch<PreactHooks.StateUpdater<Theme>>,
}>({
	theme: 'light',
	setTheme: () => undefined,
});

export const ThemeProvider: Preact.FunctionComponent = (props) => {
	const [theme, setTheme] = PreactHooks.useState<Theme>('light');

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const { theme, setTheme } = PreactHooks.useContext(ThemeContext);

	function resetTheme() {
		setTheme('light');
	}

	return {
		theme,
		setTheme,
		resetTheme,
	};
};
