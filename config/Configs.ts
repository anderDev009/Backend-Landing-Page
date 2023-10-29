import dotenv from "dotenv"
import { DataSourceOptions } from "typeorm";
import { Form } from "../src/domain/entities/Form";
import { User } from "../src/domain/entities/User";
dotenv.config()

//extraccion de variables de entorno
// const type =  process.env.type
// const host =  process.env.host
// const port =  process.env.port
// const username = process.env.username
// const password = process.env.password
// const database = process.env.database

export class Config{
    public chainConnection() : DataSourceOptions {
        const dataSourceOptions : DataSourceOptions= {
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "anderson25",
            database: "landing_page",
            entities: [User,Form]
        };
        return dataSourceOptions;
    }
}


