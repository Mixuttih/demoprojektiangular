import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mongodb",
    host: "asdasdvasdbsdfb.mongo.cosmos.azure.com",
    username: "asdasdvasdbsdfb",
    password: "IpLyfcKKQgfXQV3ZsUiUDQJAwtTDNWhnF4DEOS8b53JfPqyeFnDp6SaJ0dguRPsjUmFmg0qhMe9XACDbanN1mg==",
    port: 10255,
    database: "test",
    ssl: true,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
