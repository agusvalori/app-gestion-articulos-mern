import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Divider,
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
    ? {...articulo,IMAGE_FILES: []}
    : {
        ARTICULO: "",
        CATEGORIA: "",
        ID: "",
        IMAGE_URL: [],
        IMAGE_FILES: [],
        PRECIO: 0,
        STOCK: 0,
        SUB_CATEGORIA: "",
      };
  const [values, setValues] = useState(initialValues);
  const { crearArticulo, editarArticulo } = useArticle();
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (articulo?.ID) {
      const result = await editarArticulo(values);
      console.log(result);
      setLoading(false);
    } else {
      const result = await crearArticulo(values);
      console.log(result);
      setLoading(false);
    }
  };
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <IconButton onClick={() => setOpen(!open)}>
        {articulo?.ID ? (
          <EditIcon color="info"  />
        ) : (
          <AddCircleIcon color="success"  fontSize="large" />
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
            <Typography variant='h6' align="center" sx={{color:articulo?.ID ? "blue" : "green", fontWeight:'bold' }}>
              {articulo?.ID ? "Editar" : "Agregar"} Articulo
            </Typography>
          </Box>
          
          <Divider sx={{margin:'10px 0px'}}/>
          
          <Box>
            <form onSubmit={(event) => handleSubmit(event)}>
              <Box sx={{ display: "grid", rowGap: "10px" }}>
                <TextField
                  sx={{ width: "100%" }}
                  size='small'
                  name="ID"
                  label="ID"
                  value={values?.ID}
                  onChange={(event) => handleChange(event)}
                />
                <TextField
                  sx={{ width: "100%" }}
                  size='small'
                  name="ARTICULO"
                  label="ARTICULO"
                  value={values?.ARTICULO}
                  onChange={(event) => handleChange(event)}
                />
                <TextField
                  sx={{ width: "100%" }}
                  size='small'
                  name="CATEGORIA"
                  label="CATEGORIA"
                  value={values?.CATEGORIA}
                  onChange={(event) => handleChange(event)}
                />

                <TextField
                  sx={{ width: "100%" }}
                  size='small'
                  name="SUB_CATEGORIA"
                  label="SUBCATEGORIA"
                  onChange={(event) => handleChange(event)}
                  value={values?.SUB_CATEGORIA}
                  helperText={"subcategoria1, subcategoria2, subcategoria..."}
                />

                <TextField
                  sx={{ width: "100%" }}
                  size='small'
                  name="PRECIO"
                  label="PRECIO"
                  onChange={(event) => handleChange(event)}
                  value={values?.PRECIO?.toFixed(2)}
                />
                <TextField
                  sx={{ width: "100%" }}
                  size='small'
                  name="STOCK"
                  label="STOCK"
                  value={values?.STOCK}
                  onChange={(event) => handleChange(event)}
                />
                <ArticuloAddEditImage setValues={setValues} values={values} />
              </Box>
              <Divider sx={{margin:'10px 0px'}}/>
              <Box
                sx={{
                  display: "grid",
                  columnGap: "10px",
                  gridTemplateColumns: "1fr 1fr",
                }}
              >
                {loading ? (
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress size={32} />
                  </Box>
                ) : (
                  <Button type={"submit"}  variant="contained" color={articulo?.ID ? "info" : "success"} >
                    {articulo?.ID ? "Editar" : "Agregar"}
                  </Button>
                )}
                <Button variant="contained" color='warning' onClick={() => handleClose()}>
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
