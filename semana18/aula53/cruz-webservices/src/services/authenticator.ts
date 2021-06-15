import * as jwt from "jsonwebtoken";
import { config } from "dotenv"
import { USER_ROLES } from "../types";

config()

export type authenticationData = {
   id: string
   role: USER_ROLES
};

export function generateToken(payload: authenticationData): string {

   return jwt.sign(
      payload,
      process.env.JWT_KEY!,
      {
         expiresIn: "12h"
      });
}
export const getTokenData = (token: string): authenticationData | null => {
   try {

      const { id, role } = jwt.verify(token, process.env.JWT_KEY!) as authenticationData

      return { id, role }

   } catch (error) {

      console.log(error.message);
      
      return null
   }
}