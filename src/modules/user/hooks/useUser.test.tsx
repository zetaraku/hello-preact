import { vi, describe, it, expect, afterEach } from 'vitest';
import { renderHook, waitFor, cleanup } from '@testing-library/preact';
import { TestQueryClientProvider } from '@/modules/test';
import { useUser } from './useUser';

vi.mock('../api', () => ({
	getUser: vi.fn(
		() => Promise.resolve({ username: 'dummy', name: 'Dummy' }),
	),
}) satisfies Partial<typeof import('../api')>);

afterEach(() => {
	cleanup();
});

describe('useUser()', () => {
	it('should be able to fetch user', async () => {
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
});
