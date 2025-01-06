import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddTask = () => {
  const [taskName, setTaskName] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // For error handling
  const [successMessage, setSuccessMessage] = useState(""); // For success message
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleAddTask = async (e) => {
    e.preventDefault(); // Prevent the form from submitting normally
    setErrorMessage(""); // Clear any previous error messages
    setSuccessMessage(""); // Clear any previous success messages

    if (!taskName.trim()) {
      setErrorMessage("Task name is required!");
      return;
    }

    setIsLoading(true); // Start loading

    try {
      const newTask = { name: taskName, done: false };
      await axios.post("http://localhost:5000/api/tasks", newTask);
      setTaskName(""); // Clear the input field after success
      setSuccessMessage("Task added successfully!"); // Show success message
      setIsLoading(false); // Stop loading
    } catch (error) {
      setErrorMessage("Error adding task. Please try again."); // Set error message
      setIsLoading(false); // Stop loading
      console.error("Error adding task:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleAddTask} className="mb-4">
        <h1 className="heading">New Task</h1>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter new task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Adding..." : "Add Task"}
          </button>
        </div>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}{" "}
        {/* Display error message */}
        {successMessage && <p className="text-white">{successMessage}</p>}{" "}
        {/* Display success message */}
      </form>
      <Link to="/tasks" className="go-to-add-task-btn">
        Go to Task List
      </Link>
    </div>
  );
};

export default AddTask;
