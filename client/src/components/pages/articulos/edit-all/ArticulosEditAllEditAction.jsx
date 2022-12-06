import { Box, Button } from "@mui/material";
import React from "react";

export const ArticulosEditAllEditAction = ({ status, handleShowChange,handleApplyChange,handleAbortChange,handleClose}) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "30% 30% 30%",
        columnGap: "3%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        onClick={status==="mostrar"?handleShowChange:handleApplyChange}
        variant="contained"
        color={status==="mostrar"?"info":"success"}
      >
        {status==="loading"?"loading":status} Cambios
      </Button>

      <Button
        variant="contained"
        color="warning"
        onClick={handleAbortChange}
      >
        Cancelar
      </Button>

      <Button
        variant="contained"
        color="error"
        onClick={handleClose}
      >
        Salir
      </Button>
    </Box>
  );
};
