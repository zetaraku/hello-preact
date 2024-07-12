import { vi, describe, it, expect, afterEach } from 'vitest';
import { renderHook, waitFor, cleanup } from '@testing-library/preact';
import { TestQueryClientProvider } from '@/modules/test';
import { useUsers } from './useUsers';

vi.mock('../api', () => ({
	getUsers: vi.fn(
		() => Promise.resolve([
			{ username: 'dummy', name: 'Dummy' },
		]),
	),
}) satisfies Partial<typeof import('../api')>);

afterEach(() => {
	cleanup();
});

describe('useUsers()', () => {
	it('should be able to fetch users', async () => {
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
});
