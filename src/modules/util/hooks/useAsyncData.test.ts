import { describe, it, expect, afterEach } from 'vitest';
import { renderHook, waitFor, cleanup } from '@testing-library/preact';
import { useAsyncData } from './useAsyncData';

afterEach(() => {
	cleanup();
});

describe('useAsyncData()', () => {
	it('should be able to handle resolved promise', async () => {
		const r = renderHook(() => useAsyncData(
			async () => await Promise.resolve({ answer: 42 }),
			[],
		));

		await waitFor(() => {
			expect(r.result.current.data).not.toBe(null);
			expect(r.result.current.data).toMatchObject({ answer: 42 });
		});
	});

	it('should be able to handle rejected promise', async () => {
		const r = renderHook(() => useAsyncData(
			async () => await Promise.reject(new Error('no answer :(')),
			[],
		));

		await waitFor(() => {
			expect(r.result.current.data).not.toBe(null);
			expect(r.result.current.data).toBe(undefined);
		});
	});

	it('should be able to handle rerender correctly', async () => {
		const r = renderHook(({ name }) => useAsyncData(
			async () => await Promise.resolve({ message: `Hello ${name}!` }),
			[name],
		), {
			initialProps: {
				name: 'alice',
			},
		});

		await waitFor(() => {
			expect(r.result.current.data).not.toBe(null);
			expect(r.result.current.data).toMatchObject({ message: 'Hello alice!' });
		});

		r.rerender({
			name: 'bob',
		});

		await waitFor(() => {
			expect(r.result.current.data).toMatchObject({ message: 'Hello bob!' });
		});
	});
});
