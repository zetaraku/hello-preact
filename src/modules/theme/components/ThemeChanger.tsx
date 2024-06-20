import * as Preact from 'preact';
import { useTheme } from '../hooks/useTheme';
import { availableThemes, Theme } from '../shared';

export const ThemeChanger: Preact.FunctionComponent = () => {
	const { theme, setTheme } = useTheme();

	return (
		<select
			value={theme}
			data-testid="theme-changer"
			onChange={(event) => { setTheme(event.currentTarget.value as Theme); }}
		>
			{availableThemes.map((theme, i) => (
				<option key={i} value={theme}>{theme}</option>
			))}
		</select>
	);
};
