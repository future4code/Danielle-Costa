import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cors())

enum typePerson {
    ADMIN = "Admin",
    NORMAL = "Normal"
}

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}


let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]



// Exericico 1
app.get("/users", (req: Request, res: Response) => {
  try {
      res.status(200).send(users)
  } catch (erro) {
      res.status(400).send({ message: erro.message })
  }
})

// Exercicio 2
app.get("/users/:type", (req: Request, res: Response) => {
  try {
      const type = req.params.type.toLowerCase();

      if (type !== typePerson.ADMIN.toLowerCase() || type !== typePerson.NORMAL.toLowerCase()) {
          throw new Error("Tipo não válido");
      }

      const result = users.filter((user) => user.type.toLowerCase().includes(type))

      // caso não ache o type
      if (!result.length) {
          throw new Error("Não foi possivel achar");
      }


      res.status(200).send(result)
  } catch (erro) {
      res.status(400).send({ message: erro.message })
  }
})

// Exercicio 3
app.get("/users/search", (req: Request, res: Response) => {
  try {
      const name = req.query.name as string

      const result = users.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()))

      // caso não ache o type
      if (!result.length) {
          throw new Error("Não foi possivel achar");
      }


      res.status(200).send(result)
  } catch (erro) {
      res.status(400).send({ message: erro.message })
  }
})

// Exercicio 5 
app.put("/users/:id", (req: Request, res: Response) => {
  try {
      const id = Number(req.params.id);
      const nameUpdate = req.body.name

      const result = users.find(user => user.id === id)

      const newNamePerson: user = {
          id: id,
          name: result?.name as string + nameUpdate,
          email: result?.email as string,
          type: result?.type as string,
          age: Number(result?.age) 
      }

      res.status(200).send(newNamePerson)

  } catch (erro) {
      res.status(400).send({ message: erro.message })
  }
})

// Exercicio 4
app.put("/users", (req: Request, res: Response) => {
  try {
      const { id, name, email, type, age } = req.body;

      const newPerson: user = {
          id,
          name,
          email,
          type,
          age
      }
      users.push(newPerson)
  res.status(200).send(newPerson)
  } catch (erro) {
      res.status(400).send({ message: erro.message })
  }
})

// Exercicio 7
app.delete("/users/delete/:id",(req:Request,res:Response)=>{
  try{
      const id = Number(req.params.id);

      if(isNaN(id)){
          throw new Error("Id inválido")
      }

      const result = users.filter((user)=>user.id === id)

      users.splice(id-1,1)

      res.status(200).send(id+ ": Removido com sucesso")

  }catch(erro){
      res.status(400).send({message:erro.message})
  }
})


app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");

})
