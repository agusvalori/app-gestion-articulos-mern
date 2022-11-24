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

export const ArticulosEditAllEditCat = ({ categoriasSelect }) => {
  return (
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
      <Box sx={{textAlign:'center', border:'1px solid', borderRadius:'5px', padding:'5px'}} >
        <Typography fontSize={10} >Categoria Actual</Typography>
        <Typography sx={{color:'#3f51b5'}}>{categoriasSelect}</Typography>
      </Box>
      <TextField label="Categoria Nueva" />
    </Box>
  );
};
