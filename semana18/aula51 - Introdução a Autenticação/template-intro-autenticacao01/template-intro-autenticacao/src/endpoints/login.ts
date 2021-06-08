import { Request, Response } from "express";
import connection from "../connection";
import { checkEmail } from "../functions/checkEmail";
import { generateToken } from "../services/generateToken";

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'email' e 'password'")
        }
        checkEmail(req, res)

        const [checkUserEmail] = await connection.raw(`
         SELECT * FROM USER
         WHERE email = "${email}"
         `)

        if (!checkUserEmail) {
            throw new Error("Email não encontrado.");
        }
        const [checkPassword] = await connection.raw(`
         SELECT password from USER
         WHERE email = "${email}"`)

        if (password != checkPassword[0].password || password.length<6) {
            throw new Error("Senha incorreta.")
        }

        const id = checkUserEmail[0].id
        console.log('checkUserEmail:', checkUserEmail[0].id)
        const token = generateToken(id)
        res.status(200).send({
            message: "login realizado",
            token
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}