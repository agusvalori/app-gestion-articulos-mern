import express from "express";
import morgan from "morgan";
import { PORT_SERVER } from "./config.js";
import { conectDB } from "./db.js";
import articleRoutes from "./routes/articleRoutes.js";

const app = express();
conectDB();

app.use(morgan("dev"));

app.use(articleRoutes);

app.listen(PORT_SERVER, () => {
  console.log(`Servidor inciado en el puerto: ${PORT_SERVER}`);
});
