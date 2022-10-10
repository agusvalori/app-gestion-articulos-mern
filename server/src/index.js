import express from "express";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import cors from 'cors'
import { PORT_SERVER } from "./config.js";
import { conectDB } from "./db.js";
import articleRoutes from "./routes/articleRoutes.js";

const app = express();

//middlewares
app.use(cors({ origin: "http://localhost:5173" }));
app.use(morgan("dev"));
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload/images",    
  })
);

//DataBase
conectDB();

//Routes
app.use(articleRoutes);

app.listen(PORT_SERVER, () => {
  console.log(`Servidor inciado en el puerto: ${PORT_SERVER}`);
});
