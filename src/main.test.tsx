import { test, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/preact';
import { App } from '@/modules/app';

afterEach(() => {
	cleanup();
});

test('smoke test', () => {
	render(<App />);
});
