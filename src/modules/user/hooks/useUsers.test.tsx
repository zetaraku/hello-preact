import { vi, describe, it, expect, afterEach } from 'vitest';
import { renderHook, waitFor, cleanup } from '@testing-library/preact';
import { TestQueryClientProvider } from '@/modules/test';
import { useUsers } from './useUsers';
import { getUsers } from '../api';

vi.mock('../api', () => ({
	getUsers: vi.fn(),
}) satisfies Partial<typeof import('../api')>);

afterEach(() => {
	cleanup();
});

describe('useUsers()', () => {
	it('should be able to fetch users', async () => {
		vi.mocked(getUsers).mockResolvedValueOnce([
			{ username: 'dummy', name: 'Dummy' },
		]);

		const r = renderHook(() => useUsers(), {
			wrapper: ({ children }) => (
				<TestQueryClientProvider>
					{children}
				</TestQueryClientProvider>
			),
		});

		await waitFor(() => {
			expect(r.result.current.users).not.toBe(null);
			expect(r.result.current.users).toMatchObject([
				{ username: 'dummy', name: 'Dummy' },
			]);
		});
	});

	it('should return undefined on error', async () => {
		vi.mocked(getUsers).mockRejectedValueOnce(new Error('Failed to fetch.'));

		const r = renderHook(() => useUsers(), {
			wrapper: ({ children }) => (
				<TestQueryClientProvider>
					{children}
				</TestQueryClientProvider>
			),
		});

		await waitFor(() => {
			expect(r.result.current.users).not.toBe(null);
			expect(r.result.current.users).toBe(undefined);
		});
	});
});
