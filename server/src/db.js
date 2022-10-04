import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

const conectDB = async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("Base de datos conectada: ", db.connection.name);
  } catch (error) {
    console.log(error);
  }
};

export { conectDB };
