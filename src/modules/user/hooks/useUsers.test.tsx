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
			expect(r.result.current.isSuccess).toBe(true);
			expect(r.result.current.data).toMatchObject([
				{ username: 'dummy', name: 'Dummy' },
			]);
		});
	});

	it('should be able to capture error', async () => {
		const error = new Error('Failed to fetch.');
		vi.mocked(getUsers).mockRejectedValueOnce(error);

		const r = renderHook(() => useUsers(), {
			wrapper: ({ children }) => (
				<TestQueryClientProvider>
					{children}
				</TestQueryClientProvider>
			),
		});

		await waitFor(() => {
			expect(r.result.current.isError).toBe(true);
			expect(r.result.current.error).toBe(error);
		});
	});
});
