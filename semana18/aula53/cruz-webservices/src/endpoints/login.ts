import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import { compareHash } from "../services/hashManager";
import { userCredentials } from "../types"

export default async function login(
   req: Request,
   res: Response
) {

   try {
      const { email, password }: userCredentials = req.body;
      if (!email) {
         throw new Error("Please fill email field")
      }

      if (!password) {
         throw new Error("Please fill password field")
      }

      const [user] = await connection("User")
         .where({ email });

      const hashCompare = await compareHash(password, user.password);

      if (!user || !hashCompare) {
         res.statusCode = 401;
         throw new Error("Credenciais inválidas");
      }

      const token: string = generateToken({ id: user.id, role: user.role })

      res.send({ token })

   } catch (error) {

      if (res.statusCode == 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
} 