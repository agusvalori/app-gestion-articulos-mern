import React from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { useArticle } from "../../../context/ArticleContext";
import { ArticuloAddEdit } from "./ArticuloAddEdit";
import { ArticuloDeleteAll } from "./ArticuloDeleteAll";
import { ArticuloImport } from "./import/ArticuloImport";
import { ArticuloTableVir } from "./table-virtualized/ArticuloTableVir";

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
              <IconButton>
                <EditIcon color="info" fontSize="large" />
              </IconButton>
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
