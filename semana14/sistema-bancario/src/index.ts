import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {accounts} from './accounts'
import {Boleto, users} from './types'

const app:Express = express()
app.use(express.json())
app.use(cors())

const anoAtual = new Date().getFullYear();

app.post('/users/create', (req:Request, res: Response) => {
    try{
    const {name, CPF, nasc} = req. body
    
    const anoNasc = nasc.substr(0, 4)
    const idadeEmAnos = Number(anoAtual) - Number(anoNasc)

    if (idadeEmAnos < 18 ){
        res.statusCode = 406
        throw new Error("Usuario menor de 18 anos, não pode abrir conta")
    }

    if (!name || !CPF) {
     throw new Error(
       "Necessario completar Name, CPF e Data de Nascimento"
     );
   }
   users.map((users) => {
    if (users.CPF.includes(CPF)) {
      throw new Error("CPF já registrado.");
    }
  });
    accounts.push({
        name,
        CPF,
        nasc,
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

app.get ('users/:CPF', (req:Request, res: Response) => {
    try {
    const paramsCPF = req.params.CPF as string;
    let saldo;
    if (paramsCPF.length < 11) {
    throw new Error("Informe um cpf valido com 11 digitos")
}else {
    users.map((users) => {
        if (users.CPF === paramsCPF) {
            saldo = Number(users.saldo)
        }
    })
    if (!saldo) {
        throw new Error ('CPF não cadastrado')
    }
    res.status(200).send({ saldo });
}
} catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
}

)

app.put("/users/add", (req: Request, res: Response) => {
    try {
      const cpfQuery = req.query.cpf as string;
      const nameQuery = req.query.name as string;
      const valueQuery = req.query.value;
      let result = false;
      if (cpfQuery.length < 11 || !nameQuery || !valueQuery) {
        throw new Error("Verifique os dados corretamente");
      } else {
        users.map((user) => {
          if (
            user.CPF === cpfQuery &&
            user.name.toLowerCase() === nameQuery.toLocaleLowerCase()
          ) {
            user.saldo += Number(valueQuery);
            let todayDate = new Date();
            let newItem: Boleto = {
              valor: Number(valueQuery),
              dataVenc: todayDate.toISOString().substring(0, 10),
              descrição: "Deposito em dinheiro",
            };
            user.extrato.push(newItem);
            result = true;
          }
        });
        if (!result) {
          throw new Error("Usuario não encontrado.");
        }
        res.status(200).send("sucesso.");
      }
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

app.listen(3003, () => {
    console.log('Server is running at port 3003')
    })