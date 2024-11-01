import React from 'react';

const TaskItem = ({ task, onToggle, onRemove }) => {
    return (
        <li>
            <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={onToggle} 
            />
            {task.text}
            <button onClick={onRemove}>Remove</button>
        </li>
    );
};

export default TaskItem;
