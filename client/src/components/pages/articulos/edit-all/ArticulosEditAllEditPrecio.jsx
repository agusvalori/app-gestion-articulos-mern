import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Input,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

export const ArticulosEditAllEditPrecio = ({ status, values, setValues }) => {
  // priceValue: 0, priceTipo: "monto", priceOperacion: "aumentar"
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "30% 30% 30%",
          columnGap: "3%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FormControl disabled={status !== "mostrar"} variant="outlined">
          <InputLabel>Valor</InputLabel>
          <OutlinedInput
            size="small"
            name={"priceValue"}
            label="Valor"
            type="number"
            value={values?.priceValue}
            onChange={handleChange}
            startAdornment={
              <InputAdornment position={"start"}>
                {values.priceTipo === "monto" ? "$" : ""}
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position={"end"}>
                {values.priceTipo === "porcentaje" ? "%" : ""}
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl disabled={status !== "mostrar"}>
          <InputLabel>Tipo de valor</InputLabel>
          <Select
            size="small"
            label="Tipo de valor"
            name="priceTipo"
            value={values?.priceTipo}
            onChange={handleChange}
          >
            <MenuItem value={"monto"}>$ - Monto</MenuItem>
            <MenuItem value={"porcentaje"}>% - Porcentaje</MenuItem>
          </Select>
        </FormControl>

        <FormControl disabled={status !== "mostrar"}>
          <InputLabel>Accion</InputLabel>
          <Select
          size="small"
          label="accion"
            name="priceOperacion"
            value={values?.priceOperacion}
            onChange={handleChange}
          >
            <MenuItem value={"aumentar"}>Aumentar</MenuItem>
            <MenuItem value={"disminuir"}>Disminuir</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
