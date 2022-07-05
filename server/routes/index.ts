import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

router.post("/tasks", async (req, res) => {
  const { title, description } = req.body;

  const task = new Task({ title, description });

  await task.save();

  res.json({message:"Tarea creada"})
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.send(task);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send("Eliminar tarea");
});

router.put("/tasks/:id", async (req, res) => {
 
  await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
 
  res.send("Atualizar tarea");
});

export default router;
