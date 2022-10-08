import { createContext, useContext, useState } from "react";
import axios from 'axios'

const ArticuloContext = createContext();

const useArticle = () => {
  const context = useContext(ArticuloContext);
  if (!context) {
    throw new Error(
      "useArticle deveria estar dentro de un ArticleContextProvider"
    );
  }
  return context;
};


const ArticuloContextProvider = (props) => {
  const [articulos, setArticulos] = useState({});

  const crearArticulo = (articulo)=>{
    console.log("crearArticulo")
  }

  const obtenerArticulos = async ()=>{
    const result = await axios.get("https://app-gestion-articulos-mern-production.up.railway.app/article")
    if(result?.data?.status){
      setArticulos(result?.data.value)
    }else{
      console.log("No se puede obtener los articulos")
    }
  }

  const editarArticulo = (articulo)=>{
    console.log("editarArticulo")
  }

  const eliminarArticulo = (id)=>{
    console.log("eliminarArticulo")
  }
  return (
    <ArticuloContext.Provider value={{articulos,crearArticulo,editarArticulo,obtenerArticulos,eliminarArticulo}}>
      {props.children}
    </ArticuloContext.Provider>
  );
};


export {ArticuloContext, ArticuloContextProvider, useArticle}