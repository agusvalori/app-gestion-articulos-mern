import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

export const ArticulosTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell
          size="small" align="center"
          sx={{ backgroundColor: "#506683", color: "#FAF8F6", width: "16%" }}
        >
          ID
        </TableCell>
        <TableCell
          size="small" align="center"
          sx={{ backgroundColor: "#506683", color: "#FAF8F6", width: "31%" }}
        >
          CATEGORIA
        </TableCell>
        <TableCell
          size="small" align="center"
          sx={{ backgroundColor: "#506683", color: "#FAF8F6", width: "31%" }}
        >
          ARTICULO
        </TableCell>
        <TableCell
          size="small" align="center"
          sx={{ backgroundColor: "#506683", color: "#FAF8F6", width: "9%" }}
        >
          PRECIO
        </TableCell>
        <TableCell
          size="small" align="center"
          sx={{ backgroundColor: "#506683", color: "#FAF8F6", width: "9%" }}
        >
          STOCK
        </TableCell>
        <TableCell
          size="small" align="center"
          sx={{ backgroundColor: "#506683", color: "#FAF8F6", width: "5%" }}
        ></TableCell>
      </TableRow>
    </TableHead>
  );
};
