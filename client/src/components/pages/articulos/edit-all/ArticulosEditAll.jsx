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
import { ArticuloTableVir } from "../table-virtualized/ArticuloTableVir";

export const ArticulosEditAll = ({ articulos }) => {
  const [open, setOpen] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [subCategorias, setSubCategorias] = useState([]);
  const [proveedor, setProveedor] = useState([]);
  const initialValuesSelect = {
    PROVEEDOR: false,
    CATEGORIA: false,
    SUB_CATEGORIA: false,
  };
  const [valuesSelect, setValuesSelect] = useState(initialValuesSelect);
  const [articulosFiltrados, setArticulosFiltrados] = useState(
    articulos ? articulos : []
  );

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeSelect = (event) => {
    const { name, value } = event.target;
    setValuesSelect({ ...valuesSelect, [name]: value });
  };

  useEffect(() => {
    console.log("Actualizando articulos filtrados");
    setArticulosFiltrados(
      articulos
        .filter(
          (item) =>
            valuesSelect?.CATEGORIA &&
            item?.CATEGORIA === valuesSelect?.CATEGORIA
        )
    );
  }, [valuesSelect]);

  useEffect(() => {
    if (open) {
      setCategorias(
        Array.from(
          new Set(
            articulos
              ?.filter((item) => item?.CATEGORIA != undefined)
              .map((item) => item.CATEGORIA)
          )
        ).sort()
      );
      setSubCategorias(
        Array.from(
          new Set(
            articulos
              ?.filter((item) => item?.SUB_CATEGORIA != undefined)
              .map((item) => item?.SUB_CATEGORIA?.split(","))
              .reduce((pre, cur) => pre.concat(cur))
          )
        ).sort()
      );
    }
  }, [open]);

  return (
    <Box>
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
                <Select
                  name="CATEGORIA"
                  value={valuesSelect.CATEGORIA}
                  onChange={handleChangeSelect}
                >
                  {categorias?.map(
                    (item) =>
                      item != undefined && (
                        <MenuItem key={item} value={item}>
                          {item}
                        </MenuItem>
                      )
                  )}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl sx={{ width: "250px" }}>
                <InputLabel>Subcategoria</InputLabel>
                <Select
                  name="SUB_CATEGORIA"
                  value={valuesSelect.SUB_CATEGORIA}
                  onChange={handleChangeSelect}
                >
                  {subCategorias?.map(
                    (item) =>
                      item != undefined && (
                        <MenuItem key={item} value={item}>
                          {item}
                        </MenuItem>
                      )
                  )}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl sx={{ width: "250px" }}>
                <InputLabel>Proveedor</InputLabel>
                <Select
                  name="PROVEEDOR"
                  value={valuesSelect.PROVEEDOR}
                  onChange={handleChangeSelect}
                >
                  {proveedor?.map(
                    (item) =>
                      item != undefined && (
                        <MenuItem key={item} value={item}>
                          {item}
                        </MenuItem>
                      )
                  )}
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
          <Box>
            <ArticuloTableVir articulos={articulosFiltrados} />
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};
