import React, { useState, useEffect } from 'react';

function TaskForm({ addTask, editTask, taskToEdit, clearEdit }) {
  const [task, setTask] = useState({ name: '', description: '' });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name && task.description) {
      if (taskToEdit) {
        editTask(task);
      } else {
        addTask(task);
      }
      setTask({ name: '', description: '' });
      clearEdit();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Task Name"
        value={task.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
        required
      />
      <button type="submit">{taskToEdit ? 'Edit' : 'Add'} Task</button>
    </form>
  );
}

export default TaskForm;
