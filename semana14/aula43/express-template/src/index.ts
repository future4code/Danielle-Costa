import express, { Request, Response } from 'express'
import cors from 'cors'
import {countries, country} from './countries'



const app = express()

app.use(express.json())
app.use(cors())


app.get("/countries/all", (req: Request, res: Response) => {
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    }))
    res
    .status(200)
    .send(result)
})

app.get("/countries/search", (req: Request, res: Response) => {
    let result = countries

    if (req.query.name) {
        result = result.filter(
            country => country.name.includes(req.query.name as string)
        )
    }
    if (req.query.capital) {
        result = result.filter(
            country => country.capital.includes(req.query.capital as string)
        )
    }
    if (req.query.continent) {
        result = result.filter(
            country => country.continent.includes(req.query.continent as string)
        )
    }
    if(result.length) {
        res.status(200).send(result)

    } else {
        res.status(404).send("Not found")
    }

})


app.put("/countries/edit/:id", (req: Request, res: Response) => {
    const result = countries.findIndex(
      (country) => country.id === Number(req.params.id)
    );
    if(req.body.name){
        countries[result].name = req.body.name;
    }
    if(req.body.capital){
        countries[result].capital = req.body.capital;
    }

    if (req.body.name || req.body.capital) {
      res.status(200).send("Alterado!");
    } 
    else {
      res.status(404).send("Não alterado! Somente passar nome ou capital");
    }
  });


app.get ('/countries/:id', (req: Request, res: Response) =>{
    try {
    
        if(isNaN(Number(req.params.id))) {
            throw new Error('Id must be a number')
        }

    const id = Number(req.params.id) //countries/99 Cazaquistão
    const result = countries.find((country => country.id === id))

    if (!result) {
        throw new Error ('Not found id')
    }
    res
    .status(200)
    .send(result)
    } catch (error){
        res.status(400).send({message:error.message})
    }
} )



app.listen(3003,() => {
    console.log('Server is running in http://localhost:3003');
});
