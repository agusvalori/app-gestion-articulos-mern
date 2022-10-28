import React from 'react'
import { Box, Typography, TextField } from "@mui/material";

export const ArtEditAllEditSubcat = () => {
  return (
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
  )
}
