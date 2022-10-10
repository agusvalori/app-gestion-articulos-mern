import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { ArticulosTableHead } from "./ArticulosTableHead";
import { ArticulosTableRow } from "./ArticulosTableRow";

export const ArticulosTable = ({articulos}) => {

  return (
    <TableContainer
      sx={{
        height: "70vh",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          width: "4px",
          display: "none" /* Ocultar scroll */,
        },
      }}
    >
      <Table stickyHeader>
        <ArticulosTableHead />
        <TableBody>
          {Array.isArray(articulos) && articulos.length > 0 ? (
            articulos.map((articulo, index) => (
              <ArticulosTableRow
                key={articulo.ID}
                index={index}
                articulo={articulo}
              />
            ))
          ) : (
            <TableRow  >
              <TableCell align="center" colSpan={6}>No hay articulos agregados</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
