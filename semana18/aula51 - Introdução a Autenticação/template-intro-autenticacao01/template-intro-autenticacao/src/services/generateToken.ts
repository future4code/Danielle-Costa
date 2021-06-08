import * as jwt from "jsonwebtoken"
import { authData } from "../types/authData";


export function generateToken(id: string): string {
    const expiresIn = "1min"
    const token = jwt.sign(
        {
            id
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
    )
    return token
} 