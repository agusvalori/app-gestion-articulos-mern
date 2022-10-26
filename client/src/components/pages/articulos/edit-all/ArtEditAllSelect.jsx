import {
  Button,
  InputLabel,
  MenuItem,
  Paper,
  Typography,
  FormControl,
  Select,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export const ArtEditAllSelect = ({
  articulos,
  articulosFiltrados,
  setArticulosFiltrados,
}) => {
  const [categorias, setCategorias] = useState([]);
  const [subCategorias, setSubCategorias] = useState([]);
  const initialValuesSelect = {
    CATEGORIA: "Todos",
    SUB_CATEGORIA: "Todos",
  };
  const [valuesSelect, setValuesSelect] = useState(initialValuesSelect);

  const handleChangeSelect = (event) => {
    const { name, value } = event.target;
    setValuesSelect({ ...valuesSelect, [name]: value });
  };

  const filtrarArticulos = () => {
    setArticulosFiltrados(articulos);
    if (valuesSelect?.CATEGORIA != "Todos") {
      setArticulosFiltrados(
        articulos.filter((item) => item?.CATEGORIA === valuesSelect?.CATEGORIA)
      );
      if (valuesSelect?.SUB_CATEGORIA != "Todos") {
        setArticulosFiltrados(
          articulos.filter(
            (item) =>
              item?.CATEGORIA === valuesSelect?.CATEGORIA &&
              item?.SUB_CATEGORIA?.toString()?.includes(
                valuesSelect?.SUB_CATEGORIA
              )
          )
        );
      } else {
        setArticulosFiltrados(
          articulos.filter(
            (item) => item?.CATEGORIA === valuesSelect?.CATEGORIA
          )
        );
      }
    } else {
      setArticulosFiltrados(articulos);
      setValuesSelect({ ...valuesSelect, SUB_CATEGORIA: "Todos" });
    }
  };

  useEffect(() => {    
    if (valuesSelect.CATEGORIA != "Todos") {      
      let array = articulos
        ?.filter(
          (item) =>
            item?.CATEGORIA === valuesSelect.CATEGORIA &&
            item?.SUB_CATEGORIA != undefined
        )
        ?.map((item) => item?.SUB_CATEGORIA?.split(","));

      setSubCategorias(
        Array.from(
          new Set(
            array.length != 0
              ? array?.reduce((pre, cur) => pre?.concat(cur))
              : []
          )
        ).sort()
      );
    }
  }, [valuesSelect]);

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
    }
  }, [open]);

  return (
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
            <FormControl
              disabled={valuesSelect?.CATEGORIA === "Todos"}
              sx={{ width: "250px" }}
            >
              <InputLabel sx={{ margin: "10px" }}>Subcategoria</InputLabel>
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
      </Box>
      <Box>
        <Button>Limpiar</Button>
        <Button onClick={filtrarArticulos}>Filtrar</Button>
      </Box>
    </Paper>
  );
};
