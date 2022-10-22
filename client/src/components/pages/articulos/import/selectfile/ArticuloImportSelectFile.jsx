import React, { useState } from "react";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import {  IconButton, Input, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { readExcel } from "../../../../../lib/xlsx";
import { ArtImpSelecFileShowFileData } from "./ArtImpSelecFileShowFileData";

export const ArticuloImportSelectFile = ({
  file,
  setFile,
  colPermitidas,
}) => {
  const [helperText, setHelperText] = useState("");
  

  const handleInputChange = (event) => {
    const { files } = event.target;
    if (files.length > 0 && /.(xls|xlsx)$/i.test(files[0].name)) {
      readExcel(files[0], setFile);
      setHelperText("");
    } else {
      setHelperText("Formato invalido");
      setFile(false);
    }
  };

  const RenderFileError = () => {
    return (
      <Box>
        <Box>
          <Typography color={helperText === "Formato invalido" ? "error" : ""}>
            {helperText} formatos de archivos validos xls,xlsx{" "}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Paper sx={{ textAlign: "center" }}>
      <Typography>Seleccionar archivo excel</Typography>
      <Box>
        <Box
          sx={{
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
            <IconButton sx={{ backgroundColor: "#eeeeee" }} component="span">
              <CreateNewFolderIcon color="success" />
            </IconButton>
          </label>
        </Box>
        {file ? <ArtImpSelecFileShowFileData file={file} colPermitidas={colPermitidas} /> : <RenderFileError />}
      </Box>
    </Paper>
  );
};
