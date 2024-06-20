import { describe, it, expect, afterEach } from 'vitest';
import { renderHook, cleanup } from '@testing-library/preact';
import { useTasks } from './useTasks';

afterEach(() => {
	cleanup();
});

describe('useTasks()', () => {
	it('should be able to provide initial tasks', () => {
		const r = renderHook(() => useTasks([
			{ title: 'Task A', done: false },
			{ title: 'Task B', done: true },
			{ title: 'Task C', done: false },
		]));

		expect(r.result.current.tasks.value).toMatchObject([
			{ title: 'Task A', done: false },
			{ title: 'Task B', done: true },
			{ title: 'Task C', done: false },
		]);
	});

	it('should be able to add tasks', () => {
		const r = renderHook(() => useTasks());

		r.result.current.addTask({ title: 'Task A', done: false });
		r.result.current.addTask({ title: 'Task B', done: true });
		r.result.current.addTask({ title: 'Task C', done: false });

		expect(r.result.current.tasks.value).toMatchObject([
			{ title: 'Task A', done: false },
			{ title: 'Task B', done: true },
			{ title: 'Task C', done: false },
		]);
	});

	it('should be able to toggle tasks', () => {
		const r = renderHook(() => useTasks([
			{ title: 'Task A', done: false },
			{ title: 'Task B', done: true },
			{ title: 'Task C', done: false },
		]));

		for (const task of r.result.current.tasks.value) {
			r.result.current.toggleTask(task.id);
		}

		expect(r.result.current.tasks.value).toMatchObject([
			{ title: 'Task A', done: true },
			{ title: 'Task B', done: false },
			{ title: 'Task C', done: true },
		]);
	});

	it('should be able to delete tasks', () => {
		const r = renderHook(() => useTasks([
			{ title: 'Task A', done: false },
			{ title: 'Task B', done: true },
			{ title: 'Task C', done: false },
		]));

		for (const task of r.result.current.tasks.value) {
			if (!task.done) r.result.current.deleteTask(task.id);
		}

		expect(r.result.current.tasks.value).toMatchObject([
			{ title: 'Task B', done: true },
		]);
	});
});
