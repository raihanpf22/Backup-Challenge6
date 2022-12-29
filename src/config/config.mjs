import * as dotenv from "dotenv";

dotenv.config();

const config = {
  development: {
    username: process.env.PGUSERNAME,
    password: process.env.PGPASSWORD,
    database: process.env.PGNAME,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: process.env.PGDIALECT,
    
  },
  test: {
    username: process.env.PGUSERNAME,
    password: process.env.PGPASSWORD,
    database: process.env.PGNAME,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: process.env.PGDIALECT,
    
  },
  production: {
    username: process.env.PGUSERNAME,
    password: process.env.PGPASSWORD,
    database: process.env.PGNAME,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: process.env.PGDIALECT,
    
  },
};

export default config;
