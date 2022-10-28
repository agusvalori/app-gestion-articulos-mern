import { Box, Typography, TextField } from "@mui/material";
import React from "react";

export const ArtEditAllEditCat = () => {
  return (
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
  );
};
