import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onRemove }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <TaskItem 
                    key={index} 
                    task={task} 
                    onToggle={() => onToggle(index)} 
                    onRemove={() => onRemove(index)} 
                />
            ))}
        </ul>
    );
};

export default TaskList;
