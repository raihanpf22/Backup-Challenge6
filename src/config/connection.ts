import { Sequelize } from "sequelize-typescript";
import { Car } from "../../db/models/Car";
import { User } from "../../db/models/User";
import * as dotenv from "dotenv";

dotenv.config();

// const connection = new Sequelize(process.env.PGLINK as string, {
//   models: [User, Car],
// });

const connection = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "Gadjahmada123*",
  database: "binar-challenge6",
  models: [User, Car],

  logging: false,
});

export default connection;
