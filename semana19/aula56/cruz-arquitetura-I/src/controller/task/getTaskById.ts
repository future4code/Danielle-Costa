import { Request, Response } from "express";
import { getTaskByIdBusiness } from "../../business/task/getTaskByIdBusiness";
import {selectTaskById} from "../../data/task/selectTaskById";
import { getTaskByIdInputDTO, getTaskByIdOutputDTO, task, taskWithUserInfo } from "../../model/task";
import { user } from "../../model/user";

export const getTaskById = async (
   req: Request,
   res: Response
) => {
   try {

      const input: getTaskByIdInputDTO = {
         id: req.params.id
     }

      const task: taskWithUserInfo = await getTaskByIdBusiness(input)

     console.log("task", task)
      const output: getTaskByIdOutputDTO = {
         id: task.id,
          title: task.title,
          description: task.description,
          deadline: task.deadline,
          status: task.status,
          authorId: task.author_id,
          authorNickname: task.nickname

      }
      console.log("output", output)
      res.status(200).send({ output })


   } catch (error) {
      res.status(400).send(error.message)
   }
}