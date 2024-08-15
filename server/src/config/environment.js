import dotenv from "dotenv";
import { RESOURCE } from "../constants/index.js";

dotenv.config({
  path: "./src/config/.env",
});

export const ENV = {
  NODE_ENV: process.env.NODE_ENV || RESOURCE.DEVELOPMENT,
  PORT: process.env.PORT || 4000,
  FAKE_API: process.env.FAKE_API || "https://fakestoreapi.com",
  SALT_NUMBER: Number(process.env.SALT_NUMBER) || 12,
};
