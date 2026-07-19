const express = require("express");
const { readTodos, saveTodos } = require("./file-utils");

const app = express();
const PORT = 3099;

app.use(express.json()); // middleware : lit req.body

let todos = readTodos();
console.log(todos);

// CREATE (Read all)
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// CREATE
app.post("/api/todos", (req, res) => {
  const title = req.body.title;
  const newTodo = { id: todos.length + 1, title, done: false };
  todos.push(newTodo);

  saveTodos(todos);
  res.json(newTodo);
});

// UPDATE
app.patch("/api/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (!todo) return res.status(404).json({ error: "Todo introuvable" });
  todo.done = !todo.done;

  saveTodos(todos);
  res.json(todo);
});

// DELETE
app.delete("/api/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  todos = todos.filter((t) => t.id !== id);

  saveTodos(todos);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
