import { Request, Response } from "express"


export function checkEmail(req: Request, res: Response): void {
    try {
        let check = 0
        const email = req.body.email
        if(!email.length){
            throw new Error("Email não preenchido")
        }
        for (let i = 0; i < email.length; i++) {
            if (email.charAt(i) === "@")
                check++
        }
        if (!check) {
            throw new Error("Formato incorreto, faltou o @")
        }
        if (check > 1) {
            throw new Error("Formato incorreto, 2 ou mais @ encontrados.")
        }
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }

}