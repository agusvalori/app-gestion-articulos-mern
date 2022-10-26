import {
  FormControl,
  InputLabel,
  Paper,
  TextField,
  Typography,
  Select,
  MenuItem,
  Button
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const ArtEditAllEdit = () => {
  return (
    <Paper>
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
      <Box>
        <Typography>Editar Nombre Categoria</Typography>
        <Box
          sx={{
            display: "grid",
            columnGap: "10px",
            gridTemplateColumns: "200px 250px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Categoria:
          </Typography>
          <TextField />
        </Box>
      </Box>
      <Box>
        <Typography>Editar Nombre SubCategoria</Typography>
        <Box
          sx={{
            display: "grid",
            columnGap: "10px",
            gridTemplateColumns: "200px 250px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            SubCategoria:
          </Typography>
          <TextField />
        </Box>
      </Box>
      <Box>
        <Button>Aplicar Cambios</Button>
        <Button>Cancelar</Button>
      </Box>
    </Paper>
  );
};
