import React, { useState } from 'react';

function TaskForm({ setTasks }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTask = () => {
    if (!title.trim()) return;
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks(prev => [...prev, newTask]);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TaskForm;
