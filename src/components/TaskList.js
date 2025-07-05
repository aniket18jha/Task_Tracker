
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, setTasks, filter }) {
  const toggleComplete = (id) => {
    setTasks(prev =>
      prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
    );
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(prev => prev.filter(task => task.id !== id));
    }
  };


  const updateTask = (id, newTitle, newDescription) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, title: newTitle, description: newDescription }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter(task =>
    filter === 'All' ? true : filter === 'Completed' ? task.completed : !task.completed
  );

  return (
    <div className="task-list">
      {filteredTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          updateTask={updateTask} // ✅ Pass down properly
        />
      ))}
    </div>
  );
}

export default TaskList;