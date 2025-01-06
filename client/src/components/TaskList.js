import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch all tasks from the backend
  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Handle toggling task status (done or not done)
  const toggleTaskStatus = async (taskId, currentStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${taskId}`, {
        done: !currentStatus,
      });
      fetchTasks(); // Refresh task list after updating status
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Handle task deletion
  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${taskId}`);
      fetchTasks(); // Refresh task list after deletion
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div>
      <h1 className="heading">Task List</h1>
      <Link to="/" className="go-to-add-task-btn">
        Go to Add Task
      </Link>
      <ul className="list-group">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleStatus={toggleTaskStatus}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
