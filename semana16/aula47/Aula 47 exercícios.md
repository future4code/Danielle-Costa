aula 47

### Exercício 1
**a.** Ele devolve o resultado da query dentro de um objeto com dois arrays e utilizamos somente a posição [0]

**b.**  
const getActorByName = async (name: string): Promise<any> => {
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = '${name}'
        `)
   
        return result[0][0]
    }
**c.**
const countActorByGender = async (gender: string): Promise<any> => {
        const result = await connection.raw(`
            SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
        `)
   
        return result[0][0].count
    }
### EXERCÍCIO 02
**a.**
        const updateSalaryById = async (
                id: string,
                salary: number
            ): Promise<any> => {
                await connection("Actor")
                .update({
                    salary: salary,
                })
                .where("id", id);
            }

**b.**
    const deleteActorById = async (id: string) : Promise<any> => {
        await connection("Actor")
        .delete()
        .where("id",id)
    }

**c.**
    const averageSalary = async (gender: string) : Promise<any> => {
        const result = await connection("Actor")
        .avg("salary as average")
        .where({gender})
        return result[0].average
    }

### EXERCÍCIO 03
**a.**
        async function getActorById(id: string): Promise<any> {
            const result = await connection.raw(`
            SELECT * FROM Actor WHERE id = '${id}'
            `)
            return result[0]
        }
        getActorById("")
        app.get("/actor/:id", async (req: Request, res: Response) => {
            try {
            const id = req.params.id
            const actor = await getActorById(id)
        
            res.status(200).send(actor)
            } catch (error) {
            res.status(400).send({
                message: error.message,
            });
            }
        })

**b.** 
        async function countActorByGender(gender: string): Promise<any> {
            const result = await connection.raw(`
            SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
            `)
            console.log(result[0][0].count)
            return result[0][0].count
        }
        countActorByGender("female")
        app.get('/actor', async (req:Request , res:Response) => {
            try {
            const gender = req.query.gender;
            const count = await countActorByGender(gender as string);
            res.status(200).send({
                quantity: count,
                })
            } catch (error) {
            res.status(400).send({
                message: error.message,
            });
            }
        })

### EXERCÍCIO 04
        async function createActor(
            id: string,
            name: string,
            salary: number,
            dateOfBirth: string,
            gender: string
        ): Promise<void> {
            await connection
            .insert({
                id: id,
                name: name,
                salary: salary,
                birth_date: dateOfBirth,
                gender: gender,
            })
            .into("Actor");
        };
        createActor("001","Fulano Tal",100000,"1980-01-01","male")
        app.put("/actor", async (req: Request, res: Response) => {
            try {
            await createActor(
                req.body.id,
                req.body.name,
                req.body.salary,
                req.body.dateOfBirth,
                req.body.gender
            )
        
            res.status(200).send("Criado com sucesso");
            } catch (err) {
            res.status(400).send({
                message: err.message,
            })
            }
        })

**a.**
        async function updateSalaryById(id: string, salary: number): Promise<any> {
        await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id);
        }
        updateSalaryById("005",900000)
        app.post('/actor', async (req: Request, res: Response) => {
            try {
            await updateSalaryById(
                req.body.id,
                req.body.salary
                )
            
                res.status(200).send("Salário atualizado");
            } catch (err) {
            res.status(400).send({
                message: err.message,
                })
            }
        })

**b.**
        const deleteActorById = async (id: string) : Promise<any> => {
            await connection("Actor")
            .delete()
            .where("id", id)
        }
        deleteActorById("007")
        app.delete('/actor/:id', async (req:Request , res:Response) => {
            try {
            const id = req.params.id;
            await deleteActorById(id);
            res.status(200).send(`Id ${id} apagado com sucesso`)
            } catch (err) {
            res.status(400).send({
                message: err.message,
            });
            }
        })
