import * as Preact from 'preact';
import { useTheme, availableThemes, Theme } from '../contexts/ThemeContext';

export const ThemeChanger: Preact.FunctionComponent = () => {
	const { theme, setTheme } = useTheme();

	return (
		<select
			value={theme}
			onChange={(event) => { setTheme(event.currentTarget.value as Theme); }}
		>
			{availableThemes.map((theme, i) => (
				<option key={i} value={theme}>{theme}</option>
			))}
		</select>
	);
};
