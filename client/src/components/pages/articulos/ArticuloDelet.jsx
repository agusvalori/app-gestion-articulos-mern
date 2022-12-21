import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  CircularProgress,
  IconButton,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useArticle } from "../../../context/ArticleContext";

export const ArticuloDelet = ({ articulo }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { eliminarArticulo } = useArticle();

  const handleClose = () => {
    setOpen(!open);
    setLoading(false);
  };

  const handleDelet = async () => {
    setLoading(true);
    const res = await eliminarArticulo(articulo?.ID);
    if (res.status) {
      setLoading(false);
      setOpen(false);
    }
  };
  return (
    <Box>
      <IconButton onClick={() => setOpen(!open)}>
        <DeleteIcon color="error"  />
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
          <Box sx={{ textAlign:'center'}}>
            <Typography>Eliminar articulo</Typography>
          </Box>
          <Box sx={{ textAlign:'center'}}>
            <Typography>Esta seguro que quiere eliminar el articulo</Typography>
            <Paper elevation={4} sx={{padding:'5px', margin:'5px'}} >
              <Box
                sx={{
                  display: "grid",                  
                  gridTemplateColumns: "1fr 1fr",
                }}
              >
                <Typography>ID:</Typography>
                <Typography>{articulo?.ID}</Typography>
              </Box>
              <Box
                sx={{
                  display: "grid",                  
                  gridTemplateColumns: "1fr 1fr",
                }}
              >
                <Typography>ARTICULO</Typography>
                <Typography>{articulo?.ARTICULO}</Typography>
              </Box>
            </Paper>
            <Box>
              {!loading ? (
                <Box
                  sx={{
                    display: "grid",
                    columnGap: "10px",
                    gridTemplateColumns: "1fr 1fr",
                    height: "32px",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="warning"
                    onClick={handleDelet}
                  >
                    Eliminar
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={handleClose}
                  >
                    Cancelar
                  </Button>
                </Box>
              ) : (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <CircularProgress size={32} />
                </Box>
              )}
            </Box>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};
