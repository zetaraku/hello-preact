import * as Preact from 'preact';
import { useTheme } from '../contexts/ThemeContext';

export const AppFooter: Preact.FunctionComponent = () => {
	const { theme } = useTheme();

	return (
		<footer>
			<hr />
			<p>You're browsing in <i>{theme}</i> theme :)</p>
		</footer>
	);
};
