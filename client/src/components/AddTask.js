// import React, { useState } from "react";
// import axios from "axios";

// const AddTask = ({ refreshTasks }) => {
//   const [task, setTask] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (task.trim()) {
//       const newTask = { id: Date.now(), name: task, done: false };
//       await axios.post("http://localhost:5000/api/tasks", newTask);
//       setTask("");
//       refreshTasks(); // Refresh the task list after adding
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Add a new task"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// };

// export default AddTask;

import React, { useState } from "react";
import axios from "axios";

const AddTask = ({ refreshTasks }) => {
  const [taskName, setTaskName] = useState("");

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!taskName) return;

    try {
      const newTask = { name: taskName, done: false };
      await axios.post("http://localhost:5000/api/tasks", newTask);
      setTaskName(""); // Clear the input field
      refreshTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <form onSubmit={handleAddTask} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter new task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default AddTask;
