import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest';
import * as MSW from 'msw';
import { getUsers, getUser } from '.';
import { mockServer } from './mocks';

beforeAll(() => {
	mockServer.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => {
	mockServer.resetHandlers();
});

afterAll(() => {
	mockServer.close();
});

describe('getUsers()', () => {
	it('should return users', async () => {
		await expect(getUsers()).resolves.toHaveLength(5);
	});

	it('should throw error if the endpoint is down', async () => {
		mockServer.use(...[
			MSW.http.get('https://randomuser.me/api/', () => {
				return MSW.HttpResponse.error();
			}),
		]);

		await expect(getUsers()).rejects.toThrowError();
	});
});

describe('getUser()', () => {
	it('should return data for existent user', async () => {
		await expect(getUser('crazytiger381')).resolves
			.toMatchObject({
				username: 'crazytiger381',
				name: 'Marvin',
			});
	});

	it('should throw error for non-existent user', async () => {
		await expect(getUser('galaxyexpress999')).rejects
			.toThrowError(`The user with username "galaxyexpress999" doesn't exist.`);
	});

	it('should throw error if the endpoint is down', async () => {
		mockServer.use(...[
			MSW.http.get('https://randomuser.me/api/', () => {
				return MSW.HttpResponse.error();
			}),
		]);

		await expect(getUser('crazytiger381')).rejects.toThrowError();
	});
});
