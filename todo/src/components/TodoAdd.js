import React from 'react';

const TodoData = ({ onSubmit, tasks }) => (
	<div className="task-input">
		<form id="task-form" onSubmit={onSubmit}>
			<input
				className={tasks.error ? 'error' : ''}
				placeholder="Enter your task"
				type="text"
			/>
			{tasks.error ? (
				<small className="error-msg">Invalid task text (min 3)</small>
			) : (
				''
			)}
		</form>
	</div>
);

export default TodoData;
