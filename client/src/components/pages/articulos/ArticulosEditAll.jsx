import { IconButton, Modal, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

export const ArticulosEditAll = ({ articulos }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <IconButton onClick={() => setOpen(!open)}>
        <EditIcon color="info" fontSize="large" />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Paper>
          <Box>Editar articulos por grupo</Box>
          <Box>
            Seleccionar por que editar:
            Editar Todos:
            Editar por categoria:
            Editar por subcategoria:
            Editar por proveeodr:

          </Box>
          <Box>
            que vamos a editar:
            precios, restar o sumar un valor
            precios, restar o sumar un %
            Categorias: cambiar nombre  acategorias
            Subcategoria: cambiar nombre  subcategoria
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};
