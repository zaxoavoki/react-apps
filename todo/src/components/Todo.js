import React from 'react';
import Task from './Task';
import TodoData from './TodoData';
import TodoAdd from './TodoAdd';

const Todo = ({ onSubmit, onDelete, onClick, tasks }) => {
	return (
		<div className="tasks">
			<TodoData tasks={tasks} />
			<TodoAdd onSubmit={onSubmit} tasks={tasks} />
			<div className="tasks-list">
				{tasks.tasks.length
					? tasks.tasks
							.sort((a, b) => b.id - a.id)
							.map((task) => (
								<Task
									onDelete={onDelete}
									onClick={onClick}
									key={task.id}
									task={task}
								/>
							))
					: 'There is no any task yet.'}
			</div>
		</div>
	);
};

export default Todo;
