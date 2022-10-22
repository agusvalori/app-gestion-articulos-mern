import React, { useState } from "react";
import { Alert, Button, IconButton, Modal, Paper, Snackbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { ArticuloImportTableRef } from "./ArticuloImportTableRef";
import { ArticuloImportSelectFile } from "./ArticuloImportSelectFile";
import { ArticuloImportHead } from "./ArticuloImportHead";

export const ArticuloImport = () => {
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false)
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
  const [colValidas, setColValidas] = useState([])

  const handleCloseSnack =()=>{}

  const handleClose = () => {
    setOpen(false);
  };

  const handleImportar = () => {
    const { rows } = file;
    console.log(rows);
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

          <ArticuloImportSelectFile colPermitidas={colPermitidas} setColValidas={setColValidas} colValidas={colValidas} file={file} setFile={setFile} />
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
          <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
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
