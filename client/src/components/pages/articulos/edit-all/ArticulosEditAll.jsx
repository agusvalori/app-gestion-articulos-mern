import {
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

export const ArticulosEditAll = ({ articulos }) => {
  const [open, setOpen] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [subCategorias, setSubCategorias] = useState([]);
  const [proveedor, setProveedor] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      setCategorias(
        Array.from(new Set(articulos.map((item) => item.CATEGORIA)))
      );
      setSubCategorias(
        Array.from(
          new Set(articulos.map((item) => item?.SUB_CATEGORIA?.split(",")))
        )
      );
    }
  }, [open, setCategorias]);

  return (
    <Box>
      {console.log("categorias: ", open, subCategorias)}
      <IconButton onClick={() => setOpen(!open)}>
        <EditIcon color="info" fontSize="large" />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Paper>
          <Box>Editar articulos por grupo</Box>
          <Box>
            <Typography>Filtrado</Typography>
            <Box>
              <FormControl sx={{ width: "250px" }}>
                <InputLabel>Categoria</InputLabel>
                <Select>
                  {categorias?.map((item) => (
                    <MenuItem>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl sx={{ width: "250px" }}>
                <InputLabel>Subategoria</InputLabel>
                <Select>
                  {categorias?.map((item) => (
                    <MenuItem>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl sx={{ width: "250px" }}>
                <InputLabel>Proveedor</InputLabel>
                <Select>
                  {categorias?.map((item) => (
                    <MenuItem>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl sx={{ width: "250px" }}></FormControl>
            </Box>
          </Box>
          <Box>
            <Typography>Editado</Typography>
            que vamos a editar: precios, restar o sumar un valor precios, restar
            o sumar un % Categorias: cambiar nombre acategorias Subcategoria:
            cambiar nombre subcategoria
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};
