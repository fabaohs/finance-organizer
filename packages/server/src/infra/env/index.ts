import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}` });

const ENV = {
  DATABASE_URL: process.env.DATABASE_URL,
};

export default ENV;
