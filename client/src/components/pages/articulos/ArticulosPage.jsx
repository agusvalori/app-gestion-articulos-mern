import React from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useArticle } from "../../../context/ArticleContext";
import { ArticulosTable } from "./table/ArticulosTable";

export const ArticulosPage = () => {
  const {articulos , crearArticulo} = useArticle();

  const handleAdd = () => {
    crearArticulo
  };

  const handleEdit = () => {};

  const handleImport = () => {};

  const handleDelet = () => {};
  return (
    <Box>
      <Box sx={{display:'flex', justifyContent:'center'}}>
        <Typography >{articulos?.length!==0?"Total De articulos: "+articulos?.length:"No hay articulos"}</Typography>
      </Box>
      <Paper sx={{ maxHeight: "70vh" }}>
        <ArticulosTable articulos={articulos}/>
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
