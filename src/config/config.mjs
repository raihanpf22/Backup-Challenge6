import * as dotenv from "dotenv";

dotenv.config();

const config = {
  development: {
    username: process.env.PGUSERNAME,
    password: process.env.PGPASSWORD,
    database: process.env.PGNAME,
    host: process.env.PGHOST,
    dialect: process.env.PGDIALECT,
    port: process.env.PGPORT,
  },
  test: {
    username: process.env.PGUSERNAME,
    password: process.env.PGPASSWORD,
    database: process.env.PGNAME,
    host: process.env.PGHOST,
    dialect: process.env.PGDIALECT,
    port: process.env.PGPORT,
  },
  production: {
    username: process.env.PGUSERNAME,
    password: process.env.PGPASSWORD,
    database: process.env.PGNAME,
    host: process.env.PGHOST,
    dialect: process.env.PGDIALECT,
    port: process.env.PGPORT,
  },
};

export default config;
