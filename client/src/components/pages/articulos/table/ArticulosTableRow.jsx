import React, { useState } from "react";
import {
  Box,
  Collapse,
  IconButton,
  styled,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ArticuloAddEdit } from "../ArticuloAddEdit";
import { ArticuloDelet } from "../ArticuloDelet";

export const ArticulosTableRow = ({ articulo, index }) => {
  const [open, setOpen] = useState(false);

  const {
    ARTICULO,
    CANT_BULTO,
    CATEGORIA,
    DESCRIPCION,
    ID,
    IMAGE_URL,
    PRECIO,
    STOCK,
    SUB_CATEGORIA,
  } = articulo;

  const StyledTableRow = styled(TableRow)(({ theme }) => {
    if (index % 2 == 0) {
      return {
        backgroundColor: "#CBD5DD",
      };
    } else {
      return { backgroundColor: "#FAF8F6" };
    }
  });

  return (
    <>
      <StyledTableRow>
        <TableCell size="small" align="center" sx={{ width: "16%" }}>
          {ID}
        </TableCell>
        <TableCell size="small" align="center" sx={{ width: "30%" }}>
          {CATEGORIA}
        </TableCell>
        <TableCell size="small" align="center" sx={{ width: "30%" }}>
          {ARTICULO}
        </TableCell>
        <TableCell size="small" align="center" sx={{ width: "9%" }}>
          ${PRECIO}
        </TableCell>
        <TableCell size="small" align="center" sx={{ width: "9%" }}>
          {STOCK}
        </TableCell>
        <TableCell
          size="small"
          align="center"
          sx={{
            width: "7%",
            display: "flex",
          }}
        >
          <ArticuloAddEdit articulo={articulo} />
          <ArticuloDelet articulo={articulo} />
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </StyledTableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ width: "80%" }}>
                <Typography>Subcategoria: {SUB_CATEGORIA}</Typography>
                <Typography>Cantidad Bulto: {CANT_BULTO}</Typography>
                <Typography>Descripcion: {DESCRIPCION}</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                {Array.isArray(IMAGE_URL) &&
                  IMAGE_URL.map((image, index) =>
                    image ? (
                      <Box
                        key={image?.public_id}
                        sx={{
                          width: "80px",
                          height: "80px",
                          backgroundImage: `url(${image.secure_url})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></Box>
                    ) : (
                      <Box
                        key={index}
                        sx={{
                          width: "80px",
                          height: "80px",
                        }}
                      >
                        No hay Imagenes
                      </Box>
                    )
                  )}
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
