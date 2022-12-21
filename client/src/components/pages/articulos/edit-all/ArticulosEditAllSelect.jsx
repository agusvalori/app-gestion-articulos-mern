import {
  Button,
  InputLabel,
  MenuItem,
  Typography,
  FormControl,
  Select,
  Box,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export const ArticulosEditAllSelect = ({
  articulos,
  setArticulosFiltrados,
  valuesSelect,
  setValuesSelect,
}) => {
  const initialValuesSelect = {
    CATEGORIA: "Todos",
    SUB_CATEGORIA: "Todos",
  };

  const [categoriasSelect, setCategoriasSelect] = useState([]);
  const [subCategoriasSelect, setSubCategoriasSelect] = useState([]);

  const handleChangeSelect = (event) => {
    const { name, value } = event.target;
    setValuesSelect({ ...valuesSelect, [name]: value });
    filtrarArticulos({ ...valuesSelect, [name]: value });
  };

  const filtrarArticulos = (select) => {
    setArticulosFiltrados(articulos);
    if (select?.CATEGORIA != "Todos") {
      setArticulosFiltrados(
        articulos.filter((item) => item?.CATEGORIA === select?.CATEGORIA)
      );
      if (select?.SUB_CATEGORIA != "Todos") {
        setArticulosFiltrados(
          articulos.filter(
            (item) =>
              item?.CATEGORIA === select?.CATEGORIA &&
              item?.SUB_CATEGORIA?.toString()?.includes(select?.SUB_CATEGORIA)
          )
        );
      } else {
        setArticulosFiltrados(
          articulos.filter((item) => item?.CATEGORIA === select?.CATEGORIA)
        );
      }
    } else {
      setArticulosFiltrados(articulos);
      setValuesSelect({ ...valuesSelect, SUB_CATEGORIA: "Todos" });
    }
  };

  const handleClean = () => {
    setArticulosFiltrados(articulos);
    setValuesSelect(initialValuesSelect);
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

      setSubCategoriasSelect(
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
      setCategoriasSelect(
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
    <Paper sx={{ padding: "5px" }}>
      <Box
        sx={{
          display: "Flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Filtrar Articulos</Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "30% 30% 30%",
          columnGap: "3%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FormControl>
          <InputLabel>Categoria</InputLabel>
          <Select
            size="small"
            label="Categoria"
            name="CATEGORIA"
            value={valuesSelect?.CATEGORIA}
            onChange={handleChangeSelect}
          >
            <MenuItem value={"Todos"}>Todos</MenuItem>
            {categoriasSelect?.map(
              (item) =>
                item != undefined && (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                )
            )}
          </Select>
        </FormControl>

        <FormControl disabled={valuesSelect?.CATEGORIA === "Todos"}>
          <InputLabel>Subcategoria</InputLabel>
          <Select
            size="small"
            label="Subcategoria"
            name="SUB_CATEGORIA"
            value={valuesSelect.SUB_CATEGORIA}
            onChange={handleChangeSelect}
          >
            <MenuItem value={"Todos"}>Todos</MenuItem>
            {subCategoriasSelect?.map(
              (item) =>
                item != undefined && (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                )
            )}
          </Select>
        </FormControl>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{ width: "80%" }}
            onClick={handleClean}
          >
            Limpiar
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
