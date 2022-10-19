import { createContext, useContext, useState } from "react";
import axios from "axios";

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
  const [articulos, setArticulos] = useState([]);

  const crearArticulo = async (articulo) => {
    console.log("crearArticulo: ", articulo);

    try {
      const result = await axios.post(
        "http://localhost:4000/article",
        articulo,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("crearArticulo: result: ", result);
      obtenerArticulos();
      return result;
    } catch (error) {
      return {
        status: false,
        message: "Error al agregar el articulo",
        value: error,
      };
    }
  };

  const obtenerArticulos = async () => {
    try {
      const result = await axios.get("http://localhost:4000/article");
      console.log("obtenerArticulos", result);
      if (result?.data?.status) {
        setArticulos(result?.data.value);
      } else {
        console.log("No se puede obtener los articulos");
      }
    } catch (error) {
      console.log(
        "Error al obtener los articulos desde el servidor: ",
        error
      );
    }
  };

  const editarArticulo = async (articulo) => {
    try {
      const result = await axios.put(
        "http://localhost:4000/article/" + articulo.ID,
        { ...articulo, IMAGE_URL: JSON.stringify(articulo.IMAGE_URL) },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return result;
    } catch (error) {
      return { status: false, message: error.message, value: error };
    }
  };

  const eliminarArticulo = async (id) => {
    try {
      const result = await axios.delete("http://localhost:4000/article/" + id);
      await obtenerArticulos();
      return result.data;
    } catch (error) {
      return { status: false, message: error.message, value: error };
    }
  };

  const eliminarImagenArticulo = async (image) => {
    try {
      const result = await axios.put(
        "http://localhost:4000/article/image/" + image.article_id,
        image
      );
      return result.data;
    } catch (error) {
      return { status: false, message: error.message, value: error };
    }
  };

  const eliminarArticulosTodos = async () => {
    try {
      const result = await axios.delete("http://localhost:4000/article");
      if (result?.data?.status) {
        obtenerArticulos();
      }
      return result.data;
    } catch (error) {
      return { status: false, message: error.message, value: error };
    }
  };

  return (
    <ArticuloContext.Provider
      value={{
        articulos,
        crearArticulo,
        editarArticulo,
        obtenerArticulos,
        eliminarArticulo,
        eliminarImagenArticulo,
        eliminarArticulosTodos,
      }}
    >
      {props.children}
    </ArticuloContext.Provider>
  );
};

export { ArticuloContext, ArticuloContextProvider, useArticle };
