import React, { useState } from "react";
import { IconButton, Modal, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { ArticuloImportTableRef } from "./ArticuloImportTableRef";
import { ArticuloImportSelectFile } from "./ArticuloImportSelectFile";

export const ArticuloImport = () => {
  const [open, setOpen] = useState(false);

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
        <Paper elevation={4} sx={{ padding: "10px" }}>
          <Box>
            <Typography sx={{ textAlign: "center" }}>
              Importar artiulos desde excel
            </Typography>
          </Box>

          <ArticuloImportTableRef />

          <ArticuloImportSelectFile />
        </Paper>
      </Modal>
    </Box>
  );
};
