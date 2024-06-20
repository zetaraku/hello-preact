import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import { MyCounter } from './MyCounter';

const user = userEvent.setup();

afterEach(() => {
	cleanup();
});

describe('<MyCounter />', () => {
	it('should display initial count', () => {
		const r = render(<MyCounter />);

		// r.debug();

		expect(r.getByText('You clicked 0 times!')).toBeDefined();
	});

	it('should increment after "Click me" button is clicked', async () => {
		const r = render(<MyCounter />);

		await user.click(await r.findByText('Click me'));

		expect(r.getByText('You clicked 1 times!')).toBeDefined();
	});
});
