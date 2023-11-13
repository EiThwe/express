const express = require("express");

const app = express();

const port = 5000;
let todos = [];

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Home");
  res.status(200).json({ data: todos });
  res.send("Home");
});
app.post("/create", (req, res) => {
  const tasks = req.body.tasks;
  console.log(tasks);
  todos.push(tasks);
  res.status(201).json({ data: todos });
  res.end();
});

app.get("/about", (req, res) => {
  res.send("About");
});
