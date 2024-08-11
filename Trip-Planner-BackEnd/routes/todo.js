const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");
const auth = require("../middleware/auth");
//get all todos
router.get("/", auth, async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
});
//get todo foor individual user
router.get("/:id", auth, async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.send(todo);
});

//create
router.post("/", auth, async (req, res) => {
  const {user, title, description } = req.body;
  const todo = new Todo({
    user,
    title,
    description,
  });
  await todo.save();
  res.send(todo);
});
//update
router.put("/:id", auth, async (req, res) => {
  const { title, description } = req.body;
  const todo = await Todo.findByIdAndUpdate(req.params.id, {
    title,
    description,
  });
  res.send(todo);
});
//delete
router.delete("/", auth, async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);
  res.send(todo);
});
module.exports = router;
