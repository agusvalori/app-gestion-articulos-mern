import React, { useState } from "react";
import { Button, IconButton, Modal, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { ArticuloImportTableRef } from "./ArticuloImportTableRef";
import { ArticuloImportSelectFile } from "./ArticuloImportSelectFile";
import { ArticuloImportHead } from "./ArticuloImportHead";

export const ArticuloImport = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(false);

  const handleClose = () => {
    setOpen(false);
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
        <Paper elevation={4} sx={{ padding: "10px", display:'grid', rowGap:'10px' }}>
          <ArticuloImportHead />

          <ArticuloImportTableRef />

          <ArticuloImportSelectFile file={file} setFile={setFile} />
          <Box>
            <Button color={"success"}>Importar</Button>
            <Button color={"warning"}>Cancelar</Button>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};
