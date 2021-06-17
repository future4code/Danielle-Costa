import { task, taskWithUserInfo } from "../../model/task";
import { user } from "../../model/user";
import { connection } from "../connection";

export const selectTaskById = async (
   id: string
): Promise<taskWithUserInfo> => {
   const result = await connection.raw(`
        SELECT tasks.*, nickname FROM Tasks_Aula56 AS tasks
        JOIN Users_Aula56 AS users
        ON tasks.author_id = users.id
        WHERE tasks.id = '${id}';
    `)

   return result[0][0]
}