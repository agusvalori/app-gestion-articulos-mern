import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton, Modal, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useArticle } from "../../../context/ArticleContext";

export const ArticuloDelet = ({ articulo }) => {
  const [open, setOpen] = useState(false);
  const { eliminarArticulo } = useArticle();

  const handleClose = () => {
    setOpen(!open);
  };

  const handleDelet = () => {    
    eliminarArticulo(articulo?._id)
  };
  return (
    <Box>
      <IconButton onClick={() => setOpen(!open)}>
        <DeleteIcon />
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
          <Box>
            <Typography>Eliminar articulo</Typography>
          </Box>
          <Box>
            <Typography>Esta seguro que quiere eliminar el articulo</Typography>
            <Box>
              <Box>
                <Typography>ID:</Typography>
                <Typography>{articulo?.ID}</Typography>
              </Box>
              <Box>
                <Typography>ARTICULO</Typography>
                <Typography>{articulo?.ARTICULO}</Typography>
              </Box>
            </Box>
            <Box>
              <Button onClick={handleDelet}>Eliminar</Button>
              <Button onClick={handleClose}>Cancelar</Button>
            </Box>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};
