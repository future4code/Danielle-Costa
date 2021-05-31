import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {accounts} from './accounts'


const app:Express = express()
app.use(express.json())
app.use(cors())

app.post('/users/create', (req:Request, res: Response) => {
    try{
    const {name, CPF, dataNascAsString} = req. body
    
    const [dia, mes, ano] = dataNascAsString.split('/')

    const dataNasc: Date = new Date(`${ano}-${mes}-${dia}`)

    const idadeEmMilisegundos: number = Date.now() - dataNasc.getTime()
    const idadeEmAnos: number= idadeEmMilisegundos / 1000 / 60 / 60 / 24 / 365
    // 1000idade em segundos 60 em minutos 60 em horas 24 em dias 365 em anos

    if (idadeEmAnos < 18 ){
        res.statusCode = 406
        throw new Error("Usuario menor de 18 anos, não pode abrir conta")
    }

    accounts.push({
        name,
        CPF,
        dataNasc,
        saldo: 0,
        extrato:[]
   } )

   res.status(201).send('Conta criada com sucesso')
}catch(error){
    console.log(error)
    res.status(400).send({
        message: error.message
        })
}
})  

app.get('/users/all', (req:Request, res: Response) =>{
    try {
        if(!accounts.length){
            res.statusCode = 404
            throw new Error ("Nenhuma conta foi encontrada")
        }
        res.status(200).send(accounts)
    } catch (error) {
        res.send(error.message)
    }
})

app.listen(3003, () => {
    console.log('Server is running at port 3003')
    })