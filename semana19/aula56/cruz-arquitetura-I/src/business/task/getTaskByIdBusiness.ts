import { selectTaskById } from "../../data/task/selectTaskById"
import { getTaskByIdInputDTO } from "../../model/task"

export const getTaskByIdBusiness = async (
   input: getTaskByIdInputDTO
) => {

   const result = await selectTaskById(input.id)

   if (!result) {
      throw new Error("Tarefa não encontrada")
   }


   return result
}
