import { Router } from "express";
import {
  agregarArticulo,
  editarArticulo,
  eliminarArticulo,
  obtenerArticulos,
  obtenerArticuloXId,
} from "../data/articleData.js";

const articleRoutes = Router();

//obtener todos los articulos
articleRoutes.get("/article", obtenerArticulos);

//Obtener un articulo x id
articleRoutes.get("/article/:id", obtenerArticuloXId);

//Agregamos un articulo
articleRoutes.post("/article", agregarArticulo);

//Editamos un articulo xid
articleRoutes.put("/article/:id", editarArticulo);

//Eliminamos un articulo
articleRoutes.delete("/article/:id", eliminarArticulo);

export default articleRoutes;
