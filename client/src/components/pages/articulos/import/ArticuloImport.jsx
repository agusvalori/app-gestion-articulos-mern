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
        <Paper
          elevation={4}
          sx={{ padding: "10px", display: "grid", rowGap: "10px" }}
        >
          <ArticuloImportHead />

          <ArticuloImportTableRef />

          <ArticuloImportSelectFile file={file} setFile={setFile} />
          <Box
            sx={{
              padding: "0% 20%",
              display: "grid",
              rowGap:'5px',
              gridTemplateColumns: "100px 100px",
            }}
          >
            {file && <Button variant="outlined" color={"success"}>Importar</Button>}
            <Button variant="outlined" color={"warning"}>Cancelar</Button>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};
