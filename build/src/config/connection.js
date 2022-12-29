"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Car_1 = require("../../db/models/Car");
const User_1 = require("../../db/models/User");
const dotenv = __importStar(require("dotenv"));
const bcrypt = require("bcrypt");
dotenv.config();
const connection = new sequelize_typescript_1.Sequelize(process.env.PGLINK, {
    models: [User_1.User, Car_1.Car],
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
// Seeder For User
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("P@ssw0rd", salt);
const user = new User_1.User({
    name: "Bob Sadino",
    email: "bobsadino@gmail.com",
    role: "Super Admin",
    password: hash,
    createdAt: new Date(),
    updatedAt: new Date(),
});
user.save();
// Seeder For Data Car
const car = new Car_1.Car({
    no_police: "B 4022 KZB",
    brand: "SUZUKI",
    model: "LMPV",
    image: "http://res.cloudinary.com/dgswqbhcm/image/upload/v1672200109/fdqfv4cggfkmhdsimigu.jpg",
    price_perday: 1500000,
    capacity: 7,
    status: true,
    transmision: "Manual",
    type: "Ertiga",
    createdBy: "bobsadino@gmail.com",
    updatedBy: "bobsadino@gmail.com",
    createdAt: new Date(),
    updatedAt: new Date(),
});
car.save();
exports.default = connection;
