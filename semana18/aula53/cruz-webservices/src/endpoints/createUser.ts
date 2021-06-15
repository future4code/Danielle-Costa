import { Request, Response } from "express";
import connection from "../connection";
import { user, userAddress, USER_ROLES } from "../types";
import { generateId } from "../services/idGenerator";
import { generateToken } from "../services/authenticator";
import { createHash } from "../services/hashManager";
import  {getAddressInfo}  from "../services/getAddressInfo";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password, role, cep, number, complement } = req.body

      if (!name || !nickname || !email || !password || !role) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'role', 'password' e 'email'")
      }

      if (!cep || !number) {
         res.statusCode = 422;
         throw new Error("Preencha os campos 'cep' e 'number'");
       }
   
       if (
         role.toUpperCase() !== USER_ROLES.ADMIN &&
         role.toUpperCase() !== USER_ROLES.NORMAL
       ) {
         res.statusCode = 422;
         throw new Error("Os valores possíveis para 'role' são NORMAL e ADMIN");
       }
   

      if(!(role in USER_ROLES)){
         throw new Error("'role' deve ser 'NORMAL' ou 'ADMIN'")
      }

      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId();
      const cypherText = await createHash(password);

      const newUser: user = {id,name,nickname,email,password: createHash(password),
role}

      const adressInfos = await getAddressInfo(cep);
      const newAdress: userAddress = {
         street: getAddressInfo.street,
         number,
         neighborhood: getAddressInfo.neighborhood,
         complement: complement,
         city: getAddressInfo.city,
         state: getAddressInfo.state,
         user_id: id,
       };
      await connection('to_do_list_users')
         .insert(newUser);
      await connection("User_Adress")
         .insert(newAdress);

      const token: string = generateToken({id,role});

      res.status(201).send({ newUser, token });

   } catch (error) {
      res.status(400).send({ message: error.message })
   }
}