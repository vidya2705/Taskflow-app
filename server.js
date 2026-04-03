const express = require("express");
const app = express();

app.use(express.json());
<<<<<<< HEAD
app.use(express.static(__dirname));
=======
>>>>>>> 1511165733aea334968d00fde21f45ab4d5903ed

let tasks = [];

app.get("/", (req, res) => {
<<<<<<< HEAD
    res.sendFile(__dirname + "/index.html");
=======
    res.send("TaskFlow App Running");
>>>>>>> 1511165733aea334968d00fde21f45ab4d5903ed
});

app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.post("/tasks", (req, res) => {
    tasks.push(req.body);
<<<<<<< HEAD
    res.json({ message: "Task added" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
=======
    res.send("Task Added");
});

app.listen(3000, () => console.log("Server running on port 3000"));
>>>>>>> 1511165733aea334968d00fde21f45ab4d5903ed
