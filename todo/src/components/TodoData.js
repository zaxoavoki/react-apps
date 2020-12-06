import React from 'react';

const TodoData = ({ tasks }) => (
	<div className="tasks-info">
		<p id="done">
			Done: <span>{tasks.done}</span>
		</p>
		<p id="todo">
			Tasks: <span>{tasks.tasks.length || 0}</span>
		</p>
	</div>
);

export default TodoData;
