// import React from "react";
// import axios from "axios";

// const TaskItem = ({ task, refreshTasks }) => {
//   const toggleTaskStatus = async () => {
//     await axios.put(`http://localhost:5000/api/tasks/${task.id}`, {
//       done: !task.done,
//     });
//     refreshTasks();
//   };

//   return (
//     <li>
//       <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
//         {task.name}
//       </span>
//       <button onClick={toggleTaskStatus}>
//         {task.done ? "Mark as Not Done" : "Mark as Done"}
//       </button>
//     </li>
//   );
// };

// export default TaskItem;

import React from "react";
import axios from "axios";

const TaskItem = ({ task, refreshTasks }) => {
  const handleStatusChange = async () => {
    try {
      const updatedTask = { ...task, done: !task.done };
      await axios.put(
        `http://localhost:5000/api/tasks/${task.id}`,
        updatedTask
      );
      refreshTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        style={{ textDecoration: task.done ? "line-through" : "none" }}
        className="task-name"
      >
        {task.name}
      </span>
      <button
        onClick={handleStatusChange}
        className={`btn ${task.done ? "btn-success" : "btn-warning"}`}
      >
        {task.done ? "Undo" : "Complete"}
      </button>
    </li>
  );
};

export default TaskItem;
