import { DataSource } from "typeorm";
import { config } from "dotenv";
import { Contact } from "../entities/contactModel";

config();

export const ds = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  entities: [Contact],
  logging: true,
  synchronize: true,
});