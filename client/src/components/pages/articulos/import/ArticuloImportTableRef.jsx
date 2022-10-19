import { Paper, Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const ArticuloImportTableRef = () => {
  return (
    <Paper>
            <Typography sx={{ textAlign: "center" }}>
              Formato del excel
            </Typography>
            <Box
              sx={{
                width: "95vw",
                overflow: "scroll",
                "&::-webkit-scrollbar": {
                  width: "4px",
                  display: "none" /* Ocultar scroll */,
                },
              }}
            >
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontSize: { xs: "10px", sm: "13px" } }}>
                      ID
                    </TableCell>
                    <TableCell sx={{ fontSize: { xs: "10px", sm: "13px" } }}>
                      ARTICULO
                    </TableCell>
                    <TableCell sx={{ fontSize: { xs: "10px", sm: "13px" } }}>
                      DESCRIPCION
                    </TableCell>
                    <TableCell sx={{ fontSize: { xs: "10px", sm: "13px" } }}>
                      CANT_BULTO
                    </TableCell>
                    <TableCell sx={{ fontSize: { xs: "10px", sm: "13px" } }}>
                      CATEGORIA
                    </TableCell>
                    <TableCell sx={{ fontSize: { xs: "10px", sm: "13px" } }}>
                      SUB_CATEGORIA
                    </TableCell>
                    <TableCell sx={{ fontSize: { xs: "10px", sm: "13px" } }}>
                      IMAGE_URL
                    </TableCell>
                    <TableCell sx={{ fontSize: { xs: "10px", sm: "13px" } }}>
                      PRECIO
                    </TableCell>
                    <TableCell sx={{ fontSize: { xs: "10px", sm: "13px" } }}>
                      STOCK
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ fontSize: { xs: "10px", sm: "13px" } }}>
                      100-100-1000
                    </TableCell>
                    <TableCell sx={{ fontSize: { xs: "10px", sm: "13px" } }}>
                      Articulo 1
                    </TableCell>
                    <TableCell sx={{ fontSize: { xs: "10px", sm: "13px" } }}>
                      Descripcion 1
                    </TableCell>
                    <TableCell sx={{ fontSize: { xs: "10px", sm: "13px" } }}>
                      100
                    </TableCell>
                    <TableCell sx={{ fontSize: { xs: "10px", sm: "13px" } }}>
                      Categoria 1
                    </TableCell>
                    <TableCell sx={{ fontSize: { xs: "10px", sm: "13px" } }}>
                      subcat1, subcat2...
                    </TableCell>
                    <TableCell sx={{ fontSize: { xs: "10px", sm: "13px" } }}>
                      https://imagen1.png, https://imagen2.jpg,
                    </TableCell>
                    <TableCell sx={{ fontSize: { xs: "10px", sm: "13px" } }}>
                      100
                    </TableCell>
                    <TableCell sx={{ fontSize: { xs: "10px", sm: "13px" } }}>
                      50
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Paper>
  )
}
