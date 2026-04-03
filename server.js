const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

let tasks = [];

// Home
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Get tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Add task
app.post("/tasks", (req, res) => {
    tasks.push({
        task: req.body.task,
        priority: req.body.priority,
        time: req.body.time,
        done: false
    });
    res.json({ message: "Task added" });
});

// Toggle done
app.put("/tasks/:index", (req, res) => {
    const index = req.params.index;
    tasks[index].done = !tasks[index].done;
    res.send("Updated");
});

// Delete task
app.delete("/tasks/:index", (req, res) => {
    tasks.splice(req.params.index, 1);
    res.send("Deleted");
});

// Clear all
app.delete("/tasks", (req, res) => {
    tasks = [];
    res.send("All cleared");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});