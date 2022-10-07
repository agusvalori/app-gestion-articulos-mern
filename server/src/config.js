import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const PORT_SERVER = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGOATLAS_URI || "mongodb://localhost/articleDb";

export { PORT_SERVER, MONGODB_URI };
