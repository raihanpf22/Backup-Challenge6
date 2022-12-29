import { Sequelize } from "sequelize-typescript";
import { Car } from "../../db/models/Car";
import { User } from "../../db/models/User";
import * as dotenv from "dotenv";
const bcrypt = require("bcrypt");

dotenv.config();

const connection = new Sequelize(process.env.PGLINK as string, {
  models: [User, Car],
});


// For Development conection

// const connection = new Sequelize({
//   dialect: "postgres",
//   host: "localhost",
//   username: "postgres",
//   password: "Gadjahmada123*",
//   database: "binar-challenge6",
//   models: [User, Car],

//   logging: false,
// });

// // Seeder For User
// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync("P@ssw0rd", salt);

// const user = new User({
//   name: "Bob Sadino",
//   email: "bobsadino@gmail.com",
//   role: "Super Admin",
//   password: hash,
//   createdAt: new Date(),
//   updatedAt: new Date(),
// });
// user.save();

// // Seeder For Data Car
// const car = new Car({
//   no_police: "B 4022 KZB",
//   brand: "SUZUKI",
//   model: "LMPV",
//   image:"http://res.cloudinary.com/dgswqbhcm/image/upload/v1672200109/fdqfv4cggfkmhdsimigu.jpg",
//   price_perday:1500000,
//   capacity:7,
//   status:true,
//   transmision:"Manual",
//   type:"Ertiga",
//   createdBy:"bobsadino@gmail.com",
//   updatedBy:"bobsadino@gmail.com",
//   createdAt: new Date(),
//   updatedAt: new Date(),
// });
// car.save();

export default connection;
