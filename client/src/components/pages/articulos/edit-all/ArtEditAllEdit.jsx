import {
  FormControl,
  InputLabel,
  TextField,
  Typography,
  Select,
  MenuItem,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ArtEditAllEditPrecio } from "./ArtEditAllEditPrecio";
import { ArtEditAllEditCat } from "./ArtEditAllEditCat";
import { ArtEditAllEditSubcat } from "./ArtEditAllEditSubcat";

export const ArtEditAllEdit = ({ articulosFiltrados }) => {
  const [categorias, setCategorias] = useState([]);
  const [subCategorias, setSubCategorias] = useState([])

  useEffect(() => {
    setCategorias(
      Array.from(
        new Set(
          articulosFiltrados
            ?.filter((item) => item?.CATEGORIA != undefined)
            ?.map((item) => item.CATEGORIA)
        )
      ).sort()
    );
  }, []);

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Editar precio, categorias, subcategorias</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ArtEditAllEditPrecio />
        {categorias.length == 1 ? (
          <Box>
            <ArtEditAllEditCat categorias={categorias} />
            <ArtEditAllEditSubcat subCategorias={subCategorias} />
          </Box>
        ) : (
          ""
        )}
      </AccordionDetails>
      <AccordionActions>
        <Button>Aplicar Cambios</Button>
        <Button>Cancelar</Button>
      </AccordionActions>
    </Accordion>
  );
};
