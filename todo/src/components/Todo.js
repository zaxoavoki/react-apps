import React from 'react';
import Task from "./Task";

const Todo = (props) => {
    return <div className="tasks">
        <div className="tasks-info">
            <p id="done">Done: <span>{props.tasks.done}</span></p>
            <p id="todo">Tasks: <span>{props.tasks.tasks.length || 0}</span></p>
        </div>
        <div className="task-input">
            <form id="task-form" onSubmit={props.onSubmit}>
                <input className={props.tasks.error ? 'error' : ''} placeholder="Enter your task" type="text"/>
                {props.tasks.error ? <small className="error-msg">Invalid task text (min 3)</small> : ''}
            </form>
        </div>
        <div className="tasks-list">
            {props.tasks.tasks.length ? props.tasks.tasks.sort((a, b) => b.id - a.id).map(task => <Task
                onDelete={props.onDelete}
                onClick={props.onClick}
                key={task.id}
                task={task}/>) : 'There is no any task yet.'}
        </div>
    </div>
}

export default Todo;
