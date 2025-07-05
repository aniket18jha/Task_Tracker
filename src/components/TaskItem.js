

import React, { useState } from 'react';


function TaskItem({ task, toggleComplete, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);



  

  const handleSave = () => {
    updateTask(task.id, editedTitle, editedDescription);
    setIsEditing(false);
  };
  

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div>
          <input value={editedTitle} onChange={e => setEditedTitle(e.target.value)} />
          <input value={editedDescription} onChange={e => setEditedDescription(e.target.value)} />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <>
          <h3>Title : {task.title}</h3>
          <p>Description : {task.description}</p>
          <small>{new Date(task.createdAt).toLocaleString()}</small>
          <div>
            <button onClick={() => toggleComplete(task.id)}>
              {task.completed ? 'Mark Pending' : 'Mark Complete'}
            </button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;



