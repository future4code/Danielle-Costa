import * as jwt from "jsonwebtoken"
import { authData } from "../types/authData";


export function getTokenData(token:string):authData{
    const result = jwt.verify(
        token,
        process.env.JWT_KEY! ) as authData
    return result

} 