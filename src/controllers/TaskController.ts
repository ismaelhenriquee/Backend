import { Request, Response, NextFunction } from "express";
import { TaskRepository } from "../repositories";
import { TaskDTO, TaskUpdateDTO } from "../DTO";

class TaskController {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  public async getTasks(req: Request, res: Response, next: NextFunction) {
    const tasks = await this.taskRepository.getTasks();
    res.locals = {
      status: 200,
      data: tasks,
      message: "Tasks found successfully",
    };
    next();
  }
  public async getTaskById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    if (!id) {
      res.locals = {
        status: 400,
        message: "Task id is required",
      };
      return next();
    }
    const task = await this.taskRepository.getTask(id);
    if (!task) {
      res.locals = {
        status: 404,
        message: "Task not found",
      };
      return next();
    }

    res.locals = {
      status: 200,
      data: task,
      message: "Task found successfully",
    };
    next();
  }
  public async createTask(req: Request, res: Response, next: NextFunction) {
    const data = TaskDTO.parse(req.body);
    if (data.dueDate && data.dueDate < new Date()) {
      res.locals = {
        status: 400,
        message: "Due date should be greater than current date",
      };
      return next();
    }
    const task = await this.taskRepository.createTask(req.body);

    res.locals = {
      status: 201,
      data: task,
      message: "Task created successfully",
    };
    next();
  }
    public async updateTask(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        if (!id) {
        res.locals = {
            status: 400,
            message: "Task id is required",
        };
        return next();
        }
        const data = TaskUpdateDTO.parse(req.body);
        if (data.dueDate && data.dueDate < new Date()) {
        res.locals = {
            status: 400,
            message: "Due date should be greater than current date",
        };
        return next();
        }
        const task = await this.taskRepository.updateTask(id, req.body);
        if (!task) {
        res.locals = {
            status: 404,
            message: "Task not found",
        };
        return next();
        }
    
        res.locals = {
        status: 200,
        data: task,
        message: "Task updated successfully",
        };
        next();
    }
    public async deleteTask(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        if (!id) {
        res.locals = {
            status: 400,
            message: "Task id is required",
        };
        return next();
        }
        const task = await this.taskRepository.deleteTask(id);
        if (!task) {
        res.locals = {
            status: 404,
            message: "Task not found",
        };
        return next();
        }
    
        res.locals = {
        status: 200,
        message: "Task deleted successfully",
        };
        next();
    }
    public async getTasksByStatus(req:Request,res:Response,next:NextFunction){
        const {status} = req.query;
        if(!status){
            res.locals = {
                status: 400,
                message: "Status is required",
            };
            return next();
        }
        if(!["TODO", "IN_PROGRESS", "DONE"].includes(status.toString())){
            res.locals = {
                status: 400,
                message: "Invalid status",
            };
            return next();
        }
        const tasks = await this.taskRepository.getTasksByStatus(status);
        res.locals = {
            status: 200,
            data: tasks,
            message: "Tasks found successfully",
        };
        next();
    }
}
export default TaskController;