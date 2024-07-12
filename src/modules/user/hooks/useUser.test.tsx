import { vi, describe, it, expect, afterEach } from 'vitest';
import { renderHook, waitFor, cleanup } from '@testing-library/preact';
import { TestQueryClientProvider } from '@/modules/test';
import { useUser } from './useUser';
import { getUser } from '../api';

vi.mock('../api', () => ({
	getUser: vi.fn(),
}) satisfies Partial<typeof import('../api')>);

afterEach(() => {
	cleanup();
});

describe('useUser()', () => {
	it('should be able to fetch user', async () => {
		vi.mocked(getUser).mockResolvedValueOnce({ username: 'dummy', name: 'Dummy' });

		const r = renderHook(() => useUser('dummy'), {
			wrapper: ({ children }) => (
				<TestQueryClientProvider>
					{children}
				</TestQueryClientProvider>
			),
		});

		await waitFor(() => {
			expect(r.result.current.user).not.toBe(null);
			expect(r.result.current.user).toMatchObject({ username: 'dummy', name: 'Dummy' });
		});
	});

	it('should return undefined on error', async () => {
		vi.mocked(getUser).mockRejectedValueOnce(new Error('Failed to fetch.'));

		const r = renderHook(() => useUser('dummy'), {
			wrapper: ({ children }) => (
				<TestQueryClientProvider>
					{children}
				</TestQueryClientProvider>
			),
		});

		await waitFor(() => {
			expect(r.result.current.user).not.toBe(null);
			expect(r.result.current.user).toBe(undefined);
		});
	});
});
