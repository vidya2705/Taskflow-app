const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

let tasks = [];

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.post("/tasks", (req, res) => {
    tasks.push(req.body);
    res.json({ message: "Task added" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});