import React, { useState } from "react";
import {
  Alert,
  Button,
  IconButton,
  Modal,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { ArticuloImportTableRef } from "./ArticuloImportTableRef";
import { ArticuloImportSelectFile } from "./selectfile/ArticuloImportSelectFile";
import { ArticuloImportHead } from "./ArticuloImportHead";
import { useArticle } from "../../../../context/ArticleContext";

export const ArticuloImport = () => {
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [file, setFile] = useState(false);
  const colPermitidas = [
    "ID",
    "ARTICULO",
    "DESCRIPCION",
    "CANT_BULTO",
    "CATEGORIA",
    "SUB_CATEGORIA",
    "IMAGE_URL",
    "PRECIO",
    "STOCK",
  ];

  const { crearArticulo, editarArticulo, obtenerArticuloXId } = useArticle();

  const handleCloseSnack = () => {};

  const handleClose = () => {
    setFile(false);
    setOpen(false);
  };

  const handleImportar = () => {
    console.log("importando articulos");
    console.log(
      Object.keys(file.rows[0]).filter(
        (item) => colPermitidas.indexOf(item) != -1
      )
    );
    if (
      Object.keys(file.rows[0]).filter(
        (item) => colPermitidas.indexOf(item) != -1
      ).length > 0
    ) {
      file.rows.forEach(async (articulo, index) => {
        const res = await obtenerArticuloXId(articulo.ID)
        console.log(res.status)
        if (res.status) {
          const result = await editarArticulo(articulo);
          console.log("Editando articulo ", index, " de ", file.rows.length,result);
        } else {
          const result = await crearArticulo(articulo);
          console.log("Cargando articulo ", index, " de ", file.rows.length, result);
        }
      });
    } else {
      console.log("No hay columnas compatibles");
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
        <Paper
          elevation={4}
          sx={{ padding: "10px", display: "grid", rowGap: "10px" }}
        >
          <ArticuloImportHead />

          <ArticuloImportTableRef />

          <ArticuloImportSelectFile
            colPermitidas={colPermitidas}
            file={file}
            setFile={setFile}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {file && (
              <Button
                onClick={handleImportar}
                sx={{ margin: "0px 10px", width: "200px" }}
                variant="outlined"
                color={"success"}
              >
                Importar
              </Button>
            )}
            <Button
              sx={{ width: "200px" }}
              variant="outlined"
              color={"warning"}
            >
              Cancelar
            </Button>
          </Box>
          <Snackbar
            open={openSnack}
            autoHideDuration={6000}
            onClose={handleCloseSnack}
          >
            <Alert
              onClose={handleCloseSnack}
              severity="success"
              sx={{ width: "100%" }}
            >
              This is a success message!
            </Alert>
          </Snackbar>
        </Paper>
      </Modal>
    </Box>
  );
};
