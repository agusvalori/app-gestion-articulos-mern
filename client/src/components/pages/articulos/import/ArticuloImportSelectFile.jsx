import React, { useState } from "react";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import { Button, IconButton, Input, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { readExcel } from "../../../../lib/xlsx";

export const ArticuloImportSelectFile = ({
  file,
  setFile,
  colPermitidas,
  colValidas,
  setColValidas,
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

  const RenderFileData = () => {
    setColValidas(
      Object.keys(file.rows[0]).filter(
        (item) => colPermitidas.indexOf(item) != -1
      )
    );
    const colInvalidas = Object.keys(file.rows[0]).filter(
      (item) => colPermitidas.indexOf(item) === -1
    );

    return (
      <Paper sx={{ padding: "5px" }}>
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
          <Typography sx={{ margin: "0px 10px" }}>
            {file?.rows?.length}
          </Typography>
        </Box>

        <Box>
          <Box>
            <Typography>Columnas Invalidas: {colInvalidas?.length} </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {Array.isArray(file.rows) &&
                Object.keys(file.rows[0]).map((item, index) => {
                  if (!colPermitidas.includes(item)) {
                    return (
                      <Typography
                        key={item + index}
                        sx={{
                          padding: "3px",
                          margin: "0px 5px",
                          border: "1px solid red",
                          backgroundColor: "red",
                          color: "white",
                          borderRadius: "5px",
                          fontSize: "small",
                        }}
                      >
                        {item}
                      </Typography>
                    );
                  }
                })}
            </Box>

            <Typography>Columnas Validas: {colValidas?.length} </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {Array.isArray(file.rows) &&
                Object.keys(file.rows[0]).map((item, index) => {
                  if (colPermitidas.includes(item)) {
                    return (
                      <Typography
                        key={item + index}
                        sx={{
                          padding: "2px",
                          margin: "0px 5px",
                          border: "1px solid green",
                          backgroundColor: "green",
                          color: "white",
                          borderRadius: "5px",
                        }}
                      >
                        {item}
                      </Typography>
                    );
                  }
                })}
            </Box>
          </Box>
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
        {file ? <RenderFileData /> : <RenderFileError />}
      </Box>
    </Paper>
  );
};
