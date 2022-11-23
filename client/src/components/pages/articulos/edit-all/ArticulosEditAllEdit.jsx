import React from "react";
import { ArtEditAllEditPrecio } from "./ArtEditAllEditPrecio";
import { useArticle } from "../../../../context/ArticleContext";
import { Box } from "@mui/material";

export const ArticulosEditAllEdit = ({
  articulosFiltrados,  
  handleClose,  
  setArticulosAux,
}) => {
  const { editarArticulo } = useArticle();

/*
  const handleEditAllSelect = async () => {
    articulosFiltrados.forEach(async (index, articulo) => {
      const result = await editarArticulo({
        ...articulo,
      });
    });
  };
  */

  return (
    <Box>
      <ArtEditAllEditPrecio
        articulosFiltrados={articulosFiltrados}        
        handleClose={handleClose}        
        setArticulosAux={setArticulosAux}
      />
    </Box>
  );
};
