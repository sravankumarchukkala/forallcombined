import React, { useState } from 'react';

function TodoApp() {
  // State to store tasks
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // Function to handle the input change
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  // Function to handle adding a new task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput(''); // Clear the input field after adding the task
    }
  };

  // Function to handle task removal
  const handleRemoveTask = (taskToRemove) => {
    setTasks(tasks.filter(task => task !== taskToRemove));
  };

  return (
    <div>
      <h1>To-Do List</h1>

      {/* Input form to add tasks */}
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>

      {/* Task List */}
      <div>
        {tasks.length === 0 ? (
          <p>No Tasks Available</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => handleRemoveTask(task)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TodoApp;
