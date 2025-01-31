import { Router } from "express";
import { TaskController } from "../controllers";
import { TaskRepository } from "../repositories";

const taskRouter = Router();

const taskController = new TaskController(TaskRepository);

taskRouter.get("/", taskController.getTasks);
taskRouter.get("/:id", taskController.getTaskById);
taskRouter.post("/", taskController.createTask);
taskRouter.patch("/:id", taskController.updateTask);
taskRouter.delete("/:id", taskController.deleteTask);
taskRouter.get("/status/", taskController.getTasksByStatus);

export default taskRouter;