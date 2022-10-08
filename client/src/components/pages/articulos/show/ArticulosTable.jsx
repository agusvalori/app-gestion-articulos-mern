import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";

import { FixedSizeList as List } from "react-window";
import { useArticle } from "../../../../context/ArticleContext";

export const ArticulosTable = () => {
  const { articulos } = useArticle();
  const Row = ({ index, style }) => {
    const {
      ARTICULO,
      CANT_BULTO,
      CATEGORIA,
      DESCRIPCION,
      ID,
      IMAGE_URL,
      PRECIO,
      STOCK,
      SUB_CATEGORIA,
      _id,
    } = articulos[index];
    return (
      <Box sx={{ display: "flex", width: "100%", justifyContent:'space-evenly' }} style={style}>
        <Typography>{ID}</Typography>
        <Typography>{ARTICULO}</Typography>
        <Typography>${PRECIO}</Typography>
        <Typography>{STOCK}</Typography>
      </Box>
    );
  };

  const Table = () => {
    if (Array.isArray(articulos) && articulos.length > 0) {
      return (
        <List
          height={400}
          itemCount={articulos.length}
          itemSize={35}
          width={1000}
        >
          {Row}
        </List>
      );
    } else {
      return (
        <Box>
          <Typography>Arreglo Vacio</Typography>
        </Box>
      );
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Table articulos={articulos} />
    </Box>
  );
};
