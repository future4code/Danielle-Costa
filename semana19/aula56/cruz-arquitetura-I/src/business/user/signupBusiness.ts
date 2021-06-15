import { hash } from "../../services/hashManager";
import { insertUser } from "../../data/user/insertUser";
import { signupInputDTO, toUserRoles, user } from "../../model/user";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";

export const signupBusiness = async (
   input: signupInputDTO
):Promise<string> => {
   if (
      !input.name ||
      !input.nickname ||
      !input.email ||
      !input.password ||
      !input.role
   ) {
      throw new Error('Preencha os campos "name","nickname", "email", "password" e "role"')
   }

   const cypherPassword = await hash(input.password);

   const newUser: user = {
      id: generateId(),
      name: input.name,
      nickname: input.nickname,
      email: input.email,
      password: cypherPassword,
      role: toUserRoles(input.role)

   }

   await insertUser(newUser)

   const token: string = generateToken({
      id: newUser.id,
      role: toUserRoles(newUser.role)
   })

   return token

}