import z from "zod";

 const TaskDTO = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(["TODO", "IN_PROGRESS", "DONE"]),
  dueDate: z.coerce.date().optional(),
});

const TaskUpdateDTO = TaskDTO.partial();

export { TaskDTO, TaskUpdateDTO };