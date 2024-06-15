import * as Preact from 'preact';
import * as PreactHooks from 'preact/hooks';
import { ThemeContext } from '../contexts/ThemeContext';
import { Theme } from '../shared';

export const ThemeProvider: Preact.FunctionComponent = (props) => {
	const [theme, setTheme] = PreactHooks.useState<Theme>('light');

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
};
