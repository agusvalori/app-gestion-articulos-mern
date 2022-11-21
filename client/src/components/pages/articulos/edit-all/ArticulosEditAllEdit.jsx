import React from "react";
import { ArtEditAllEditPrecio } from "./ArtEditAllEditPrecio";
import { useArticle } from "../../../../context/ArticleContext";
import { Box } from "@mui/material";

export const ArticulosEditAllEdit = ({
  articulosFiltrados,
  setArticulosFiltrados,
  articulosAux,
  setArticulosAux
}) => {
  const { editarArticulo } = useArticle();

  const handleEditAllSelect = async () => {
    articulosFiltrados.forEach(async (index, articulo) => {
      const result = await editarArticulo({
        ...articulo,
      });
      console.log("handleEditAllSelect: ", index);
    });
  };

  return (
    <Box>
      <ArtEditAllEditPrecio
        articulosFiltrados={articulosFiltrados}
        setArticulosFiltrados={setArticulosFiltrados}
        articulosAux={articulosAux}
        setArticulosAux={setArticulosAux}
      />
    </Box>
  );
};
