import * as Preact from 'preact';
import * as PreactHooks from 'preact/hooks';
import * as PreactSignals from '@preact/signals';
import { useTasks, RawTask } from '@/modules/task';

const defaultTasks: RawTask[] = [
	{ title: 'Take out Trash', done: false },
	{ title: 'Try out Preact', done: true },
	{ title: 'Fix bugs', done: false },
	{ title: 'Refactor code', done: false },
];

export const TasksPage: Preact.FunctionComponent = () => {
	const titleInputRef = PreactHooks.useRef<HTMLInputElement>(null);
	const doneInputRef = PreactHooks.useRef<HTMLInputElement>(null);

	const { tasks, addTask, toggleTask, deleteTask } = useTasks(defaultTasks);

	const tasksCount = PreactSignals.useComputed(
		() => tasks.value.length,
	);
	const doneTasksCount = PreactSignals.useComputed(
		() => tasks.value.filter((task) => task.done).length,
	);

	function createTask() {
		if (titleInputRef.current === null || doneInputRef.current === null) {
			throw new Error('ref is not ready.');
		}

		const rawTask: RawTask = {
			title: titleInputRef.current.value || titleInputRef.current.placeholder,
			done: doneInputRef.current.checked,
		};

		titleInputRef.current.value = '';

		return rawTask;
	}

	return (
		<div>
			<h1>Tasks <small>({doneTasksCount}/{tasksCount})</small></h1>
			<ul>
				{tasks.value.map((task) => (
					<li key={task.id}>
						<label>
							<input
								type="checkbox"
								checked={task.done}
								onClick={() => { toggleTask(task.id); }}
							/>
							{' '}
							{task.done ? (
								<del>{task.title}</del>
							) : (
								<span>{task.title}</span>
							)}
						</label>
						{' '}
						<button onClick={() => { deleteTask(task.id); }}>Delete</button>
					</li>
				))}
				<li>
					<input ref={doneInputRef} type="checkbox" />
					{' '}
					<input ref={titleInputRef} type="text" placeholder="New task" />
					{' '}
					<button onClick={() => { addTask(createTask()); }}>Create</button>
				</li>
			</ul>
		</div>
	);
};
