import React from 'react';

const Task = (props) => {
    return (
        <div className="task">
            <span onClick={() => props.onClick(props.task)}>
                {props.task.done ? <s>{props.task.text}</s> : props.task.text}
            </span>
            <span onClick={() => props.onDelete(props.task)}>&#10005;</span>
        </div>
    )
}

export default Task;