import { Router } from "express";
import { createTask } from "../controller/task/createTask";
import { getTaskById } from "../controller/task/getTaskById";

const taskRouter = Router()
taskRouter.put('/task', createTask)
taskRouter.get('/task/:id', getTaskById)

export default taskRouter