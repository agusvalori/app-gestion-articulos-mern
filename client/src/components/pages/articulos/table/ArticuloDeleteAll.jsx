import { Button, IconButton, Modal, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useArticle } from "../../../../context/ArticleContext";

export const ArticuloDeleteAll = ({ articulos }) => {
  const [open, setOpen] = useState(false);
  const { eliminarArticulosTodos } = useArticle();

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteAll = async (event) => { 
    const result = await eliminarArticulosTodos()
    console.log("handleDeleteAll: ",result)
  };

  return (
    <Box>
      <IconButton onClick={() => setOpen(!open)}>
        <DeleteIcon color="error" fontSize="large" />
      </IconButton>
      <Modal
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        open={open}
        onClose={handleClose}
      >
        <Paper
          elevation={4}
          sx={{ padding: "10px", width: { xs: "320px", sm: "400px" } }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography>Eliminar todos los Articulos</Typography>
          </Box>
          <Box sx={{ textAlign: "center", margin: "10px" }}>
            <Paper elevation={3}>
              <Typography sx={{ fontSize: "large", color: "red" }}>
                Se eliminaran <strong> {articulos?.length}</strong> articulos
              </Typography>
            </Paper>
          </Box>
          <Box
            sx={{
              display: "grid",
              columnGap: "10px",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <Button
              onClick={handleDeleteAll}
              variant="outlined"
              color="warning"
            >
              Eliminar
            </Button>
            <Button onClick={handleClose} variant="outlined" color="error">
              Cancelar
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};
