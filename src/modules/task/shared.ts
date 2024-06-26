export type Task = {
	id: number,
	title: string,
	done: boolean,
};

export type RawTask = Omit<Task, 'id'>;
