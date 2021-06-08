import connection from "../connection";

export async function getUserByID(id:string): Promise<any>{
const user = await connection.raw(`
SELECT * FROM USER
WHERE id = "${id}"
`)
return user[0]
}