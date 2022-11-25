import { Box, TextField, Typography } from "@mui/material";
import React from "react";

export const ArticulosEditAllEditSubcat = ({ subCategoriasSelect }) => {
  return (
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
          backgroundColor:"#eceff1"
        }}
      >
        <Typography fontSize={10}>Subcategoria Actual</Typography>
        <Typography sx={{ color: "#3f51b5" }}>{subCategoriasSelect}</Typography>
      </Box>

      <TextField label="Subcategoria Nueva" />
    </Box>
  );
};
