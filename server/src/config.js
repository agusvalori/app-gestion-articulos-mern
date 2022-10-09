import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const PORT_SERVER = process.env.PORT || 4000;
const MONGODB_URI =
  process.env.MONGOATLAS_URI || "mongodb://localhost/articleDb";

const CLOUDINARY_CLOUD_NAME = process.env["CLOUDINARY_CLOUD_NAME"];
const CLOUDINARY_API_SECRET = process.env["CLOUDINARY_API_SECRET"];
const CLOUDINARY_API_KEY = process.env["CLOUDINARY_API_KEY"];

export {
  PORT_SERVER,
  MONGODB_URI,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_API_KEY,
};
