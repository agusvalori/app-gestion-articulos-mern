import React, { useState } from "react";
import {
  IconButton,
  Input,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";

export const ArticuloImport = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { files, name } = event.target;

    if (files.length > 0 && /.(xls|xlsx)$/i.test(files[0].name)) {
      console.log(files[0]);
    } else {
      console.log("Formato invalido, formatos de archivos validos xls,xlsx");
    }
  };
  return (
    <Box>
      <IconButton onClick={() => setOpen(!open)}>
        <FileUploadIcon color="success" fontSize="large" />
      </IconButton>
      <Modal
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        open={open}
        onClose={handleClose}
      >
        <Paper elevation={4} sx={{ padding: "10px" }}>
          <Box>
            <Typography sx={{ textAlign: "center" }}>
              Importar artiulos desde excel
            </Typography>
          </Box>
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
          <Paper>
            <Typography>Seleccionar archivo excel</Typography>
            <Box
              sx={{
                width: "75px",
                height: "75px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <label>
                <Input
                  name="EXCEL_FILES"
                  type="file"
                  onChange={handleInputChange}
                  sx={{ display: "none" }}
                  multiple
                />
                <IconButton
                  sx={{ backgroundColor: "#eeeeee" }}
                  component="span"
                >
                  <CreateNewFolderIcon color="success" />
                </IconButton>
              </label>
            </Box>
          </Paper>
        </Paper>
      </Modal>
    </Box>
  );
};
