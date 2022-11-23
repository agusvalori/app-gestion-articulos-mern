import React, { useState } from "react";
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export const ArtEditAllEditPrecio = ({
  articulosFiltrados,  
  handleClose,  
  setArticulosAux,
}) => {
  const initialValues = { value: 0, tipo: "monto", operacion: "aumentar" };
  const [values, setValues] = useState(initialValues);
  const [action, setAction] = useState("mostrar");
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleBtnAbort = () => {
    handleClose();
  };

  const handleBtnShowChange = () => {
    if (values.tipo === "monto") {
      if (values.operacion === "aumentar") {
        setArticulosAux(
          articulosFiltrados.map((articulo) => {
            articulo.PRECIO = articulo.PRECIO + Number(values.value);
            return articulo;
          })
        );
      }
      if (values.operacion === "disminuir") {
        setArticulosAux(
          articulosFiltrados.map((articulo) => {
            articulo.PRECIO = articulo.PRECIO - Number(values.value);
            return articulo;
          })
        );
      }
    }

    if (values.tipo === "porcentaje") {
      if (values.operacion === "aumentar") {
        setArticulosAux(
          articulosFiltrados.map((articulo) => {
            articulo.PRECIO =
              articulo.PRECIO + (articulo.PRECIO * Number(values.value)) / 100;
            return articulo;
          })
        );
      }
      if (values.operacion === "disminuir") {
        setArticulosAux(
          articulosFiltrados.map((articulo) => {
            articulo.PRECIO =
              articulo.PRECIO - (articulo.PRECIO * Number(values.value)) / 100;
            return articulo;
          })
        );
      }
    }
    setAction("aplicar");
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Editar precio</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "30% 30% 30%",
            columnGap: "3%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            name={"value"}
            label="Valor"
            disabled={action !== "mostrar"}
            value={values.value}
            onChange={handleChange}
          />
          <FormControl disabled={action !== "mostrar"}>
            <InputLabel sx={{ margin: "10px" }}>Tipo de valor</InputLabel>
            <Select name="tipo" value={values.tipo} onChange={handleChange}>
              <MenuItem value={"monto"}>$ - Monto</MenuItem>
              <MenuItem value={"porcentaje"}>% - Porcentaje</MenuItem>
            </Select>
          </FormControl>

          <FormControl disabled={action !== "mostrar"}>
            <InputLabel sx={{ margin: "10px" }}>Accion</InputLabel>
            <Select
              name="operacion"
              value={values.operacion}
              onChange={handleChange}
            >
              <MenuItem value={"aumentar"}>Aumentar</MenuItem>
              <MenuItem value={"disminuir"}>Disminuir</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </AccordionDetails>
      <AccordionActions
        sx={{
          display: "grid",
          gridTemplateColumns: "30% 30%",
          columnGap: "3%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {action === "mostrar" ? (
          <Button
            variant="contained"
            color="info"
            onClick={() => handleBtnShowChange()}
          >
            Mostrar Cambios
          </Button>
        ) : (
          <Button variant="contained" color="success">
            Aplicar Cambios
          </Button>
        )}

        <Button
          variant="contained"
          color="warning"
          onClick={() => handleBtnAbort()}
        >
          Cancelar
        </Button>
      </AccordionActions>
    </Accordion>
  );
};
