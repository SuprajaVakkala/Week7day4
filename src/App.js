import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, { text: task, completed: false }]);
    };

    const removeTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };

    const toggleTaskCompletion = (index) => {
        setTasks((prevTasks) => 
            prevTasks.map((task, i) =>
                i === index ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <TaskInput onAddTask={addTask} />
            <TaskList 
                tasks={tasks} 
                onRemove={removeTask} 
                onToggle={toggleTaskCompletion} 
            />
        </div>
    );
};

export default App;
