import { Request, Response } from "express";
import connection from "../connection";
import { getUserByID } from "../functions/getUserById";
import { getTokenData } from "../services/getTokenData";

export async function profileInfos(req:Request,res:Response){
try {

    const authorization = req.body.authorization
    const id = req.body.id
    const selectedUser = await getUserByID(id)
    const token = req.headers.authorization as string
    const idToken =getTokenData(token)

    const user = await connection.raw(`
    SELECT * FROM USER
    WHERE id = "${authorization}"
    `)
    res.status(200).send({
        id: selectedUser[0].id,
        email: selectedUser[0].email
    
    })

} catch (error) {
    res.status(400).send({
        message: error.message
    })
}
}