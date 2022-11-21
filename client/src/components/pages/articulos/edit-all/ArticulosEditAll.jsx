import { IconButton, Modal, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { ArticuloTableVir } from "../table-virtualized/ArticuloTableVir";
import { ArticulosEditAllSelect } from "./ArticulosEditAllSelect";
import { ArticulosEditAllEdit } from "./ArticulosEditAllEdit";
import { useEffect } from "react";

export const ArticulosEditAll = ({ articulos }) => {
  const [open, setOpen] = useState(false);
  const [articulosFiltrados, setArticulosFiltrados] = useState([]);
  const [categoriasSelect, setCategoriasSelect] = useState([]);
  const [subCategoriasSelect, setSubCategoriasSelect] = useState([]);

  const handleClose = () => {
    setArticulosFiltrados(()=>articulos ? articulos : []);
    setOpen(false);
  };

  useEffect(() => {
    console.log("que mierda pasa")
    setArticulosFiltrados(articulos ? articulos : []);
  }, [open])
  
  return (
    <Box>
      <IconButton onClick={() => setOpen(!open)}>
        <EditIcon color="info" fontSize="large" />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Paper
          sx={{
            padding: "10px",
            display: "grid",
            rowGap: "10px",
            height: "98vh",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: "4px",
              display: "none" /* Ocultar scroll */,
            },
          }}
        >
          <ArticulosEditAllSelect
            articulos={articulos}
            setArticulosFiltrados={setArticulosFiltrados}
            categoriasSelect={categoriasSelect}
            setCategoriasSelect={setCategoriasSelect}
            subCategoriasSelect={subCategoriasSelect}
            setSubCategoriasSelect={setSubCategoriasSelect}
          />

          <ArticulosEditAllEdit
            articulosFiltrados={articulosFiltrados}
            setArticulosFiltrados={setArticulosFiltrados}
            handleClose={handleClose}
          />

          <ArticuloTableVir articulos={articulosFiltrados} />
        </Paper>
      </Modal>
    </Box>
  );
};
