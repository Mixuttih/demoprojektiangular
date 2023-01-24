import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "./entity/Product"
import * as dotenv from "dotenv"
dotenv.config();

export const AppDataSource = new DataSource({
    type: "mongodb",
    host: process.env.host,
    username: process.env.username,
    password: process.env.password,
    port: parseInt(process.env.port),
    database: process.env.database,
    ssl: Boolean(process.env.ssl),
    synchronize: true,
    logging: false,
    entities: [Product],
    migrations: [],
    subscribers: [],
})
