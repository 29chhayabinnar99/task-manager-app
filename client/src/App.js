import React from "react";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1 className="outer-container">Task Manager</h1>
      <div className="container">
        <TaskList />
      </div>
    </div>
  );
};

export default App;
