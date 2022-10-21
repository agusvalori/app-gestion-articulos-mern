import React, { useState } from "react";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import { Button, IconButton, Input, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { readExcel } from "../../../../lib/xlsx";
import { useEffect } from "react";

export const ArticuloImportSelectFile = ({ file, setFile }) => {
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

  const RenderFileData = () => {
    return (
      <Paper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography>Nombre Archivo: </Typography>
          <Typography sx={{ margin: "0px 10px" }}>{file?.name} </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography>Tamaño Archivo: </Typography>
          <Typography sx={{ margin: "0px 10px" }}>
            {file?.size / 1024} KB{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography>Total de articulos: </Typography>
          <Typography sx={{ margin: "0px 10px" }}>{file?.rows?.length}</Typography>
        </Box>
      </Paper>
    );
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
        {file? <RenderFileData  /> : <RenderFileError />}
      </Box>
    </Paper>
  );
};
