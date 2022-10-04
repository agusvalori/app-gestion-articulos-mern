import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const PORT_SERVER = process.env.PORT_SERVER || 4000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/articleDb";

export { PORT_SERVER, MONGODB_URI };
