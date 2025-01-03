// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import TaskItem from "./TaskItem";
// import AddTask from "./AddTask"; // <-- Add this line

// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);

//   const fetchTasks = async () => {
//     const response = await axios.get("http://localhost:5000/api/tasks");
//     setTasks(response.data);
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const refreshTasks = () => {
//     fetchTasks();
//   };

//   return (
//     <div>
//       <h1>Task List</h1>
//       <AddTask refreshTasks={refreshTasks} />{" "}
//       {/* AddTask component is now defined */}
//       <ul>
//         {tasks.map((task) => (
//           <TaskItem key={task.id} task={task} refreshTasks={refreshTasks} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TaskList;
import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask"; // <-- Add this line

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  //   const fetchTasks = async () => {
  //     const response = await axios.get("http://localhost:5000/api/tasks");
  //     setTasks(response.data); // Ensure response data is an array of tasks
  //   };
  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      alert("Failed to load tasks.");
    }
  };

  useEffect(() => {
    fetchTasks(); // Fetch tasks when the component mounts
  }, []);

  const refreshTasks = () => {
    fetchTasks(); // Refresh tasks after adding a new task
  };

  return (
    <div>
      <h1>Task List</h1>
      <AddTask refreshTasks={refreshTasks} />{" "}
      {/* AddTask component is now defined */}
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={task.id ? task.id : index} // Fallback to index if id is missing
            task={task} // Pass task data to TaskItem
            refreshTasks={refreshTasks} // Pass refreshTasks function to TaskItem
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
