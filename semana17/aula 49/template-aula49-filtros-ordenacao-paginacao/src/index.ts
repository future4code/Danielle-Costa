import express, { Express, Request, Response } from "express"
import knex from "knex"
import cors from "cors"
import dotenv from "dotenv"
import { AddressInfo } from "net"

dotenv.config()

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express()
app.use(express.json())
app.use(cors())

app.get("/users/all", async (req: Request, res: Response) => {
   try {
     const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `);
 
     if (!result.length) {
       res.statusCode = 404;
       throw new Error("No users found");
     }
 
     res.status(200).send(result[0]);
   } catch (error) {
     console.log(error);
     res.send(error.message || error.sqlMessage);
   }
 });
 
 app.get("/users/page", async (req: Request, res: Response) => {
   try {
     const page = Number(req.query.page) || 1;
 
     let result = await connection.raw(`
         SELECT id, name, email, type
         FROM aula48_exercicio
         LIMIT 5
         OFFSET ${5 * (page - 1)};
      `);
     result = result[0];
 
     if (!result.length) {
       throw new Error("No users found");
     }
 
     res.status(200).send({ result, page });
   } catch (error) {
     res.send(error.message || error.sqlMessage);
   }
 });
 
 app.get("/users/search", async (req: Request, res: Response) => {
   try {
     const name = req.query.name;
     const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE name LIKE "%${name}%";
    `);
 
     if (!result.length) {
       res.statusCode = 404;
       throw new Error("No users found");
     }
 
     res.status(200).send(result[0]);
   } catch (error) {
     console.log(error);
     res.send(error.message || error.sqlMessage);
   }
 });
 
 app.get("/users/type/:type", async (req: Request, res: Response) => {
   try {
     const type = req.params.type;
     const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE type LIKE "%${type}%";
    `);
 
     if (!result.length) {
       res.statusCode = 404;
       throw new Error("No users found");
     }
 
     res.status(200).send(result[0]);
   } catch (error) {
     console.log(error);
     res.send(error.message || error.sqlMessage);
   }
 });
 
 app.get("/users", async (req: Request, res: Response) => {
   try {
     let orderBy = (req.query.orderBy as string) || "email";
     let orderType = (req.query.orderType as string) || "asc";
 
     const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       ORDER BY ${orderBy} ${orderType.toUpperCase()};
    `);
 
     if (!result.length) {
       res.statusCode = 404;
       throw new Error("No users found");
     }
 
     res.status(200).send(result[0]);
   } catch (error) {
     if (error.sqlMessage.includes("Unknown column")) {
       res.send("Check your parameters.");
     } else {
       res.send(error.message || error.sqlMessage);
     }
   }
 });
 
 app.get("/users/final", async (req: Request, res: Response) => {
   try {
     const name = req.query.name || "";
     const type = req.query.type || "";
     let orderBy = (req.query.orderBy as string) || "name";
     let orderType = (req.query.orderType as string) || "desc";
     const page = Number(req.query.page) || 1;
 
     let result = await connection.raw(`
        SELECT id, name, email, type
        FROM aula48_exercicio
        WHERE name LIKE "%${name}%" AND type LIKE "%${type}%"
        ORDER BY ${orderBy} ${orderType.toUpperCase()}
        LIMIT 5
        OFFSET ${5 * (page - 1)};
     `);
      result = result[0];
 
     if (!result.length) {
       res.statusCode = 404;
       throw new Error("No users found");
     }
 
     res.status(200).send({ result, page });
   } catch (error) {
     console.log(error);
     res.send(error.message || error.sqlMessage);
   }
 });
 
 const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
     const address = server.address() as AddressInfo;
     console.log(`Server is running in http://localhost:${address.port}`);
   } else {
     console.error(`Failure upon starting server.`);
   }
 });