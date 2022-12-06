import {
  FormControl,
  FormLabel,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const ArticulosEditAllEditCatYSubcat = ({
  categoriasSelect,
  subCategoriasSelect,
  values,
  setValues,
}) => {  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Box>
      <Box
        sx={{
          margin: "15px 0px",
          display: "grid",
          gridTemplateColumns: "30% 30%",
          columnGap: "3%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            border: "1px solid",
            borderRadius: "5px",
            padding: "5px",
            backgroundColor: "#eceff1",
          }}
        >
          <Typography fontSize={10}>Categoria Actual</Typography>
          <Typography sx={{ color: "#3f51b5" }}>{categoriasSelect}</Typography>
        </Box>
        <TextField
        disabled={values?.categoriaNueva==="Todos"}
          name="categoriaNueva"
          label="Categoria Nueva"
          values={values?.categoriaNueva}
          onChange={handleChange}
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "30% 30%",
          columnGap: "3%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            border: "1px solid",
            borderRadius: "5px",
            padding: "5px",
            backgroundColor: "#eceff1",
          }}
        >
          <Typography fontSize={10}>Subcategoria Actual</Typography>
          <Typography sx={{ color: "#3f51b5" }}>
            {subCategoriasSelect}
          </Typography>
        </Box>

        <TextField 
        disabled={values?.subCategoriaNueva==="Todos"}
        name="subCategoriaNueva"
        label="Subcategoria Nueva"
        values={values?.subCategoriaNueva}
          onChange={handleChange}
           />
        
      </Box>
    </Box>
  );
};
