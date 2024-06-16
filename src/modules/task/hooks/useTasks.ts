import * as PreactHooks from 'preact/hooks';
import * as PreactSignals from '@preact/signals';
import { Task, RawTask } from '../shared';

export function useTasks(initialTasks: RawTask[] = []) {
	const nextTaskId = PreactSignals.useSignal(1);

	const tasks = PreactSignals.useSignal<Task[]>([]);

	function addTask(rawTask: RawTask) {
		tasks.value = [...tasks.value, { ...rawTask, id: nextTaskId.value++ }];
	}

	function toggleTask(taskId: number) {
		tasks.value = tasks.value.map(
			(task) => task.id === taskId ? { ...task, done: !task.done } : task,
		);
	}

	function deleteTask(taskId: number) {
		tasks.value = tasks.value.filter((task) => task.id !== taskId);
	}

	PreactHooks.useLayoutEffect(() => {
		PreactSignals.batch(() => {
			for (const rawTask of initialTasks) {
				addTask(rawTask);
			}
		});
	}, []);

	return {
		tasks,
		addTask,
		toggleTask,
		deleteTask,
	};
}
