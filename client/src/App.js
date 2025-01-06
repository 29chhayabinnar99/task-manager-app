import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <h1 className="outer-container">Task Manager</h1>
        {/* Navigation links at the top right corner */}
        <div className="navbar">
          <a href="/">Add Task</a>
          <a href="/tasks">View Tasks</a>
        </div>
        <div className="container">
          {/*  Content */}
          <Routes>
            <Route path="/" element={<AddTask />} />
            <Route path="/tasks" element={<TaskList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
