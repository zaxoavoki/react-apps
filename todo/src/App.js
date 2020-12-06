import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Todo from './components/Todo';

function App() {
	const [tasks, setTasks] = useState(
		JSON.parse(localStorage.getItem('tasks')) || {
			tasks: [],
			error: false,
		}
	);
	const done = useMemo(() => tasks.tasks.filter((e) => e.done).length, [
		tasks,
	]);

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	const onSubmit = (e) => {
		e.preventDefault();
		if (e.target.children[0].value.length <= 3) {
			setTasks({
				tasks: tasks.tasks,
				error: true,
			});
			return;
		}

		setTasks({
			tasks: [
				...tasks.tasks,
				{
					id: Math.max(...tasks.tasks.map((e) => e.id), 0) + 1,
					text: e.target.children[0].value,
					done: false,
				},
			],
			error: false,
		});
		e.target.children[0].value = '';
	};

	const onClick = useCallback(
		(task) =>
			setTasks({
				tasks: tasks.tasks.map((e) =>
					Object.assign(e, {
						done: e.id === task.id ? !e.done : e.done,
					})
				),
				error: tasks.error,
			}),
		[tasks]
	);

	const onDelete = useCallback(
		(task) =>
			setTasks({
				tasks: tasks.tasks.filter((e) => e.id !== task.id),
				error: tasks.error,
			}),
		[tasks]
	);

	return (
		<div className="container">
			<h1>To-do</h1>
			<Todo
				onDelete={onDelete}
				onSubmit={onSubmit}
				tasks={Object.assign(tasks, { done })}
				onClick={onClick}
			/>
		</div>
	);
}

export default App;
