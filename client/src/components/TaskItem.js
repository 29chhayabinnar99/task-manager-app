import React from "react";

const TaskItem = ({ task, onToggleStatus, onDelete }) => {
  const handleToggleStatus = () => {
    onToggleStatus(task.id, task.done); // Call toggle status function from parent
  };

  const handleDelete = () => {
    onDelete(task.id); // Call delete function from parent
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        style={{ textDecoration: task.done ? "line-through" : "none" }}
        className="task-name"
      >
        {task.name}
      </span>
      <div>
        <button
          onClick={handleToggleStatus}
          className={`btn ${task.done ? "btn-success" : "btn-warning"}`}
        >
          {task.done ? "Undo" : "Complete"}
        </button>
        <button onClick={handleDelete} className="btn btn-danger ml-2">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
