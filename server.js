const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

let tasks = [];

// Home route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Get all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Add task
app.post("/tasks", (req, res) => {
    tasks.push(req.body);
    res.json({ message: "Task added" });
});

// Delete task
app.delete("/tasks/:index", (req, res) => {
    const index = req.params.index;
    tasks.splice(index, 1);
    res.json({ message: "Task deleted" });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});