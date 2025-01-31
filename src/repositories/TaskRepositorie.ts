import { Prisma, } from "@prisma/client";
import prisma from "../database";

class TaskRepository {
  async create(data: Prisma.TaskCreateInput) {
    return prisma.task.create({ data });
  }

  async findAll() {
    return prisma.task.findMany();
  }

  async findById(id: number) {
    return prisma.task.findUnique({ where: { id } });
  }

  async findByStatus(status: Status)
    return prisma.task.findMany({ where: { status } });
  }

  async update(id: number, data: Prisma.TaskUpdateInput) {
    return prisma.task.update({ where: { id }, data });
  }

  async delete(id: number) {
    return prisma.task.delete({ where: { id } });
  }

export default TaskRepository;