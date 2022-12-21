import React from "react";

import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import { useArticle } from "../../../context/ArticleContext";

export const HomePage = () => {
  const { articulos } = useArticle();
  return (
    <Box sx={{ padding: "10px" }}>
      <Paper sx={{ height: "80vh" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3">
            Bienvenido a Gestion de Articulos
          </Typography>
          <Typography variant="h5">
            Un software encargado de administrar sus articulos
          </Typography>
        </Box>
        <Divider sx={{ margin: "10px 20px" }} />
        <Box sx={{ padding: "10px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Con el podra realizar una gran variedad de tareas
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <FileUploadIcon />
              </ListItemIcon>
              <ListItemText>
                Importar y actualizar articulos desde un excel
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText>Crear articulos</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <ListItemText>
                Editar articulos de forma individual o por grupo
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText>
                Eliminar articulos de forma individual o por grupo
              </ListItemText>
            </ListItem>
          </List>
        </Box>
        <Divider sx={{ margin: "10px 20px" }} />
        <Box>
          <Box>
            <Typography variant='h6' sx={{textAlign:'center', fontWeight:'bold'}}>
              {articulos?.length !== 0
                ? "Total De articulos: " + articulos?.length
                : "No hay articulos agregados"}
            </Typography>
          </Box>
          <Box></Box>
        </Box>
      </Paper>
    </Box>
  );
};
