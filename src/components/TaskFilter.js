import React from 'react';

function TaskFilter({ filter, setFilter, tasks }) {
  const getCount = (type) => {
    return tasks.filter(task => type === 'All' ? true : type === 'Completed' ? task.completed : !task.completed).length;
  };

  return (
    <div className="task-filter">
      {['All', 'Completed', 'Pending'].map(type => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={filter === type ? 'active' : ''}
        >
          {type} ({getCount(type)})
        </button>
      ))}
    </div>
  );
}

export default TaskFilter;
