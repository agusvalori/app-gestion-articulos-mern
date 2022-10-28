import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import React from "react";

export const ArtEditAllEditPrecio = () => {
  return (
    <Box>
      <Typography>Editar precio</Typography>
      <Box>
        <TextField label={"Monto o Porcentaje"} />
        <FormControl sx={{ width: "250px" }}>
          <InputLabel sx={{ margin: "10px" }}>Tipo de valor</InputLabel>
          <Select name="Tipo">
            <MenuItem value={"monto"}>$ - Monto</MenuItem>
            <MenuItem value={"porcentaje"}>% - Porcentaje</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "250px" }}>
          <InputLabel sx={{ margin: "10px" }}>Accion</InputLabel>
          <Select name="Tipo">
            <MenuItem value={"sumar"}>Aumentar</MenuItem>
            <MenuItem value={"restar"}>Disminuir</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
