import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}` });

const ENV = {
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_ACCESS_TOKEN_EXPIRATION: 60 * 60 * 1000,
  JWT_REFRESH_TOKEN_EXPIRATION: 7 * 24 * 60 * 60 * 1000,
};

export default ENV;
