import React from "react";
import { AppBar, Box, IconButton, Paper, Typography } from "@mui/material";
import { ArticulosShow } from "./show/ArticulosShow";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useArticle } from "../../../context/ArticleContext";

export const ArticulosPage = () => {
  const {crearArticulo} = useArticle();
  const handleAdd = () => {
    crearArticulo
  };

  const handleEdit = () => {};

  const handleImport = () => {};

  const handleDelet = () => {};
  return (
    <Box>
      <Box>
        <Typography>Titulo</Typography>
      </Box>
      <Paper sx={{ height: "70vh" }}>
        <ArticulosShow />
      </Paper>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <IconButton onClick={()=>crearArticulo()} >
          <AddCircleIcon color="success" fontSize="large" />
        </IconButton>
        <IconButton>
          <FileUploadIcon color="success" fontSize="large" />
        </IconButton>
        <IconButton>
          <EditIcon color="info" fontSize="large" />
        </IconButton>
        <IconButton>
          <DeleteIcon color="error" fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};
