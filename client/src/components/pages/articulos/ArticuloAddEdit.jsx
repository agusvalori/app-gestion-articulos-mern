import React, { useState } from "react";
import {
  Button,
  IconButton,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { ArticuloAddEditImage } from "./ArticuloAddEditImage";
import { useArticle } from "../../../context/ArticleContext";

export const ArticuloAddEdit = ({ articulo }) => {
  const [open, setOpen] = useState(false);
  const initialValues = articulo?.ID
    ? articulo
    : {
        ARTICULO: "",
        CATEGORIA: "",
        ID: "",
        IMAGE_URL: [],
        PRECIO: 0,
        STOCK: 0,
        SUB_CATEGORIA: "",
      };
  const [values, setValues] = useState(initialValues);
  const { crearArticulo, editarArticulo } = useArticle();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (articulo?.ID) {
      editarArticulo(values);
    } else {
      crearArticulo(values);
    }
  };
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <IconButton onClick={() => setOpen(!open)}>
        {articulo?.ID ? (
          <EditIcon color="info" />
        ) : (
          <AddCircleIcon color="info" fontSize="large" />
        )}
      </IconButton>
      <Modal
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        open={open}
        onClose={handleClose}
      >
        <Paper
          elevation={4}
          sx={{ padding: "10px", width: { xs: "320px", sm: "400px" } }}
        >
          <Box>
            <Typography align="center">
              {articulo?.ID ? "Editar" : "Agregar"} Articulo
            </Typography>
          </Box>
          <Box>
            <form onSubmit={(event) => handleSubmit(event)}>
              <Box sx={{ display: "grid", rowGap: "10px" }}>
                <TextField
                  sx={{ width: "100%" }}
                  name="ID"
                  label="ID"
                  value={values?.ID}
                  onChange={(event) => handleChange(event)}
                />
                <TextField
                  sx={{ width: "100%" }}
                  name="ARTICULO"
                  label="ARTICULO"
                  value={values?.ARTICULO}
                  onChange={(event) => handleChange(event)}
                />
                <TextField
                  sx={{ width: "100%" }}
                  name="CATEGORIA"
                  label="CATEGORIA"
                  value={values?.CATEGORIA}
                  onChange={(event) => handleChange(event)}
                />

                <TextField
                  sx={{ width: "100%" }}
                  name="SUB_CATEGORIA"
                  label="SUBCATEGORIA"
                  onChange={(event) => handleChange(event)}
                  value={values?.SUB_CATEGORIA}
                  helperText={"subcategoria1, subcategoria2, subcategoria..."}
                />

                <TextField
                  sx={{ width: "100%" }}
                  name="PRECIO"
                  label="PRECIO"
                  onChange={(event) => handleChange(event)}
                  value={values?.PRECIO}
                />
                <TextField
                  sx={{ width: "100%" }}
                  name="STOCK"
                  label="STOCK"
                  value={values?.STOCK}
                  onChange={(event) => handleChange(event)}
                />
                <ArticuloAddEditImage setValues={setValues} values={values} />
              </Box>

              <Box
                sx={{
                  display: "grid",
                  columnGap: "10px",
                  gridTemplateColumns: "1fr 1fr",
                }}
              >
                <Button type={"submit"} variant="outlined">
                  {articulo?.ID ? "Editar" : "Agregar"}
                </Button>
                <Button variant="outlined" onClick={() => handleClose()}>
                  Cancelar
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};
