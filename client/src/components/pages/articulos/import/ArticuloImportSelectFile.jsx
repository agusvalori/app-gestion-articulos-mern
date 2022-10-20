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
      setFile(readExcel(files[0]));
      //setFile({ name: files[0].name, size: files[0].size.toFixed(2), rows: result,});
      setHelperText("");
    } else {
      setHelperText("Formato invalido");
      setFile(false);
    }
  };

  const RenderFileData = ({ data }) => {
    return (
      <Paper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography>Nombre Archivo: </Typography>
          <Typography sx={{ margin: "0px 10px" }}>{data.name} </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography>Tamaño Archivo: </Typography>
          <Typography sx={{ margin: "0px 10px" }}>
            {data.size / 1024} KB{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography>Total de articulos: </Typography>
          <Typography sx={{ margin: "0px 10px" }}>{data.lengt}</Typography>
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

  useEffect(() => {
    console.log("Useeffect: ",file[0])
  }, file);

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
        {file ? <RenderFileData data={file} /> : <RenderFileError />}
      </Box>
    </Paper>
  );
};
