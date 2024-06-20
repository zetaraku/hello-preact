import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import * as Preact from 'preact';
import { ThemeChanger } from './ThemeChanger';
import { ThemeProvider } from '../providers/ThemeProvider';
import { useTheme } from '../hooks/useTheme';

const user = userEvent.setup();

afterEach(() => {
	cleanup();
});

const ThemeDisplay = () => {
	const { theme } = useTheme();

	return (
		<span data-testid="test:theme-display">Current theme: {theme}</span>
	);
};

function renderWithTestHelper(ui: Preact.ComponentChild) {
	return render((
		<>
			{ui}
			<ThemeDisplay />
		</>
	), {
		wrapper: ({ children }) => (
			<ThemeProvider>{children}</ThemeProvider>
		),
	});
}

describe('<ThemeChanger />', () => {
	it('should able to change the theme', async () => {
		const r = renderWithTestHelper(<ThemeChanger />);

		await user.selectOptions(r.getByTestId('theme-changer'), 'dark');

		expect(r.getByTestId('test:theme-display').textContent).toBe('Current theme: dark');

		await user.selectOptions(r.getByTestId('theme-changer'), 'magic');

		expect(r.getByTestId('test:theme-display').textContent).toBe('Current theme: magic');
	});
});
