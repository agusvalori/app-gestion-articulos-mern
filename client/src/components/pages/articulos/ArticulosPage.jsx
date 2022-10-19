import React from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useArticle } from "../../../context/ArticleContext";
import { ArticulosTable } from "./table/ArticulosTable";
import { ArticuloAddEdit } from "./ArticuloAddEdit";
import { ArticuloDeleteAll } from "./table/ArticuloDeleteAll";

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
          <Paper sx={{ maxHeight: "70vh" }}>
            <ArticulosTable articulos={articulos} />
          </Paper>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <ArticuloAddEdit />
            <IconButton>
              <FileUploadIcon color="success" fontSize="large" />
            </IconButton>
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
