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

export const ArticulosEditAll = ({ articulos }) => {
  const [open, setOpen] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [subCategorias, setSubCategorias] = useState([]);
  const [proveedor, setProveedor] = useState([]);
  const initialValuesSelect = {
    PROVEEDOR: "Todos",
    CATEGORIA: "Todos",
    SUB_CATEGORIA: "Todos",
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

  const filtrarArticulos = () => {
    console.log("Filtrar x: ", valuesSelect);
    setArticulosFiltrados(articulos);

    if (valuesSelect?.PROVEEDOR != "Todos") {
      setArticulosFiltrados(
        articulosFiltrados.filter(
          (item) => item?.PROVEEDOR === valuesSelect?.PROVEEDOR
        )
      );
      if (valuesSelect?.CATEGORIA != "Todos") {
        setArticulosFiltrados(
          articulosFiltrados.filter(
            (item) => item?.CATEGORIA === valuesSelect?.CATEGORIA
          )
        );
      }

      if (valuesSelect?.SUB_CATEGORIA != "Todos") {
        setArticulosFiltrados(
          articulosFiltrados.filter((item) =>
            item?.SUB_CATEGORIA?.toString()?.includes(
              valuesSelect?.SUB_CATEGORIA
            )
          )
        );
      }
    } else {
      if (valuesSelect?.CATEGORIA != "Todos") {
        setArticulosFiltrados(
          articulos.filter(
            (item) => item?.CATEGORIA === valuesSelect?.CATEGORIA
          )
        );
      }

      if (valuesSelect?.SUB_CATEGORIA != "Todos") {
        setArticulosFiltrados(
          articulosFiltrados.filter((item) =>
            item?.SUB_CATEGORIA?.toString()?.includes(
              valuesSelect?.SUB_CATEGORIA
            )
          )
        );
      }
    }
  };

  useEffect(() => {
    if (open) {
      setCategorias(
        Array.from(
          new Set(
            articulos
              ?.filter((item) => item?.CATEGORIA != undefined)
              ?.map((item) => item.CATEGORIA)
          )
        ).sort()
      );
      setSubCategorias(
        Array.from(
          new Set(
            articulosFiltrados
              ?.filter((item) => item?.SUB_CATEGORIA != undefined)
              ?.map((item) => item?.SUB_CATEGORIA?.split(","))
              ?.reduce((pre, cur) => pre.concat(cur))
          )
        ).sort()
      );
    }
  }, [open, setArticulosFiltrados]);

  return (
    <Box>
      <IconButton onClick={() => setOpen(!open)}>
        <EditIcon color="info" fontSize="large" />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Paper sx={{ padding: "5px", display: "grid", rowGap: "10px" }}>
          <Paper>
            <Box sx={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
              <Box sx={{ display: "grid", rowGap: "10px" }}>
                <Typography>Filtrado</Typography>
                <Box>
                  <FormControl sx={{ width: "250px" }}>
                    <InputLabel sx={{ margin: "10px" }}>Categoria</InputLabel>
                    <Select
                      name="CATEGORIA"
                      value={valuesSelect?.CATEGORIA}
                      onChange={handleChangeSelect}
                    >
                      <MenuItem value={"Todos"}>Todos</MenuItem>
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
                    <InputLabel sx={{ margin: "10px" }}>
                      Subcategoria
                    </InputLabel>
                    <Select
                      name="SUB_CATEGORIA"
                      value={valuesSelect.SUB_CATEGORIA}
                      onChange={handleChangeSelect}
                    >
                      <MenuItem value={"Todos"}>Todos</MenuItem>
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
              </Box>
              <Box>
                <FormControl sx={{ width: "250px" }}>
                  <InputLabel sx={{ margin: "10px" }}>Proveedor</InputLabel>
                  <Select
                    name="PROVEEDOR"
                    value={valuesSelect.PROVEEDOR}
                    onChange={handleChangeSelect}
                  >
                    <MenuItem value={"Todos"}>Todos</MenuItem>
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
            </Box>
            <Box>
              <Button>Limpiar</Button>
              <Button onClick={filtrarArticulos}>Filtrar</Button>
            </Box>
          </Paper>

          <Paper>
            <Typography>Editado</Typography>
            que vamos a editar: precios, restar o sumar un valor precios, restar
            o sumar un % Categorias: cambiar nombre acategorias Subcategoria:
            cambiar nombre subcategoria
          </Paper>
          <Box>
            <ArticuloTableVir articulos={articulosFiltrados} />
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};
