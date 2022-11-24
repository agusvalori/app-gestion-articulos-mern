import { IconButton, Modal, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { ArticuloTableVir } from "../table-virtualized/ArticuloTableVir";
import { ArticulosEditAllSelect } from "./ArticulosEditAllSelect";
import { ArticulosEditAllEdit } from "./ArticulosEditAllEdit";

export const ArticulosEditAll = ({ articulos }) => {
  const [open, setOpen] = useState(false);
  const [articulosFiltrados, setArticulosFiltrados] = useState(
    articulos ? articulos : []
  );
  const [articulosAux, setArticulosAux] = useState([]);
  const initialValuesSelect = {
    CATEGORIA: "Todos",
    SUB_CATEGORIA: "Todos",
  };
  const [valuesSelect, setValuesSelect] = useState(initialValuesSelect);

  const handleClose = () => {
    setOpen(false);
    setArticulosFiltrados(articulos ? articulos : []);
    setArticulosAux([]);
    setValuesSelect(initialValuesSelect)
  };

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
            valuesSelect={valuesSelect}
            setValuesSelect={setValuesSelect}
          />

          <ArticulosEditAllEdit
            articulosFiltrados={articulosFiltrados}
            articulosAux={articulosAux}
            setArticulosAux={setArticulosAux}
            valuesSelect={valuesSelect}
            handleClose={handleClose}
          />

          <ArticuloTableVir
            articulos={
              articulosAux.length != 0 ? articulosAux : articulosFiltrados
            }
          />
        </Paper>
      </Modal>
    </Box>
  );
};
