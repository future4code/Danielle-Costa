import * as jwt from "jsonwebtoken"
import { authData } from "../types"



export function getTokenData(token: string): authData {
    const payload = jwt.verify(token, process.env.JWT_KEY!) as authData
    const result = {
        id: payload.id,
        role: payload.role
    }
    return result
    

}
