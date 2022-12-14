import React from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";

import { useArticle } from "../../../context/ArticleContext";
import { ArticuloAddEdit } from "./ArticuloAddEdit";
import { ArticuloDeleteAll } from "./ArticuloDeleteAll";
import { ArticuloImport } from "./import/ArticuloImport";
import { ArticuloTableVir } from "./table-virtualized/ArticuloTableVir";
import { ArticulosEditAll } from "./edit-all/ArticulosEditAll";

export const ArticulosPage = () => {
  const { articulos } = useArticle();
  return (
    <Box>
      {Array.isArray(articulos) && (
        <>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography>
              {articulos?.length !== 0
                ? "Total De articulos: " + articulos?.length
                : "No hay articulos"}
            </Typography>
          </Box>

          <ArticuloTableVir articulos={articulos} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ArticuloAddEdit />
            <ArticuloImport />
            {articulos?.length != 0 && (
              <ArticulosEditAll articulos={articulos} />
            )}
            {articulos?.length != 0 && (
              <ArticuloDeleteAll articulos={articulos} />
            )}
          </Box>
        </>
      )}
    </Box>
  );
};
