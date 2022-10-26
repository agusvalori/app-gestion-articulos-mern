import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from "react";
import { ArticuloTableVir } from "../table-virtualized/ArticuloTableVir";
import { ArtEditAllSelect } from "./ArtEditAllSelect";
import { ArtEditAllEdit } from "./ArtEditAllEdit";

export const ArticulosEditAll = ({ articulos }) => {
  const [open, setOpen] = useState(false);

  const [articulosFiltrados, setArticulosFiltrados] = useState(
    articulos ? articulos : []
  );

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <IconButton onClick={() => setOpen(!open)}>
        <EditIcon color="info" fontSize="large" />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Paper sx={{ padding: "5px", display: "grid", rowGap: "10px" }}>
          <ArtEditAllSelect
            articulos={articulos}
            articulosFiltrados={articulosFiltrados}
            setArticulosFiltrados={setArticulosFiltrados}
          />
          <ArtEditAllEdit articulos={articulosFiltrados} />

          <ArticuloTableVir articulos={articulosFiltrados} />
        </Paper>
      </Modal>
    </Box>
  );
};
