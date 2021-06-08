import { Request, Response } from "express";
import connection from "../connection";
import { checkEmail } from "../functions/checkEmail";
import { generateToken } from "../services/generateToken";
import { generateId } from "../services/generateId";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password } = req.body

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'email' e 'password'")
      }
      if (password.length < 6) {
         throw new Error("Senha curta, mínimo de 6 digitos")
      }
      
      const [user] = await connection.raw(`
      SELECT * FROM USER 
      WHERE email = "${email}"`)

      if (user.length) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }
      checkEmail(req, res)

      const id: string = generateId();

      const newUser:user = { id, email, password }

      await connection('to_do_list_users')
         .insert(newUser);

      const token: string = generateToken({id})

      res.status(201).send({
         message: "token gerado via jwt",
         token
      })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}