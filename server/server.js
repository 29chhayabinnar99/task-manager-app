// const express = require("express");
// const cors = require("cors");

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Mock database using localStorage
// let tasks = [];

// // API to get tasks
// app.get("/api/tasks", (req, res) => {
//   res.json(tasks);
// });

// // API to add a task
// app.post("/api/tasks", (req, res) => {
//   const task = req.body;
//   tasks.push(task);
//   res.json(task);
// });
// // API to add a task
// // API to add a task

// // API to update task status
// app.put("/api/tasks/:id", (req, res) => {
//   const { id } = req.params;
//   const { done } = req.body;

//   const task = tasks.find((task) => task.id === parseInt(id)); // Make sure the ID type matches
//   if (task) {
//     task.done = done;
//     res.json(task);
//   } else {
//     res.status(404).json({ message: "Task not found" });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock database using an in-memory array
let tasks = [];

// API to get tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.delete("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter((task) => task.id !== parseInt(id)); // Delete task by ID
  res.status(204).send(); // No content response
});

// API to add a task
app.post("/api/tasks", (req, res) => {
  const task = req.body;
  // Ensure the task has an id (e.g., could generate an ID based on the length of the array or a timestamp)
  task.id = tasks.length + 1; // Basic way to generate a unique id
  tasks.push(task);
  res.json(task);
});

// API to update task status
app.put("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { done } = req.body;

  // Convert id to an integer if needed (or handle as string if you prefer)
  const task = tasks.find((task) => task.id === parseInt(id));

  if (task) {
    task.done = done;
    res.json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
