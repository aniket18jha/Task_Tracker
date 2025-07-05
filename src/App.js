import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import { loadTasks, saveTasks, loadUser } from './utils/localStorage';

function App() {
  const [user, setUser] = useState(loadUser());
  const [tasks, setTasks] = useState(loadTasks());
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div className="app-container">
      <h1>Welcome, {user}!</h1>
      <TaskForm setTasks={setTasks} />
      <TaskFilter filter={filter} setFilter={setFilter} tasks={tasks} />
      <TaskList tasks={tasks} setTasks={setTasks} filter={filter} />
    </div>
  );
}

export default App;