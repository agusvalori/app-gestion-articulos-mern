import React, { useState } from "react";
import { ArtEditAllEditPrecio } from "./ArtEditAllEditPrecio";
import { useArticle } from "../../../../context/ArticleContext";
import { Box } from "@mui/material";
import { useEffect } from "react";

export const ArticulosEditAllEdit = ({
  articulosFiltrados,
  articulosAux,
  setArticulosAux,
}) => {
  const { editarArticulo } = useArticle();
  const [loading, setLoading] = useState(false);

  const handleEditAllSelect = async () => {
    let count = 0;
    articulosAux.forEach(async (articulo, index) => {
      const result = await editarArticulo({
        ...articulo,
      });
      if (result.status) {
        count += 1;
      }
      setLoading(
        "Editando articulo " +
          index +
          " de " +
          articulosAux?.length +
          " - Estado: " +
          result?.status +
          " - Count: " +
          count
      );
    });
  };

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <Box>
      <Box>
        loading
        {loading}
      </Box>
      <ArtEditAllEditPrecio
        articulosFiltrados={articulosFiltrados}
        setArticulosAux={setArticulosAux}
        articulosAux={articulosAux}
        handleEditAllSelect={handleEditAllSelect}
      />
    </Box>
  );
};
