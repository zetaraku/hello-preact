import { describe, it, expect, afterEach } from 'vitest';
import { renderHook, act, cleanup } from '@testing-library/preact';
import { ThemeProvider } from '../providers/ThemeProvider';
import { useTheme } from './useTheme';

afterEach(() => {
	cleanup();
});

describe('useTheme()', () => {
	it('should be able to change the theme', async () => {
		const r = renderHook(() => useTheme(), {
			wrapper: ({ children }) => (
				<ThemeProvider>{children}</ThemeProvider>
			),
		});

		await act(() => {
			r.result.current.setTheme('dark');
		});

		expect(r.result.current.theme).toBe('dark');

		await act(() => {
			r.result.current.setTheme('magic');
		});

		expect(r.result.current.theme).toBe('magic');

		await act(() => {
			r.result.current.resetTheme();
		});

		expect(r.result.current.theme).toBe('light');
	});

	it('shouldn\'t be able to change the theme if <ThemeProvider /> is not present', async () => {
		const r = renderHook(() => useTheme(), {
			wrapper: ({ children }) => (
				<>{children}</>
			),
		});

		expect(r.result.current.theme).toBe('light');

		await act(() => {
			r.result.current.setTheme('dark');
		});

		expect(r.result.current.theme).toBe('light');
	});
});
